import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/miedos-y-fobias")({
  head: () =>
    makeSeo({
      title: "Hipnosis para Superar Fobias y Miedos en Valencia y Sueca · María A. Cabo",
      description:
        "Supera el miedo a volar, conducir en autovía (amaxofobia), agujas o claustrofobia con hipnosis ericksoniana y desensibilización suave en Valencia y Sueca. 70 €/sesión.",
      path: "/miedos-y-fobias",
    }),
  component: FearsPage,
});

function FearsPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.fearsPage}
      serviceName="Hipnosis y terapia para superar miedos, bloqueos y fobias específicas"
      serviceDescription="Desensibilización sistemática y reprocesamiento de la respuesta de pánico mediante relajación profunda e hipnosis ericksoniana consciente. Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/miedos-y-fobias"
      formTag="Miedos y Fobias"
    />
  );
}
