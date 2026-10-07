import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/estres-e-insomnio")({
  beforeLoad: () => {
    throw redirect({
      to: "/insomnio",
      statusCode: 301,
    });
  },
});
