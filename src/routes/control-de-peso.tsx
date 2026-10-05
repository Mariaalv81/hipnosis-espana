import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/control-de-peso")({
  head: () =>
    makeSeo({
      title: "Hipnosis para el Control de Peso y Comer Emocional en Valencia y Sueca · María A. Cabo",
      description:
        "Aprende a calmar la ansiedad por la comida, el picoteo compulsivo y la culpa. Hipnosis para reconectar con la saciedad corporal en Sueca, Valencia u online. 70 €/sesión.",
      path: "/control-de-peso",
    }),
  component: WeightPage,
});

function WeightPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.weightPage}
      serviceName="Hipnosis para el control de peso y hambre emocional"
      serviceDescription="Acompañamiento respetuoso con hipnosis para calmar la ansiedad por la comida, desactivar el picoteo compulsivo y recuperar la saciedad corporal natural. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/control-de-peso"
      formTag="Control de Peso"
    />
  );
}
