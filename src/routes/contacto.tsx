import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ExternalLink, Instagram } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { loadRecaptcha } from "@/lib/recaptcha";
import { makeSeo } from "@/lib/seo";
import { siteSettings } from "@/content/site-settings";

export const Route = createFileRoute("/contacto")({
  head: () =>
    makeSeo({
      title: "Contacto · María Cabo",
      description: "Escribe a María Cabo si tienes una duda antes de reservar tu sesión en Sueca.",
      path: "/contacto",
    }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [sent, setSent] = useState(false);
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
      website: String(fd.get("website") ?? ""),
      recaptchaToken: undefined as string | undefined,
    };
    try {
      const siteKey = import.meta.env["VITE_RECAPTCHA_SITE_KEY"] as string | undefined;
      if (siteKey) {
        try {
          await loadRecaptcha(siteKey);
          const token = await window.grecaptcha?.execute(siteKey, { action: "contact" });
          payload.recaptchaToken = token;
        } catch (err) {
          console.warn("reCAPTCHA unavailable, continuing without token", err);
        }
      }

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Error enviando el mensaje");
      setSent(true);
    } catch (err) {
      console.error("send-email failed, falling back to mailto", err);
      const subject = encodeURIComponent("Consulta desde la web · María Cabo");
      const body = encodeURIComponent(
        `Nombre: ${payload.name}\nCorreo: ${payload.email}\nTeléfono: ${payload.phone}\n\n${payload.message}`,
      );
      setMailtoLink(`mailto:${siteSettings.contactEmail}?subject=${subject}&body=${body}`);
    }
  };

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.contact.title} intro={t.contact.intro} />

      <section className="container-page grid gap-12 py-16 md:py-20 lg:grid-cols-[3fr_2fr]">
        <form onSubmit={onSubmit} className="grid gap-5">
          {/* Honeypot field to trap bots - keep it hidden */}
          <input type="text" name="website" style={{ display: "none" }} aria-hidden />
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm">
              {t.contact.name}
            </label>
            <input
              id="name"
              name="name"
              required
              className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm">
              {t.contact.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-sm">
              {t.contact.phone}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="rounded-lg border border-input bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm">
              {t.contact.message}
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
            {t.contact.consent}
          </label>
          <button
            type="submit"
            className="w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.contact.send}
          </button>
          {sent && <p className="text-sm text-primary">{t.contact.sent}</p>}
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
          <p className="text-xs text-muted-foreground">{t.contact.note}</p>
        </form>

        <aside className="h-fit rounded-2xl border border-border bg-card p-7">
          <h2 className="text-2xl">{t.contact.infoTitle}</h2>
          <ul className="mt-5 grid gap-3 text-sm text-muted-foreground">
            <li>{t.contact.area}</li>
            <li>{t.contact.languages}</li>
            <li>{t.contact.hours}</li>
          </ul>

          <div className="mt-6 border-t border-border pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Canal de divulgación y contacto directo
            </p>
            <a
              href={siteSettings.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-border/80 bg-muted/40 p-4 transition-all hover:border-pink-500/40 hover:bg-pink-500/5 group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-sm">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium group-hover:text-pink-600 dark:group-hover:text-pink-400">
                    {siteSettings.instagramHandle}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Escríbeme por mensaje directo o sígueme
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground" />
            </a>
          </div>

          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            {t.footer.disclaimer}
          </p>
        </aside>
      </section>
    </>
  );
}
