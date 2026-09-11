import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog · Holistic-o" },
      {
        name: "description",
        content:
          "Textos breves sobre hipnosis, hábitos y cambio personal, con tono sereno y sin diagnósticos.",
      },
      { property: "og:title", content: "Blog · Holistic-o" },
      {
        property: "og:description",
        content: "Lecturas para entender mejor la hipnosis y el cambio personal.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  return <Outlet />;
}
