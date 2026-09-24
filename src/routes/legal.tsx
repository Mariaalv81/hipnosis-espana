import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/legal")({
  head: () => ({
    meta: [
      { title: "Información legal · María Cabo" },
      {
        name: "description",
        content: "Aviso legal, privacidad, cookies y condiciones del servicio de María Cabo.",
      },
      { property: "og:title", content: "Información legal · María Cabo" },
      {
        property: "og:description",
        content: "Aviso legal, privacidad, cookies y condiciones del servicio.",
      },
    ],
  }),
  component: LegalPage,
});

function LegalPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader title={t.legal.title} intro={t.legal.intro} />

      <section className="container-page grid max-w-3xl gap-10 py-16 md:py-20">
        {t.legal.sections.map((s) => (
          <article key={s.title}>
            <h2 className="text-2xl">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
