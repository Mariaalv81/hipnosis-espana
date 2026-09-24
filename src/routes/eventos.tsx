import { createFileRoute, Link } from "@tanstack/react-router";
import { Apple, BookOpen, Brain, CigaretteOff, Clock, MapPin } from "lucide-react";
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
  const icons = [CigaretteOff, Brain, BookOpen, Apple];

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.events.title} intro={t.events.intro} />

      <section className="container-page py-16 md:py-20">
        {t.events.items.length > 0 ? (
          <div className="grid gap-5 md:grid-cols-2">
            {t.events.items.map((event, index) => {
              const Icon = icons[index] ?? Brain;

              return (
                <article
                  key={`${event.date}-${event.title}`}
                  className="grid gap-6 rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)] sm:grid-cols-[8rem_1fr]"
                >
                  <div className="flex h-full flex-col justify-between rounded-2xl bg-secondary/60 p-5">
                    <p className="eyebrow">{t.events.badge}</p>
                    <div className="mt-8">
                      <p className="font-serif text-4xl leading-none text-primary">{event.date}</p>
                      <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="size-4" />
                        {event.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-2xl leading-tight">{event.title}</h2>
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-primary">
                        <Icon className="size-6" />
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {event.text}
                    </p>
                    <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-4 shrink-0 text-primary" />
                      {t.events.place}
                    </p>

                    <Link
                      to="/contacto"
                      className="mt-7 inline-flex w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      {t.events.cta}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
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
        )}
      </section>
    </>
  );
}
