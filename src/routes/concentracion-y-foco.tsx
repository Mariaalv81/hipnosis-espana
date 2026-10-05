import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/concentracion-y-foco")({
  head: () =>
    makeSeo({
      title: "Hipnosis para Concentración, Estudio y Oposiciones en Valencia y Sueca · María A. Cabo",
      description:
        "Maximiza tu rendimiento intelectual, elimina la procrastinación y supera los bloqueos en exámenes u oposiciones. Hipnosis en Sueca, Valencia u online. 70 €/sesión.",
      path: "/concentracion-y-foco",
    }),
  component: FocusPage,
});

function FocusPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.focusPage}
      serviceName="Hipnosis para concentración, foco, estudio y preparación de oposiciones"
      serviceDescription="Entrenamiento en ondas alfa, eliminación de bloqueos cognitivos en exámenes y consolidación del hábito de estudio sin fatiga. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/concentracion-y-foco"
      formTag="Concentración y Oposiciones"
    />
  );
}
