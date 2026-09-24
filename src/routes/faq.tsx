import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Preguntas frecuentes · María Cabo" },
      {
        name: "description",
        content:
          "Dudas habituales sobre la hipnosis: control, confidencialidad, número de sesiones y precios.",
      },
      { property: "og:title", content: "Preguntas frecuentes · María Cabo" },
      {
        property: "og:description",
        content: "Respuestas claras antes de reservar tu primera sesión.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.faq.title} />

      <section className="container-page py-16 md:py-20">
        <dl className="divide-y divide-border border-y border-border">
          {t.faq.items.map((item) => (
            <div key={item.q} className="grid gap-2 py-7 md:grid-cols-3 md:gap-8">
              <dt className="text-base">{item.q}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-2">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
        <Link
          to="/contacto"
          className="mt-10 inline-block rounded-full border border-border bg-card px-6 py-3 text-sm transition-colors hover:bg-muted"
        >
          {t.common.contactMe}
        </Link>
      </section>
    </>
  );
}
