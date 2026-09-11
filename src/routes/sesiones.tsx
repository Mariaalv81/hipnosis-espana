import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarButton } from "@/components/calendar-button";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/sesiones")({
  head: () => ({
    meta: [
      { title: "Sesiones y precios · Hipnosis España" },
      {
        name: "description",
        content:
          "Sesión individual de hipnosis por 60 € la hora y programa para dejar de fumar de tres sesiones por 300 €.",
      },
      { property: "og:title", content: "Sesiones y precios · Hipnosis España" },
      {
        property: "og:description",
        content: "Precios claros para el acompañamiento con hipnosis en Sueca.",
      },
    ],
  }),
  component: SessionsPage,
});

function SessionsPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.sessions.title} intro={t.sessions.intro} />

      <section className="container-page grid gap-6 py-16 md:grid-cols-2 md:py-20">
        {t.sessions.items.map((item, index) => (
          <article
            key={item.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-8"
          >
            <h2 className="text-2xl">{item.name}</h2>
            <p className="mt-4 font-serif text-4xl text-primary">{item.price}</p>
            <p className="eyebrow mt-1">{item.unit}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            <ul className="mt-6 grid gap-2">
              {item.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-secondary" />
                  {p}
                </li>
              ))}
            </ul>
            {index === 0 ? (
              <CalendarButton className="mt-8 w-fit" />
            ) : (
              <Link
                to="/reservar"
                className="mt-8 rounded-full bg-primary px-6 py-3 text-center text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.common.bookNow}
              </Link>
            )}
          </article>
        ))}
      </section>

      <section className="bg-muted/60 py-16">
        <div className="container-page">
          <h2 className="text-3xl">{t.sessions.policyTitle}</h2>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {t.sessions.policy.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
