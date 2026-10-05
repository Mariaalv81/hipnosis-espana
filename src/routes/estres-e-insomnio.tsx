import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/estres-e-insomnio")({
  head: () =>
    makeSeo({
      title: "Hipnosis para Estrés e Insomnio en Valencia y Sueca · María A. Cabo",
      description:
        "Desactiva el estado de alarma, frena el insomnio y recupera la calma y el sueño reparador con psicoterapia e hipnosis en Sueca, Valencia y online. 70 €/sesión.",
      path: "/estres-e-insomnio",
    }),
  component: StressAndInsomniaPage,
});

function StressAndInsomniaPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.insomniaPage}
      serviceName="Hipnosis para estrés, insomnio y calma profunda"
      serviceDescription="Acompañamiento con psicoterapia e hipnosis para desactivar el estado de alerta del sistema nervioso, frenar la rumiación y restaurar el descanso profundo. Sesiones en Sueca, a domicilio en Valencia ciudad y online."
      path="/estres-e-insomnio"
      formTag="Estrés e Insomnio"
    />
  );
}
