import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarButton } from "@/components/calendar-button";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/sesiones")({
  head: () =>
    makeSeo({
      title: "Sesiones de hipnosis en Valencia y Sueca · María Cabo",
      description:
        "Sesiones individuales de hipnosis en Sueca, a domicilio en casas de particulares en Valencia ciudad u online. 70 € por sesión de 1 hora.",
      path: "/sesiones",
    }),
  component: SessionsPage,
});

function SessionsPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.sessions.title} intro={t.sessions.intro} />

      <section className="border-y border-border/60 bg-muted/30 py-8 md:py-10">
        <div className="container-page">
          <p className="eyebrow">MODALIDADES DE ATENCIÓN</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-base font-medium">Despacho en Sueca</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Espacio sereno e independiente dentro del Centro Sanar en Sueca (Valencia).
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-base font-medium">A domicilio en Valencia</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                En casas de particulares en Valencia capital y alrededores. Comodidad y privacidad
                en tu propio entorno.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-base font-medium">Sesiones Online</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Por videoconferencia en directo para cualquier ubicación en castellano o inglés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-6 py-14 md:grid-cols-2 md:py-16">
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
                to="/dejar-de-fumar"
                className="mt-8 rounded-full bg-primary px-6 py-3 text-center text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.common.smokeEmail}
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
