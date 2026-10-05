import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, GraduationCap, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { JsonLd, makePersonSchema, makeSeo } from "@/lib/seo";
import { siteSettings } from "@/content/site-settings";
import sobreMiMariaCaboJpg from "@/assets/images/sobre-mi-maria-cabo.jpg";
import sobreMiMariaCaboWebp from "@/assets/images/sobre-mi-maria-cabo.webp";
import sobreMiMariaCaboAvif from "@/assets/images/sobre-mi-maria-cabo.avif";

export const Route = createFileRoute("/sobre-mi")({
  head: () =>
    makeSeo({
      title: "Sobre María A. Cabo · Psicoterapeuta en Valencia y Sueca",
      description:
        "María A. Cabo es psicoterapeuta. Formada en el Instituto Erickson Madrid en hipnosis y psicoterapia ericksoniana. Sesiones en Valencia, Sueca y online.",
      path: "/sobre-mi",
    }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  const about = t.about;

  return (
    <>
      <JsonLd schema={makePersonSchema()} />
      <section className="border-b border-border/60 bg-background">
        <div className="container-page grid gap-10 py-12 md:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">{t.about.role}</p>
            <h1 className="mt-4 max-w-2xl text-4xl leading-tight md:text-5xl">{about.name}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {about.intro}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {about.traits.map((item) => (
                <div key={item} className="border-l border-primary/40 bg-muted/20 px-4 py-3">
                  <p className="text-sm font-medium text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <picture>
              <source srcSet={sobreMiMariaCaboAvif} type="image/avif" />
              <source srcSet={sobreMiMariaCaboWebp} type="image/webp" />
              <img
                src={sobreMiMariaCaboJpg}
                alt="María A. Cabo - Psicoterapeuta"
                width={1254}
                height={1254}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/3] w-full rounded-lg object-cover object-center shadow-[var(--shadow-soft)]"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="container-page border-b border-border/60 py-10 md:py-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.highlights.map((item) => (
            <article key={item.title} className="border-l border-primary/40 px-5 py-2">
              <h2 className="text-xl leading-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border-y border-border py-8">
              <p className="eyebrow">{about.valuesSidebarTitle}</p>
              <ul className="mt-6 grid gap-4">
                {about.values.map((value) => (
                  <li
                    key={value}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Psicoterapia e Hipnosis</p>
                  <p className="text-xs text-muted-foreground">Instituto Erickson Madrid</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Psicoterapeuta formada en hipnosis y psicoterapia ericksoniana. Enfoque riguroso, natural y
                respetuoso centrado en los recursos de la propia persona.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-sm">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{siteSettings.instagramHandle}</p>
                  <p className="text-xs text-muted-foreground">Comunidad en Instagram</p>
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Comparto reflexiones, desmitificación de la hipnosis, casos y consejos prácticos
                casi a diario.
              </p>
              <a
                href={siteSettings.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-muted/60 px-4 py-2.5 text-xs font-medium text-foreground transition-colors hover:bg-pink-500/10 hover:text-pink-600 dark:hover:text-pink-400"
              >
                <span>Seguir a María</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="mt-8 rounded-2xl bg-primary p-7 text-primary-foreground">
              <p className="text-base leading-relaxed">{about.controlNote}</p>
            </div>
          </aside>

          <div className="min-w-0">
            <section className="grid gap-6">
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-4xl">
                {about.statement}
              </h2>
            </section>

            <section className="mt-14 border-t border-border pt-10 md:mt-16 md:pt-12">
              <p className="eyebrow">{about.workEyebrow}</p>
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-4xl">
                {about.workTitle}
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                {about.workText}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {about.focusAreas.map((area) => (
                  <article
                    key={area.title}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <h3 className="text-xl leading-tight">{area.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {area.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-14 grid gap-8 border-t border-border pt-10 md:mt-16 md:grid-cols-[0.9fr_1.1fr] md:pt-12">
              <div>
                <p className="eyebrow">{about.pathEyebrow}</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-4xl">{about.pathTitle}</h2>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {about.cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="mt-8 grid max-w-2xl gap-4 text-base leading-relaxed text-muted-foreground">
                  {about.pathParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {about.pathExtra}
                </p>
              </div>
            </section>

            <section className="mt-14 border-t border-border pt-10 md:mt-16 md:pt-12">
              <p className="eyebrow">{about.sessionsEyebrow}</p>
              <div className="mt-5 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                <h2 className="text-3xl leading-tight md:text-4xl">{about.serviceAreaTitle}</h2>
                <div className="grid gap-4 text-base leading-relaxed text-muted-foreground">
                  {about.sessionsTexts.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-14 rounded-lg bg-primary px-6 py-8 text-primary-foreground md:mt-16 md:px-8 md:py-10">
              <h2 className="max-w-3xl text-3xl leading-tight md:text-4xl">{about.quote}</h2>
              <Button
                asChild
                className="mt-7 w-fit rounded-full bg-background px-7 py-3 text-sm text-foreground hover:bg-background/90"
              >
                <Link to="/reservar">{t.common.bookNow}</Link>
              </Button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
