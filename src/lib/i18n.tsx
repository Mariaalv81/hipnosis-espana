import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "es" | "va" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "va", label: "VA" },
  { code: "en", label: "EN" },
];

type Dict = typeof es;

const es = {
  brand: "Hipnosis España",
  tagline: "Hipnosis aplicada al desarrollo personal",
  nav: {
    home: "Inicio",
    how: "Cómo funciona",
    areas: "Ámbitos",
    sessions: "Sesiones",
    about: "Sobre mí",
    events: "Eventos",
    journal: "Blog",
    faq: "Preguntas",
    contact: "Contacto",
    book: "Reservar",
  },
  home: {
    eyebrow: "Sueca · Sesiones presenciales",
    title: "Un espacio para cambiar desde dentro",
    subtitle:
      "Acompañamiento con hipnosis para personas adultas que quieren producir cambios reales: hábitos, calma, foco y confianza. Con criterio, cercanía y expectativas honestas.",
    ctaPrimary: "Reservar una sesión",
    ctaSecondary: "Cómo funciona",
    pillars: [
      {
        title: "Explicación clara",
        text: "Sabrás qué es y qué no es la hipnosis antes de decidir nada.",
      },
      {
        title: "Presencia humana",
        text: "Un acompañamiento tranquilo, sin lenguaje clínico ni promesas.",
      },
      {
        title: "Límites honestos",
        text: "Desarrollo personal, no atención sanitaria ni tratamiento.",
      },
    ],
    forWhomTitle: "Para qué suele ayudar",
    areasTitle: "Explora posibles objetivos",
    areasText:
      "Una guía para reconocer objetivos de desarrollo personal que podemos trabajar con hipnosis, siempre desde un enfoque no clínico.",
    areasLink: "Ver ámbitos de acompañamiento",
    forWhom: [
      "Hábitos que quieres soltar, como el tabaco",
      "Calma ante situaciones que te tensan",
      "Foco y motivación para sostener un cambio",
      "Confianza al hablar, decidir o exponerte",
      "Descanso y relación con el estrés cotidiano",
      "Preparación de retos concretos",
    ],
    journalTitle: "Últimos escritos",
    journalLink: "Ver todos los escritos",
    faqTitle: "Dudas frecuentes",
    faqLink: "Ver todas las preguntas",
    finalTitle: "¿Damos el primer paso?",
    finalText: "Puedes reservar directamente o escribir antes si tienes alguna duda.",
    finalSecondary: "Tengo una duda antes de reservar",
  },
  how: {
    title: "Cómo funciona",
    intro:
      "La hipnosis es un estado de atención concentrada y relajación en el que resulta más fácil trabajar con la imaginación, los hábitos y la manera de responder a ciertas situaciones. No pierdes el control, no te duermes y no haces nada que no quieras hacer.",
    stepsTitle: "El recorrido, paso a paso",
    steps: [
      {
        title: "1 · Conversación inicial",
        text: "Hablamos de lo que quieres cambiar, de tu situación y de si este acompañamiento es adecuado para ti.",
      },
      {
        title: "2 · Objetivo concreto",
        text: "Definimos juntas un objetivo observable y realista, con la parte que depende de mí y la que depende de ti.",
      },
      {
        title: "3 · Sesión de hipnosis",
        text: "Un proceso guiado, tranquilo y en todo momento consentido. Recordarás lo vivido y podrás parar cuando quieras.",
      },
      {
        title: "4 · Entre sesiones",
        text: "Pequeñas prácticas para sostener el cambio en tu día a día, sin sobrecargar tu agenda.",
      },
    ],
    mythsTitle: "Lo que no es",
    myths: [
      "No es un tratamiento médico ni psicológico.",
      "No sustituye a la atención sanitaria ni a la medicación.",
      "No hay diagnósticos, ni promesas de curación.",
      "No es un espectáculo: nadie pierde la voluntad.",
    ],
    safetyTitle: "Seguridad y admisión",
    safetyText:
      "El servicio se dirige a personas mayores de 18 años. Si lo que necesitas es atención sanitaria, te lo diré con claridad y te orientaré hacia el recurso adecuado.",
  },
  areas: {
    title: "Ámbitos de acompañamiento",
    intro:
      "La hipnosis puede ser una herramienta de apoyo para trabajar objetivos de desarrollo personal. Cada proceso se adapta a la persona, sin diagnósticos ni promesas de resultados.",
    noticeTitle: "Un enfoque de desarrollo personal",
    notice:
      "Este acompañamiento no es atención sanitaria ni terapia psicológica. No trata trastornos, no realiza diagnósticos y no sustituye a profesionales de la salud. Si lo que necesitas requiere atención clínica, te lo diré con claridad y te orientaré hacia el recurso adecuado.",
    items: [
      {
        title: "Miedos y fobias",
        text: "Podemos explorar cómo prepararte ante situaciones que te inquietan y practicar recursos de calma, atención y confianza para afrontarlas a tu ritmo.",
        note: "No sustituye la evaluación ni el tratamiento psicológico de una fobia o un trastorno de ansiedad.",
      },
      {
        title: "Ansiedad y estrés cotidiano",
        text: "Un espacio para trabajar la tensión del día a día, recuperar pausas y ensayar formas más conscientes de responder ante momentos exigentes.",
        note: "Ante malestar intenso, persistente o que interfiera en tu vida, es importante consultar con un profesional sanitario.",
      },
      {
        title: "Dejar de fumar",
        text: "Un proceso estructurado para acompañar tu decisión, reforzar los motivos personales y preparar hábitos que ayuden a sostener el cambio.",
        note: "Es apoyo al cambio de hábitos; no sustituye la atención médica ni el tratamiento de una dependencia.",
      },
      {
        title: "Control de peso",
        text: "Podemos revisar la relación con las rutinas, la motivación y los hábitos cotidianos para acompañar objetivos de bienestar acordados contigo.",
        note: "No es un servicio de nutrición ni aborda trastornos de la conducta alimentaria.",
      },
      {
        title: "Cambios y estados de duelo",
        text: "Un acompañamiento sereno para transitar pérdidas o cambios vitales, dando espacio a lo que estás viviendo y a los recursos que te ayudan a avanzar.",
        note: "No sustituye la atención psicológica cuando el duelo resulta muy intenso, se prolonga o compromete tu bienestar.",
      },
      {
        title: "Estudio y concentración",
        text: "Podemos trabajar la preparación, el foco y las rutinas de estudio para afrontar retos académicos con más claridad y continuidad.",
        note: "No sustituye una evaluación de dificultades de aprendizaje o atención.",
      },
      {
        title: "Patrones de conducta",
        text: "Identificamos respuestas repetidas que ya no te sirven y ensayamos alternativas pequeñas, concretas y coherentes con el cambio que buscas.",
        note: "No es tratamiento de trastornos de conducta ni de salud mental.",
      },
      {
        title: "Mejora de hábitos",
        text: "Un espacio para definir un hábito realista, reconocer qué lo dificulta y reforzar acciones sostenibles en tu día a día.",
        note: "El ritmo y los resultados dependen de muchos factores; no se garantizan cambios concretos.",
      },
      {
        title: "Bienestar emocional",
        text: "Podemos cultivar recursos personales de calma, presencia y autocuidado para relacionarte con las emociones de una manera más consciente.",
        note: "No sustituye la intervención psicológica o psiquiátrica cuando es necesaria.",
      },
      {
        title: "Autoconfianza",
        text: "Trabajamos objetivos concretos, diálogo interno y preparación para expresarte, decidir o afrontar situaciones que te importan.",
        note: "Es un acompañamiento de desarrollo personal, no un tratamiento clínico de la autoestima.",
      },
    ],
    closing:
      "Si tienes dudas sobre si este acompañamiento encaja contigo, escríbeme antes de reservar.",
    cta: "Resolver una duda",
  },
  sessions: {
    title: "Sesiones",
    intro:
      "Sesiones individuales presenciales en Sueca, en un despacho independiente dentro del Centro Sanar. Precios claros, sin permanencia y con política de cambios transparente.",
    items: [
      {
        name: "Sesión individual",
        price: "60 €",
        unit: "por hora",
        text: "Una hora de acompañamiento con hipnosis, enfocada en el objetivo que hayamos definido.",
        points: ["Duración de 60 minutos", "Presencial", "Sin permanencia"],
      },
      {
        name: "Programa para dejar de fumar",
        price: "300 €",
        unit: "paquete de tres sesiones",
        text: "Un recorrido estructurado en tres sesiones para acompañar la decisión de dejar de fumar y sostenerla.",
        points: ["Tres sesiones", "Seguimiento entre sesiones", "Pago del paquete completo"],
      },
    ],
    policyTitle: "Antes de reservar",
    policy: [
      "Reserva pensada para personas adultas.",
      "Si tienes dudas sobre si es adecuado para ti, escríbeme antes.",
      "Los cambios y cancelaciones se acuerdan con antelación razonable.",
      "Horarios en hora peninsular (Europe/Madrid).",
    ],
  },
  about: {
    title: "Sobre mí",
    name: "Maria Cabo",
    role: "Facilitadora de hipnosis aplicada al desarrollo personal",
    body: [
      "Acompaño a personas adultas que quieren producir un cambio concreto y no saben por dónde empezar. Mi manera de trabajar es tranquila, curiosa y honesta: primero entender, luego proponer.",
      "Creo en las expectativas realistas. La hipnosis puede ser una herramienta muy útil para trabajar hábitos, atención y respuesta al estrés, pero no lo resuelve todo ni sustituye a la atención sanitaria.",
      "Trabajo en Sueca, en castellano e inglés, en un despacho independiente dentro del Centro Sanar.",
    ],
    valuesTitle: "Cómo trabajo",
    values: [
      "Consentimiento y ritmo tuyo en cada sesión.",
      "Lenguaje sencillo, sin jerga ni tecnicismos.",
      "Confidencialidad y mínimos datos necesarios.",
      "Derivación cuando corresponde a otro profesional.",
    ],
  },
  events: {
    title: "Eventos y talleres",
    intro:
      "Encuentros introductorios y talleres en grupo para conocer el trabajo sin empezar por una sesión individual.",
    badge: "Encuentro gratuito",
    dateLabel: "Fecha",
    timeLabel: "Hora",
    placeLabel: "Lugar",
    place: "Sueca · Centro Sanar",
    items: [
      {
        date: "14 sept",
        time: "18:00",
        title: "Tabaquismo",
        text: "Un encuentro para comprender cómo se sostienen los automatismos del tabaco y cómo puede acompañarse el cambio con hipnosis.",
      },
      {
        date: "21 sept",
        time: "18:00",
        title: "Ansiedad, miedos y fobias",
        text: "Una introducción serena a recursos de atención, calma y preparación interna ante situaciones que generan tensión.",
      },
      {
        date: "28 sept",
        time: "18:00",
        title: "Estudio y exámenes",
        text: "Una sesión grupal para explorar foco, confianza y ensayo mental antes de retos académicos o pruebas importantes.",
      },
      {
        date: "5 oct",
        time: "18:00",
        title: "Hábitos y control del peso",
        text: "Un espacio para hablar de motivación, repetición y relación con las rutinas cotidianas desde un enfoque no clínico.",
      },
    ],
    empty: "Ahora mismo no hay fechas abiertas.",
    emptyText:
      "Estoy preparando el calendario de talleres. Si quieres que te avise cuando se publiquen, escríbeme y te lo cuento.",
    cta: "Quiero asistir",
  },
  journal: {
    title: "Blog",
    intro:
      "Textos breves para entender mejor la hipnosis, los hábitos y el cambio personal. Nunca diagnósticos ni recetas.",
    posts: [
      {
        slug: "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
        title: "Hipnosis y cambio de hábitos: ¿cómo puede ayudar?",
        excerpt:
          "La hipnosis no borra un hábito. Puede ayudarnos a ensayar y fortalecer nuevas maneras de responder.",
      },
      {
        slug: "por-que-cuesta-cambiar-un-habito",
        title: "¿Por qué nos cuesta tanto cambiar un hábito?",
        excerpt:
          "Porque saber lo que queremos hacer y conseguir hacerlo no siempre son la misma cosa.",
      },
      {
        slug: "que-ocurre-en-el-cerebro-durante-la-hipnosis",
        title: "¿Qué ocurre en el cerebro durante la hipnosis?",
        excerpt:
          "La ciencia ha observado cambios en la atención y la comunicación entre redes cerebrales, sin apagar la mente racional.",
      },
      {
        slug: "que-es-la-hipnosis",
        title: "¿Qué es realmente la hipnosis?",
        excerpt:
          "No es dormir, perder el control ni dejar la mente en blanco. Es una forma diferente de prestar atención.",
      },
      {
        title: "Expectativas realistas: qué depende de cada parte",
        excerpt:
          "Qué puedo aportar yo, qué aportas tú y por qué esa frontera hace que el proceso funcione mejor.",
      },
    ],
    soon: "Próximamente",
    latest: "Último artículo",
    readPost: "Leer artículo",
    backToBlog: "Volver al blog",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Voy a perder el control?",
        a: "No. En hipnosis mantienes la consciencia y el control. Puedes hablar, moverte y detener la sesión cuando quieras.",
      },
      {
        q: "¿Esto es una terapia psicológica?",
        a: "No. Es acompañamiento de desarrollo personal. No hay diagnóstico ni tratamiento de trastornos, y no sustituye a la atención sanitaria.",
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Depende del objetivo. Muchas personas trabajan con sesiones sueltas; para dejar de fumar el recorrido es de tres sesiones.",
      },
      {
        q: "¿Y si no me pasa nada durante la sesión?",
        a: "Cada persona vive la experiencia a su manera. Adaptamos el enfoque, y si no es la herramienta adecuada para ti, te lo diré.",
      },
      {
        q: "¿Es confidencial?",
        a: "Sí. Lo que compartes queda entre nosotras y se recogen los mínimos datos necesarios para gestionar la cita.",
      },
      {
        q: "¿Qué precio tiene?",
        a: "La sesión individual son 60 € la hora. El programa para dejar de fumar son 300 € e incluye tres sesiones.",
      },
    ],
  },
  contact: {
    title: "Contacto",
    intro:
      "Si tienes una duda antes de reservar, escríbeme y te respondo con calma. No hace falta que expliques nada que no quieras contar.",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Tu mensaje",
    consent: "He leído y acepto la política de privacidad.",
    send: "Enviar mensaje",
    sent: "Gracias, he recibido tu mensaje. Te responderé en breve.",
    note: "Formulario de muestra: aún no envía correos. Cuando quieras lo conectamos.",
    infoTitle: "Datos",
    area: "Sueca · despacho independiente dentro del Centro Sanar",
    languages: "Sesiones en castellano e inglés",
    hours: "Horario de atención en hora peninsular",
  },
  legal: {
    title: "Información legal",
    intro:
      "Borrador de textos legales pendiente de revisión. Faltan datos identificativos, dirección y proveedores definitivos.",
    sections: [
      {
        title: "Aviso legal",
        text: "Titular del sitio: Maria Cabo (Hipnosis España). Domicilio, NIF y datos de contacto pendientes de confirmar. El contenido de esta web es informativo y no constituye asesoramiento sanitario.",
      },
      {
        title: "Privacidad",
        text: "Los datos que facilites se usan únicamente para responder a tu consulta y gestionar la cita. No se recogen datos de salud a través de la web. Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, portabilidad y limitación escribiendo a la dirección de contacto.",
      },
      {
        title: "Cookies",
        text: "La web no utiliza cookies de perfilado. Si en el futuro se añade analítica, se pedirá tu consentimiento previo con opción de rechazo igual de sencilla.",
      },
      {
        title: "Condiciones del servicio",
        text: "El servicio se dirige a personas mayores de 18 años y consiste en acompañamiento de desarrollo personal mediante hipnosis. Condiciones de cambio, cancelación y reembolso pendientes de definir.",
      },
    ],
  },
  footer: {
    rights: "Todos los derechos reservados.",
    disclaimer:
      "Hipnosis España ofrece acompañamiento de desarrollo personal. No es un servicio sanitario y no sustituye la atención médica o psicológica.",
    legal: "Información legal",
  },
  common: {
    bookNow: "Reservar una sesión",
    bookSoon: "Las reservas online estarán disponibles pronto. Escríbeme mientras tanto.",
    contactMe: "Escríbeme",
    draft: "Contenido provisional pendiente de tus datos definitivos.",
    bookCalendar: "Reservar en el calendario",
    smokeEmail: "Quiero dejar de fumar",
    smokeEmailNote: "Te escribo un email y concertamos una entrevista de 20 minutos.",
  },
};

const va: Dict = {
  brand: "Hipnosis España",
  tagline: "Hipnosi aplicada al desenvolupament personal",
  nav: {
    home: "Inici",
    how: "Com funciona",
    areas: "Àmbits",
    sessions: "Sessions",
    about: "Sobre mi",
    events: "Esdeveniments",
    journal: "Blog",
    faq: "Preguntes",
    contact: "Contacte",
    book: "Reservar",
  },
  home: {
    eyebrow: "Sueca · Sessions presencials",
    title: "Un espai per a canviar des de dins",
    subtitle:
      "Acompanyament amb hipnosi per a persones adultes que volen produir canvis reals: hàbits, calma, focus i confiança. Amb criteri, proximitat i expectatives honestes.",
    ctaPrimary: "Reservar una sessió",
    ctaSecondary: "Com funciona",
    pillars: [
      {
        title: "Explicació clara",
        text: "Sabràs què és i què no és la hipnosi abans de decidir res.",
      },
      {
        title: "Presència humana",
        text: "Un acompanyament tranquil, sense llenguatge clínic ni promeses.",
      },
      {
        title: "Límits honestos",
        text: "Desenvolupament personal, no atenció sanitària ni tractament.",
      },
    ],
    forWhomTitle: "En què sol ajudar",
    areasTitle: "Explora possibles objectius",
    areasText:
      "Una guia per a reconéixer objectius de desenvolupament personal que podem treballar amb hipnosi, sempre des d'un enfocament no clínic.",
    areasLink: "Veure àmbits d'acompanyament",
    forWhom: [
      "Hàbits que vols deixar, com el tabac",
      "Calma davant situacions que et tensen",
      "Focus i motivació per a sostindre un canvi",
      "Confiança al parlar, decidir o exposar-te",
      "Descans i relació amb l'estrés quotidià",
      "Preparació de reptes concrets",
    ],
    journalTitle: "Últims escrits",
    journalLink: "Veure tots els escrits",
    faqTitle: "Dubtes freqüents",
    faqLink: "Veure totes les preguntes",
    finalTitle: "Fem el primer pas?",
    finalText: "Pots reservar directament o escriure abans si tens algun dubte.",
    finalSecondary: "Tinc un dubte abans de reservar",
  },
  how: {
    title: "Com funciona",
    intro:
      "La hipnosi és un estat d'atenció concentrada i relaxació en què resulta més fàcil treballar amb la imaginació, els hàbits i la manera de respondre a certes situacions. No perds el control, no t'adorms i no fas res que no vulgues fer.",
    stepsTitle: "El recorregut, pas a pas",
    steps: [
      {
        title: "1 · Conversa inicial",
        text: "Parlem del que vols canviar, de la teua situació i de si este acompanyament és adequat per a tu.",
      },
      {
        title: "2 · Objectiu concret",
        text: "Definim un objectiu observable i realista, amb la part que depén de mi i la que depén de tu.",
      },
      {
        title: "3 · Sessió d'hipnosi",
        text: "Un procés guiat, tranquil i consentit en tot moment. Recordaràs el viscut i podràs parar quan vulgues.",
      },
      {
        title: "4 · Entre sessions",
        text: "Xicotetes pràctiques per a sostindre el canvi en el dia a dia, sense sobrecarregar la teua agenda.",
      },
    ],
    mythsTitle: "El que no és",
    myths: [
      "No és un tractament mèdic ni psicològic.",
      "No substituïx l'atenció sanitària ni la medicació.",
      "No hi ha diagnòstics ni promeses de curació.",
      "No és un espectacle: ningú perd la voluntat.",
    ],
    safetyTitle: "Seguretat i admissió",
    safetyText:
      "El servici s'adreça a persones majors de 18 anys. Si el que necessites és atenció sanitària, t'ho diré amb claredat i t'orientaré cap al recurs adequat.",
  },
  areas: {
    title: "Àmbits d'acompanyament",
    intro:
      "La hipnosi pot ser una ferramenta de suport per a treballar objectius de desenvolupament personal. Cada procés s'adapta a la persona, sense diagnòstics ni promeses de resultats.",
    noticeTitle: "Un enfocament de desenvolupament personal",
    notice:
      "Este acompanyament no és atenció sanitària ni teràpia psicològica. No tracta trastorns, no realitza diagnòstics i no substituïx professionals de la salut. Si el que necessites requerix atenció clínica, t'ho diré amb claredat i t'orientaré cap al recurs adequat.",
    items: [
      {
        title: "Pors i fòbies",
        text: "Podem explorar com preparar-te davant de situacions que t'inquieten i practicar recursos de calma, atenció i confiança per a afrontar-les al teu ritme.",
        note: "No substituïx l'avaluació ni el tractament psicològic d'una fòbia o un trastorn d'ansietat.",
      },
      {
        title: "Ansietat i estrès quotidià",
        text: "Un espai per a treballar la tensió del dia a dia, recuperar pauses i assajar formes més conscients de respondre davant de moments exigents.",
        note: "Davant d'un malestar intens, persistent o que interferisca en la teua vida, és important consultar amb un professional sanitari.",
      },
      {
        title: "Deixar de fumar",
        text: "Un procés estructurat per a acompanyar la teua decisió, reforçar els motius personals i preparar hàbits que ajuden a sostindre el canvi.",
        note: "És suport al canvi d'hàbits; no substituïx l'atenció mèdica ni el tractament d'una dependència.",
      },
      {
        title: "Control de pes",
        text: "Podem revisar la relació amb les rutines, la motivació i els hàbits quotidians per a acompanyar objectius de benestar acordats amb tu.",
        note: "No és un servici de nutrició ni aborda trastorns de la conducta alimentària.",
      },
      {
        title: "Canvis i estats de dol",
        text: "Un acompanyament seré per a transitar pèrdues o canvis vitals, donant espai al que estàs vivint i als recursos que t'ajuden a avançar.",
        note: "No substituïx l'atenció psicològica quan el dol és molt intens, es prolonga o compromet el teu benestar.",
      },
      {
        title: "Estudi i concentració",
        text: "Podem treballar la preparació, el focus i les rutines d'estudi per a afrontar reptes acadèmics amb més claredat i continuïtat.",
        note: "No substituïx una avaluació de dificultats d'aprenentatge o atenció.",
      },
      {
        title: "Patrons de conducta",
        text: "Identifiquem respostes repetides que ja no et servixen i assagem alternatives xicotetes, concretes i coherents amb el canvi que busques.",
        note: "No és tractament de trastorns de conducta ni de salut mental.",
      },
      {
        title: "Millora d'hàbits",
        text: "Un espai per a definir un hàbit realista, reconéixer què el dificulta i reforçar accions sostenibles en el teu dia a dia.",
        note: "El ritme i els resultats depenen de molts factors; no es garantixen canvis concrets.",
      },
      {
        title: "Benestar emocional",
        text: "Podem cultivar recursos personals de calma, presència i autocura per a relacionar-te amb les emocions d'una manera més conscient.",
        note: "No substituïx la intervenció psicològica o psiquiàtrica quan és necessària.",
      },
      {
        title: "Autoconfiança",
        text: "Treballem objectius concrets, diàleg intern i preparació per a expressar-te, decidir o afrontar situacions que t'importen.",
        note: "És un acompanyament de desenvolupament personal, no un tractament clínic de l'autoestima.",
      },
    ],
    closing: "Si dubtes de si este acompanyament encaixa amb tu, escriu-me abans de reservar.",
    cta: "Resoldre un dubte",
  },
  sessions: {
    title: "Sessions",
    intro:
      "Sessions individuals presencials a Sueca, en un despatx independent dins de Centro Sanar. Preus clars, sense permanència i amb política de canvis transparent.",
    items: [
      {
        name: "Sessió individual",
        price: "60 €",
        unit: "per hora",
        text: "Una hora d'acompanyament amb hipnosi, centrada en l'objectiu que hàgem definit.",
        points: ["Duració de 60 minuts", "Presencial", "Sense permanència"],
      },
      {
        name: "Programa per a deixar de fumar",
        price: "300 €",
        unit: "paquet de tres sessions",
        text: "Un recorregut estructurat en tres sessions per a acompanyar la decisió de deixar de fumar i sostindre-la.",
        points: ["Tres sessions", "Seguiment entre sessions", "Pagament del paquet complet"],
      },
    ],
    policyTitle: "Abans de reservar",
    policy: [
      "Reserva pensada per a persones adultes.",
      "Si dubtes de si és adequat per a tu, escriu-me abans.",
      "Els canvis i cancel·lacions s'acorden amb antelació raonable.",
      "Horaris en hora peninsular (Europe/Madrid).",
    ],
  },
  about: {
    title: "Sobre mi",
    name: "Maria Cabo",
    role: "Facilitadora d'hipnosi aplicada al desenvolupament personal",
    body: [
      "Acompanye persones adultes que volen produir un canvi concret i no saben per on començar. La meua manera de treballar és tranquil·la, curiosa i honesta: primer entendre, després proposar.",
      "Crec en les expectatives realistes. La hipnosi pot ser una ferramenta molt útil per a treballar hàbits, atenció i resposta a l'estrés, però no ho resol tot ni substituïx l'atenció sanitària.",
      "Treballe a Sueca, en castellà i anglés, en un despatx independent dins de Centro Sanar.",
    ],
    valuesTitle: "Com treballe",
    values: [
      "Consentiment i el teu ritme en cada sessió.",
      "Llenguatge senzill, sense argot ni tecnicismes.",
      "Confidencialitat i mínimes dades necessàries.",
      "Derivació quan correspon a un altre professional.",
    ],
  },
  events: {
    title: "Esdeveniments i tallers",
    intro:
      "Trobades introductòries i tallers en grup per a conéixer el treball sense començar per una sessió individual.",
    badge: "Trobada gratuïta",
    dateLabel: "Data",
    timeLabel: "Hora",
    placeLabel: "Lloc",
    place: "Sueca · Centre Sanar",
    items: [
      {
        date: "14 set",
        time: "18:00",
        title: "Tabaquisme",
        text: "Una trobada per a comprendre com se sostenen els automatismes del tabac i com pot acompanyar-se el canvi amb hipnosi.",
      },
      {
        date: "21 set",
        time: "18:00",
        title: "Ansietat, pors i fòbies",
        text: "Una introducció serena a recursos d'atenció, calma i preparació interna davant situacions que generen tensió.",
      },
      {
        date: "28 set",
        time: "18:00",
        title: "Estudi i exàmens",
        text: "Una sessió grupal per a explorar focus, confiança i assaig mental abans de reptes acadèmics o proves importants.",
      },
      {
        date: "5 oct",
        time: "18:00",
        title: "Hàbits i control del pes",
        text: "Un espai per a parlar de motivació, repetició i relació amb les rutines quotidianes des d'un enfocament no clínic.",
      },
    ],
    empty: "Ara mateix no hi ha dates obertes.",
    emptyText:
      "Estic preparant el calendari de tallers. Si vols que t'avise quan es publiquen, escriu-me i t'ho conte.",
    cta: "Vull assistir",
  },
  journal: {
    title: "Blog",
    intro:
      "Textos breus per a entendre millor la hipnosi, els hàbits i el canvi personal. Mai diagnòstics ni receptes.",
    posts: [
      {
        slug: "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
        title: "Hipnosi i canvi d'hàbits: com pot ajudar?",
        excerpt:
          "La hipnosi no esborra un hàbit. Pot ajudar-nos a assajar i reforçar noves maneres de respondre.",
      },
      {
        slug: "por-que-cuesta-cambiar-un-habito",
        title: "Per què ens costa tant canviar un hàbit?",
        excerpt: "Perquè saber què volem fer i aconseguir fer-ho no sempre són la mateixa cosa.",
      },
      {
        slug: "que-ocurre-en-el-cerebro-durante-la-hipnosis",
        title: "Què ocorre en el cervell durant la hipnosi?",
        excerpt:
          "La ciència ha observat canvis en l'atenció i la comunicació entre xarxes cerebrals, sense apagar la ment racional.",
      },
      {
        slug: "que-es-la-hipnosis",
        title: "Què és realment la hipnosi?",
        excerpt:
          "No és dormir, perdre el control ni deixar la ment en blanc. És una forma diferent de parar atenció.",
      },
      {
        title: "Expectatives realistes: què depén de cada part",
        excerpt:
          "Què puc aportar jo, què aportes tu i per què eixa frontera fa que el procés funcione millor.",
      },
    ],
    soon: "Pròximament",
    latest: "Últim article",
    readPost: "Llegir article",
    backToBlog: "Tornar al blog",
  },
  faq: {
    title: "Preguntes freqüents",
    items: [
      {
        q: "Perdré el control?",
        a: "No. En hipnosi mantens la consciència i el control. Pots parlar, moure't i detindre la sessió quan vulgues.",
      },
      {
        q: "Açò és una teràpia psicològica?",
        a: "No. És acompanyament de desenvolupament personal. No hi ha diagnòstic ni tractament de trastorns, i no substituïx l'atenció sanitària.",
      },
      {
        q: "Quantes sessions necessite?",
        a: "Depén de l'objectiu. Moltes persones treballen amb sessions soltes; per a deixar de fumar el recorregut és de tres sessions.",
      },
      {
        q: "I si no em passa res durant la sessió?",
        a: "Cada persona viu l'experiència a la seua manera. Adaptem l'enfocament i, si no és la ferramenta adequada per a tu, t'ho diré.",
      },
      {
        q: "És confidencial?",
        a: "Sí. El que compartixes queda entre nosaltres i es recullen les mínimes dades necessàries per a gestionar la cita.",
      },
      {
        q: "Quin preu té?",
        a: "La sessió individual són 60 € l'hora. El programa per a deixar de fumar són 300 € i inclou tres sessions.",
      },
    ],
  },
  contact: {
    title: "Contacte",
    intro:
      "Si tens un dubte abans de reservar, escriu-me i et responc amb calma. No cal que expliques res que no vulgues contar.",
    name: "Nom",
    email: "Correu electrònic",
    message: "El teu missatge",
    consent: "He llegit i accepte la política de privacitat.",
    send: "Enviar missatge",
    sent: "Gràcies, he rebut el teu missatge. Et respondré ben aviat.",
    note: "Formulari de mostra: encara no envia correus. Quan vulgues el connectem.",
    infoTitle: "Dades",
    area: "Sueca · despatx independent dins de Centro Sanar",
    languages: "Sessions en castellà i anglés",
    hours: "Horari d'atenció en hora peninsular",
  },
  legal: {
    title: "Informació legal",
    intro:
      "Esborrany de textos legals pendent de revisió. Falten dades identificatives, adreça i proveïdors definitius.",
    sections: [
      {
        title: "Avís legal",
        text: "Titular del lloc: Maria Cabo (Hipnosis España). Domicili, NIF i dades de contacte pendents de confirmar. El contingut d'esta web és informatiu i no constituïx assessorament sanitari.",
      },
      {
        title: "Privacitat",
        text: "Les dades que facilites s'utilitzen únicament per a respondre la teua consulta i gestionar la cita. No es recullen dades de salut a través de la web. Pots exercir els teus drets d'accés, rectificació, supressió, oposició, portabilitat i limitació escrivint a l'adreça de contacte.",
      },
      {
        title: "Galetes",
        text: "La web no utilitza galetes de perfilat. Si en el futur s'afig analítica, es demanarà el teu consentiment previ amb opció de rebuig igual de senzilla.",
      },
      {
        title: "Condicions del servici",
        text: "El servici s'adreça a persones majors de 18 anys i consistix en acompanyament de desenvolupament personal mitjançant hipnosi. Condicions de canvi, cancel·lació i reemborsament pendents de definir.",
      },
    ],
  },
  footer: {
    rights: "Tots els drets reservats.",
    disclaimer:
      "Hipnosis España oferix acompanyament de desenvolupament personal. No és un servici sanitari i no substituïx l'atenció mèdica o psicològica.",
    legal: "Informació legal",
  },
  common: {
    bookNow: "Reservar una sessió",
    bookSoon: "Les reserves en línia estaran disponibles prompte. Escriu-me mentrestant.",
    contactMe: "Escriu-me",
    draft: "Contingut provisional pendent de les teues dades definitives.",
    bookCalendar: "Reservar en el calendari",
    smokeEmail: "Vull deixar de fumar",
    smokeEmailNote: "M'escrius un email i concertem una entrevista de 20 minuts.",
  },
};

const en: Dict = {
  brand: "Hipnosis España",
  tagline: "Hypnosis for personal development",
  nav: {
    home: "Home",
    how: "How it works",
    areas: "Focus areas",
    sessions: "Sessions",
    about: "About me",
    events: "Events",
    journal: "Blog",
    faq: "FAQ",
    contact: "Contact",
    book: "Book",
  },
  home: {
    eyebrow: "Sueca · In-person sessions",
    title: "A space to change from within",
    subtitle:
      "Hypnosis-based support for adults who want real change: habits, calm, focus and confidence. Thoughtful, close and honest about what to expect.",
    ctaPrimary: "Book a session",
    ctaSecondary: "How it works",
    pillars: [
      {
        title: "Clear explanation",
        text: "You'll know what hypnosis is and isn't before deciding anything.",
      },
      {
        title: "A human presence",
        text: "Calm support, with no clinical language and no promises.",
      },
      { title: "Honest limits", text: "Personal development, not healthcare or treatment." },
    ],
    forWhomTitle: "What it often helps with",
    areasTitle: "Explore possible goals",
    areasText:
      "A guide to personal-development goals that can be explored with hypnosis, always through a non-clinical approach.",
    areasLink: "See focus areas",
    forWhom: [
      "Habits you want to let go of, such as smoking",
      "Calm in situations that tense you up",
      "Focus and motivation to sustain a change",
      "Confidence when speaking, deciding or showing up",
      "Rest and your relationship with everyday stress",
      "Preparing for specific challenges",
    ],
    journalTitle: "Latest writing",
    journalLink: "Read the journal",
    faqTitle: "Common questions",
    faqLink: "See all questions",
    finalTitle: "Shall we take the first step?",
    finalText: "You can book directly, or write first if something is unclear.",
    finalSecondary: "I have a question before booking",
  },
  how: {
    title: "How it works",
    intro:
      "Hypnosis is a state of focused attention and relaxation in which it becomes easier to work with imagination, habits and the way you respond to certain situations. You don't lose control, you don't fall asleep, and you never do anything you don't want to do.",
    stepsTitle: "The journey, step by step",
    steps: [
      {
        title: "1 · First conversation",
        text: "We talk about what you want to change, your situation, and whether this support is right for you.",
      },
      {
        title: "2 · A concrete goal",
        text: "Together we define an observable, realistic goal, clarifying what depends on me and what depends on you.",
      },
      {
        title: "3 · The hypnosis session",
        text: "A guided, calm and fully consented process. You'll remember it and can stop whenever you wish.",
      },
      {
        title: "4 · Between sessions",
        text: "Small practices to sustain the change in daily life, without overloading your schedule.",
      },
    ],
    mythsTitle: "What it is not",
    myths: [
      "It is not medical or psychological treatment.",
      "It does not replace healthcare or medication.",
      "There are no diagnoses and no promises of cure.",
      "It is not a show: no one loses their will.",
    ],
    safetyTitle: "Safety and admission",
    safetyText:
      "This service is for adults over 18. If what you need is healthcare, I will say so clearly and point you towards the right resource.",
  },
  areas: {
    title: "Focus areas",
    intro:
      "Hypnosis can be a supportive tool for personal-development goals. Each process is tailored to the person, with no diagnoses and no promises of results.",
    noticeTitle: "A personal-development approach",
    notice:
      "This support is not healthcare or psychological therapy. It does not treat disorders, provide diagnoses or replace health professionals. If your needs call for clinical care, I will tell you clearly and guide you towards the right resource.",
    items: [
      {
        title: "Fears and phobias",
        text: "We can explore how to prepare for situations that worry you and practise resources for calm, attention and confidence at your own pace.",
        note: "It does not replace the assessment or psychological treatment of a phobia or anxiety disorder.",
      },
      {
        title: "Everyday anxiety and stress",
        text: "A space to work with day-to-day tension, recover pauses and rehearse more conscious ways of responding during demanding moments.",
        note: "For intense, persistent distress or distress that affects daily life, it is important to consult a health professional.",
      },
      {
        title: "Stopping smoking",
        text: "A structured process to support your decision, strengthen your personal reasons and prepare habits that help sustain change.",
        note: "This supports habit change; it does not replace medical care or treatment for dependence.",
      },
      {
        title: "Weight management",
        text: "We can look at routines, motivation and daily habits to support wellbeing goals agreed with you.",
        note: "It is not a nutrition service and does not address eating disorders.",
      },
      {
        title: "Changes and grief",
        text: "Calm support for moving through losses or life changes, making room for what you are living through and the resources that help you move forward.",
        note: "It does not replace psychological support when grief is very intense, prolonged or affecting your wellbeing.",
      },
      {
        title: "Study and concentration",
        text: "We can work on preparation, focus and study routines to meet academic challenges with more clarity and consistency.",
        note: "It does not replace an assessment for learning or attention difficulties.",
      },
      {
        title: "Behaviour patterns",
        text: "We identify repeated responses that no longer serve you and rehearse small, concrete alternatives aligned with the change you are looking for.",
        note: "It is not treatment for behavioural or mental-health disorders.",
      },
      {
        title: "Habit building",
        text: "A space to define a realistic habit, recognise what makes it difficult and reinforce sustainable actions in everyday life.",
        note: "Pace and results depend on many factors; specific changes cannot be guaranteed.",
      },
      {
        title: "Emotional wellbeing",
        text: "We can cultivate personal resources for calm, presence and self-care, so you can relate to emotions more consciously.",
        note: "It does not replace psychological or psychiatric care when that is needed.",
      },
      {
        title: "Self-confidence",
        text: "We work on specific goals, inner dialogue and preparation to express yourself, decide or face situations that matter to you.",
        note: "It is personal-development support, not clinical treatment for self-esteem.",
      },
    ],
    closing:
      "If you are unsure whether this support is a good fit for you, write to me before booking.",
    cta: "Ask a question",
  },
  sessions: {
    title: "Sessions",
    intro:
      "One-to-one in-person sessions in Sueca, in an independent consultation room at Centro Sanar. Clear prices, no lock-in and a transparent change policy.",
    items: [
      {
        name: "Individual session",
        price: "€60",
        unit: "per hour",
        text: "One hour of hypnosis-based support, focused on the goal we have defined together.",
        points: ["60 minutes", "In person", "No lock-in"],
      },
      {
        name: "Stop-smoking programme",
        price: "€300",
        unit: "package of three sessions",
        text: "A structured three-session journey to support the decision to stop smoking and to sustain it.",
        points: ["Three sessions", "Follow-up between sessions", "Full package payment"],
      },
    ],
    policyTitle: "Before booking",
    policy: [
      "Bookings are for adults.",
      "If you're unsure whether this is right for you, write to me first.",
      "Changes and cancellations are agreed with reasonable notice.",
      "Times shown in mainland Spain time (Europe/Madrid).",
    ],
  },
  about: {
    title: "About me",
    name: "Maria Cabo",
    role: "Hypnosis facilitator for personal development",
    body: [
      "I work with adults who want to make a specific change and don't know where to start. My way of working is calm, curious and honest: understand first, propose after.",
      "I believe in realistic expectations. Hypnosis can be a useful tool for habits, attention and stress responses, but it doesn't solve everything and it doesn't replace healthcare.",
      "I work in Sueca, in Spanish and English, from an independent consultation room at Centro Sanar.",
    ],
    valuesTitle: "How I work",
    values: [
      "Consent and your own pace in every session.",
      "Plain language, no jargon.",
      "Confidentiality and minimal data.",
      "Referral when another professional is the right fit.",
    ],
  },
  events: {
    title: "Events and workshops",
    intro:
      "Introductory gatherings and group workshops, if you'd rather not start with a one-to-one session.",
    badge: "Free gathering",
    dateLabel: "Date",
    timeLabel: "Time",
    placeLabel: "Place",
    place: "Sueca · Centro Sanar",
    items: [
      {
        date: "14 Sept",
        time: "18:00",
        title: "Smoking",
        text: "A gathering to understand how smoking automatisms are maintained and how hypnosis can support change.",
      },
      {
        date: "21 Sept",
        time: "18:00",
        title: "Anxiety, fears and phobias",
        text: "A calm introduction to attention, grounding and inner preparation for situations that create tension.",
      },
      {
        date: "28 Sept",
        time: "18:00",
        title: "Study and exams",
        text: "A group session to explore focus, confidence and mental rehearsal before academic challenges or important tests.",
      },
      {
        date: "5 Oct",
        time: "18:00",
        title: "Habits and weight management",
        text: "A space to talk about motivation, repetition and everyday routines from a non-clinical perspective.",
      },
    ],
    empty: "There are no open dates right now.",
    emptyText:
      "The workshop calendar is being prepared. Write to me if you'd like to hear when dates are published.",
    cta: "I want to attend",
  },
  journal: {
    title: "Blog",
    intro:
      "Short pieces to better understand hypnosis, habits and personal change. Never diagnoses or prescriptions.",
    posts: [
      {
        slug: "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
        title: "Hypnosis and habit change: how can it help?",
        excerpt:
          "Hypnosis does not erase a habit. It can help us rehearse and strengthen new ways of responding.",
      },
      {
        slug: "por-que-cuesta-cambiar-un-habito",
        title: "Why is changing a habit so hard?",
        excerpt:
          "Because knowing what we want to do and actually doing it are not always the same thing.",
      },
      {
        slug: "que-ocurre-en-el-cerebro-durante-la-hipnosis",
        title: "What happens in the brain during hypnosis?",
        excerpt:
          "Science has observed changes in attention and communication between brain networks, without switching off rational thought.",
      },
      {
        slug: "que-es-la-hipnosis",
        title: "What is hypnosis, really?",
        excerpt:
          "It is not sleeping, losing control or emptying your mind. It is a different way of paying attention.",
      },
      {
        title: "Realistic expectations: who brings what",
        excerpt:
          "What I bring, what you bring, and why that boundary makes the process work better.",
      },
    ],
    soon: "Coming soon",
    latest: "Latest article",
    readPost: "Read article",
    backToBlog: "Back to the blog",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Will I lose control?",
        a: "No. In hypnosis you stay aware and in control. You can talk, move and stop the session whenever you want.",
      },
      {
        q: "Is this psychological therapy?",
        a: "No. It is personal development support. There is no diagnosis or treatment of disorders, and it doesn't replace healthcare.",
      },
      {
        q: "How many sessions do I need?",
        a: "It depends on the goal. Many people work with single sessions; the stop-smoking journey is three sessions.",
      },
      {
        q: "What if nothing happens during the session?",
        a: "Everyone experiences it differently. We adapt the approach, and if it isn't the right tool for you, I'll tell you.",
      },
      {
        q: "Is it confidential?",
        a: "Yes. What you share stays between us, and only the minimum data needed to manage the appointment is collected.",
      },
      {
        q: "How much does it cost?",
        a: "An individual session is €60 per hour. The stop-smoking programme is €300 and includes three sessions.",
      },
    ],
  },
  contact: {
    title: "Contact",
    intro:
      "If you have a question before booking, write to me and I'll reply calmly. You don't need to explain anything you'd rather keep private.",
    name: "Name",
    email: "Email",
    message: "Your message",
    consent: "I have read and accept the privacy policy.",
    send: "Send message",
    sent: "Thank you, your message has been received. I'll reply shortly.",
    note: "Sample form: it doesn't send emails yet. We can connect it whenever you like.",
    infoTitle: "Details",
    area: "Sueca · independent consultation room at Centro Sanar",
    languages: "Sessions in Spanish and English",
    hours: "Opening hours in mainland Spain time",
  },
  legal: {
    title: "Legal information",
    intro:
      "Draft legal texts pending review. Identification details, address and final providers are still missing.",
    sections: [
      {
        title: "Legal notice",
        text: "Site owner: Maria Cabo (Hipnosis España). Address, tax ID and contact details to be confirmed. The content of this site is informational and does not constitute health advice.",
      },
      {
        title: "Privacy",
        text: "The data you provide is used only to answer your enquiry and manage your appointment. No health data is collected through the website. You can exercise your rights of access, rectification, erasure, objection, portability and restriction by writing to the contact address.",
      },
      {
        title: "Cookies",
        text: "This site uses no profiling cookies. If analytics are added later, consent will be requested first, with refusal just as easy.",
      },
      {
        title: "Terms of service",
        text: "The service is for adults over 18 and consists of personal development support through hypnosis. Change, cancellation and refund terms are still to be defined.",
      },
    ],
  },
  footer: {
    rights: "All rights reserved.",
    disclaimer:
      "Hipnosis España offers personal development support. It is not a healthcare service and does not replace medical or psychological care.",
    legal: "Legal information",
  },
  common: {
    bookNow: "Book a session",
    bookSoon: "Online booking is coming soon. Write to me in the meantime.",
    contactMe: "Write to me",
    draft: "Placeholder content pending your final details.",
    bookCalendar: "Book in the calendar",
    smokeEmail: "I want to quit smoking",
    smokeEmailNote: "Send an email and we'll arrange a 20-minute interview.",
  },
};

const dictionaries: Record<Lang, Dict> = { es, va, en };

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "es",
  setLang: () => {},
  t: es,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem("holistico-lang") as Lang | null;
    if (stored && stored in dictionaries) setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "va" ? "ca-ES-valencia" : lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("holistico-lang", l);
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
