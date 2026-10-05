import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { JsonLd, makeFaqSchema, makeLocalBusinessSchema, makeSeo } from "@/lib/seo";
import { EventCards } from "@/components/event-cards";
import { siteSettings } from "@/content/site-settings";
import heroJpg from "@/assets/images/maria-cabo.jpg";
import heroWebp from "@/assets/images/maria-cabo.webp";
import heroAvif from "@/assets/images/maria-cabo.avif";
import linenImage from "@/assets/images/texture-linen.jpg";
import linenImageWebp from "@/assets/images/texture-linen.webp";
import linenImageAvif from "@/assets/images/texture-linen.avif";
import sessionMaria from "@/assets/images/sesion_maria_cabo.jpg";
import sessionMariaWebp from "@/assets/images/sesion_maria_cabo.webp";
import sessionMariaAvif from "@/assets/images/sesion_maria_cabo.avif";

export const Route = createFileRoute("/")({
  head: () =>
    makeSeo({
      title:
        "María A. Cabo · Psicoterapeuta en Valencia y Sueca | Hipnosis Presencial y a Domicilio",
      description:
        "Psicoterapeuta formada en el Instituto Erickson Madrid. Sesiones de hipnosis y psicoterapia ericksoniana en Sueca, Valencia y online para estrés, insomnio, ansiedad y hábitos.",
      path: "/",
    }),
  component: HypnosisPage,
});

function HypnosisPage() {
  const { t } = useI18n();

  return (
    <>
      <JsonLd schema={[makeLocalBusinessSchema(), makeFaqSchema(t.faq.items.slice(0, 5))]} />
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-8 py-12 md:py-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">{t.home.heroEyebrow}</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl">
              <span className="block text-primary">{t.home.heroTitle1}</span>
              <span className="block text-muted-foreground">{t.home.heroTitle2}</span>
              <span className="block text-primary">{t.home.heroTitle3}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.home.heroIntro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/reservar"
                className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground"
              >
                {t.home.heroPrimary}
              </Link>
              <Link
                to="/empresas"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm"
              >
                {t.home.heroSecondary}
              </Link>
            </div>
            <div className="mt-4">
              <Link
                to="/como-funciona"
                className="text-sm text-primary underline underline-offset-4"
              >
                {t.home.heroHow}
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2" suppressHydrationWarning>
            <picture>
              <source srcSet={heroAvif} type="image/avif" />
              <source srcSet={heroWebp} type="image/webp" />
              <img
                src={heroJpg}
                alt={t.home.heroImageAlt}
                width={1510}
                height={1042}
                className="rounded-3xl object-cover shadow-[var(--shadow-soft)] w-full h-auto"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* PRIMER BLOQUE — Qué quieres cambiar */}
      <section className="container-page py-12 md:py-16">
        <p className="eyebrow">{t.home.changeEyebrow}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">{t.home.changeTitle}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {t.home.changeCards.map((c) => (
            <article key={c.title} className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/ambitos" className="text-sm text-primary underline underline-offset-4">
            {t.home.changeLink}
          </Link>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-muted/60 py-12 md:py-16">
        <div className="container-page grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{t.home.hypnosisEyebrow}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">{t.home.hypnosisTitle}</h2>
            <p className="mt-4 text-sm text-muted-foreground">{t.home.hypnosisText1}</p>
            <p className="mt-3 text-sm text-muted-foreground">{t.home.hypnosisText2}</p>
            <div className="mt-6">
              <Link
                to="/como-funciona"
                className="text-sm text-primary underline underline-offset-4"
              >
                {t.home.hypnosisLink}
              </Link>
            </div>
          </div>
          <div>
            <picture>
              <source srcSet={linenImageAvif} type="image/avif" />
              <source srcSet={linenImageWebp} type="image/webp" />
              <img
                src={linenImage}
                alt={t.home.hypnosisImageAlt}
                width={1200}
                height={900}
                className="rounded-3xl object-cover w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Diferenciador: Particular / Empresa */}
      <section className="container-page py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl">{t.home.contextsTitle}</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="text-xl">{t.home.individualTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.home.individualText}</p>
            <div className="mt-4">
              <Link to="/sesiones" className="text-sm text-primary underline">
                {t.home.individualLink}
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="text-xl">{t.home.companiesTitle}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.home.companiesText}</p>
            <div className="mt-4">
              <Link to="/empresas" className="text-sm text-primary underline">
                {t.home.companiesLink}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-muted/10 py-12 md:py-16">
        <div className="container-page">
          <p className="eyebrow">{t.home.processEyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{t.home.processTitle}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {t.home.processSteps.map((step, index) => (
              <div key={step.title} className="p-6">
                <strong>{String(index + 1).padStart(2, "0")}</strong>
                <h4 className="mt-2">{step.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre María */}
      <section className="container-page py-12 md:py-16">
        <p className="eyebrow">{t.home.aboutEyebrow}</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">{t.home.aboutTitle}</h2>
            <p className="mt-4 text-sm text-muted-foreground">{t.home.aboutText}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link to="/sobre-mi" className="text-sm text-primary underline underline-offset-4">
                {t.home.aboutLink}
              </Link>
              <a
                href={siteSettings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card px-3.5 py-1.5 text-xs text-foreground transition-all hover:border-pink-500/40 hover:text-pink-600 dark:hover:text-pink-400"
                aria-label="Instagram de María A. Cabo"
              >
                <Instagram className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                <span>{siteSettings.instagramHandle}</span>
              </a>
            </div>
          </div>
          <div>
            <picture>
              <source srcSet={sessionMariaAvif} type="image/avif" />
              <source srcSet={sessionMariaWebp} type="image/webp" />
              <img
                src={sessionMaria}
                alt={t.home.aboutImageAlt}
                width={1672}
                height={941}
                className="rounded-3xl object-cover w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Eventos (máx 3) and Blog (reuse existing journal) */}
      <section className="container-page py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl md:text-4xl">{t.home.eventsTitle}</h2>
          <Link to="/eventos" className="text-sm text-primary underline">
            {t.home.eventsLink}
          </Link>
        </div>
        <EventCards limit={3} variant="compact" status="upcoming" />
      </section>

      <section className="container-page py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl md:text-4xl">{t.home.learnTitle}</h2>
          <Link to="/blog" className="text-sm text-primary underline">
            {t.home.learnLink}
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.journal.posts.slice(0, 3).map((post) => (
            <article key={post.title} className="rounded-3xl border border-border/60 bg-card p-6">
              <h3 className="text-lg">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Instagram Banner / Canal de divulgación */}
      <section className="border-y border-border/60 bg-muted/40 py-12 md:py-16">
        <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md">
              <Instagram className="h-7 w-7" />
            </div>
            <div>
              <p className="eyebrow">DIVULGACIÓN & CASOS</p>
              <h3 className="mt-1 font-serif text-2xl md:text-3xl">
                Conoce el enfoque en Instagram
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Vídeos cortos, reflexiones sobre hipnosis sin mitos y hábitos para el cambio en
                Sueca y online.
              </p>
            </div>
          </div>
          <a
            href={siteSettings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background shadow-sm transition-opacity hover:opacity-90"
          >
            <span>Seguir @mariacabo_hipnosis</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* FAQ corta */}
      <section className="container-page py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl md:text-4xl">{t.home.faqHomeTitle}</h2>
          <Link to="/faq" className="text-sm text-primary underline">
            {t.home.faqHomeLink}
          </Link>
        </div>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {t.faq.items.slice(0, 5).map((item) => (
            <div key={item.q} className="grid gap-2 py-6 md:grid-cols-3 md:gap-8">
              <dt className="text-base">{item.q}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-2">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA final */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl">{t.home.ctaTitle}</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/reservar"
              className="rounded-full bg-background px-6 py-3 text-sm text-foreground"
            >
              {t.home.ctaPrimary}
            </Link>
            <Link
              to="/contacto"
              className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm"
            >
              {t.home.ctaSecondary}
            </Link>
          </div>
          <div className="mt-4 text-sm">
            <Link
              to="/empresas"
              className="text-primary-foreground/90 underline underline-offset-4 hover:text-primary-foreground"
            >
              {t.home.ctaCompanies}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
