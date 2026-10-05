import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  Eye,
  Heart,
  Hourglass,
  Info,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { siteSettings } from "@/content/site-settings";
import { useI18n } from "@/lib/i18n";
import { loadRecaptcha } from "@/lib/recaptcha";
import { JsonLd, makeFaqSchema, makeSeo, makeServiceSchema } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import sobreMiMariaCaboJpg from "@/assets/images/sobre-mi-maria-cabo.jpg";
import sobreMiMariaCaboWebp from "@/assets/images/sobre-mi-maria-cabo.webp";
import sobreMiMariaCaboAvif from "@/assets/images/sobre-mi-maria-cabo.avif";

export const Route = createFileRoute("/vidas-pasadas")({
  head: () =>
    makeSeo({
      title:
        "Hipnosis para Vidas Pasadas y Registros Akáshicos en Valencia y Online · Regresión Consciente | María A. Cabo",
      description:
        "Regresión a vidas pasadas y acceso a Registros Akáshicos con hipnosis consciente en Sueca, Valencia y online. Descubre el origen de bloqueos, relaciones kármicas y memorias del alma.",
      path: "/vidas-pasadas",
    }),
  component: PastLivesPage,
});

function PastLivesPage() {
  const { t } = useI18n();
  const pl = t.pastLivesPage;

  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const serviceSchema = makeServiceSchema({
    name: pl.title,
    description: pl.seoDescription,
    price: "100 €",
    path: "/vidas-pasadas",
    areaServed: [
      { "@type": "City", name: "Sueca" },
      { "@type": "City", name: "Valencia" },
      { "@type": "City", name: "Cullera" },
      { "@type": "City", name: "Alzira" },
      { "@type": "City", name: "Algemesí" },
      { "@type": "City", name: "Carcaixent" },
      { "@type": "City", name: "Sollana" },
      { "@type": "AdministrativeArea", name: "Ribera Baixa" },
    ],
  });

  const faqSchema = makeFaqSchema(pl.faqs);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const fd = new FormData(form);

    const data = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      modality: String(fd.get("modality") ?? "").trim(),
      focus: String(fd.get("focus") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      recaptchaToken: undefined as string | undefined,
    };

    if (!data.phone) {
      alert("Por favor, introduce tu número de teléfono para que podamos coordinar la sesión.");
      setSubmitting(false);
      return;
    }

    const fullMessage = [
      "Solicitud / Consulta sobre Hipnosis para Vidas Pasadas y Registros Akáshicos:",
      "",
      `Nombre: ${data.name}`,
      `Email: ${data.email}`,
      `Teléfono: ${data.phone}`,
      `Modalidad preferida: ${data.modality || "No especificada"}`,
      `Qué le gustaría explorar: ${data.focus || "No indicado"}`,
      "",
      "Comentarios o dudas:",
      data.message || "Sin comentarios adicionales",
    ].join("\n");

    try {
      const siteKey = import.meta.env["VITE_RECAPTCHA_SITE_KEY"] as string | undefined;
      if (siteKey) {
        try {
          await loadRecaptcha(siteKey);
          data.recaptchaToken = await window.grecaptcha?.execute(siteKey, {
            action: "past_lives_consultation",
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
          source: "Web - Vidas Pasadas",
          modality: data.modality,
          specificDetail: data.focus,
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
      const subject = encodeURIComponent(`Consulta regresión vidas pasadas · ${data.name}`);
      const body = encodeURIComponent(fullMessage);
      setMailtoLink(`mailto:${siteSettings.contactEmail}?subject=${subject}&body=${body}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <JsonLd schema={[serviceSchema, faqSchema]} />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-sand/40 via-background to-background">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-medium text-primary">
              <Sparkles className="size-3.5" />
              <span>{pl.eyebrow}</span>
            </div>

            <h1 className="mt-5 text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
              {pl.title}
            </h1>

            <p className="mt-5 font-serif text-lg leading-relaxed text-foreground/90 md:text-xl">
              {pl.subtitle}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {pl.introText}
            </p>

            {/* TRUST BADGES */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {pl.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-3.5 py-1 text-xs text-muted-foreground"
                >
                  <Check className="size-3.5 text-primary" />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAS */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                {pl.ctaPrimary}
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm transition-colors hover:bg-muted"
              >
                {pl.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RAZONES PARA EXPLORAR / IDENTIFICACIÓN */}
      <section className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">{pl.reasonsEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{pl.reasonsTitle}</h2>
          <p className="mt-4 text-base text-muted-foreground">{pl.reasonsSubtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pl.reasons.map((item, i) => (
            <article
              key={i}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card/60 p-6 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-lg font-medium leading-snug">{item.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* EXPLICACIÓN DETALLADA: CÓMO VER VIDAS PASADAS Y REGISTROS AKÁSHICOS (SEO CORE) */}
      <section className="border-y border-border/60 bg-muted/20 py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">{pl.akashicEyebrow}</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl font-normal">
              {pl.akashicTitle}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-serif">{pl.akashicSubtitle}</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {pl.akashicPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-border/80 bg-card p-8 shadow-[var(--shadow-soft)]"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {idx === 0 ? <Eye className="size-6" /> : <BookOpen className="size-6" />}
                </div>
                <h3 className="mt-6 text-xl font-medium leading-snug">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* CALLOUT: ¿ES REAL O ES IMAGINACIÓN? */}
          <div className="mt-12 rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10">
            <div className="flex items-center gap-3 text-primary">
              <Compass className="size-5" />
              <h3 className="text-xl font-medium">{pl.realityVsFantasyTitle}</h3>
            </div>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-foreground/80 md:text-base">
              {pl.realityVsFantasyText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EL RECORRIDO DE LA SESIÓN: PASO A PASO */}
      <section id="como-funciona" className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">{pl.journeyEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{pl.journeyTitle}</h2>
          <p className="mt-4 text-base text-muted-foreground">{pl.journeySubtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {pl.journeySteps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-light text-primary/40">{step.num}</span>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                    {step.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-medium leading-snug">{step.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODALIDADES / DÓNDE REALIZAR LA REGRESIÓN */}
      <section className="border-t border-border/60 bg-muted/20 py-16 md:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">MODALIDADES FLEXIBLES</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{pl.locationsTitle}</h2>
            <p className="mt-4 text-base text-muted-foreground">{pl.locationsIntro}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pl.locations.map((loc, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card p-6"
              >
                <div>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-medium">{loc.name}</h3>
                  <p className="mt-1 text-xs font-medium text-primary">{loc.area}</p>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARIFAS Y CONDICIONES TRANSPARENTES */}
      <section className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/80 bg-card p-8 md:p-12 shadow-[var(--shadow-soft)]">
          <div className="text-center">
            <p className="eyebrow">CONDICIONES CLARAS</p>
            <h2 className="mt-2 text-3xl md:text-4xl">{pl.pricingTitle}</h2>
            <div className="mt-6 flex items-baseline justify-center gap-2">
              <span className="font-serif text-5xl font-light text-primary">{pl.price}</span>
              <span className="text-sm text-muted-foreground">{pl.priceUnit}</span>
            </div>
          </div>

          <ul className="mt-8 space-y-3.5 border-t border-border/60 pt-8">
            {pl.pricingFeatures.map((feat, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/85">
                <CheckCircle2 className="size-4 shrink-0 text-primary mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#formulario"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {pl.ctaPrimary}
            </a>
          </div>
        </div>
      </section>

      {/* FORMULARIO DE RESERVA / CONSULTA */}
      <section id="formulario" className="border-t border-border/60 bg-muted/20 py-16 md:py-24">
        <div className="container-page max-w-2xl">
          <div className="text-center">
            <p className="eyebrow">{pl.formEyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{pl.formTitle}</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              {pl.formSubtitle}
            </p>
          </div>

          {sent ? (
            <div className="mt-10 rounded-3xl border border-primary/30 bg-primary/10 p-8 text-center">
              <CheckCircle2 className="mx-auto size-12 text-primary" />
              <h3 className="mt-4 text-xl font-medium">Solicitud recibida</h3>
              <p className="mt-2 text-sm text-muted-foreground">{pl.formFields.success}</p>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mt-10 space-y-5 rounded-3xl border border-border/80 bg-card p-8 md:p-10 shadow-[var(--shadow-soft)]"
            >
              {/* Honeypot anti-spam */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label className="block text-xs font-medium text-muted-foreground">
                  {pl.formFields.name} *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre"
                  className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground">
                    {pl.formFields.email} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-muted-foreground">
                    {pl.formFields.phone} *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+34 600 000 000"
                    className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground">
                  {pl.formFields.modality} *
                </label>
                <select
                  name="modality"
                  required
                  defaultValue={pl.formFields.modalityOptions[0]}
                  className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                >
                  {pl.formFields.modalityOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground">
                  {pl.formFields.focus}
                </label>
                <input
                  type="text"
                  name="focus"
                  placeholder={pl.formFields.focusPlaceholder}
                  className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground">
                  {pl.formFields.message}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder={pl.formFields.messagePlaceholder}
                  className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-sm transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div className="flex items-start gap-2.5 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  className="mt-1 size-4 rounded border-border text-primary focus:ring-primary"
                />
                <label htmlFor="consent" className="text-xs text-muted-foreground">
                  {pl.formFields.consent}{" "}
                  <Link to="/legal" className="underline underline-offset-2 hover:text-foreground">
                    Ver aviso legal
                  </Link>
                </label>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {submitting ? pl.formFields.submitting : pl.formFields.submit}
              </button>

              {mailtoLink && (
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  ¿Problemas con el formulario?{" "}
                  <a href={mailtoLink} className="underline hover:text-foreground">
                    {pl.formFields.fallbackMailto}
                  </a>
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* FAQS ACORDEÓN */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">{pl.faqEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{pl.faqTitle}</h2>
          <p className="mt-4 text-base text-muted-foreground">{pl.faqSubtitle}</p>
        </div>

        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {pl.faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border/80 bg-card px-5 py-1"
              >
                <AccordionTrigger className="text-left font-serif text-base font-normal hover:no-underline md:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* PUENTE / CONEXIÓN CON LA WEB TOTAL Y RIGOR DE MARÍA A. CABO */}
      <section className="border-t border-border/60 bg-sand/30 py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <ShieldCheck className="size-3.5" />
              <span>MARCO PROFESIONAL SEGURO</span>
            </span>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl font-normal">
              {pl.bridgeTitle}
            </h2>
            <p className="mt-3 text-lg font-serif text-foreground/90">{pl.bridgeSubtitle}</p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{pl.bridgeText}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/sobre-mi"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                <span>{pl.bridgeCta}</span>
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/como-funciona"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm transition-colors hover:bg-muted"
              >
                <span>Cómo funciona la hipnosis</span>
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm transition-colors hover:bg-muted"
              >
                <span>Contacto general</span>
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <picture>
              <source srcSet={sobreMiMariaCaboAvif} type="image/avif" />
              <source srcSet={sobreMiMariaCaboWebp} type="image/webp" />
              <img
                src={sobreMiMariaCaboJpg}
                alt="María A. Cabo - Facilitadora de Hipnosis"
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

      {/* DISCLAIMER ÉTICO Y LEGAL */}
      <section className="border-t border-border/60 bg-muted/40 py-10">
        <div className="container-page text-center">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-muted-foreground">
            <strong>Aviso de rigor ético:</strong> {pl.disclaimerText}
          </p>
        </div>
      </section>
    </>
  );
}
