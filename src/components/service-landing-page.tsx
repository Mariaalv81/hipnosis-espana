import { useState, type FormEvent } from "react";
import {
  Brain,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { CalendarButton } from "@/components/calendar-button";
import { siteSettings, getWhatsAppUrl } from "@/content/site-settings";
import { trackLeadSubmission, trackWhatsAppClick } from "@/lib/analytics";
import { loadRecaptcha } from "@/lib/recaptcha";
import { JsonLd, makeFaqSchema, makeServiceSchema } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface ServiceLandingPageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  introText: string;
  trustBadges: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  symptomsTitle: string;
  symptomsSubtitle: string;
  symptoms: { title: string; text: string }[];
  symptomsNote: string;
  whyTitle: string;
  whyParagraphs: string[];
  whyHighlights?: { title: string; text: string }[];
  pillarsTitle: string;
  pillarsIntro: string;
  steps: { num: string; badge: string; title: string; text: string }[];
  locationsTitle: string;
  locationsIntro: string;
  locations: { name: string; area: string; desc: string }[];
  pricingTitle: string;
  pricingFeatures: string[];
  price: string;
  priceUnit: string;
  priceNote?: string;
  formEyebrow: string;
  formTitle: string;
  formSubtitle: string;
  formFields: {
    name: string;
    email: string;
    phone: string;
    modality: string;
    modalityOptions?: { sueca: string; valencia: string; online: string };
    specificDetail: string;
    message: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    mailtoFallback: string;
  };
  faqsTitle: string;
  faqsSubtitle: string;
  faqs: { q: string; a: string }[];
}

export interface ServiceLandingPageProps {
  data: ServiceLandingPageData;
  serviceName: string;
  serviceDescription: string;
  path: string;
  formTag: string;
}

export function ServiceLandingPage({
  data,
  serviceName,
  serviceDescription,
  path,
  formTag,
}: ServiceLandingPageProps) {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const serviceSchema = makeServiceSchema({
    name: serviceName,
    description: serviceDescription,
    price: data.price,
    path,
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

  const faqSchema = makeFaqSchema(data.faqs);

  const defaultModalityOptions = data.formFields.modalityOptions ?? {
    sueca: "Presencial en Sueca (Centro Sanar)",
    valencia: "A domicilio en Valencia ciudad",
    online: "Sesión online en directo",
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const fd = new FormData(form);

    const formData = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      modality: String(fd.get("modality") ?? "").trim(),
      specificDetail: String(fd.get("specificDetail") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      recaptchaToken: undefined as string | undefined,
    };

    const fullMessage = [
      `Consulta / Solicitud: ${formTag}`,
      "",
      `Nombre: ${formData.name}`,
      `Email: ${formData.email}`,
      `Teléfono: ${formData.phone}`,
      `Modalidad preferida: ${formData.modality || "No especificada"}`,
      `Detalle / Situación: ${formData.specificDetail || "No indicado"}`,
      "",
      "Comentarios o dudas:",
      formData.message || "Sin comentarios adicionales",
    ].join("\n");

    try {
      const siteKey = import.meta.env["VITE_RECAPTCHA_SITE_KEY"] as string | undefined;
      if (siteKey) {
        try {
          await loadRecaptcha(siteKey);
          formData.recaptchaToken = await window.grecaptcha?.execute(siteKey, {
            action: `${formTag.toLowerCase().replace(/[^a-z0-9]/g, "_")}_consultation`,
          });
        } catch (err) {
          console.warn("reCAPTCHA unavailable, continuing without token", err);
        }
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          source: `Web - ${formTag}`,
          modality: formData.modality,
          specificDetail: formData.specificDetail,
          email: formData.email,
          phone: formData.phone,
          message: fullMessage,
          website: formData.website,
          recaptchaToken: formData.recaptchaToken,
        }),
      });

      if (!res.ok) throw new Error("Error al enviar la solicitud");

      trackLeadSubmission(formTag, formData.modality);
      setSent(true);
      form.reset();
    } catch (err) {
      console.error("send-email failed, falling back to mailto", err);
      const subject = encodeURIComponent(`Consulta hipnosis ${formTag} · ${formData.name}`);
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
              <span>{data.eyebrow}</span>
            </div>

            <h1 className="mt-5 text-4xl leading-tight md:text-5xl lg:text-6xl font-normal">
              {data.title}
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-foreground/90 md:text-xl font-serif">
              {data.subtitle}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {data.introText}
            </p>

            {/* TRUST BADGES */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {data.trustBadges.map((badge) => (
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
                {data.ctaPrimary}
              </a>
              <CalendarButton className="w-fit" />
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm transition-colors hover:bg-muted"
              >
                {data.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SÍNTOMAS COMUNES: IDENTIFICACIÓN EMPÁTICA */}
      <section className="container-page py-16 md:py-20">
        <div className="max-w-2xl">
          <p className="eyebrow">PATRONES HABITUALES</p>
          <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{data.symptomsTitle}</h2>
          <p className="mt-4 text-base text-muted-foreground">{data.symptomsSubtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.symptoms.map((symptom, i) => (
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
            <strong>Recuerda:</strong> {data.symptomsNote}
          </p>
        </div>
      </section>

      {/* POR QUÉ LA HIPNOSIS: CIENCIA Y ENFOQUE SUBCONSCIENTE */}
      <section className="border-y border-border/60 bg-muted/30 py-16 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="eyebrow">ENFOQUE NEUROBIOLÓGICO</p>
              <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{data.whyTitle}</h2>
              <div className="mt-6 flex flex-col gap-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Brain className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    Acceso directo a las respuestas automáticas e involuntarias del cerebro.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>
                    Desactivación del estrés, la culpa y la lucha desgastante de voluntad.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Compass className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>Integración de nuevos reflejos, claridad y seguridad sostenible.</span>
                </div>
              </div>
            </div>

            <div className="grid gap-5 text-base leading-relaxed text-muted-foreground">
              {data.whyParagraphs.map((paragraph, index) => (
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
          <h2 className="mt-3 text-3xl md:text-4xl">{data.pillarsTitle}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{data.pillarsIntro}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {data.steps.map((step) => (
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
            <p className="eyebrow">MODALIDADES DE ATENCIÓN</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{data.locationsTitle}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{data.locationsIntro}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {data.locations.map((loc) => (
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
              <h2 className="mt-2 text-3xl font-medium">{data.pricingTitle}</h2>
              <ul className="mt-6 grid gap-3">
                {data.pricingFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/80 p-8 text-center">
              <p className="eyebrow justify-center">SESIÓN INDIVIDUAL</p>
              <p className="mt-2 font-serif text-5xl text-primary">{data.price}</p>
              <p className="mt-1 text-xs text-muted-foreground">{data.priceUnit}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {data.priceNote ?? "A tu propio ritmo · Sin compromisos obligatorios"}
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
              <p className="eyebrow">{data.formEyebrow}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{data.formTitle}</h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {data.formSubtitle}
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
                      {data.formFields.name} *
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {data.formFields.email} *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      {data.formFields.phone} *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="modality" className="text-sm font-medium">
                      {data.formFields.modality}
                    </label>
                    <select
                      id="modality"
                      name="modality"
                      defaultValue=""
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Selecciona modalidad preferida</option>
                      <option value="sueca">{defaultModalityOptions.sueca}</option>
                      <option value="valencia">{defaultModalityOptions.valencia}</option>
                      <option value="online">{defaultModalityOptions.online}</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="specificDetail" className="text-sm font-medium">
                    {data.formFields.specificDetail}
                  </label>
                  <input
                    id="specificDetail"
                    name="specificDetail"
                    placeholder="Ej. Desde cuándo ocurre, qué desencadena la respuesta o qué has intentado..."
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {data.formFields.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Escribe aquí con total confianza lo que quieras comentarme..."
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {submitting ? data.formFields.submitting : data.formFields.submit}
                </button>

                {sent && (
                  <div className="rounded-xl border border-primary/30 bg-primary/10 p-5 text-sm text-foreground">
                    <p className="font-semibold text-primary">{data.formFields.successTitle}</p>
                    <p className="mt-1 text-muted-foreground">{data.formFields.successText}</p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-3 text-xs underline underline-offset-4 text-primary"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                )}

                {mailtoLink && (
                  <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-xs text-destructive">
                    <p>{data.formFields.mailtoFallback}</p>
                    <a
                      href={mailtoLink}
                      className="mt-2 inline-block font-semibold underline underline-offset-2"
                    >
                      Abrir cliente de correo ahora →
                    </a>
                  </div>
                )}
              </form>
            </div>

            {/* CAJA LATERAL DE CONFIANZA */}
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h3 className="font-serif text-2xl">¿Cómo te respondo?</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Leo tu mensaje personalmente y te respondo por WhatsApp o correo en menos de 24-48
                horas laborables. Te daré una valoración honesta sobre si la hipnosis es adecuada
                para lo que te ocurre o si conviene orientarte de otra manera.
              </p>

              <div className="mt-6 border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <Clock className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Respuesta rápida y humana</p>
                    <p className="text-xs text-muted-foreground">Sin automatismos ni spam.</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-5 text-primary" />
                  <div>
                    <p className="text-sm font-medium">Total confidencialidad</p>
                    <p className="text-xs text-muted-foreground">
                      Tus datos y tu situación están en un entorno seguro y privado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-muted/60 p-5 text-center">
                <p className="text-xs text-muted-foreground">¿Prefieres escribir directamente por WhatsApp?</p>
                <button
                  type="button"
                  onClick={() => {
                    trackWhatsAppClick(`landing_${formTag}`);
                    const url = getWhatsAppUrl(`Hola María, te escribo desde la página de ${formTag} para consultarte...`);
                    if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
                  }}
                  className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-2.5 px-4 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
                >
                  <span>Chat directo de WhatsApp</span>
                </button>

                <p className="mt-4 text-xs text-muted-foreground border-t border-border/60 pt-3">¿O prefieres elegir hueco en mi calendario?</p>
                <CalendarButton className="mt-2 w-full text-xs py-2.5" source={`landing_${formTag}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES ACCORDION */}
      <section className="container-page py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">DUDAS Y SEGURIDAD</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{data.faqsTitle}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{data.faqsSubtitle}</p>
        </div>

        <div className="mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {data.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-medium py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CIERRE / BANNER FINAL */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl font-normal md:text-4xl">¿Empezamos a cambiar ese patrón?</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/90 leading-relaxed">
            Puedes reservar tu primera sesión directamente o escribirme a través del formulario para
            valorar tu caso antes de dar el paso.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#formulario"
              className="inline-flex rounded-full bg-background px-7 py-3 text-sm text-foreground transition-opacity hover:opacity-90 font-medium"
            >
              Hacer una consulta previa
            </a>
            <CalendarButton className="bg-background text-foreground hover:bg-background/90" />
          </div>
        </div>
      </section>
    </>
  );
}
