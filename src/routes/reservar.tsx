import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarButton } from "@/components/calendar-button";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/reservar")({
  head: () =>
    makeSeo({
      title: "Reservar una sesión · María A. Cabo",
      description:
        "Reserva tu sesión de hipnosis con María A. Cabo en Sueca: 70 € la hora o programa para dejar de fumar de tres sesiones por 300 €.",
      path: "/reservar",
    }),
  component: BookPage,
});

function BookPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.nav.book} intro={t.common.bookIntro} />

      <section className="container-page grid gap-6 py-16 md:grid-cols-2 md:py-20">
        {t.sessions.items.map((item, i) => (
          <article
            key={item.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-8"
          >
            <h2 className="text-2xl">{item.name}</h2>
            <p className="mt-4 font-serif text-4xl text-primary">{item.price}</p>
            <p className="eyebrow mt-1">{item.unit}</p>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            {i === 0 ? (
              <div className="mt-7 flex flex-col gap-3">
                <CalendarButton className="w-fit" source="reservar_individual" />
                <div className="pt-2">
                  <Link
                    to="/contacto"
                    className="inline-flex items-center text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
                  >
                    ¿Prefieres consultar dudas antes de agendar? Escríbeme →
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <Link
                  to="/dejar-de-fumar"
                  className="mt-7 w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {t.common.smokeEmail}
                </Link>
                <p className="mt-3 text-xs text-muted-foreground">{t.common.smokeEmailNote}</p>
              </>
            )}
          </article>
        ))}
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl">{t.home.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm opacity-90">{t.home.finalText}</p>
          <Link
            to="/contacto"
            className="mt-8 inline-block rounded-full bg-background px-6 py-3 text-sm text-foreground transition-opacity hover:opacity-90"
          >
            {t.common.contactMe}
          </Link>
        </div>
      </section>
    </>
  );
}
