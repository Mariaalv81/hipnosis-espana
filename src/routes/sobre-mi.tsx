import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import linenImage from "@/assets/texture-linen.jpg";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre Maria Cabo · Hipnosis España" },
      {
        name: "description",
        content:
          "Maria Cabo acompaña con hipnosis a personas adultas que buscan un cambio concreto, con lenguaje sencillo y expectativas realistas.",
      },
      { property: "og:title", content: "Sobre Maria Cabo · Hipnosis España" },
      {
        property: "og:description",
        content: "Una manera de trabajar tranquila, curiosa y honesta.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.about.role} title={t.about.name} />

      <section className="container-page grid gap-12 py-16 md:py-20 lg:grid-cols-2">
        <div className="grid gap-5">
          {t.about.body.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <Button asChild className="mt-4 w-fit rounded-full px-7 py-3 text-sm">
            <Link to="/reservar">{t.common.bookNow}</Link>
          </Button>
        </div>

        <div>
          <img
            src={linenImage}
            alt="Detalle sereno de lino y salvia"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-2xl object-cover"
          />
          <div className="mt-8 rounded-2xl border border-border bg-card p-7">
            <h2 className="text-2xl">{t.about.valuesTitle}</h2>
            <ul className="mt-4 grid gap-3">
              {t.about.values.map((v) => (
                <li key={v} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
