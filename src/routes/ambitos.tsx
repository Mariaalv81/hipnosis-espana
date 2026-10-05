import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/ambitos")({
  head: () =>
    makeSeo({
      title: "Ámbitos de acompañamiento con hipnosis · María A. Cabo",
      description:
        "Ansiedad, dejar de fumar, control de peso, hábitos nerviosos, miedos y fobias, autoestima, foco y deporte: áreas de desarrollo personal con hipnosis en Sueca y Valencia.",
      path: "/ambitos",
    }),
  component: AreasPage,
});

function AreasPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.areas.title} intro={t.areas.intro} />

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.areas.items.map((item, index) => (
            <article
              key={item.title}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-[var(--shadow-soft)]"
            >
              <div>
                <span className="font-serif text-2xl font-light text-primary/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 text-lg font-medium leading-snug">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>

              {item.slug && (
                <div className="mt-6 border-t border-border/60 pt-4">
                  <Link
                    to={item.slug}
                    className="inline-flex items-center text-xs font-medium text-primary underline underline-offset-4 hover:opacity-80"
                  >
                    {item.cta} →
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* NOTA ÉTICA DE DESARROLLO PERSONAL */}
        <div className="mt-12 rounded-2xl border border-border/80 bg-muted/40 p-6 text-sm text-foreground/90">
          <h3 className="font-medium text-primary">{t.areas.noticeTitle}</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.areas.notice}</p>
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <p className="mx-auto max-w-2xl text-base leading-relaxed">{t.areas.closing}</p>
          <Link
            to="/contacto"
            className="mt-7 inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            {t.areas.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
