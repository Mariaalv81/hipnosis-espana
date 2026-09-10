import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos y talleres · Holistic-o" },
      {
        name: "description",
        content:
          "Encuentros introductorios y talleres de grupo sobre hipnosis y cambio personal en Sueca.",
      },
      { property: "og:title", content: "Eventos y talleres · Holistic-o" },
      {
        property: "og:description",
        content: "Conoce el trabajo en grupo antes de empezar con una sesión individual.",
      },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.events.title} intro={t.events.intro} />

      <section className="container-page py-16 md:py-20">
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center">
          <h2 className="text-2xl">{t.events.empty}</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {t.events.emptyText}
          </p>
          <Link
            to="/contacto"
            className="mt-8 inline-block rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.events.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
