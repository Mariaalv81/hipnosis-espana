import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const { t } = useI18n();
  const postBySlug = new Map(
    t.journal.posts
      .filter((post): post is typeof post & { slug: string } => Boolean(post.slug))
      .map((post) => [post.slug, post]),
  );
  const seriesSlugs = new Set(t.journal.series.flatMap((series) => series.posts));
  const standalonePosts = t.journal.posts.filter(
    (post) => !post.slug || !seriesSlugs.has(post.slug),
  );

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.journal.title} intro={t.journal.intro} />

      <section className="container-page py-16 md:py-20">
        <div>
          <p className="eyebrow">{t.journal.seriesTitle}</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-tight md:text-4xl">
            {t.journal.seriesIntro}
          </h2>
        </div>

        <div className="mt-10 grid gap-8">
          {t.journal.series.map((series) => (
            <section
              key={series.title}
              className="rounded-3xl border border-border/60 bg-card p-6 md:p-8"
            >
              <div className="grid gap-3 md:grid-cols-[0.72fr_1.28fr] md:gap-8">
                <div>
                  <p className="eyebrow">{t.journal.readPost}</p>
                  <h3 className="mt-3 text-2xl leading-tight md:text-3xl">{series.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {series.description}
                  </p>
                </div>

                <ol className="grid gap-3">
                  {series.posts.map((slug, index) => {
                    const post = postBySlug.get(slug);
                    if (!post) return null;

                    return (
                      <li key={slug}>
                        <Link
                          to="/blog/$slug"
                          params={{ slug }}
                          className="group grid gap-4 rounded-2xl border border-border/60 bg-background/60 p-5 transition-colors hover:border-primary/40 sm:grid-cols-[3.5rem_1fr_auto] sm:items-center"
                        >
                          <span className="font-serif text-3xl leading-none text-primary">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span>
                            <span className="block text-lg leading-snug">{post.title}</span>
                            <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                              {post.excerpt}
                            </span>
                          </span>
                          <ArrowRight className="size-4 text-primary transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </section>
          ))}
        </div>

        {standalonePosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl">{t.journal.standaloneTitle}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {standalonePosts.map((post) =>
                post.slug ? (
                  <Link
                    key={post.title}
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]"
                  >
                    <p className="eyebrow">{t.journal.readPost}</p>
                    <h3 className="mt-3 text-xl leading-snug">{post.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </Link>
                ) : (
                  <article
                    key={post.title}
                    className="rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]"
                  >
                    <p className="eyebrow">{t.journal.soon}</p>
                    <h3 className="mt-3 text-xl leading-snug">{post.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
