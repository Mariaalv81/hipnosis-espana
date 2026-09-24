import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { getBlogPost, type BlogBlock } from "@/content/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = getBlogPost(params.slug, "es");
    const title = post?.title ?? "Blog";
    const description =
      post?.excerpt ??
      "Textos breves sobre hipnosis, hábitos y cambio personal, con tono sereno y sin diagnósticos.";

    return {
      meta: [
        { title: `${title} · María Cabo` },
        {
          name: "description",
          content: description,
        },
        { property: "og:title", content: `${title} · María Cabo` },
        {
          property: "og:description",
          content: description,
        },
        { property: "og:type", content: "article" },
      ],
    };
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

  if (!post) throw notFound();

  const date = new Intl.DateTimeFormat(
    lang === "va" ? "ca-ES-u-ca-valencia" : lang === "en" ? "en-GB" : "es-ES",
    { day: "numeric", month: "long", year: "numeric" },
  ).format(new Date(post.date));

  return (
    <article>
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
          <p className="mt-5 text-sm text-muted-foreground">Maria Cabo · {date}</p>
        </div>
      </section>

      <div className="container-page max-w-2xl space-y-7 py-14 md:py-20">
        {post.blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

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
