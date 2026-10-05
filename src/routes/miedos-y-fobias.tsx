import { createFileRoute } from "@tanstack/react-router";
import { makeSeo } from "@/lib/seo";
import { AnsiedadPage } from "./ansiedad";

export const Route = createFileRoute("/miedos-y-fobias")({
  head: () =>
    makeSeo({
      title: "Hipnosis para la Ansiedad, Miedos y Fobias en Valencia y Sueca · María A. Cabo",
      description:
        "Calma la ansiedad, desactiva el pánico y supera miedos y fobias (volar, conducir, hablar en público) con psicoterapia e hipnosis en Sueca, Valencia y online. 70 €/sesión.",
      path: "/miedos-y-fobias",
    }),
  component: AnsiedadPage,
});
