import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/miedos-y-fobias")({
  beforeLoad: () => {
    throw redirect({
      to: "/ansiedad",
      statusCode: 301,
    });
  },
});
