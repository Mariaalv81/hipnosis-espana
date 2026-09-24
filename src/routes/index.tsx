import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import heroJpg from "@/assets/images/hero-room.jpg";
import heroWebp from "@/assets/images/hero-room.webp";
import heroAvif from "@/assets/images/hero-room.avif";
import attachedHero from "@/assets/images/hero-attached.jpg";
import linenImage from "@/assets/images/texture-linen.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
        { title: "María Cabo · Hipnosis para el cambio personal" },
      {
        name: "description",
         content:
           "Sesiones para el desarrollo personal en Sueca. Un espacio sereno para trabajar hábitos, calma y confianza.",
      },
        { property: "og:title", content: "María Cabo · Hipnosis para el cambio personal" },
      {
        property: "og:description",
         content:
           "Acompañamiento para personas adultas, con criterio, cercanía y expectativas honestas.",
      },
    ],
  }),
  component: HypnosisPage,
});

function HypnosisPage() {
  const { t } = useI18n();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-page grid items-center gap-8 py-12 md:py-20 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">HIPNOSIS Y DESARROLLO PERSONAL</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl">
              <span className="block text-teal-600">CAMBIA PATRONES.</span>
              <span className="block text-muted-foreground">ENTRENA TU MENTE.</span>
              <span className="block text-teal-600">AVANZA.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Acompañamiento con hipnosis para trabajar hábitos, confianza, foco y respuestas
              automáticas. Sesiones individuales y programas para organizaciones.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/reservar" className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">
                RESERVAR UNA SESIÓN
              </Link>
              <Link to="/empresas" className="rounded-full border border-border bg-card px-6 py-3 text-sm">
                SOLUCIONES PARA EMPRESAS
              </Link>
            </div>
            <div className="mt-4">
              <Link to="/como-funciona" className="text-sm text-primary underline underline-offset-4">
                Conocer cómo funciona la hipnosis →
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2" suppressHydrationWarning>
            <picture>
              <source srcSet={heroAvif} type="image/avif" />
              <source srcSet={heroWebp} type="image/webp" />
              <img
                src={attachedHero}
                alt="Fotografía natural relacionada con la hipnosis"
                width={1600}
                height={1200}
                className="rounded-3xl object-cover shadow-[var(--shadow-soft)] w-full h-auto"
                loading="eager"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* PRIMER BLOQUE — Qué quieres cambiar */}
      <section className="container-page py-12 md:py-16">
        <p className="eyebrow">ACOMPAÑAMIENTO INDIVIDUAL</p>
        <h2 className="mt-3 text-3xl md:text-4xl">¿QUÉ QUIERES CAMBIAR?</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: 'MIEDOS Y EVITACIÓN', text: 'Sentirte más tranquilo ante situaciones que ahora generan bloqueo o evitación.' },
            { title: 'ESTRÉS Y CALMA', text: 'Trabajar respuestas automáticas y aprender a recuperar un estado de mayor calma.' },
            { title: 'HÁBITOS', text: 'Cambiar conductas que repites aunque conscientemente quieras algo diferente.' },
            { title: 'DEJAR DE FUMAR', text: 'Acompañamiento específico para trabajar hábitos y automatismos relacionados con el tabaco.' },
            { title: 'CONFIANZA', text: 'Trabajar seguridad personal, diálogo interno y respuesta ante situaciones exigentes.' },
            { title: 'FOCO Y APRENDIZAJE', text: 'Concentración, estudio, preparación de exámenes y mejora de hábitos de aprendizaje.' },
          ].map((c) => (
            <article key={c.title} className="rounded-2xl border border-border/60 bg-card p-6">
              <h3 className="text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/ambitos" className="text-sm text-primary underline underline-offset-4">
            VER TODOS LOS ÁMBITOS
          </Link>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="bg-muted/60 py-12 md:py-16">
        <div className="container-page grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="eyebrow">HIPNOSIS</p>
            <h2 className="mt-3 text-3xl md:text-4xl">NO PIERDES EL CONTROL. APRENDES A UTILIZAR MEJOR TU ATENCIÓN.</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              La hipnosis es un estado de atención focalizada en el que seguimos conscientes y participando
              activamente. Puede facilitar el trabajo con hábitos, asociaciones, respuestas automáticas y formas
              de interpretar determinadas situaciones.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              No se trata de dormir ni de entregar el control a otra persona. El proceso es colaborativo y se adapta
              al objetivo de cada sesión.
            </p>
            <div className="mt-6">
              <Link to="/como-funciona" className="text-sm text-primary underline underline-offset-4">
                CÓMO FUNCIONA LA HIPNOSIS
              </Link>
            </div>
          </div>
          <div>
            <img src={linenImage} alt="Fotografía de sesión tranquila" className="rounded-3xl object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Diferenciador: Particular / Empresa */}
      <section className="container-page py-12 md:py-16">
        <h2 className="text-3xl md:text-4xl">DOS CONTEXTOS. UNA MISMA IDEA: CAMBIAR CÓMO RESPONDEMOS.</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="text-xl">SESIONES INDIVIDUALES</h3>
            <p className="mt-2 text-sm text-muted-foreground">Trabajo personalizado para abordar hábitos, confianza, miedos, foco y otros objetivos de desarrollo personal.</p>
            <div className="mt-4"><Link to="/sesiones" className="text-sm text-primary underline">VER SESIONES</Link></div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h3 className="text-xl">DESARROLLO Y RENDIMIENTO</h3>
            <p className="mt-2 text-sm text-muted-foreground">Programas y talleres para ayudar a las personas a gestionar mejor su atención, confianza, aprendizaje y respuesta ante presión.</p>
            <div className="mt-4"><Link to="/empresas" className="text-sm text-primary underline">SOLUCIONES PARA EMPRESAS</Link></div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-muted/10 py-12 md:py-16">
        <div className="container-page">
          <p className="eyebrow">EL PROCESO</p>
          <h2 className="mt-3 text-3xl md:text-4xl">CLARO, PERSONAL Y PRÁCTICO.</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="p-6">
              <strong>01</strong>
              <h4 className="mt-2">ENTENDEMOS EL OBJETIVO</h4>
              <p className="mt-2 text-sm text-muted-foreground">Primero hablamos de qué quieres cambiar y en qué situaciones aparece el patrón actual.</p>
            </div>
            <div className="p-6">
              <strong>02</strong>
              <h4 className="mt-2">TRABAJAMOS CON HIPNOSIS</h4>
              <p className="mt-2 text-sm text-muted-foreground">La sesión se adapta a tu objetivo y a tu forma de responder.</p>
            </div>
            <div className="p-6">
              <strong>03</strong>
              <h4 className="mt-2">INTEGRAMOS EL CAMBIO</h4>
              <p className="mt-2 text-sm text-muted-foreground">Observamos lo aprendido e incorporamos prácticas sencillas entre sesiones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre María */}
      <section className="container-page py-12 md:py-16">
        <p className="eyebrow">MARÍA CABO</p>
        <div className="mt-4 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl">UNA FORMA CERCANA Y REALISTA DE TRABAJAR CON EL CAMBIO.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Mi trabajo parte de una idea sencilla: muchas veces sabemos perfectamente lo que queremos hacer, pero seguimos reaccionando de otra manera. La hipnosis permite trabajar precisamente con esa parte más automática de nuestra experiencia, manteniendo siempre la consciencia, la participación y el control.</p>
            <div className="mt-6"><Link to="/sobre-mi" className="text-sm text-primary underline">CONOCERME</Link></div>
          </div>
          <div>
            <img src={heroJpg} alt="María Cabo" className="rounded-3xl object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Eventos (máx 3) and Blog (reuse existing journal) */}
      <section className="container-page py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl md:text-4xl">ENCUENTROS</h2>
          <Link to="/eventos" className="text-sm text-primary underline">VER EVENTOS</Link>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Próximas fechas en preparación.</p>
      </section>

      <section className="container-page py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl md:text-4xl">APRENDER</h2>
          <Link to="/blog" className="text-sm text-primary underline">VER TODOS LOS ARTÍCULOS</Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.journal.posts.slice(0, 3).map((post) => (
            <article key={post.title} className="rounded-3xl border border-border/60 bg-card p-6">
              <h3 className="text-lg">{post.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ corta */}
      <section className="container-page py-12 md:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-3xl md:text-4xl">ENTENDER LA HIPNOSIS</h2>
          <Link to="/preguntas" className="text-sm text-primary underline">VER PREGUNTAS FRECUENTES</Link>
        </div>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {t.faq.items.slice(0, 5).map((item) => (
            <div key={item.q} className="grid gap-2 py-6 md:grid-cols-3 md:gap-8">
              <dt className="text-base">{item.q}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground md:col-span-2">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CTA final */}
      <section className="container-page pb-24">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl">EL CAMBIO PUEDE EMPEZAR POR UNA CONVERSACIÓN.</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link to="/reservar" className="rounded-full bg-background px-6 py-3 text-sm text-foreground">RESERVAR UNA SESIÓN</Link>
            <Link to="/contacto" className="rounded-full border border-primary-foreground/40 px-6 py-3 text-sm">PREGUNTAR ANTES DE RESERVAR</Link>
          </div>
          <div className="mt-4 text-sm">
            <Link to="/empresas" className="text-primary underline">¿Representas a una empresa? Ver soluciones para organizaciones →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
