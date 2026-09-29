import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import mariaCaboJpg from "@/assets/images/maria-cabo.jpg";

const cities = ["Los Ángeles", "Londres", "Barcelona", "Madrid", "Valencia"];

const focusAreas = [
  {
    title: "Cambio práctico",
    text: "Sesiones orientadas a objetivos concretos, con recursos que puedan trasladarse a la vida real.",
  },
  {
    title: "Proceso consciente",
    text: "La persona participa activamente, entiende qué estamos haciendo y mantiene siempre el control.",
  },
  {
    title: "Ritmo personal",
    text: "Cada trabajo se adapta a la historia, circunstancias y forma de experimentar el proceso.",
  },
];

const values = [
  "Escucha y respeto por cada persona.",
  "Objetivos claros y expectativas realistas.",
  "Participación activa durante todo el proceso.",
  "Confidencialidad.",
  "Herramientas prácticas para el día a día.",
];

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre María Cabo · María Cabo" },
      {
        name: "description",
        content:
          "María Cabo trabaja con hipnosis aplicada al desarrollo personal y profesional, con un enfoque cercano, práctico y realista.",
      },
      {
        property: "og:title",
        content: "Sobre María Cabo · María Cabo",
      },
      {
        property: "og:description",
        content:
          "Una forma cercana, práctica y respetuosa de trabajar con el cambio.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="border-b border-border/60 bg-sand/40">
        <div className="container-page grid gap-10 py-12 md:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
          <div className="order-2 lg:order-1">
            <p className="eyebrow">{t.about.role}</p>
            <h1 className="mt-4 max-w-2xl text-4xl leading-tight md:text-5xl">
              {t.about.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Trabajo con hipnosis aplicada al desarrollo personal y profesional,
              desde un enfoque cercano, práctico y respetuoso con el ritmo de
              cada persona.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {["Cercanía", "Claridad", "Recursos útiles"].map((item) => (
                <div
                  key={item}
                  className="border-l border-accent/60 bg-background/50 px-4 py-3"
                >
                  <p className="text-sm font-medium text-primary">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={mariaCaboJpg}
              alt="María Cabo"
              width={1510}
              height={1042}
              loading="eager"
              className="aspect-[4/3] w-full rounded-2xl object-cover object-center shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border-y border-border py-8">
              <p className="eyebrow">En cada sesión</p>
              <ul className="mt-6 grid gap-4">
                {values.map((value) => (
                  <li
                    key={value}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl bg-primary p-7 text-primary-foreground">
              <p className="text-base leading-relaxed">
                La persona mantiene siempre la consciencia, la participación y
                el control sobre la experiencia.
              </p>
            </div>
          </aside>

          <div className="min-w-0">
            <section className="grid gap-6">
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-4xl">
                Mi trabajo consiste en acompañar a cada persona a explorar sus
                patrones y ofrecerle herramientas para responder de una manera
                más útil para ella.
              </h2>
            </section>

            <section className="mt-14 border-t border-border pt-10 md:mt-16 md:pt-12">
              <p className="eyebrow">Mi forma de trabajar</p>
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-4xl">
                Hipnosis como herramienta, no como fórmula mágica.
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
                Entiendo la hipnosis como un recurso para facilitar procesos de cambio,
                observar respuestas automáticas y entrenar nuevas formas de
                afrontar situaciones concretas con más calma, seguridad y
                capacidad de elección.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {focusAreas.map((area) => (
                  <article
                    key={area.title}
                    className="rounded-2xl border border-border bg-card p-6"
                  >
                    <h3 className="text-xl leading-tight">{area.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {area.text}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-14 grid gap-8 border-t border-border pt-10 md:mt-16 md:grid-cols-[0.9fr_1.1fr] md:pt-12">
              <div>
                <p className="eyebrow">Trayectoria</p>
                <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                  Una mirada construida entre culturas y entornos profesionales.
                </h2>
              </div>

              <div>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="mt-8 grid gap-5 text-base leading-relaxed text-muted-foreground md:grid-cols-2">
                <p>
                  A lo largo de mi trayectoria he trabajado en entornos
                  corporativos e internacionales y he vivido en ciudades como
                  Los Ángeles, Londres, Barcelona, Valencia y Madrid.
                </p>
                <p>
                  Esa experiencia me ha permitido entender que detrás de cada
                  objetivo hay una historia, una forma de responder y unas
                  circunstancias diferentes.
                </p>
              </div>

                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Mi experiencia previa en empresas internacionales me ayuda a
                  entender retos habituales del trabajo: hablar en público,
                  asumir responsabilidades, rendir bajo presión, mantener el
                  foco o desenvolverse con mayor confianza en situaciones
                  exigentes.
                </p>
              </div>
            </section>

            <section className="mt-14 border-t border-border pt-10 md:mt-16 md:pt-12">
              <p className="eyebrow">Sesiones y colaboraciones</p>
              <div className="mt-5 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-start">
                <h2 className="text-3xl leading-tight md:text-4xl">
                  Sueca · Ribera Baixa · Valencia · Gandia
                </h2>
                <div className="grid gap-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Las sesiones individuales se realizan de forma presencial en
                    un despacho en Sueca, Valencia.
                  </p>
                  <p>
                    También puedo desplazarme a casas particulares, empresas,
                    oficinas, centros y organizaciones para sesiones, talleres o
                    programas de desarrollo profesional.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-14 rounded-2xl bg-sand px-6 py-8 md:mt-16 md:px-8 md:py-10">
              <p className="max-w-3xl text-xl leading-relaxed text-primary md:text-2xl">
                Muchas veces el cambio no consiste en convertirse en otra
                persona, sino en dejar de estar limitado por patrones que ya no
                necesitamos.
              </p>
              <Button
                asChild
                className="mt-7 w-fit rounded-full px-7 py-3 text-sm"
              >
                <Link to="/reservar">{t.common.bookNow}</Link>
              </Button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
