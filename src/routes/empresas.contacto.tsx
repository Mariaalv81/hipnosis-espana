import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { siteSettings, getWhatsAppUrl } from "@/content/site-settings";
import { useI18n } from "@/lib/i18n";
import { loadRecaptcha } from "@/lib/recaptcha";
import { makeSeo } from "@/lib/seo";
import { trackLeadSubmission, trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/empresas/contacto")({
  head: () =>
    makeSeo({
      title: "Hablar sobre un programa para empresas · María A. Cabo",
      description:
        "Formulario para empresas interesadas en talleres o programas de desarrollo profesional con María A. Cabo.",
      path: "/empresas/contacto",
    }),
  component: CorporateContactPage,
});

function CorporateContactPage() {
  const { t } = useI18n();
  const c = t.companiesContact;
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    const fd = new FormData(form);
    const data = {
      contactName: String(fd.get("contactName") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim(),
      company: String(fd.get("company") ?? "").trim(),
      role: String(fd.get("role") ?? "").trim(),
      employees: String(fd.get("employees") ?? "").trim(),
      objective: String(fd.get("objective") ?? "").trim(),
      format: String(fd.get("format") ?? "").trim(),
      participants: String(fd.get("participants") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? "").trim(),
      recaptchaToken: undefined as string | undefined,
    };

    const fullMessage = [
      c.emailSummary || "Consulta B2B desde la web",
      "",
      `Empresa: ${data.company}`,
      `Persona de contacto: ${data.contactName}`,
      `Cargo: ${data.role || "No indicado"}`,
      `Correo: ${data.email}`,
      `Teléfono: ${data.phone || c.notProvided || "No indicado"}`,
      `Nº de empleados: ${data.employees}`,
      `Objetivo: ${data.objective}`,
      `Formato de interés: ${data.format || "No indicado"}`,
      `Participantes previstos: ${data.participants || "No indicado"}`,
      "",
      "Mensaje:",
      data.message,
    ].join("\n");

    try {
      const siteKey = import.meta.env["VITE_RECAPTCHA_SITE_KEY"] as string | undefined;
      if (siteKey) {
        try {
          await loadRecaptcha(siteKey);
          data.recaptchaToken = await window.grecaptcha?.execute(siteKey, {
            action: "corporate_contact",
          });
        } catch (err) {
          console.warn("reCAPTCHA unavailable, continuing without token", err);
        }
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${data.contactName} · ${data.company}`,
          source: "Web - Empresas",
          email: data.email,
          phone: data.phone,
          message: fullMessage,
          website: data.website,
          recaptchaToken: data.recaptchaToken,
        }),
      });

      if (!res.ok) throw new Error("Error enviando el mensaje");
      trackLeadSubmission("Web - Empresas");
      setSent(true);
      form.reset();
    } catch (err) {
      console.error("send-email failed, falling back to mailto", err);
      const subject = encodeURIComponent(
        `${c.emailSubject || "Programa para empresas"} · ${data.company}`,
      );
      const body = encodeURIComponent(fullMessage);
      setMailtoLink(`mailto:${siteSettings.contactEmail}?subject=${subject}&body=${body}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHeader eyebrow={c.eyebrow} title={c.title} intro={c.intro} />

      <section className="container-page grid gap-12 py-16 md:py-20 lg:grid-cols-[3fr_2fr]">
        <div>
          {!sent ? (
            <form onSubmit={onSubmit} className="grid gap-5">
              <input type="text" name="website" style={{ display: "none" }} aria-hidden />

              <div className="grid gap-5 md:grid-cols-2">
                <Field label={c.fields.company} id="company" required />
                <Field label={c.fields.contactName} id="contactName" required />
                <Field label={c.fields.role} id="role" required />
                <Field label={c.fields.email} id="email" type="email" required />
                <Field label={c.fields.phone} id="phone" type="tel" />
                <Field label={c.fields.employees} id="employees" type="number" min="1" required />
              </div>

              <div className="grid gap-2">
                <label htmlFor="objective" className="text-sm font-medium">
                  {c.fields.objective} *
                </label>
                <input
                  id="objective"
                  name="objective"
                  required
                  placeholder={c.objectivePlaceholder}
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                  <label htmlFor="format" className="text-sm font-medium">
                    {c.fields.format}
                  </label>
                  <select
                    id="format"
                    name="format"
                    required
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                  >
                    <option value="">{c.formatPlaceholder}</option>
                    {c.formats.map((format) => (
                      <option key={format} value={format}>
                        {format}
                      </option>
                    ))}
                  </select>
                </div>
                <Field
                  label={c.fields.participants}
                  id="participants"
                  type="number"
                  min="1"
                  required
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  {c.fields.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Detalla brevemente las necesidades de tu equipo o proyecto..."
                  className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
                />
              </div>

              <label className="flex items-start gap-3 text-xs sm:text-sm text-muted-foreground cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-[var(--primary)]" />
                <span>{c.consent}</span>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="w-fit rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {submitting ? "Enviando consulta..." : c.send}
              </button>

              {mailtoLink && (
                <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-xs text-destructive">
                  <p>{c.serverError}</p>
                  <a
                    href={mailtoLink}
                    className="mt-2 inline-block font-semibold underline underline-offset-2"
                  >
                    {c.mailto} →
                  </a>
                </div>
              )}
            </form>
          ) : (
            <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center space-y-4">
              <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <CheckCircle2 className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{c.successTitle}</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                {c.sent}
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-4 text-xs text-primary underline underline-offset-4"
              >
                {c.sendAnother}
              </button>
            </div>
          )}
        </div>

        <aside className="h-fit rounded-2xl border border-border bg-card p-7 shadow-xs space-y-6">
          <div>
            <h2 className="text-xl font-serif font-medium">{c.asideTitle}</h2>
            <ul className="mt-4 grid gap-3 text-sm text-muted-foreground leading-relaxed">
              {c.asideItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border/80 pt-6">
            <p className="text-xs text-muted-foreground">{c.asideDirectHelp}</p>
            <button
              type="button"
              onClick={() => {
                trackWhatsAppClick("empresas_contacto_aside");
                const url = getWhatsAppUrl(
                  "Hola María, represento a una organización y me gustaría consultar sobre talleres y programas de desarrollo profesional...",
                );
                if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
              }}
              className="mt-2.5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 py-2.5 px-4 text-xs font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
            >
              <MessageCircle className="size-4" />
              <span>{c.asideWhatsApp}</span>
            </button>
          </div>

          <div className="border-t border-border/80 pt-4">
            <Link
              to="/empresas"
              className="inline-flex text-xs font-medium text-primary underline underline-offset-4 hover:opacity-80"
            >
              ← {c.back}
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  type = "text",
  required,
  min,
}: {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  min?: string;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label} {required ? "*" : ""}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        min={min}
        className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
