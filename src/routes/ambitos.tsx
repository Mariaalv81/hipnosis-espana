import { createFileRoute, Link } from "@tanstack/react-router";
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

      <section className="container-page py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.areas.items.map((item) => (
            <article key={item.title} className="rounded-lg border border-border bg-card p-7">
              <h2 className="text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
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
