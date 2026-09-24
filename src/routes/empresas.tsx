import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import heroJpg from "@/assets/images/hero-room.jpg";
import heroWebp from "@/assets/images/hero-room.webp";
import heroAvif from "@/assets/images/hero-room.avif";

export const Route = createFileRoute("/empresas")({
  head: () => ({
    meta: [
      { title: "Programas de desarrollo profesional para empresas | María Cabo" },
      {
        name: "description",
        content:
          "Talleres y programas para trabajar atención, confianza, aprendizaje, hábitos y preparación ante situaciones profesionales exigentes.",
      },
      { property: "og:title", content: "Programas para empresas · María Cabo" },
    ],
  }),
  component: EmpresasPage,
});

function EmpresasPage() {
  const { t } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-8 py-12 md:py-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl">DESARROLLO PROFESIONAL PARA PERSONAS QUE QUIEREN RENDIR MEJOR</h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Atención, confianza, aprendizaje y cambio de hábitos aplicados al entorno profesional.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Diseño talleres y programas que utilizan herramientas de hipnosis, atención focalizada y cambio de
              patrones para ayudar a las personas a trabajar de forma más consciente frente a situaciones de
              presión, distracción, inseguridad o bloqueo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contacto"
                className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground"
                aria-label="Hablar sobre un programa"
                replace={false}
                >
                HABLAR SOBRE UN PROGRAMA
              </Link>
              <Link to="/empresas#formatos" className="rounded-full border border-border bg-card px-6 py-3 text-sm">
                FORMATOS PARA EMPRESAS
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <picture>
              <source srcSet={heroAvif} type="image/avif" />
              <source srcSet={heroWebp} type="image/webp" />
              <img src={heroJpg} alt="Equipo trabajando" className="rounded-3xl object-cover w-full h-auto" loading="lazy" />
            </picture>
          </div>
        </div>
      </section>

      {/* Lead intro */}
      <section className="container-page py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl">CUANDO SABER QUÉ HACER NO ES SUFICIENTE</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          En muchas situaciones profesionales, el problema no es la falta de conocimientos. Gran parte de nuestro
          comportamiento funciona mediante asociaciones, expectativas y respuestas automatizadas. Trabajar sobre
          esos patrones complementa la formación tradicional y ayuda a desarrollar nuevas formas de responder.
        </p>
      </section>

      {/* Áreas de trabajo */}
      <section className="bg-muted/10 py-12 md:py-16">
        <div className="container-page">
          <h3 className="eyebrow">ÁREAS DE TRABAJO</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <h4 className="text-lg">CONFIANZA PROFESIONAL</h4>
              <p className="mt-2 text-sm text-muted-foreground">Presentaciones, reuniones, entrevistas y situaciones de exposición.</p>
            </article>
            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <h4 className="text-lg">FOCO Y ATENCIÓN</h4>
              <p className="mt-2 text-sm text-muted-foreground">Hábitos de concentración, recuperación del foco y gestión de distracciones.</p>
            </article>
            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <h4 className="text-lg">APRENDIZAJE</h4>
              <p className="mt-2 text-sm text-muted-foreground">Crear condiciones mentales y hábitos favorables para incorporar nuevas habilidades.</p>
            </article>
            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <h4 className="text-lg">GESTIÓN DE LA PRESIÓN</h4>
              <p className="mt-2 text-sm text-muted-foreground">Preparación mental para rendir en situaciones exigentes.</p>
            </article>
            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <h4 className="text-lg">CAMBIO DE HÁBITOS</h4>
              <p className="mt-2 text-sm text-muted-foreground">Reducir automatismos que dificultan el trabajo y construir hábitos útiles.</p>
            </article>
            <article className="rounded-2xl border border-border/60 bg-card p-6">
              <h4 className="text-lg">PREPARACIÓN MENTAL</h4>
              <p className="mt-2 text-sm text-muted-foreground">Intervenciones diseñadas para situaciones concretas (presentaciones, negociaciones, certificaciones).</p>
            </article>
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section id="formatos" className="container-page py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl">FORMATOS PARA EMPRESAS</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h4 className="text-xl">CHARLAS INTRODUCTORIAS</h4>
            <p className="mt-2 text-sm text-muted-foreground">45–60 minutos. Introducción práctica a la atención y los automatismos.</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h4 className="text-xl">TALLERES</h4>
            <p className="mt-2 text-sm text-muted-foreground">90 minutos – 3 horas. Sesiones prácticas centradas en una habilidad concreta.</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h4 className="text-xl">PROGRAMAS</h4>
            <p className="mt-2 text-sm text-muted-foreground">Varias sesiones con seguimiento cuando se requiere práctica y consolidación.</p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h4 className="text-xl">SESIONES INDIVIDUALES</h4>
            <p className="mt-2 text-sm text-muted-foreground">Sesiones dentro de programas para personas que necesitan trabajo personalizado.</p>
          </div>
        </div>
      </section>

      {/* Cómo es una sesión / proceso */}
      <section className="bg-muted/60 py-12 md:py-16">
        <div className="container-page">
          <h3 className="eyebrow">CÓMO ES UNA SESIÓN O TALLER</h3>
          <ol className="mt-6 list-decimal list-inside space-y-4 text-sm text-muted-foreground">
            <li>
              <strong>DEFINIMOS EL OBJETIVO.</strong> Hablamos con la organización para entender la situación y el resultado esperado.
            </li>
            <li>
              <strong>EXPLICAMOS CÓMO FUNCIONA.</strong> Qué es la hipnosis, qué se puede esperar y qué no ocurre durante el proceso.
            </li>
            <li>
              <strong>PRACTICAMOS.</strong> Ejercicios de atención, visualizaciones y preparación mental adecuados al objetivo.
            </li>
            <li>
              <strong>LO TRASLADAMOS AL TRABAJO REAL.</strong> Buscamos que las herramientas se utilicen en situaciones profesionales concretas.
            </li>
          </ol>
        </div>
      </section>

      {/* CTA final */}
      <section className="container-page py-12 md:py-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl">HABLEMOS DE TU EQUIPO</h2>
          <p className="mt-4 text-sm">Cuéntame qué quieres mejorar y valoraremos si este enfoque tiene sentido para vuestra organización.</p>
          <div className="mt-6">
            <Link to="/contacto?corporate=1" className="rounded-full bg-background px-6 py-3 text-sm text-foreground">
              SOLICITAR UNA CONVERSACIÓN
            </Link>
          </div>
          <div className="mt-4 text-sm">
            <Link to="/sobre-mi" className="text-primary underline">CONOCER MÁS SOBRE MARÍA</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default EmpresasPage;
