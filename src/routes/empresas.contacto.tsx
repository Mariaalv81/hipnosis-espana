import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHeader } from "@/components/page-header";
import { siteSettings } from "@/content/site-settings";
import { loadRecaptcha } from "@/lib/recaptcha";
import { makeSeo } from "@/lib/seo";
import { trackLeadSubmission } from "@/lib/analytics";

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

const formats = [
  "Sesión introductoria",
  "Taller",
  "Programa de varias sesiones",
  "Sesiones individuales dentro de empresa",
  "No lo tengo claro",
];

function CorporateContactPage() {
  const [sent, setSent] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const data = {
      contactName: String(fd.get("contactName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      company: String(fd.get("company") ?? ""),
      role: String(fd.get("role") ?? ""),
      employees: String(fd.get("employees") ?? ""),
      objective: String(fd.get("objective") ?? ""),
      format: String(fd.get("format") ?? ""),
      participants: String(fd.get("participants") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      recaptchaToken: undefined as string | undefined,
    };

    const fullMessage = [
      "Consulta B2B desde la web",
      "",
      `Empresa: ${data.company}`,
      `Persona de contacto: ${data.contactName}`,
      `Cargo: ${data.role}`,
      `Correo: ${data.email}`,
      `Teléfono: ${data.phone || "No indicado"}`,
      `Nº de empleados: ${data.employees}`,
      `Objetivo: ${data.objective}`,
      `Formato de interés: ${data.format}`,
      `Participantes previstos: ${data.participants}`,
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
      const subject = encodeURIComponent(`Programa para empresas · ${data.company}`);
      const body = encodeURIComponent(fullMessage);
      setMailtoLink(`mailto:${siteSettings.contactEmail}?subject=${subject}&body=${body}`);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Empresas"
        title="Hablar sobre un programa"
        intro="Cuéntame el contexto de la organización para valorar si un taller o programa puede encajar con vuestro objetivo."
      />

      <section className="container-page grid gap-12 py-16 md:py-20 lg:grid-cols-[3fr_2fr]">
        <form onSubmit={onSubmit} className="grid gap-5">
          <input type="text" name="website" style={{ display: "none" }} aria-hidden />

          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Empresa" id="company" required />
            <Field label="Persona de contacto" id="contactName" required />
            <Field label="Cargo" id="role" required />
            <Field label="Email" id="email" type="email" required />
            <Field label="Teléfono" id="phone" type="tel" />
            <Field label="Nº de empleados" id="employees" type="number" min="1" required />
          </div>

          <div className="grid gap-2">
            <label htmlFor="objective" className="text-sm">
              Objetivo del programa
            </label>
            <input
              id="objective"
              name="objective"
              required
              placeholder="Ej. mejorar foco, preparar presentaciones, gestionar presión..."
              className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="grid gap-2">
              <label htmlFor="format" className="text-sm">
                Formato de interés
              </label>
              <select
                id="format"
                name="format"
                required
                className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Selecciona una opción</option>
                {formats.map((format) => (
                  <option key={format} value={format}>
                    {format}
                  </option>
                ))}
              </select>
            </div>
            <Field
              label="Participantes previstos"
              id="participants"
              type="number"
              min="1"
              required
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input type="checkbox" required className="mt-1 accent-[var(--primary)]" />
            He leído y acepto la política de privacidad.
          </label>

          <button
            type="submit"
            className="w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Enviar consulta de empresa
          </button>

          {sent && (
            <p className="text-sm text-primary">
              Gracias, he recibido la consulta. Te responderé para valorar el encaje.
            </p>
          )}
          {mailtoLink && (
            <p className="mt-3">
              <a
                href={mailtoLink}
                className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors hover:bg-muted"
              >
                Enviar por correo
              </a>
            </p>
          )}
        </form>

        <aside className="h-fit rounded-2xl border border-border bg-card p-7">
          <h2 className="text-2xl">Para preparar la conversación</h2>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
            <li>El objetivo puede ser individual, grupal o de equipo.</li>
            <li>El formato se ajusta al tamaño del grupo y al contexto de trabajo.</li>
            <li>No se comparten contenidos privados de sesiones individuales con la empresa.</li>
          </ul>
          <Link
            to="/empresas"
            className="mt-7 inline-flex text-sm text-primary underline underline-offset-4"
          >
            Volver a empresas
          </Link>
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
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        min={min}
        className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
