import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";
import { openCookiePreferences } from "@/lib/cookie-consent";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () =>
    makeSeo({
      title: "Política de cookies · María A. Cabo",
      description: "Información sobre cookies, consentimiento y servicios externos de María A. Cabo.",
      path: "/politica-de-cookies",
    }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  const { t } = useI18n();

  return (
    <>
      <PageHeader title={t.cookies.policyTitle} intro={t.cookies.policyIntro} />

      <section className="container-page grid max-w-3xl gap-10 py-16 md:py-20">
        <button
          type="button"
          onClick={openCookiePreferences}
          className="w-fit rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {t.cookies.footerConfigure}
        </button>

        {t.cookies.policySections.map((section) => (
          <article key={section.title}>
            <h2 className="text-2xl">{section.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}
