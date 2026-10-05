import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/autoestima-y-confianza")({
  head: () =>
    makeSeo({
      title: "Hipnosis para Autoestima y Confianza Personal en Valencia y Sueca · María A. Cabo",
      description:
        "Supera la inseguridad, el síndrome del impostor y el miedo al juicio ajeno. Aprende a poner límites y valorarte. Hipnosis en Sueca, Valencia u online. 70 €/sesión.",
      path: "/autoestima-y-confianza",
    }),
  component: ConfidencePage,
});

function ConfidencePage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.confidencePage}
      serviceName="Hipnosis para autoestima, seguridad personal y confianza interior"
      serviceDescription="Transformación de la narrativa interna autocrítica, superación del síndrome del impostor y asertividad para poner límites. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/autoestima-y-confianza"
      formTag="Autoestima y Confianza"
    />
  );
}
