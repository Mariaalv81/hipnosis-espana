import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Activity,
  ArrowRight,
  Brain,
  Building2,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Utensils,
  XCircle,
} from "lucide-react";
import { CalendarButton } from "@/components/calendar-button";
import { siteSettings } from "@/content/site-settings";
import { useI18n } from "@/lib/i18n";
import { loadRecaptcha } from "@/lib/recaptcha";
import { JsonLd, makeFaqSchema, makeSeo } from "@/lib/seo";
import sobreMiMariaCaboJpg from "@/assets/images/sobre-mi-maria-cabo.jpg";
import sobreMiMariaCaboWebp from "@/assets/images/sobre-mi-maria-cabo.webp";
import sobreMiMariaCaboAvif from "@/assets/images/sobre-mi-maria-cabo.avif";

export const Route = createFileRoute("/profesionales")({
  head: () =>
    makeSeo({
      title:
        "Colaboraciones Profesionales · Hipnosis como Herramienta Complementaria | María A. Cabo",
      description:
        "Colaboración interdisciplinar con nutricionistas, fisioterapeutas, osteópatas y centros de salud en Valencia y Ribera Baixa. Hipnosis para potenciar la adherencia y respuesta de tus clientes.",
      path: "/profesionales",
    }),
  component: ProfessionalsPage,
});

const synergyIcons = [Utensils, Activity, Sparkles, Smile];

function ProfessionalsPage() {
  const { t } = useI18n();
  const p = t.professionalsPage;

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const faqSchema = makeFaqSchema(p.faqs);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const fd = new FormData(form);

    const data = {
      name: String(fd.get("name") ?? "").trim(),
      specialty: String(fd.get("specialty") ?? "").trim(),
      center: String(fd.get("center") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      recaptchaToken: undefined as string | undefined,
    };

    const fullMessage = [
      "Propuesta de Colaboración Profesional:",
      "",
      `Nombre: ${data.name}`,
      `Disciplina / Especialidad: ${data.specialty || "No especificada"}`,
      `Centro / Clínica / Ciudad: ${data.center || "No especificado"}`,
      `Email: ${data.email}`,
      `Teléfono: ${data.phone}`,
      "",
      "Propuesta / Observaciones:",
      data.message || "Sin comentarios adicionales",
    ].join("\n");

    try {
      const siteKey = import.meta.env["VITE_RECAPTCHA_SITE_KEY"] as string | undefined;
      if (siteKey) {
        try {
          await loadRecaptcha(siteKey);
          data.recaptchaToken = await window.grecaptcha?.execute(siteKey, {
            action: "professional_partnership",
          });
        } catch (err) {
          console.warn("reCAPTCHA unavailable, continuing without token", err);
        }
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${data.name} (${data.specialty}${data.center ? ` - ${data.center}` : ""})`,
          source: "Colaboradores / Profesionales",
          modality: "Colaboración profesional",
          specificDetail: `${data.specialty}${data.center ? ` · ${data.center}` : ""}`,
          email: data.email,
          phone: data.phone,
          message: fullMessage,
          website: data.website,
          recaptchaToken: data.recaptchaToken,
        }),
      });

      if (!res.ok) throw new Error("Error al enviar la solicitud");

      setSent(true);
      form.reset();
    } catch (err) {
      console.error("send-email failed, falling back to mailto", err);
      const subject = encodeURIComponent(
        `Colaboración profesional · ${data.name} (${data.specialty})`,
      );
      const body = encodeURIComponent(fullMessage);
      setMailtoLink(`mailto:${siteSettings.contactEmail}?subject=${subject}&body=${body}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <JsonLd schema={faqSchema} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-muted/30 to-background py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow justify-center">{p.eyebrow}</span>
            <h1 className="mt-4 font-serif text-3xl font-normal tracking-tight md:text-5xl lg:text-6xl">
              {p.title}
            </h1>

            {/* MANIFESTO CALLOUT BOX */}
            <div className="relative mx-auto my-10 max-w-3xl rounded-3xl border border-primary/25 bg-card/90 p-8 text-left shadow-[var(--shadow-soft)] md:p-10">
              <div className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-0.5 text-xs font-medium text-primary backdrop-blur-sm">
                <HeartHandshake className="size-3.5" />
                <span>Compromiso de colaboración</span>
              </div>
              <blockquote className="font-serif text-xl italic leading-relaxed text-foreground md:text-2xl">
                {p.manifesto}
              </blockquote>
              <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">María A. Cabo</span>
                <span>Sueca · Valencia · En vuestro propio centro · Online</span>
              </div>
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {p.heroText}
            </p>

            {/* CTAS */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contacto-profesionales"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                {p.ctaPrimary}
              </a>
              <a
                href="#derivaciones"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-3.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                {p.ctaSecondary}
              </a>
              <CalendarButton
                className="rounded-full px-6 py-3.5 text-sm"
                label="Llamada informativa (15 min)"
              />
            </div>

            {/* BADGES */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5">
                <ShieldCheck className="size-3.5 text-primary" />
                Cero intrusismo profesional
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 font-medium text-foreground">
                <Building2 className="size-3.5 text-primary" />
                Atención in situ en vuestro propio centro disponible
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5">
                <MapPin className="size-3.5 text-primary" />
                Sueca (Centro Sanar) · Valencia a domicilio · Online
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5">
                <Clock className="size-3.5 text-primary" />
                Derivación ágil sin burocracia
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SINERGIA INTERDISCIPLINAR */}
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">{p.synergyEyebrow}</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">{p.synergyTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.synergyIntro}</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {p.synergies.map((item, idx) => {
            const Icon = synergyIcons[idx % synergyIcons.length] ?? Sparkles;
            return (
              <div
                key={item.area}
                className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="size-6" />
                    </span>
                    <span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
                      {item.specialties}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-normal">{item.area}</h3>

                  <div className="mt-4 rounded-xl border border-border/60 bg-muted/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Obstáculo frecuente en consulta:
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-border/60 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Aporte de la hipnosis:
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground">{item.benefit}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* LÍMITES ÉTICOS Y ALCANCE (QUÉ TRABAJO / QUÉ NO TRABAJO) */}
      <section className="border-y border-border/60 bg-muted/30 py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">{p.scopeEyebrow}</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">{p.scopeTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.scopeIntro}</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* QUÉ TRABAJO */}
            <div className="rounded-3xl border border-primary/30 bg-card p-8 md:p-10 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                <CheckCircle2 className="size-4" />
                <span>ALCANCE Y COMPETENCIAS</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl">{p.whatIWorkTitle}</h3>
              <ul className="mt-6 space-y-4">
                {p.whatIWork.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* QUÉ NO TRABAJO */}
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs font-semibold text-muted-foreground">
                <XCircle className="size-4 text-muted-foreground" />
                <span>LÍMITES DEONTOLÓGICOS</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl text-muted-foreground">
                {p.whatIDoNotWorkTitle}
              </h3>
              <ul className="mt-6 space-y-4">
                {p.whatIDoNotWork.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <XCircle className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NOTA ÉTICA */}
          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-border/80 bg-background/80 p-6 md:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-1 size-6 shrink-0 text-primary" />
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-foreground">
                  COMPLEMENTARIEDAD Y RESPETO PROFESIONAL
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.ethicalNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO ES UNA SESIÓN */}
      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">{p.sessionEyebrow}</p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">{p.sessionTitle}</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{p.sessionIntro}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.sessionPoints.map((pt, idx) => (
            <div
              key={pt.title}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div>
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary">
                  {idx + 1}
                </span>
                <h3 className="mt-4 font-medium text-foreground">{pt.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pt.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO FUNCIONA UNA DERIVACIÓN */}
      <section id="derivaciones" className="border-t border-border/60 bg-muted/20 py-16 md:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">{p.referralEyebrow}</p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              {p.referralTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {p.referralIntro}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {p.referralSteps.map((step) => (
              <div
                key={step.num}
                className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div>
                  <span className="font-serif text-3xl font-light text-primary/70">{step.num}</span>
                  <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CONFIDENCIALIDAD */}
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="mt-0.5 size-6 shrink-0 text-primary" />
              <div>
                <h4 className="text-base font-medium">{p.confidentialityTitle}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {p.confidentialityText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">{p.aboutEyebrow}</p>
            <h2 className="mt-3 font-serif text-3xl font-normal md:text-4xl">{p.aboutTitle}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {p.aboutText.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-border bg-muted/20 p-4">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                <MapPin className="size-4 text-primary" />
                <span>{p.aboutLocation}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/sobre-mi"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <span>Conocer mi trayectoria completa</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <picture>
              <source srcSet={sobreMiMariaCaboAvif} type="image/avif" />
              <source srcSet={sobreMiMariaCaboWebp} type="image/webp" />
              <img
                src={sobreMiMariaCaboJpg}
                alt="María A. Cabo - Hipnosis en Valencia y Sueca"
                width={1254}
                height={1254}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-3xl object-cover object-center shadow-[var(--shadow-soft)]"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE PROPUESTA / CONTACTO PROFESIONAL */}
      <section
        id="contacto-profesionales"
        className="border-t border-border/60 bg-muted/40 py-16 md:py-24"
      >
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            {/* FORMULARIO */}
            <div>
              <p className="eyebrow">{p.formEyebrow}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{p.formTitle}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {p.formSubtitle}
              </p>

              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="website"
                  style={{ display: "none" }}
                  aria-hidden
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {p.formFields.name} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Ej. Dr. Javier Gómez / Laura Vidal"
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="specialty" className="text-sm font-medium">
                      {p.formFields.specialty} *
                    </label>
                    <select
                      id="specialty"
                      name="specialty"
                      required
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Selecciona tu especialidad...</option>
                      {p.formSpecialtyOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="center" className="text-sm font-medium">
                      {p.formFields.center}
                    </label>
                    <input
                      id="center"
                      name="center"
                      placeholder="Ej. Clínica Fisioterapia Ribera / Consulta en Valencia"
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      {p.formFields.phone} *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="600 000 000"
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    {p.formFields.email} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu-email@tudominio.com"
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {p.formFields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntame brevemente qué tipo de casos te gustaría derivar o qué dudas tienes sobre la integración..."
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5 rounded border-input" />
                  <span>
                    Acepto el tratamiento de mis datos de contacto para gestionar esta consulta
                    profesional.{" "}
                    <Link to="/legal" className="underline hover:text-foreground">
                      Ver información legal
                    </Link>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-fit"
                >
                  {submitting ? p.formFields.submitting : p.formFields.submit}
                </button>

                {sent && (
                  <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-foreground">
                    <p className="font-medium">{p.formFields.successTitle}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.formFields.successText}</p>
                  </div>
                )}

                {mailtoLink && (
                  <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-foreground">
                    <p className="mb-2">{p.formFields.mailtoFallback}</p>
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-1 font-medium text-primary underline"
                    >
                      {siteSettings.contactEmail}
                    </a>
                  </div>
                )}
              </form>
            </div>

            {/* CAJA LATERAL: LLAMADA O CAFÉ DE 15 MIN */}
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <span className="eyebrow">CONTACTO DIRECTO</span>
              <h3 className="mt-2 font-serif text-2xl font-normal">
                Hablemos de cómo sumar fuerzas
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Si antes de coordinar casos prefieres tener una breve llamada de 15 minutos o tomar
                un café para conocernos, resolver cualquier cuestión técnica sobre la hipnosis o
                valorar la posibilidad de que atienda a tus pacientes directamente en vuestro centro
                por motivos de movilidad y accesibilidad, puedes reservar un hueco directamente.
              </p>

              <div className="mt-8 space-y-4">
                <CalendarButton
                  className="w-full justify-center"
                  label="Reservar llamada de 15 min"
                />

                <a
                  href={`mailto:${siteSettings.contactEmail}?subject=Colaboración%20profesional%20con%20María%20A.%20Cabo`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <Mail className="size-4 text-primary" />
                  <span>Escribir a {siteSettings.contactEmail}</span>
                </a>
              </div>

              <div className="mt-8 border-t border-border/60 pt-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="size-4 text-primary" />
                  <span>Respuesta habitual en menos de 24 horas laborables.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES DE PROFESIONALES */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">{p.faqEyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{p.faqTitle}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{p.faqSubtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {p.faqs.map((faq) => (
            <article
              key={faq.q}
              className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium">{faq.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* DISCLAIMER ÉTICO Y LEGAL */}
      <section className="border-t border-border/60 bg-muted/30 py-10">
        <div className="container-page text-center">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground">
            <strong>Aviso de rigor ético y deontológico:</strong> El acompañamiento con hipnosis
            ofrecido por María A. Cabo se enmarca en el desarrollo personal, la gestión emocional y
            la modificación de automatismos y hábitos. No constituye un servicio sanitario ni
            sustituye tratamientos médicos, farmacológicos o de psicología clínica reglada. La
            colaboración se establece desde la complementariedad y el respeto escrupuloso a las
            competencias de cada profesional de la salud.
          </p>
        </div>
      </section>
    </>
  );
}
