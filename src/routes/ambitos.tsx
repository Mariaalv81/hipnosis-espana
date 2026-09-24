import { createFileRoute, Link } from "@tanstack/react-router";
import { CircleAlert } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/ambitos")({
  head: () => ({
    meta: [
      { title: "Ámbitos de acompañamiento · María Cabo" },
      {
        name: "description",
        content:
          "Objetivos de desarrollo personal que pueden explorarse con hipnosis, desde un enfoque no clínico y con límites claros.",
      },
      { property: "og:title", content: "Ámbitos de acompañamiento · María Cabo" },
      {
        property: "og:description",
        content:
          "Una guía de objetivos de desarrollo personal para explorar con hipnosis, sin sustituir la atención sanitaria o psicológica.",
      },
    ],
  }),
  component: AreasPage,
});

function AreasPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.areas.title} intro={t.areas.intro} />

      <section className="border-b border-border/60 bg-muted/60 py-10">
        <div className="container-page flex gap-4">
          <CircleAlert className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
          <div>
            <h2 className="text-xl">{t.areas.noticeTitle}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {t.areas.notice}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {t.areas.items.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-7">
              <h2 className="text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              <p className="mt-5 border-t border-border/60 pt-4 text-xs leading-relaxed text-muted-foreground">
                {item.note}
              </p>
            </article>
          ))}
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
