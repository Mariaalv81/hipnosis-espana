import { createFileRoute } from "@tanstack/react-router";
import { ServiceLandingPage } from "@/components/service-landing-page";
import { useI18n } from "@/lib/i18n";
import { makeSeo } from "@/lib/seo";

export const Route = createFileRoute("/habitos-nerviosos")({
  head: () =>
    makeSeo({
      title: "Terapia para Dejar de Morderse las Uñas y Hábitos Nerviosos · María A. Cabo",
      description:
        "Supera la onicofagia, el bruxismo diurno o los tics por nerviosismo sin luchar contra ti mismo. Terapia focalizada en Sueca, Valencia u online. 70 €/sesión.",
      path: "/habitos-nerviosos",
    }),
  component: NervousHabitsPage,
});

function NervousHabitsPage() {
  const { t } = useI18n();

  return (
    <ServiceLandingPage
      data={t.nervousHabitsPage}
      serviceName="Terapia para dejar de morderse las uñas y superar hábitos nerviosos"
      serviceDescription="Actualización de automatismos motores inconscientes (onicofagia, bruxismo diurno, pellizcado de piel y tics nerviosos). Sesiones en Sueca (Centro Sanar), a domicilio en Valencia ciudad y online."
      path="/habitos-nerviosos"
      formTag="Hábitos Nerviosos"
    />
  );
}
