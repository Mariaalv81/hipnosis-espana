import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/blog/")({
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const { t } = useI18n();
  const [featured, ...posts] = t.journal.posts;
  if (!featured) return null;

  return (
    <>
      <PageHeader eyebrow={t.tagline} title={t.journal.title} intro={t.journal.intro} />

      <section className="container-page py-16 md:py-20">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug ?? "que-es-la-hipnosis" }}
          className="group grid gap-8 overflow-hidden rounded-3xl border border-border/60 bg-card transition-shadow hover:shadow-[var(--shadow-soft)] md:grid-cols-5"
        >
          <div className="relative bg-secondary/60 p-10 md:col-span-2 md:p-12">
            <p className="eyebrow">{t.journal.latest}</p>
            <p className="mt-6 font-serif text-5xl leading-none text-primary md:text-6xl">03</p>
            <span className="absolute -bottom-10 -right-10 size-40 rounded-full border border-accent/40" />
            <span className="absolute -bottom-6 -right-6 size-24 rounded-full bg-accent/15" />
          </div>
          <div className="flex flex-col justify-center p-10 md:col-span-3 md:p-12 md:pl-4">
            <h2 className="max-w-md text-3xl leading-tight md:text-4xl">{featured.title}</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
              {t.journal.readPost}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {posts.map((post) =>
            post.slug ? (
              <Link
                key={post.title}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="rounded-3xl border border-border/60 bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <p className="eyebrow">{t.journal.readPost}</p>
                <h3 className="mt-3 text-xl leading-snug">{post.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
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
    </>
  );
}
