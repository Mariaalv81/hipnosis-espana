import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/deporte-y-motivacion")({
  head: () =>
    makeSeo({
      title: "Hipnosis para el Rendimiento Deportivo y Motivación en Valencia y Sueca · María A. Cabo",
      description:
        "Supera bloqueos mentales, gestiona la presión competitiva y activa tu máximo foco en el deporte. Hipnosis en Sueca, Valencia u online. 70 €/sesión.",
      path: "/deporte-y-motivacion",
    }),
  component: SportsPage,
});

function SportsPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.sportsPage}
      serviceName="Hipnosis deportiva: rendimiento, motivación y foco competitivo"
      serviceDescription="Entrenamiento mental y visualización hipnótica para deportistas: estado de flujo, superación de bloqueos y constancia en entrenamientos. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/deporte-y-motivacion"
      formTag="Deporte y Motivación"
    />
  );
}
