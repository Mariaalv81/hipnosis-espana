import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/insomnio")({
  head: () =>
    makeSeo({
      title:
        "Terapia para el Insomnio y Ansiedad Nocturna en Valencia y Sueca · Dormir Mejor | María A. Cabo",
      description:
        "Supera el insomnio y la ansiedad nocturna en Valencia y Sueca. Calma la rumiación mental, los despertares con angustia y recupera un sueño reparador y natural. 70 €/sesión.",
      path: "/insomnio",
    }),
  component: InsomniaPage,
});

function InsomniaPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.insomniaPage}
      serviceName="Terapia para el insomnio, descanso profundo y regulación del sueño"
      serviceDescription="Acompañamiento terapéutico para desactivar la tensión nocturna, calmar la rumiación mental y recuperar un sueño profundo y reparador. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/insomnio"
      formTag="Insomnio y Sueño"
    />
  );
}
