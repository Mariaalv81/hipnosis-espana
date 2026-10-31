import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/deporte-y-motivacion")({
  head: () =>
    makeSeo({
      title:
        "Hipnosis para el Deporte y Rendimiento Mental en Valencia y Castellón · María A. Cabo",
      description:
        "Hipnosis para el deporte en Valencia, Castellón y online. Supera bloqueos bajo presión, rinde en competición y activa tu estado de flujo con María A. Cabo. 70 €/sesión.",
      path: "/deporte-y-motivacion",
    }),
  component: SportsPage,
});

function SportsPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.sportsPage}
      serviceName="Preparación mental deportiva: rendimiento, motivación y foco competitivo"
      serviceDescription="Entrenamiento mental y regulación de la atención para deportistas: estado de flujo, superación de bloqueos y constancia en entrenamientos. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/deporte-y-motivacion"
      formTag="Deporte y Motivación"
    />
  );
}
