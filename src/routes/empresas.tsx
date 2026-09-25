import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import heroJpg from "@/assets/images/oficina.jpg";
import heroWebp from "@/assets/images/oficina.webp";
import heroAvif from "@/assets/images/oficina.avif";
// proceso.jpg no se usa: eliminado para evitar warning de import sin uso

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
            <h1 className="text-3xl md:text-4xl">DESARROLLO PROFESIONAL</h1>
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
        <h2 className="text-2xl md:text-3xl">CUANDO "SABER QUÉ HACER" NO ES SUFICIENTE</h2>
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
              <p className="mt-2 text-sm text-muted-foreground">Intervenciones diseñadas para situaciones concretas (negociaciones, certificaciones, mediación de conflictos).</p>
            </article>
          </div>
        </div>
      </section>

      {/* Formatos */}
      <section id="formatos" className="container-page py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl">FORMATOS PARA EMPRESAS</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h4 className="text-xl">SESIONES INTRODUCTORIAS</h4>
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
            <p className="mt-2 text-sm text-muted-foreground">Sesiones dentro de programas para personas que necesitan trabajo más personalizado.</p>
          </div>
        </div>
      </section>

      {/* Confidencialidad y consentimiento */}
      <section className="container-page py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl">CONFIDENCIALIDAD, CONSENTIMIENTO Y OBJETIVOS COMPARTIDOS</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2 items-start">
          {/* Cuadro principal: caja de confidencialidad */}

          <div className="rounded-2xl border border-border/60 bg-card p-6 prose max-w-none text-sm text-muted-foreground">
            <p>
              Las sesiones individuales son un espacio privado y confidencial entre el profesional y el empleado. La
              empresa puede participar en la definición del <strong>objetivo general del programa</strong>, pero el
              contenido de las conversaciones y de las sesiones no se comparte con la organización.
            </p>
            <p>
              El trabajo parte siempre del <strong>consentimiento del empleado</strong>. La hipnosis no se utiliza para
              modificar sus valores, su personalidad, sus opiniones ni para inducir comportamientos que no desea. Al
              contrario: es una herramienta orientada a ayudar a la persona a desarrollar un mayor control sobre
              determinadas respuestas automáticas, emociones o hábitos que ella misma quiere cambiar.
            </p>
            <p>
              Los objetivos deben, por tanto, tener sentido para ambas partes: pueden favorecer el desarrollo
              profesional y, al mismo tiempo, representar una mejora real para la persona.
            </p>
          </div>

          {/* Cuadro ejemplo */}
          <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-muted/5 to-muted/10 p-6">
            <h4 className="text-lg font-semibold">Ejemplo</h4>
            <div className="mt-3 text-sm text-muted-foreground">
              <p>
                <strong>Por ejemplo:</strong> una empresa quiere promocionar a un empleado a un puesto que implica viajar
                con mayor frecuencia, pero esa persona tiene un miedo intenso a volar. La empresa y el empleado pueden
                acordar que trabajar ese miedo sería beneficioso para su nueva responsabilidad. A partir de ahí, las
                sesiones y conversaciones se mantienen de forma privada, y el proceso solo se realiza si el empleado desea
                trabajar ese objetivo y da su consentimiento.
              </p>
            </div>

            <div className="mt-3 rounded-md bg-muted/10 p-3 text-lg font-semibold">La empresa acuerda el objetivo. El empleado decide participar. La sesión permanece privada.</div>
          </div>
        </div>
      </section>

      {/* Cómo es una sesión / proceso (inline SVG track) */}
      <section className="company-process bg-muted/60 py-12 md:py-16" aria-label="Cómo trabajamos con organizaciones">
        <div className="container-page">
          <h2 className="text-3xl md:text-4xl">CÓMO ES UNA SESIÓN O TALLER</h2>

          <div className="process-track mt-6 grid gap-6 md:grid-cols-2">

            {/* PASO 01 */}
            <article className="process-step step-1 rounded-2xl border border-border/60 bg-card p-6">
              <div className="process-visual mb-4">
                <div className="process-circle w-20 h-20 flex items-center justify-center rounded-full border border-border/40 bg-muted/5">
                  <svg viewBox="0 0 64 64" className="process-icon w-10 h-10 text-muted-foreground" aria-hidden="true">
                    <circle cx="29" cy="35" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                    <circle cx="29" cy="35" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="29" cy="35" r="4" fill="currentColor" />
                    <path d="M32 32 L51 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M45 12 L53 10 L51 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="process-number text-primary font-bold">01</div>
              <h4 className="mt-2">DEFINIMOS EL OBJETIVO.</h4>
              <p className="mt-2 text-sm text-muted-foreground">Hablamos con la organización para entender la situación y el resultado esperado.</p>
            </article>

            {/* PASO 02 */}
            <article className="process-step step-2 rounded-2xl border border-border/60 bg-card p-6">
              <div className="process-visual mb-4">
                <div className="process-circle w-20 h-20 flex items-center justify-center rounded-full border border-border/40 bg-muted/5">
                  <svg viewBox="0 0 64 64" className="process-icon w-10 h-10 text-muted-foreground" aria-hidden="true">
                    <path d="M29 8 C17 8 10 17 10 29 C10 36 14 42 19 46 L19 56" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M19 56 L29 56" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M23 24 C23 18 28 15 32 18 C36 14 42 17 42 22 C47 23 48 29 44 32 C44 38 38 40 34 37 C30 41 24 38 24 33 C20 31 20 27 23 24Z" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M28 28 C30 25 34 25 36 28 C38 25 42 27 42 30 C42 34 37 37 35 39 C33 37 27 34 27 30 C27 29 27 28 28 28Z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              <div className="process-number text-primary font-bold">02</div>
              <h4 className="mt-2">EXPLICAMOS CÓMO FUNCIONA.</h4>
              <p className="mt-2 text-sm text-muted-foreground">Qué es la hipnosis, qué se puede esperar y qué no ocurre durante el proceso.</p>
            </article>

            {/* PASO 03 */}
            <article className="process-step step-3 rounded-2xl border border-border/60 bg-card p-6">
              <div className="process-visual mb-4">
                <div className="process-circle w-20 h-20 flex items-center justify-center rounded-full border border-border/40 bg-muted/5">
                  <svg viewBox="0 0 64 64" className="process-icon w-10 h-10 text-muted-foreground" aria-hidden="true">
                    <circle cx="32" cy="17" r="7" fill="currentColor" />
                    <path d="M32 25 L32 39" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M32 31 L21 39" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M32 31 L43 39" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>

              <div className="process-number text-primary font-bold">03</div>
              <h4 className="mt-2">PRACTICAMOS.</h4>
              <p className="mt-2 text-sm text-muted-foreground">Ejercicios de atención, visualizaciones y preparación mental adecuados al objetivo.</p>
            </article>

            {/* PASO 04 */}
            <article className="process-step step-4 rounded-2xl border border-border/60 bg-card p-6">
              <div className="process-visual mb-4">
                <div className="process-circle w-20 h-20 flex items-center justify-center rounded-full border border-border/40 bg-muted/5">
                  <svg viewBox="0 0 64 64" className="process-icon w-10 h-10 text-muted-foreground" aria-hidden="true">
                    <rect x="11" y="22" width="42" height="27" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M24 22 V17 C24 15 26 14 28 14 H36 C38 14 40 15 40 17 V22" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M11 31 C21 36 43 36 53 31" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>

              <div className="process-number text-primary font-bold">04</div>
              <h4 className="mt-2">LO TRASLADAMOS<br/>AL TRABAJO REAL.</h4>
              <p className="mt-2 text-sm text-muted-foreground">Buscamos que las herramientas se utilicen en situaciones profesionales concretas.</p>
            </article>

          </div>
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
