import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/miedos-y-fobias")({
  head: () =>
    makeSeo({
      title: "Hipnosis para Miedos y Fobias en Valencia y Sueca · María A. Cabo",
      description:
        "Supera el miedo a volar, conducir, hablar en público o fobias concretas de forma respetuosa y progresiva. Hipnosis en Sueca, Valencia u online. 70 €/sesión.",
      path: "/miedos-y-fobias",
    }),
  component: FearsPage,
});

function FearsPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.fearsPage}
      serviceName="Hipnosis para superar miedos, fobias y bloqueos de evitación"
      serviceDescription="Desensibilización sistemática de respuestas fóbicas (miedo a volar, conducir, agujas, claustrofobia y fobia social). Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/miedos-y-fobias"
      formTag="Miedos y Fobias"
    />
  );
}
