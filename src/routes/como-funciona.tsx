import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";
import { getWhatsAppUrl } from "@/content/site-settings";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/como-funciona")({
  head: () =>
    makeSeo({
      title: "Cómo funciona una sesión de hipnosis · María A. Cabo",
      description:
        "Qué es y qué no es la hipnosis, el recorrido paso a paso de una sesión y los límites del acompañamiento.",
      path: "/como-funciona",
    }),
  component: HowPage,
});

function HowPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.how.title} intro={t.how.intro} />

      <section className="container-page py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl">{t.how.stepsTitle}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {t.how.steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/60 py-16 md:py-20">
        <div className="container-page grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">{t.how.mythsTitle}</h2>
            <ul className="mt-6 grid gap-3">
              {t.how.myths.map((m) => (
                <li key={m} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl">{t.how.safetyTitle}</h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{t.how.safetyText}</p>
            <Link
              to="/contacto"
              className="mt-8 inline-block rounded-full border border-border bg-card px-6 py-3 text-sm transition-colors hover:bg-background"
            >
              {t.common.contactMe}
            </Link>
          </div>
        </div>
      </section>

      {/* High-conversion closing banner with 15-min consultation & WhatsApp */}
      <section className="container-page py-16 md:py-20">
        <div className="rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/10 via-card to-card p-8 shadow-sm md:p-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-primary/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Sin compromiso
            </span>
            <h2 className="mt-3 text-2xl font-serif md:text-3xl">
              {t.how.ctaTitle}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.how.ctaSubtitle}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 shrink-0 sm:flex-row lg:flex-col">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 text-center"
            >
              {t.how.ctaPrimary}
            </Link>
            <button
              type="button"
              onClick={() => {
                trackWhatsAppClick("como_funciona_cta");
                const url = getWhatsAppUrl(
                  "Hola María, he leído cómo funcionan las sesiones y me gustaría hacer una valoración previa de 15 minutos sin compromiso."
                );
                if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3.5 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t.how.ctaWhatsApp}</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
