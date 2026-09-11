import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarButton } from "@/components/calendar-button";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
const SMOKING_EMAIL = "maria.a.cabo@gmail.com";

const smokingMailto = (subject: string) =>
  `mailto:${SMOKING_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Quiero dejar de fumar.\n\nMi nombre: \nMi teléfono: \nMejor horario para la entrevista de 20 minutos: `,
  )}`;

export const Route = createFileRoute("/reservar")({
  head: () => ({
    meta: [
      { title: "Reservar una sesión · Hipnosis España" },
      {
        name: "description",
        content:
          "Reserva tu sesión de hipnosis con Maria Cabo en Sueca: 60 € la hora o programa de tres sesiones por 300 €.",
      },
      { property: "og:title", content: "Reservar una sesión · Hipnosis España" },
      {
        property: "og:description",
        content: "Da el primer paso hacia el cambio que quieres producir.",
      },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.nav.book} intro={t.common.bookSoon} />

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
              <CalendarButton className="mt-7 w-fit" />
            ) : (
              <>
                <a
                  href={smokingMailto(t.common.smokeEmail)}
                  className="mt-7 w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {t.common.smokeEmail}
                </a>
                <p className="mt-3 text-xs text-muted-foreground">{t.common.smokeEmailNote}</p>
              </>
            )}
          </article>
        ))}
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <h2 className="text-3xl">{t.home.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm opacity-90">{t.common.bookSoon}</p>
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
