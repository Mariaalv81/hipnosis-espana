import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Brain,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  HeartHandshake,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CalendarButton } from "@/components/calendar-button";
import { siteSettings } from "@/content/site-settings";
import { useI18n } from "@/lib/i18n";
import { loadRecaptcha } from "@/lib/recaptcha";
import { JsonLd, makeFaqSchema, makeSeo, makeServiceSchema } from "@/lib/seo";

export const Route = createFileRoute("/ansiedad")({
  head: () =>
    makeSeo({
      title: "Hipnosis para la Ansiedad, Miedos y Fobias en Valencia y Sueca · Solución Natural | María A. Cabo",
      description:
        "Calma la ansiedad, desactiva el pánico y supera miedos y fobias (volar, conducir, hablar en público) con psicoterapia e hipnosis en Sueca, Valencia y online. 70 €/sesión.",
      path: "/ansiedad",
    }),
  component: AnsiedadPage,
});

export function AnsiedadPage() {
  const { t } = useI18n();
  const ap = t.anxietyPage;
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const serviceSchema = makeServiceSchema({
    name: "Hipnosis para la ansiedad, miedos y fobias · Regulación somática y serenidad",
    description:
      "Acompañamiento natural con hipnosis y psicoterapia para calmar la ansiedad, superar miedos y fobias, desactivar la respuesta de alerta y enseñar al cuerpo a recuperar la serenidad. Sesiones individuales en Sueca (Centro Sanar), a domicilio en casas de particulares en Valencia ciudad y formato online.",
    price: "70 €",
    path: "/ansiedad",
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

  const faqSchema = makeFaqSchema(ap.faqs);

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
      symptoms: String(fd.get("symptoms") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      recaptchaToken: undefined as string | undefined,
    };

    const fullMessage = [
      "Consulta / Solicitud sobre Hipnosis para Ansiedad, Miedos o Fobias:",
      "",
      `Nombre: ${data.name}`,
      `Email: ${data.email}`,
      `Teléfono: ${data.phone}`,
      `Modalidad preferida: ${data.modality || "No especificada"}`,
      `Momentos de ansiedad: ${data.symptoms || "No indicado"}`,
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
            action: "anxiety_consultation",
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
          source: "Web - Ansiedad",
          modality: data.modality,
          specificDetail: data.symptoms,
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
      const subject = encodeURIComponent(`Consulta hipnosis ansiedad · ${data.name}`);
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
              <span>{ap.eyebrow}</span>
            </div>

            <h1 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-6xl font-normal">
              {ap.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-foreground/90 md:text-xl font-serif">
              {ap.subtitle}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {ap.introText}
            </p>

            {/* TRUST BADGES */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {ap.trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/80 px-3 py-1 text-xs text-muted-foreground"
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
                {ap.ctaPrimary}
              </a>
              <CalendarButton className="w-fit" />
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm transition-colors hover:bg-muted"
              >
                {ap.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SÍNTOMAS COMUNES: IDENTIFICACIÓN EMPÁTICA */}
      <section className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">SEÑALES DEL CUERPO</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{ap.symptomsTitle}</h2>
          <p className="mt-4 text-base text-muted-foreground">{ap.symptomsSubtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ap.symptoms.map((symptom, i) => (
            <article
              key={symptom.title}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <span className="font-serif text-2xl font-light text-primary/70">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-medium leading-snug">{symptom.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{symptom.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-sm text-foreground/90">
          <p className="leading-relaxed">
            <strong>Recuerda:</strong> La ansiedad no significa que algo esté roto en ti. Es un
            mecanismo biológico de supervivencia que se ha sobreactivado. Con el entrenamiento
            adecuado, el sistema nervioso puede desaprender ese estado de hipervigilancia constante.
          </p>
        </div>
      </section>

      {/* POR QUÉ LA HIPNOSIS: CIENCIA Y ENFOQUE NATURAL */}
      <section className="border-y border-border/60 bg-muted/30 py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">ENFOQUE BIOLÓGICO Y NATURAL</p>
              <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{ap.whyTitle}</h2>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Brain className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>Acceso a los centros subcorticales del sistema nervioso autónomo.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>Estimulación del sistema parasimpático y desactivación del cortisol.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Compass className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>Construcción de nuevos reflejos somáticos de calma duradera.</span>
                </div>
              </div>
            </div>

            <div className="grid gap-5 text-base leading-relaxed text-muted-foreground">
              {ap.whyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO APRENDE EL CUERPO: 4 PASOS */}
      <section id="como-funciona" className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">PASO A PASO</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{ap.pillarsTitle}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{ap.pillarsIntro}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ap.steps.map((step) => (
            <article
              key={step.num}
              className="flex flex-col justify-between rounded-3xl border border-border/70 bg-card p-6 shadow-sm transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <span className="font-serif text-3xl font-light text-primary">{step.num}</span>
                <span className="mt-3 inline-block rounded-full bg-secondary/40 px-3 py-1 text-xs text-secondary-foreground font-medium">
                  {step.badge}
                </span>
                <h3 className="mt-4 text-lg font-medium leading-snug">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* COBERTURA LOCAL: SUECA, RIBERA BAIXA Y VALENCIA */}
      <section className="border-y border-border/60 bg-sand/30 py-16 md:py-20">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">MODALIDADES DE ATENCIÓN LOCAL</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{ap.locationsTitle}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{ap.locationsIntro}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ap.locations.map((loc) => (
              <div
                key={loc.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                    <MapPin className="size-4" />
                    <span>{loc.area}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-medium">{loc.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Despacho en Centro Sanar (Sueca): Conexión directa y rápida desde Cullera, Alzira,
            Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Favara, Corbera y El Perelló.
          </p>
        </div>
      </section>

      {/* PRECIO Y TRANSPARENCIA */}
      <section className="container-page py-16 md:py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 md:p-12 shadow-sm">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.9fr] md:items-center">
            <div>
              <p className="eyebrow">CONDICIONES HONESTAS</p>
              <h2 className="mt-2 text-3xl font-medium">{ap.pricingTitle}</h2>
              <ul className="mt-6 grid gap-3">
                {ap.pricingFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/80 p-8 text-center">
              <p className="eyebrow justify-center">SESIÓN INDIVIDUAL</p>
              <p className="mt-2 font-serif text-5xl text-primary">{ap.price}</p>
              <p className="mt-1 text-xs text-muted-foreground">{ap.priceUnit}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                A tu propio ritmo · Sin compromisos obligatorios
              </p>
              <CalendarButton className="mt-6 w-full" />
              <a
                href="#formulario"
                className="mt-3 inline-block text-xs font-medium text-primary underline underline-offset-4 hover:opacity-80"
              >
                O consulta tus dudas primero
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DIRECTO DE CAPTACIÓN / CONTACTO */}
      <section id="formulario" className="border-t border-border/60 bg-muted/40 py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="eyebrow">{ap.formEyebrow}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{ap.formTitle}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {ap.formSubtitle}
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
                      {ap.formFields.name} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {ap.formFields.email} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      {ap.formFields.phone} *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="modality" className="text-sm font-medium">
                      {ap.formFields.modality}
                    </label>
                    <select
                      id="modality"
                      name="modality"
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    >
                      {ap.formFields.modalityOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="symptoms" className="text-sm font-medium">
                    {ap.formFields.symptoms}
                  </label>
                  <input
                    id="symptoms"
                    name="symptoms"
                    placeholder={ap.formFields.symptomsPlaceholder}
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {ap.formFields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder={ap.formFields.messagePlaceholder}
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <label className="flex items-start gap-3 text-xs text-muted-foreground">
                  <input type="checkbox" required className="mt-0.5 rounded border-input" />
                  <span>
                    {ap.formFields.consent}{" "}
                    <Link to="/legal" className="underline hover:text-foreground">
                      Ver información legal
                    </Link>
                    .
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-fit"
                >
                  {submitting ? ap.formFields.submitting : ap.formFields.submit}
                </button>

                {sent && (
                  <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm text-foreground">
                    <p className="font-medium">{ap.formFields.success}</p>
                  </div>
                )}

                {mailtoLink && (
                  <div className="rounded-xl border border-destructive/20 bg-destructive/10 p-4 text-sm text-foreground">
                    <p className="mb-2">
                      Si el formulario no se ha podido enviar automáticamente, puedes remitir tu
                      mensaje directamente por correo:
                    </p>
                    <a
                      href={mailtoLink}
                      className="inline-flex items-center gap-1 font-medium text-primary underline"
                    >
                      {ap.formFields.fallbackMailto}
                    </a>
                  </div>
                )}
              </form>
            </div>

            {/* CAJA LATERAL: CONTACTO DIRECTO */}
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <h3 className="text-2xl font-serif">Atención cercana y personalizada</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Si prefieres consultar directamente sin rellenar el formulario o tienes dudas sobre
                si la hipnosis es adecuada para tu caso particular, puedes escribirme o agendar tu
                sesión en el calendario.
              </p>

              <div className="mt-8 grid gap-4">
                <CalendarButton className="w-full justify-center" />

                <a
                  href={`mailto:${siteSettings.contactEmail}?subject=Consulta%20sobre%20hipnosis%20y%20ansiedad`}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-background px-6 py-3 text-sm transition-colors hover:bg-muted"
                >
                  Escribir a {siteSettings.contactEmail}
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

      {/* PREGUNTAS FRECUENTES SOBRE ANSIEDAD */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">RESOLVEMOS TUS DUDAS</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{ap.faqTitle}</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ap.faqs.map((faq) => (
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
          <p className="mx-auto max-w-2xl text-xs leading-relaxed text-muted-foreground">
            <strong>Aviso de transparencia:</strong> María A. Cabo ofrece acompañamiento de
            desarrollo personal y bienestar. La hipnosis es una disciplina complementaria y un
            recurso de autorregulación natural. No es un servicio sanitario y no sustituye la
            evaluación, diagnóstico ni tratamiento médico, psiquiátrico o psicológico cuando estos
            son necesarios.
          </p>
        </div>
      </section>
    </>
  );
}
