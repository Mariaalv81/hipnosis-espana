import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/insomnio")({
  head: () =>
    makeSeo({
      title: "Hipnosis para el Insomnio en Valencia y Sueca · Dormir Mejor | María A. Cabo",
      description:
        "Calma la mente, frena la rumiación nocturna y recupera un descanso reparador y natural con hipnosis clínica y psicoterapia ericksoniana en Sueca, Valencia y online. 70 €/sesión.",
      path: "/insomnio",
    }),
  component: InsomniaPage,
});

function InsomniaPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.insomniaPage}
      serviceName="Hipnosis para el insomnio, descanso profundo y regulación del sueño"
      serviceDescription="Acompañamiento con hipnosis clínica y psicoterapia ericksoniana para desactivar la tensión nocturna, calmar la rumiación mental y favorecer un sueño profundo y reparador. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/insomnio"
      formTag="Insomnio y Sueño"
    />
  );
}
