import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";
import heroJpg from "@/assets/images/oficina.jpg";
import heroWebp from "@/assets/images/oficina.webp";
import heroAvif from "@/assets/images/oficina.avif";

export const Route = createFileRoute("/empresas/")({
  head: () =>
    makeSeo({
      title: "Programas de desarrollo profesional para empresas · María A. Cabo",
      description:
        "Talleres y programas para trabajar atención, confianza, aprendizaje, hábitos y preparación ante situaciones profesionales exigentes.",
      path: "/empresas",
    }),
  component: EmpresasPage,
});

function EmpresasPage() {
  const { t } = useI18n();
  const c = t.companiesPage;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-8 py-12 md:py-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl font-serif">{c.heroTitle}</h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{c.heroLead}</p>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">{c.heroText}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/empresas/contacto"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
                aria-label={c.heroPrimary}
              >
                {c.heroPrimary}
              </Link>
              <a
                href="#formatos"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
              >
                {c.heroSecondary}
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <picture>
              <source srcSet={heroAvif} type="image/avif" />
              <source srcSet={heroWebp} type="image/webp" />
              <img
                src={heroJpg}
                alt={c.heroImageAlt}
                width={1672}
                height={941}
                className="rounded-3xl object-cover w-full h-auto shadow-md"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Lead intro */}
      <section className="container-page py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-serif">{c.leadTitle}</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-3xl">{c.leadText}</p>
      </section>

      {/* Áreas de trabajo */}
      <section className="bg-muted/10 py-12 md:py-16">
        <div className="container-page">
          <h3 className="eyebrow">{c.areasEyebrow}</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {c.areas.map((area) => (
              <article
                key={area.title}
                className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs"
              >
                <h4 className="text-base font-semibold">{area.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section id="formatos" className="container-page py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-serif">{c.formatsTitle}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {c.formats.map((fmt) => (
            <div
              key={fmt.title}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-xs"
            >
              <h4 className="text-lg font-semibold">{fmt.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{fmt.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Confidencialidad y consentimiento */}
      <section className="container-page py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl font-serif">{c.confidentialityTitle}</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 items-start">
          {/* Cuadro principal: caja de confidencialidad */}
          <div className="rounded-2xl border border-border/60 bg-card p-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
            {c.confidentialityParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Cuadro ejemplo */}
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/5 to-muted/10 p-6">
            <h4 className="text-lg font-semibold">{c.exampleTitle}</h4>
            <div className="mt-3 text-sm leading-relaxed text-muted-foreground">
              <p>{c.exampleText}</p>
            </div>
            <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs font-medium text-primary">
              {c.exampleSummary}
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-muted/10 py-12 md:py-16" aria-label={c.processAria}>
        <div className="container-page">
          <h3 className="eyebrow">{c.processTitle}</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {c.processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-border/60 bg-card p-6">
                <div className="process-number text-primary font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4 className="mt-2 text-sm font-semibold">{step.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="container-page py-12 md:py-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground shadow-sm">
          <h2 className="text-3xl md:text-4xl font-serif">{c.finalTitle}</h2>
          <p className="mt-4 text-sm opacity-90 max-w-xl mx-auto leading-relaxed">{c.finalText}</p>
          <div className="mt-6">
            <Link
              to="/empresas/contacto"
              className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 shadow-sm"
            >
              {c.finalCta}
            </Link>
          </div>
          <div className="mt-4 text-sm">
            <Link
              to="/sobre-mi"
              className="text-primary-foreground/90 underline underline-offset-4 hover:text-primary-foreground"
            >
              {c.aboutLink}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default EmpresasPage;
