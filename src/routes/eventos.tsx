import { createFileRoute } from "@tanstack/react-router";
import { EventCards } from "@/components/event-cards";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos y talleres · María Cabo" },
      {
        name: "description",
        content:
          "Encuentros introductorios y talleres de grupo sobre hipnosis y cambio personal en Sueca.",
      },
      { property: "og:title", content: "Eventos y talleres · María Cabo" },
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
        <EventCards />
      </section>
    </>
  );
}
