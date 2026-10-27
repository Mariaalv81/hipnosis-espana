import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { JsonLd, makeFaqSchema, makeSeo } from "@/lib/seo";
import { getWhatsAppUrl } from "@/content/site-settings";
import { trackWhatsAppClick } from "@/lib/analytics";

export const Route = createFileRoute("/faq")({
  head: () =>
    makeSeo({
      title: "Preguntas frecuentes sobre la terapia en Sueca y Valencia · María A. Cabo",
      description:
        "Dudas habituales sobre el acompañamiento terapéutico: control, confidencialidad, número de sesiones, precios y cómo alcanzar tus objetivos.",
      path: "/faq",
    }),
  component: FaqPage,
});

function FaqPage() {
  const { t } = useI18n();

  return (
    <>
      <JsonLd schema={makeFaqSchema(t.faq.items)} />
      <PageHeader eyebrow={t.tagline} title={t.faq.title} />

      <section className="container-page py-16 md:py-20">
        <dl className="divide-y divide-border border-y border-border">
          {t.faq.items.map((item) => (
            <div key={item.q} className="grid gap-2 py-7 md:grid-cols-3 md:gap-8">
              <dt className="text-base font-medium">{item.q}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-2">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 rounded-2xl border border-primary/20 bg-muted/40 p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-lg font-serif">{t.faq.ctaTitle}</h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t.faq.ctaSubtitle}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/contacto"
              className="rounded-full bg-primary px-6 py-2.5 text-xs sm:text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              {t.common.contactMe}
            </Link>
            <button
              type="button"
              onClick={() => {
                trackWhatsAppClick("faq_cta");
                const url = getWhatsAppUrl(
                  "Hola María, he leído las preguntas frecuentes y me gustaría hacer una valoración de 15 minutos sin compromiso.",
                );
                if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
              }}
              className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
