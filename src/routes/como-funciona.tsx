import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Cómo funciona una sesión de hipnosis · Holistic-o" },
      {
        name: "description",
        content:
          "Qué es y qué no es la hipnosis, el recorrido paso a paso de una sesión y los límites del acompañamiento.",
      },
      { property: "og:title", content: "Cómo funciona · Holistic-o" },
      {
        property: "og:description",
        content: "El recorrido paso a paso de una sesión de hipnosis, con límites claros y honestos.",
      },
    ],
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
    </>
  );
}
