import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Check, Clock, Phone, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { siteSettings } from "@/content/site-settings";
import { useI18n } from "@/lib/i18n";
import { loadRecaptcha } from "@/lib/recaptcha";
import { JsonLd, makeFaqSchema, makeSeo, makeServiceSchema } from "@/lib/seo";

export const Route = createFileRoute("/dejar-de-fumar")({
  head: () =>
    makeSeo({
      title: "Programa para dejar de fumar con hipnosis en Sueca · María Cabo",
      description:
        "Programa estructurado de tres sesiones de hipnosis para dejar de fumar en Sueca (Valencia). Entrevista previa gratuita de 20 minutos sin compromiso.",
      path: "/dejar-de-fumar",
    }),
  component: DejarDeFumarPage,
});

function DejarDeFumarPage() {
  const { t } = useI18n();
  const sp = t.smokingPage;
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const serviceSchema = makeServiceSchema({
    name: "Programa para dejar de fumar con hipnosis",
    description:
      "Acompañamiento estructurado de tres sesiones de hipnosis para dejar de fumar de forma definitiva en Sueca (Valencia). Incluye entrevista previa gratuita de 20 minutos.",
    price: "300 €",
    path: "/dejar-de-fumar",
  });
  const faqSchema = makeFaqSchema(sp.faqs);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const fd = new FormData(form);

    const data = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      preferredTime: String(fd.get("preferredTime") ?? "").trim(),
      preferredMethod: String(fd.get("preferredMethod") ?? "").trim(),
      habitDetails: String(fd.get("habitDetails") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      recaptchaToken: undefined as string | undefined,
    };

    const fullMessage = [
      "Solicitud de entrevista previa de 20 min (Programa Antitabaco):",
      "",
      `Nombre: ${data.name}`,
      `Email: ${data.email}`,
      `Teléfono: ${data.phone}`,
      `Horario preferido: ${data.preferredTime || "Indiferente"}`,
      `Medio preferido: ${data.preferredMethod || "No especificado"}`,
      `Consumo de tabaco: ${data.habitDetails || "No indicado"}`,
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
            action: "smoking_consultation",
          });
        } catch (err) {
          console.warn("reCAPTCHA unavailable, continuing without token", err);
        }
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${data.name} [Antitabaco]`,
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
      const subject = encodeURIComponent(`Entrevista previa dejar de fumar · ${data.name}`);
      const body = encodeURIComponent(fullMessage);
      setMailtoLink(`mailto:${siteSettings.contactEmail}?subject=${subject}&body=${body}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <JsonLd schema={[serviceSchema, faqSchema]} />
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-sand/30 to-background">
        <div className="container-page py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="eyebrow">{sp.eyebrow}</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-5xl lg:text-6xl">{sp.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-foreground/90 md:text-xl font-serif">
              {sp.subtitle}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {sp.introText}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#formulario"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                {sp.ctaPrimary}
              </a>
              <a
                href="#programa"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm transition-colors hover:bg-muted"
              >
                {sp.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ LA FUERZA DE VOLUNTAD NO BASTA */}
      <section className="container-page py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">ENFOQUE REALISTA</p>
            <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{sp.whyTitle}</h2>
          </div>
          <div className="grid gap-5 text-base leading-relaxed text-muted-foreground">
            {sp.whyParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRUCTURA DEL PROGRAMA */}
      <section id="programa" className="border-y border-border/60 bg-muted/30 py-16 md:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">PASO A PASO</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{sp.programTitle}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{sp.programIntro}</p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sp.steps.map((step) => (
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

          {/* QUÉ INCLUYE Y PRECIO */}
          <div className="mt-12 grid gap-8 rounded-3xl border border-border bg-card p-8 md:p-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <h3 className="text-2xl">{sp.includedTitle}</h3>
              <ul className="mt-6 grid gap-3">
                {sp.includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/80 bg-background/80 p-8 text-center">
              <p className="eyebrow justify-center">PRECIO TOTAL</p>
              <p className="mt-2 font-serif text-5xl text-primary">{sp.price}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{sp.priceNote}</p>
              <a
                href="#formulario"
                className="mt-6 inline-block w-full rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                {sp.ctaPrimary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO DIRECTO DE SOLICITUD */}
      <section id="formulario" className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="eyebrow">{sp.formEyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{sp.formTitle}</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {sp.formSubtitle}
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
                    {sp.formFields.name} *
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
                    {sp.formFields.email} *
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
                    {sp.formFields.phone} *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Ej. 612 345 678"
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid gap-2">
                  <label htmlFor="preferredTime" className="text-sm font-medium">
                    {sp.formFields.preferredTime}
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    defaultValue=""
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  >
                    <option value="" disabled>
                      {sp.formFields.preferredTimePlaceholder}
                    </option>
                    {sp.formFields.timeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">{sp.formFields.preferredMethod}</label>
                <div className="flex flex-wrap gap-4 pt-1">
                  {sp.formFields.methodOptions.map((method, index) => (
                    <label key={method} className="flex items-center gap-2 text-sm text-foreground">
                      <input
                        type="radio"
                        name="preferredMethod"
                        value={method}
                        defaultChecked={index === 0}
                        className="accent-primary"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                <label htmlFor="habitDetails" className="text-sm font-medium">
                  {sp.formFields.habitDetails}
                </label>
                <input
                  id="habitDetails"
                  name="habitDetails"
                  placeholder={sp.formFields.habitDetailsPlaceholder}
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {sp.formFields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder={sp.formFields.messagePlaceholder}
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" required className="mt-1 accent-primary" />
                <span>{sp.formFields.consent}</span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-fit"
              >
                {submitting ? sp.formFields.submitting : sp.formFields.submit}
              </button>

              {sent && (
                <div className="rounded-2xl border border-primary/40 bg-secondary/20 p-5 text-sm leading-relaxed text-foreground">
                  <p className="font-medium text-primary">{sp.formFields.success}</p>
                </div>
              )}

              {mailtoLink && (
                <div className="mt-2">
                  <p className="text-xs text-muted-foreground">
                    Si el envío automático no responde, puedes abrir tu correo:
                  </p>
                  <a
                    href={mailtoLink}
                    className="mt-2 inline-block rounded-full border border-border bg-card px-5 py-2.5 text-sm transition-colors hover:bg-muted"
                  >
                    {sp.formFields.fallbackMailto}
                  </a>
                </div>
              )}
            </form>
          </div>

          <aside className="rounded-3xl border border-border bg-card p-8 md:p-10 lg:sticky lg:top-28">
            <h3 className="text-xl font-medium">¿Cómo es la entrevista de 20 minutos?</h3>
            <ul className="mt-6 grid gap-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <strong>20 minutos:</strong> tiempo suficiente para conocernos y valorar si el
                  enfoque encaja contigo.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <strong>Por teléfono o videollamada:</strong> sin desplazarte y en el horario que
                  mejor te venga.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <strong>Sin compromiso:</strong> decides si empezar después de la conversación,
                  sin ninguna presión.
                </span>
              </li>
            </ul>

            <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
              <p>
                Despacho en Sueca (Valencia) dentro del Centro Sanar. Para cualquier otra consulta,
                también puedes usar el{" "}
                <Link to="/contacto" className="text-primary underline">
                  formulario de contacto general
                </Link>
                .
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES DEL PROGRAMA */}
      <section className="border-t border-border/60 bg-muted/20 py-16 md:py-20">
        <div className="container-page max-w-4xl">
          <p className="eyebrow">DUDAS COMUNES</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{sp.faqTitle}</h2>

          <dl className="mt-8 divide-y divide-border border-y border-border">
            {sp.faqs.map((faq) => (
              <div key={faq.q} className="grid gap-2 py-6 md:grid-cols-3 md:gap-8">
                <dt className="text-base font-medium">{faq.q}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-2">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
