import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hipnosis-vidas-pasadas")({
  beforeLoad: () => {
    throw redirect({
      to: "/vidas-pasadas",
    });
  },
});
