import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/concentracion-y-foco")({
  head: () =>
    makeSeo({
      title:
        "Terapia para Concentración, Rendimiento Mental y Oposiciones en Valencia y Sueca · María A. Cabo",
      description:
        "Maximiza tu rendimiento intelectual, supera la procrastinación y gestiona los bloqueos en exámenes u oposiciones. Terapia focalizada en Sueca, Valencia u online. 70 €/sesión.",
      path: "/concentracion-y-foco",
    }),
  component: FocusPage,
});

function FocusPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.focusPage}
      serviceName="Terapia para concentración, foco, estudio y preparación de oposiciones"
      serviceDescription="Entrenamiento en atención focalizada, eliminación de bloqueos cognitivos en exámenes y consolidación del hábito de estudio sin fatiga. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/concentracion-y-foco"
      formTag="Concentración y Oposiciones"
    />
  );
}
