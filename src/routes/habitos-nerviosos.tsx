import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/habitos-nerviosos")({
  head: () =>
    makeSeo({
      title: "Hipnosis para Dejar de Morderse las Uñas y Hábitos Nerviosos · María A. Cabo",
      description:
        "Elimina la onicofagia, el bruxismo diurno o los tics por nerviosismo sin luchar contra ti mismo. Hipnosis en Sueca, Valencia u online. 70 €/sesión.",
      path: "/habitos-nerviosos",
    }),
  component: NervousHabitsPage,
});

function NervousHabitsPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.nervousHabitsPage}
      serviceName="Hipnosis para dejar de morderse las uñas y superar hábitos nerviosos"
      serviceDescription="Reprogramación de automatismos motores inconscientes (onicofagia, bruxismo diurno, pellizcado de piel y tics nerviosos). Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/habitos-nerviosos"
      formTag="Hábitos Nerviosos"
    />
  );
}
