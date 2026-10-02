import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/ambitos")({
  head: () =>
    makeSeo({
      title: "Ámbitos de acompañamiento · María Cabo",
      description:
        "Miedos, estrés, hábitos, dejar de fumar, confianza y foco: áreas de desarrollo personal que pueden trabajarse con hipnosis.",
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.areas.items.map((item, index) => {
            const isSmoking = index === 3;
            return (
              <article
                key={item.title}
                className="flex flex-col justify-between rounded-lg border border-border bg-card p-7"
              >
                <div>
                  <h2 className="text-2xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
                {index === 1 && (
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <Link
                      to="/ansiedad"
                      className="inline-flex text-xs font-medium text-primary underline underline-offset-4 hover:opacity-80"
                    >
                      {t.anxietyPage.eyebrowNav} →
                    </Link>
                  </div>
                )}
                {isSmoking && (
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <Link
                      to="/dejar-de-fumar"
                      className="inline-flex text-xs font-medium text-primary underline underline-offset-4 hover:opacity-80"
                    >
                      {t.common.smokeEmail} →
                    </Link>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary px-8 py-12 text-center text-primary-foreground">
          <p className="mx-auto max-w-2xl text-base leading-relaxed">{t.areas.closing}</p>
          <Link
            to="/contacto"
            className="mt-7 inline-flex rounded-full bg-background px-6 py-3 text-sm text-foreground transition-opacity hover:opacity-90"
          >
            {t.areas.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
