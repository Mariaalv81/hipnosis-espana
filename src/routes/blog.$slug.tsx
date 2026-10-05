import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, Instagram } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { JsonLd, makeArticleSchema, makeSeo } from "@/lib/seo";
import { siteSettings } from "@/content/site-settings";
import { getBlogPost, type BlogBlock } from "@/content/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPost(params.slug, "es");
    const title = post?.title ?? "Blog";
    const description =
      post?.excerpt ??
      "Textos breves sobre hipnosis, hábitos y cambio personal, con tono sereno y sin diagnósticos.";

    return makeSeo({
      title: `${title} · María A. Cabo`,
      description,
      path: `/blog/${params.slug}`,
      type: "article",
    });
  },
  component: BlogPostPage,
  notFoundComponent: () => (
    <section className="container-page py-24 text-center">
      <p className="text-muted-foreground">Artículo no encontrado.</p>
      <Link
        to="/blog"
        className="mt-4 inline-block text-sm text-primary underline underline-offset-4"
      >
        Volver al blog
      </Link>
    </section>
  ),
});

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "lead":
      return (
        <p className="font-serif text-2xl leading-relaxed text-foreground md:text-[1.7rem]">
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2 className="mt-4 flex items-baseline gap-3 text-2xl md:text-3xl">
          <span className="inline-block size-2 shrink-0 translate-y-[-2px] rounded-full bg-accent" />
          {block.text}
        </h2>
      );
    case "quote":
      return (
        <blockquote className="rounded-3xl bg-secondary/50 p-8 md:p-10">
          <p className="font-serif text-2xl leading-relaxed text-primary md:text-3xl">
            “{block.text}”
          </p>
        </blockquote>
      );
    case "note":
      return (
        <p className="border-t border-border pt-6 text-sm italic leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      );
    default:
      return <p className="leading-[1.85] text-foreground/90">{block.text}</p>;
  }
}

function BlogPostPage() {
  const { slug } = Route.useParams();
  const { t, lang } = useI18n();
  const post = getBlogPost(slug, lang);
  const listingPost = t.journal.posts.find((item) => item.slug === slug);
  const currentSeries = t.journal.series.find((series) => series.posts.includes(slug));

  if (!post) throw notFound();

  const date = new Intl.DateTimeFormat(
    lang === "va" ? "ca-ES-u-ca-valencia" : lang === "en" ? "en-GB" : "es-ES",
    { day: "numeric", month: "long", year: "numeric" },
  ).format(new Date(post.date));

  return (
    <article>
      <JsonLd
        schema={makeArticleSchema({
          title: listingPost?.title ?? post.title,
          excerpt: post.excerpt,
          date: post.date,
          slug,
        })}
      />
      <section className="border-b border-border/60 bg-sand/50">
        <div className="container-page max-w-3xl py-16 md:py-24">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            {t.journal.backToBlog}
          </Link>
          <p className="eyebrow mt-8">{t.tagline}</p>
          <h1 className="mt-4 text-4xl leading-tight md:text-5xl">
            {listingPost?.title ?? post.title}
          </h1>
          <p className="mt-5 text-sm text-muted-foreground">María A. Cabo · {date}</p>
        </div>
      </section>

      <div className="container-page max-w-2xl space-y-7 py-14 md:py-20">
        {post.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      {/* Tarjeta de autora con Instagram */}
      <section className="container-page max-w-2xl pb-12">
        <div className="flex flex-col gap-4 rounded-3xl border border-border/80 bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Escrito por</p>
            <h3 className="text-lg font-medium">María A. Cabo</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Hipnosis y desarrollo personal en Sueca (Valencia) y online.
            </p>
          </div>
          <a
            href={siteSettings.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-pink-500/40 hover:text-pink-600 dark:hover:text-pink-400"
          >
            <Instagram className="h-4 w-4 text-pink-600 dark:text-pink-400" />
            <span>Seguir {siteSettings.instagramHandle}</span>
          </a>
        </div>
      </section>

      {currentSeries && (
        <section className="container-page max-w-2xl pb-12">
          <div className="rounded-3xl border border-border/60 bg-card p-7 md:p-8">
            <p className="eyebrow">{t.journal.seriesTitle}</p>
            <h2 className="mt-3 text-2xl md:text-3xl">{currentSeries.title}</h2>
            <ol className="mt-6 grid gap-3">
              {currentSeries.posts.map((seriesSlug, index) => {
                const relatedPost = t.journal.posts.find((item) => item.slug === seriesSlug);
                if (!relatedPost) return null;

                return (
                  <li key={seriesSlug}>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: seriesSlug }}
                      className={`grid gap-3 rounded-2xl border p-4 transition-colors sm:grid-cols-[2.5rem_1fr] ${
                        seriesSlug === slug
                          ? "border-primary/40 bg-primary/5"
                          : "border-border/60 bg-background/60 hover:border-primary/40"
                      }`}
                    >
                      <span className="font-serif text-2xl leading-none text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="block text-base leading-snug">{relatedPost.title}</span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                          {relatedPost.excerpt}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      )}

      <section className="container-page max-w-2xl pb-20">
        <div className="rounded-3xl border border-border/60 bg-card p-8 text-center md:p-10">
          <h2 className="text-2xl md:text-3xl">{t.home.finalTitle}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            {t.home.finalText}
          </p>
          <Link
            to="/reservar"
            className="mt-6 inline-flex rounded-full bg-primary px-7 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.common.bookNow}
          </Link>
        </div>
      </section>
    </article>
  );
}
