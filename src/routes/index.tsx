import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import heroImage from "@/assets/images/hero-room.jpg";
import linenImage from "@/assets/images/texture-linen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hipnosis España · Hipnosis para el cambio personal" },
      {
        name: "description",
        content:
          "Sesiones de hipnosis para el cambio personal en Sueca. Un espacio sereno para trabajar hábitos, calma y confianza.",
      },
      { property: "og:title", content: "Hipnosis España · Hipnosis para el cambio personal" },
      {
        property: "og:description",
        content:
          "Acompañamiento con hipnosis para personas adultas, con criterio, cercanía y expectativas honestas.",
      },
    ],
  }),
  component: HypnosisPage,
});

function HypnosisPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative overflow-hidden bg-sand/40">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{t.home.eyebrow}</p>
            <h1 className="mt-4 text-5xl leading-[1.05] md:text-7xl">{t.home.title}</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.home.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/reservar"
                className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                {t.home.ctaPrimary}
              </Link>
              <Link
                to="/como-funciona"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm transition-colors hover:bg-muted"
              >
                {t.home.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroImage}
              alt="Sala serena y luminosa donde se realizan las sesiones"
              width={1600}
              height={1104}
              className="rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 md:grid-cols-3 md:py-20">
        {t.home.pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]"
          >
            <h2 className="text-2xl">{p.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-muted/60 py-16 md:py-24">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <img
            src={linenImage}
            alt="Ramita de salvia sobre lino en tonos arena"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-3xl object-cover"
          />
          <div>
            <h2 className="text-3xl md:text-4xl">{t.home.forWhomTitle}</h2>
            <ul className="mt-6 grid gap-3">
              {t.home.forWhom.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-xl">{t.home.areasTitle}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {t.home.areasText}
              </p>
              <Link
                to="/ambitos"
                className="mt-4 inline-block text-sm text-primary underline underline-offset-4"
              >
                {t.home.areasLink}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-3xl md:text-4xl">{t.home.journalTitle}</h2>
          <Link to="/blog" className="text-sm text-primary underline underline-offset-4">
            {t.home.journalLink}
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.journal.posts.map((post, i) =>
            post.slug ? (
              <Link
                key={post.title}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <p className="eyebrow">{i === 0 ? t.journal.latest : t.journal.readPost}</p>
                <h3 className="mt-3 text-xl leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <span className="mt-5 inline-block text-sm text-primary underline underline-offset-4">
                  {t.journal.readPost}
                </span>
              </Link>
            ) : (
              <article
                key={post.title}
                className="rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <p className="eyebrow">{t.journal.soon}</p>
                <h3 className="mt-3 text-xl leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="container-page pb-16 md:pb-20">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-3xl md:text-4xl">{t.home.faqTitle}</h2>
          <Link to="/faq" className="text-sm text-primary underline underline-offset-4">
            {t.home.faqLink}
          </Link>
        </div>
        <dl className="mt-8 divide-y divide-border border-y border-border">
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

      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl">{t.home.finalTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm opacity-90">{t.home.finalText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/reservar"
              className="rounded-full bg-background px-6 py-3 text-sm text-foreground transition-opacity hover:opacity-90"
            >
              {t.common.bookNow}
            </Link>
            <Link
              to="/contacto"
              className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm transition-colors hover:bg-primary-foreground/10"
            >
              {t.home.finalSecondary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
