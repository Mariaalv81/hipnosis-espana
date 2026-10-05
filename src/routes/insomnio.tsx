import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/insomnio")({
  head: () =>
    makeSeo({
      title: "Hipnosis para el Insomnio en Valencia y Sueca · Dormir Mejor | María A. Cabo",
      description:
        "Supera el insomnio, frena la rumiación nocturna y recupera un descanso reparador y natural. Psicoterapia e hipnosis en Sueca, Valencia y online. 70 €/sesión.",
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
      serviceDescription="Acompañamiento con psicoterapia e hipnosis para desactivar la hipervigilancia nocturna, silenciar la rumiación mental y restaurar el ciclo natural de sueño profundo. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/insomnio"
      formTag="Insomnio y Sueño"
    />
  );
}
