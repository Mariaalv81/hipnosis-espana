import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  Brain,
  CheckCircle2,
  CigaretteOff,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Quote,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { ValuationModal } from "@/components/valuation-modal";
import { getWhatsAppUrl, siteSettings } from "@/content/site-settings";
import { trackLeadSubmission, trackWhatsAppClick } from "@/lib/analytics";
import { useI18n } from "@/lib/i18n";
import { loadRecaptcha } from "@/lib/recaptcha";
import { makeSeo } from "@/lib/seo";
import sobreMiMariaCaboJpg from "@/assets/images/sobre-mi-maria-cabo.jpg";
import sobreMiMariaCaboWebp from "@/assets/images/sobre-mi-maria-cabo.webp";
import sobreMiMariaCaboAvif from "@/assets/images/sobre-mi-maria-cabo.avif";

export const Route = createFileRoute("/qr")({
  head: () =>
    makeSeo({
      title: "María A. Cabo · Acompañamiento Terapéutico y Desarrollo Personal | Tarjeta de Visita",
      description:
        "Portal de contacto directo para tarjetas de visita. Terapia focalizada en procesos neurobiológicos, regulación del sistema nervioso y cambio de patrones en Sueca, Valencia y online.",
      path: "/qr",
    }),
  component: QrLandingPage,
});

const serviceIcons = [CigaretteOff, Brain, Moon, Sparkles];

function QrLandingPage() {
  const { t } = useI18n();
  const q = t.qrPage;

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const handleWhatsAppClick =
    (text: string, trackingSource: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      trackWhatsAppClick(trackingSource);
      const url = getWhatsAppUrl(text);
      if (url && url !== "#") {
        if (e.currentTarget.getAttribute("href") === "#") {
          e.preventDefault();
          window.open(url, "_blank", "noopener,noreferrer");
        }
      }
    };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const fd = new FormData(form);

    const data = {
      name: String(fd.get("name") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      reason: String(fd.get("reason") ?? "").trim(),
      modality: String(fd.get("modality") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      recaptchaToken: undefined as string | undefined,
    };

    const isCollaborator =
      data.reason.toLowerCase().includes("colabora") ||
      data.reason.toLowerCase().includes("centro");

    const fullMessage = [
      "Consulta recibida desde Tarjeta de Visita (QR):",
      "",
      `Nombre: ${data.name}`,
      `Teléfono: ${data.phone}`,
      `Email: ${data.email}`,
      `Motivo / Servicio: ${data.reason}`,
      `Modalidad preferida: ${data.modality}`,
      "",
      "Mensaje / Consulta:",
      data.message || "Sin comentarios adicionales",
    ].join("\n");

    try {
      const siteKey = import.meta.env["VITE_RECAPTCHA_SITE_KEY"] as string | undefined;
      if (siteKey) {
        try {
          await loadRecaptcha(siteKey);
          data.recaptchaToken = await window.grecaptcha?.execute(siteKey, {
            action: "qr_landing_contact",
          });
        } catch (err) {
          console.warn("reCAPTCHA unavailable, continuing without token", err);
        }
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          source: isCollaborator ? "Colaboradores / Profesionales" : "Web - Tarjeta QR",
          modality: data.modality,
          specificDetail: data.reason,
          email: data.email,
          phone: data.phone,
          message: fullMessage,
          website: data.website,
          recaptchaToken: data.recaptchaToken,
        }),
      });

      if (!res.ok) throw new Error("Error enviando el formulario");

      trackLeadSubmission("Web - Tarjeta QR", data.reason);
      setSent(true);
      form.reset();
    } catch (err) {
      console.error("send-email failed, falling back to mailto", err);
      const subject = encodeURIComponent(
        `Consulta tarjeta de visita · ${data.name} (${data.reason})`,
      );
      const body = encodeURIComponent(fullMessage);
      setMailtoLink(`mailto:${siteSettings.contactEmail}?subject=${subject}&body=${body}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION CONTEXTUAL DE BIENVENIDA */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-primary/10 via-sand/20 to-background pt-10 pb-14 md:pt-16 md:pb-20">
        <div className="container-page max-w-4xl">
          {/* Eyebrow de bienvenida para tarjeta escaneada */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary shadow-xs">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{q.pill}</span>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            {/* Texto de presentación */}
            <div>
              <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {q.title}
              </h1>
              <p className="mt-2 text-base font-medium text-primary sm:text-lg">{q.subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {q.intro}
              </p>

              {/* Badges de confianza inmediata */}
              <div className="mt-6 flex flex-wrap gap-2">
                {q.trustCredentials.map((badge, idx) => (
                  <span
                    key={badge}
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs shadow-2xs ${
                      idx === 0
                        ? "border border-primary/40 bg-primary/10 font-semibold text-primary"
                        : "border border-border/80 bg-card/80 text-muted-foreground"
                    }`}
                  >
                    <CheckCircle2 className="size-3.5 text-primary" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Foto de María con presentación cálida y humana */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-xs overflow-hidden rounded-3xl border-2 border-primary/20 bg-card p-2 shadow-[var(--shadow-soft)]">
                <picture>
                  <source srcSet={sobreMiMariaCaboAvif} type="image/avif" />
                  <source srcSet={sobreMiMariaCaboWebp} type="image/webp" />
                  <img
                    src={sobreMiMariaCaboJpg}
                    alt="María A. Cabo - Acompañamiento Terapéutico en Sueca y Valencia"
                    width={400}
                    height={400}
                    className="aspect-square w-full rounded-2xl object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                  />
                </picture>
                <div className="p-3 text-center">
                  <p className="font-serif text-sm font-medium text-foreground">María A. Cabo</p>
                  <p className="text-xs text-muted-foreground">
                    Acompañamiento Terapéutico · Instituto Erickson
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* BOTONES DE ACCIÓN RÁPIDA (FAST-TRACK ABOVE THE FOLD) */}
          <div className="mt-10 rounded-3xl border border-primary/30 bg-card p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-center">
              Vías rápidas de contacto directo
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {/* Botón WhatsApp */}
              <a
                href={getWhatsAppUrl(q.whatsappPrefilled)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick(q.whatsappPrefilled, "qr_hero_whatsapp")}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-card p-5 transition-all hover:border-emerald-500 hover:shadow-md"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-sm">
                    <MessageCircle className="size-6" />
                  </div>
                  <div>
                    <h2 className="text-base font-semibold text-foreground group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                      {q.whatsappCta}
                    </h2>
                    <p className="text-xs text-muted-foreground">Respuesta ágil y sin compromiso</p>
                  </div>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-emerald-600" />
              </a>

              {/* Botón Modal Valoración 15 Min */}
              <ValuationModal source="Web - Tarjeta QR Hero">
                <button
                  type="button"
                  className="w-full text-left cursor-pointer group flex items-center justify-between gap-4 rounded-2xl border border-primary/40 bg-gradient-to-r from-primary/10 via-primary/5 to-card p-5 transition-all hover:border-primary hover:shadow-md"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
                      <Clock className="size-6" />
                    </div>
                    <div>
                      <span className="block text-base font-semibold text-foreground group-hover:text-primary">
                        {q.valuationCta}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {q.valuationSubtext}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </button>
              </ValuationModal>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE INTERVENCIÓN Y ACOMPAÑAMIENTO TERAPÉUTICO (LOS 4 GRANDES PILARES) */}
      <section className="container-page max-w-4xl py-14 md:py-20">
        <div className="text-center">
          <p className="eyebrow justify-center">{q.servicesEyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight md:text-4xl">
            {q.servicesTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {q.servicesSubtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {q.services.map((service, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length] ?? Sparkles;
            return (
              <article
                key={service.title}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/40 hover:shadow-md sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl font-normal text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-border/60 pt-4">
                    {service.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2.5 text-xs text-foreground/90 leading-relaxed"
                      >
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                  <Link
                    to={service.linkTo}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary underline underline-offset-4 hover:opacity-80"
                  >
                    <span>{service.linkText}</span>
                    <ArrowRight className="size-3.5" />
                  </Link>

                  <ValuationModal
                    source={`Web - QR Servicio: ${service.ctaMotive}`}
                    defaultModality={
                      service.title.includes("Fumar") ? "Programa 3 sesiones" : "Sesión individual"
                    }
                    triggerClassName="rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground cursor-pointer"
                    triggerLabel="Pedir 15 min"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* BLOQUE ESPECIAL PARA PROFESIONALES DE LA SALUD Y CLÍNICAS */}
      <section className="border-y border-border/60 bg-muted/30 py-14 md:py-20">
        <div className="container-page max-w-4xl">
          <div className="rounded-3xl border border-primary/30 bg-card p-8 shadow-sm md:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="eyebrow">{q.proEyebrow}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                <HeartHandshake className="size-3.5" />
                <span>Colaboración complementaria</span>
              </span>
            </div>

            <h2 className="mt-3 font-serif text-2xl font-normal md:text-3xl text-foreground">
              {q.proTitle}
            </h2>
            <p className="mt-1 font-medium text-primary text-sm sm:text-base">{q.proSubtitle}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {q.proText}
            </p>

            <ul className="mt-6 space-y-3">
              {q.proHighlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-border/60 pt-6">
              <Link
                to="/profesionales"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <span>{q.proCta}</span>
                <ArrowRight className="ml-2 size-4" />
              </Link>

              <a
                href={getWhatsAppUrl(q.proWhatsAppPrefilled)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick(q.proWhatsAppPrefilled, "qr_pro_whatsapp")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-400 transition-colors hover:bg-emerald-500/20"
              >
                <MessageCircle className="size-4 text-[#25D366]" />
                <span>{q.proWhatsAppCta}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO ES UNA SESIÓN Y FILOSOFÍA (NEUROBIOLOGÍA Y REGULACIÓN) */}
      <section className="container-page max-w-4xl py-14 md:py-20">
        <div className="text-center">
          <p className="eyebrow justify-center">{q.howEyebrow}</p>
          <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight md:text-4xl">
            {q.howTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {q.howSubtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {q.howPoints.map((point, index) => (
            <div
              key={point.title}
              className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-xs"
            >
              <span className="font-serif text-3xl font-light text-primary/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-medium text-foreground text-base">{point.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS REALES */}
      <section className="border-t border-border/60 bg-muted/20 py-14 md:py-20">
        <div className="container-page max-w-4xl">
          <div className="text-center">
            <p className="eyebrow justify-center">{q.testimonialsEyebrow}</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight md:text-4xl">
              {q.testimonialsTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {q.testimonials.map((tItem, idx) => (
              <blockquote
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-xs"
              >
                <div>
                  <Quote className="size-6 text-primary/40 mb-3" />
                  <p className="text-xs leading-relaxed text-foreground/90 italic">
                    “{tItem.quote}”
                  </p>
                </div>
                <footer className="mt-5 border-t border-border/60 pt-3">
                  <p className="text-xs font-semibold text-foreground">{tItem.author}</p>
                  <p className="text-[0.72rem] text-muted-foreground">{tItem.detail}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* DÓNDE ATENDERTE (SUECA, DOMICILIO, ONLINE) */}
      <section className="container-page max-w-4xl py-14 md:py-20">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-xs">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-primary" />
            <h2 className="font-serif text-2xl font-normal text-foreground">{q.locationTitle}</h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {q.locations.map((loc, i) => (
              <div key={i} className="rounded-2xl border border-border/60 bg-muted/20 p-5">
                <h3 className="text-sm font-semibold text-foreground">{loc.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{loc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO DE CONSULTA DIRECTO (CONECTADO A GOOGLE SHEETS) */}
      <section
        id="formulario-contacto"
        className="border-t border-border/60 bg-muted/30 py-14 md:py-20"
      >
        <div className="container-page max-w-3xl">
          <div className="text-center">
            <p className="eyebrow justify-center">{q.formEyebrow}</p>
            <h2 className="mt-2 font-serif text-3xl font-medium tracking-tight md:text-4xl">
              {q.formTitle}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {q.formSubtitle}
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10">
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-5">
                {/* Honeypot trap anti-spam */}
                <input
                  type="text"
                  name="website"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label
                      htmlFor="qr-name"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {q.formLabels.name} *
                    </label>
                    <input
                      id="qr-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ej. Carmen Navarro"
                      className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="qr-phone"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {q.formLabels.phone} *
                    </label>
                    <input
                      id="qr-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Ej. 612 345 678"
                      className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label
                      htmlFor="qr-email"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {q.formLabels.email} *
                    </label>
                    <input
                      id="qr-email"
                      name="email"
                      type="email"
                      required
                      placeholder="nombre@correo.com"
                      className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label
                      htmlFor="qr-reason"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      {q.formLabels.reason} *
                    </label>
                    <select
                      id="qr-reason"
                      name="reason"
                      required
                      className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring cursor-pointer"
                    >
                      {q.formReasonOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="qr-modality"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {q.formLabels.modality}
                  </label>
                  <select
                    id="qr-modality"
                    name="modality"
                    className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring cursor-pointer"
                  >
                    {q.formModalityOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="qr-message"
                    className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {q.formLabels.message}
                  </label>
                  <textarea
                    id="qr-message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntame brevemente qué te gustaría cambiar, si tienes dudas sobre el método o qué horarios te vienen mejor..."
                    className="rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer pt-1">
                  <input type="checkbox" required className="mt-0.5 rounded border-input" />
                  <span>{q.formLabels.consent}</span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  <Send className="size-4" />
                  <span>{submitting ? q.formLabels.submitting : q.formLabels.submit}</span>
                </button>

                {mailtoLink && (
                  <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-xs text-foreground">
                    <p className="mb-2">{q.formMailtoFallback}</p>
                    <a href={mailtoLink} className="font-semibold text-primary underline">
                      {siteSettings.contactEmail}
                    </a>
                  </div>
                )}
              </form>
            ) : (
              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center space-y-4">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <CheckCircle2 className="size-6" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">
                  {q.formSuccessTitle}
                </h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  {q.formSuccessText}
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="text-xs text-primary underline underline-offset-4"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION BANNER */}
      <section className="container-page max-w-4xl py-14 pb-24 md:py-20 md:pb-28">
        <div className="rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground shadow-sm md:py-16">
          <h2 className="font-serif text-3xl md:text-4xl">{q.finalTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 leading-relaxed md:text-base">
            {q.finalText}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ValuationModal
              source="Web - Tarjeta QR Footer"
              triggerClassName="rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 shadow-sm cursor-pointer"
              triggerLabel={q.finalPrimaryCta}
            />

            <a
              href={getWhatsAppUrl(q.whatsappPrefilled)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick(q.whatsappPrefilled, "qr_footer_whatsapp")}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/20"
            >
              <MessageCircle className="size-4" />
              <span>WhatsApp Directo</span>
            </a>
          </div>
        </div>
      </section>

      {/* BARRA MÓVIL INFERIOR FLOTANTE CON ACCIÓN DIRECTA */}
      <div className="fixed bottom-0 inset-x-0 z-40 border-t border-border/80 bg-background/95 backdrop-blur-md p-3 sm:hidden">
        <div className="flex items-center gap-2.5">
          <a
            href={getWhatsAppUrl(q.whatsappPrefilled)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick(q.whatsappPrefilled, "qr_mobile_bar_whatsapp")}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 px-4 text-xs font-semibold text-white shadow-sm"
          >
            <MessageCircle className="size-4 shrink-0" />
            <span>WhatsApp</span>
          </a>

          <ValuationModal
            source="Web - Tarjeta QR Barra Movil"
            triggerClassName="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary py-3 px-3 text-xs font-semibold text-primary-foreground shadow-sm cursor-pointer"
            triggerLabel="Valoración 15 min"
          />
        </div>
      </div>
    </div>
  );
}
