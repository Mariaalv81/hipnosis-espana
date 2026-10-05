import { createFileRoute } from "@tanstack/react-router";
import { EventCards } from "@/components/event-cards";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/eventos")({
  head: () =>
    makeSeo({
      title: "Eventos y talleres · María A. Cabo",
      description:
        "Encuentros introductorios y talleres de grupo sobre hipnosis y cambio personal en Sueca.",
      path: "/eventos",
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
