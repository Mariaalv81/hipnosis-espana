import type { Lang } from "@/lib/i18n";
import { servicesEs, servicesVa, servicesEn } from "./services-content";
import { professionalsEs, professionalsVa, professionalsEn } from "./professionals-content";
import { pastLivesEs, pastLivesVa, pastLivesEn } from "./past-lives-content";

const es = {
  brand: "María A. Cabo",
  tagline: "Hipnosis y desarrollo personal",
  nav: {
    home: "Inicio",
    how: "Cómo funciona",
    areas: "Ámbitos",
    professionals: "Profesionales",
    companies: "Empresas",
    sessions: "Sesiones",
    about: "Sobre mí",
    events: "Eventos",
    journal: "Blog",
    faq: "Preguntas",
    contact: "Contacto",
    book: "Reservar",
  },
  home: {
    eyebrow: "Valencia y Sueca · Presencial y a domicilio",
    title: "Un espacio para cambiar desde dentro",
    subtitle:
      "Acompañamiento con hipnosis y desarrollo personal para personas que buscan cambios reales: hábitos, calma, descanso profundo y seguridad. Con rigor científico, cercanía y expectativas claras.",
    pillars: [
      {
        title: "Evidencia y rigor",
        text: "Hipnosis clínica y ericksoniana con base científica y neurobiológica, sin mitos ni falsas promesas.",
      },
      {
        title: "Hipnosis ericksoniana",
        text: "Un acompañamiento respetuoso que activa tus propios recursos inconscientes y se adapta a tu ritmo.",
      },
      {
        title: "Límites éticos claros",
        text: "Orientado a objetivos de cambio y bienestar, sin realizar diagnósticos de trastornos psiquiátricos graves.",
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
      "Descanso e insomnio: apagar la mente y recuperar el sueño reparador",
      "Preparación de retos concretos",
    ],
    journalTitle: "Últimos escritos",
    journalLink: "Ver todos los escritos",
    faqTitle: "Dudas frecuentes",
    faqLink: "Ver todas las preguntas",
    finalTitle: "¿Damos el primer paso?",
    finalText: "Puedes reservar directamente o escribir antes si tienes alguna duda.",
    finalSecondary: "Tengo una duda antes de reservar",
    heroEyebrow: "HIPNOSIS Y DESARROLLO PERSONAL · VALENCIA Y SUECA",
    heroTitle1: "HIPNOSIS PARA CAMBIAR",
    heroTitle2: "LO QUE YA NO TE SIRVE.",
    heroTitle3: "AVANZA CON SERENIDAD.",
    heroIntro:
      "Sesiones individuales de hipnosis y desarrollo personal orientadas al cambio de hábitos, la gestión del estrés y la ansiedad cotidiana, el insomnio y la seguridad personal. Despacho en Sueca (Centro Sanar), a domicilio en Valencia ciudad y formato online.",
    heroPrimary: "RESERVAR SESIÓN",
    heroSecondary: "CÓMO FUNCIONA LA HIPNOSIS",
    heroHow: "Conocer cómo funciona la hipnosis paso a paso →",
    heroImageAlt: "Fotografía natural relacionada con la hipnosis",
    changeEyebrow: "ACOMPAÑAMIENTO INDIVIDUAL",
    changeTitle: "¿QUÉ QUIERES CAMBIAR?",
    changeCards: [
      {
        title: "ANSIEDAD COTIDIANA Y ESTRÉS",
        text: "Herramientas para gestionar mejor situaciones que generan tensión, preocupación o nerviosismo.",
        slug: "/ansiedad",
        cta: "Ver gestión de ansiedad",
      },
      {
        title: "DESCANSO E INSOMNIO",
        text: "Desactivar la alerta del cuerpo, calmar la rumiación nocturna y recuperar un sueño profundo y reparador.",
        slug: "/insomnio",
        cta: "Ver insomnio y descanso",
      },
      {
        title: "CAMBIO DE HÁBITOS",
        text: "Tabaco, alimentación, rutinas y conductas que quieres modificar de forma consciente.",
        slug: "/habitos-nerviosos",
        cta: "Ver cambio de hábitos",
      },
      {
        title: "DEJAR DE FUMAR",
        text: "Acompañamiento específico y estructurado para cambiar tu relación con el tabaco en 3 sesiones.",
        slug: "/dejar-de-fumar",
        cta: "Ver apoyo antitabaco",
      },
      {
        title: "CONFIANZA Y AUTOESTIMA",
        text: "Trabajar seguridad personal, diálogo interno y respuesta serena ante situaciones exigentes.",
        slug: "/autoestima-y-confianza",
        cta: "Ver autoestima y confianza",
      },
      {
        title: "ESTUDIO Y RENDIMIENTO",
        text: "Concentración, preparación ante exámenes, foco mental y gestión de la presión.",
        slug: "/concentracion-y-foco",
        cta: "Ver estudio y rendimiento",
      },
    ],
    changeLink: "VER TODOS LOS ÁMBITOS",
    hypnosisEyebrow: "MÉTODO Y EVIDENCIA",
    hypnosisTitle: "HIPNOSIS CLÍNICA: UN PROCESO SERIO, CIENTÍFICAMENTE AVALADO.",
    hypnosisText1:
      "La hipnosis clínica y ericksoniana es un estado de atención focalizada respaldado por la neurociencia moderna. Lejos de los mitos del espectáculo, es un procedimiento estructurado donde permaneces plenamente consciente y en control en todo momento, facilitando cambios profundos en hábitos, respuestas automáticas ante la tensión y patrones de conducta.",
    hypnosisText2:
      "A través de la hipnosis ericksoniana no se imponen soluciones externas ni fórmulas mágicas: activamos tus propios recursos internos para aprender a responder con serenidad ante situaciones de estrés o bloqueo. Trabajamos sobre objetivos personales y de bienestar con el máximo rigor ético y profesional, sin realizar diagnósticos psiquiátricos de trastornos mentales graves.",
    hypnosisLink: "CÓMO FUNCIONA LA HIPNOSIS",
    hypnosisImageAlt: "Fotografía de sesión tranquila",
    contextsTitle: "DOS CONTEXTOS. UNA MISMA IDEA: CAMBIAR CÓMO RESPONDEMOS.",
    individualTitle: "SESIONES INDIVIDUALES",
    individualText:
      "Trabajo personalizado para abordar hábitos, confianza, miedos, foco y otros objetivos de desarrollo personal.",
    individualLink: "VER SESIONES",
    companiesTitle: "DESARROLLO Y RENDIMIENTO",
    companiesText:
      "Programas y talleres para ayudar a las personas a gestionar mejor su atención, confianza, aprendizaje y respuesta ante presión.",
    companiesLink: "SOLUCIONES PARA EMPRESAS",
    processEyebrow: "EL PROCESO",
    processTitle: "CLARO, PERSONAL Y PRÁCTICO.",
    processSteps: [
      {
        title: "ENTENDEMOS EL OBJETIVO",
        text: "Primero hablamos de qué quieres cambiar y en qué situaciones aparece el patrón actual.",
      },
      {
        title: "TRABAJAMOS CON HIPNOSIS",
        text: "La sesión se adapta a tu objetivo y a tu forma de responder.",
      },
      {
        title: "INTEGRAMOS EL CAMBIO",
        text: "Observamos lo aprendido e incorporamos prácticas sencillas entre sesiones.",
      },
    ],
    aboutEyebrow: "MARÍA CABO",
    aboutTitle: "UNA FORMA CERCANA Y RIGUROSA DE TRABAJAR CON EL CAMBIO.",
    aboutText:
      "Mi trabajo parte de una certeza: muchas veces sabemos racionalmente qué queremos hacer, pero nuestro cuerpo y mente automática reaccionan de otra manera. Formada en el Instituto Erickson Madrid en Hipnosis Ericksoniana, empleo estas disciplinas para intervenir sobre esos patrones profundos, facilitando cambios sólidos y sostenibles con total seguridad, cercanía y rigor profesional.",
    aboutLink: "CONOCERME",
    aboutImageAlt: "María A. Cabo",
    eventsTitle: "ENCUENTROS",
    eventsLink: "VER EVENTOS",
    eventsEmpty: "Próximas fechas en preparación.",
    learnTitle: "APRENDER",
    learnLink: "VER TODOS LOS ARTÍCULOS",
    faqHomeTitle: "ENTENDER LA HIPNOSIS",
    faqHomeLink: "VER PREGUNTAS FRECUENTES",
    ctaTitle: "EL CAMBIO PUEDE EMPEZAR POR UNA CONVERSACIÓN.",
    ctaPrimary: "RESERVAR UNA SESIÓN",
    ctaSecondary: "PREGUNTAR ANTES DE RESERVAR",
    ctaCompanies: "¿Representas a una empresa? Ver soluciones para organizaciones →",
  },
  companiesPage: {
    seoTitle: "Programas de desarrollo profesional para empresas · María A. Cabo",
    seoDescription:
      "Talleres y programas para trabajar atención, confianza, aprendizaje, hábitos y preparación ante situaciones profesionales exigentes.",
    heroTitle: "DESARROLLO PROFESIONAL",
    heroLead:
      "Atención, confianza, aprendizaje y cambio de hábitos aplicados al entorno profesional.",
    heroText:
      "Diseño talleres y programas que utilizan herramientas de hipnosis, atención focalizada y cambio de patrones para ayudar a las personas a trabajar de forma más consciente frente a situaciones de presión, distracción, inseguridad o bloqueo.",
    heroPrimary: "HABLAR SOBRE UN PROGRAMA",
    heroSecondary: "FORMATOS PARA EMPRESAS",
    heroImageAlt: "Equipo trabajando",
    leadTitle: 'CUANDO "SABER QUÉ HACER" NO ES SUFICIENTE',
    leadText:
      "En muchas situaciones profesionales, el problema no es la falta de conocimientos. Gran parte de nuestro comportamiento funciona mediante asociaciones, expectativas y respuestas automatizadas. Trabajar sobre esos patrones complementa la formación tradicional y ayuda a desarrollar nuevas formas de responder.",
    areasEyebrow: "ÁREAS DE TRABAJO",
    areas: [
      {
        title: "CONFIANZA PROFESIONAL",
        text: "Presentaciones, reuniones, entrevistas y situaciones de exposición.",
      },
      {
        title: "FOCO Y ATENCIÓN",
        text: "Hábitos de concentración, recuperación del foco y gestión de distracciones.",
      },
      {
        title: "APRENDIZAJE",
        text: "Crear condiciones mentales y hábitos favorables para incorporar nuevas habilidades.",
      },
      {
        title: "GESTIÓN DE LA PRESIÓN",
        text: "Preparación mental para rendir en situaciones exigentes.",
      },
      {
        title: "CAMBIO DE HÁBITOS",
        text: "Reducir automatismos que dificultan el trabajo y construir hábitos útiles.",
      },
      {
        title: "PREPARACIÓN MENTAL",
        text: "Intervenciones diseñadas para situaciones concretas: negociaciones, certificaciones o mediación de conflictos.",
      },
    ],
    formatsTitle: "FORMATOS PARA EMPRESAS",
    formats: [
      {
        title: "SESIONES INTRODUCTORIAS",
        text: "45–60 minutos. Introducción práctica a la atención y los automatismos.",
      },
      {
        title: "TALLERES",
        text: "90 minutos – 3 horas. Sesiones prácticas centradas en una habilidad concreta.",
      },
      {
        title: "PROGRAMAS",
        text: "Varias sesiones con seguimiento cuando se requiere práctica y consolidación.",
      },
      {
        title: "SESIONES INDIVIDUALES",
        text: "Sesiones dentro de programas para personas que necesitan trabajo más personalizado.",
      },
    ],
    confidentialityTitle: "CONFIDENCIALIDAD, CONSENTIMIENTO Y OBJETIVOS COMPARTIDOS",
    confidentialityParagraphs: [
      "Las sesiones individuales son un espacio privado y confidencial entre el profesional y el empleado. La empresa puede participar en la definición del objetivo general del programa, pero el contenido de las conversaciones y de las sesiones no se comparte con la organización.",
      "El trabajo parte siempre del consentimiento del empleado. La hipnosis no se utiliza para modificar sus valores, su personalidad, sus opiniones ni para inducir comportamientos que no desea. Al contrario: es una herramienta orientada a ayudar a la persona a desarrollar un mayor control sobre determinadas respuestas automáticas, emociones o hábitos que ella misma quiere cambiar.",
      "Los objetivos deben, por tanto, tener sentido para ambas partes: pueden favorecer el desarrollo profesional y, al mismo tiempo, representar una mejora real para la persona.",
    ],
    exampleTitle: "Ejemplo",
    exampleText:
      "Una empresa quiere promocionar a un empleado a un puesto que implica viajar con mayor frecuencia, pero esa persona tiene un miedo intenso a volar. La empresa y el empleado pueden acordar que trabajar ese miedo sería beneficioso para su nueva responsabilidad. A partir de ahí, las sesiones y conversaciones se mantienen de forma privada, y el proceso solo se realiza si el empleado desea trabajar ese objetivo y da su consentimiento.",
    exampleSummary:
      "La empresa acuerda el objetivo. El empleado decide participar. La sesión permanece privada.",
    processAria: "Cómo trabajamos con organizaciones",
    processTitle: "CÓMO ES UNA SESIÓN O TALLER",
    processSteps: [
      {
        title: "DEFINIMOS EL OBJETIVO.",
        text: "Hablamos con la organización para entender la situación y el resultado esperado.",
      },
      {
        title: "EXPLICAMOS CÓMO FUNCIONA.",
        text: "Qué es la hipnosis, qué se puede esperar y qué no ocurre durante el proceso.",
      },
      {
        title: "PRACTICAMOS.",
        text: "Ejercicios de atención, visualizaciones y preparación mental adecuados al objetivo.",
      },
      {
        title: "LO TRASLADAMOS AL TRABAJO REAL.",
        text: "Buscamos que las herramientas se utilicen en situaciones profesionales concretas.",
      },
    ],
    finalTitle: "HABLEMOS DE TU EQUIPO",
    finalText:
      "Cuéntame qué quieres mejorar y valoraremos si este enfoque tiene sentido para vuestra organización.",
    finalCta: "SOLICITAR UNA CONVERSACIÓN",
    aboutLink: "CONOCER MÁS SOBRE MARÍA",
  },
  companiesContact: {
    seoTitle: "Hablar sobre un programa para empresas · María A. Cabo",
    seoDescription:
      "Formulario para empresas interesadas en talleres o programas de desarrollo profesional con María A. Cabo.",
    eyebrow: "Empresas",
    title: "Hablar sobre un programa",
    intro:
      "Cuéntame el contexto de la organización para valorar si un taller o programa puede encajar con vuestro objetivo.",
    fields: {
      company: "Empresa",
      contactName: "Persona de contacto",
      role: "Cargo",
      email: "Email",
      phone: "Teléfono",
      employees: "Nº de empleados",
      objective: "Objetivo del programa",
      format: "Formato de interés",
      participants: "Participantes previstos",
      message: "Mensaje",
    },
    objectivePlaceholder: "Ej. mejorar foco, preparar presentaciones, gestionar presión...",
    formatPlaceholder: "Selecciona una opción",
    formats: [
      "Sesión introductoria",
      "Taller",
      "Programa de varias sesiones",
      "Sesiones individuales dentro de empresa",
      "No lo tengo claro",
    ],
    consent: "He leído y acepto la política de privacidad.",
    send: "Enviar consulta de empresa",
    sent: "Gracias, he recibido la consulta. Te responderé para valorar el encaje.",
    mailto: "Enviar por correo",
    asideTitle: "Para preparar la conversación",
    asideItems: [
      "El objetivo puede ser individual, grupal o de equipo.",
      "El formato se ajusta al tamaño del grupo y al contexto de trabajo.",
      "No se comparten contenidos privados de sesiones individuales con la empresa.",
    ],
    back: "Volver a empresas",
    emailSubject: "Programa para empresas",
    emailSummary: "Consulta B2B desde la web",
    notProvided: "No indicado",
  },
  smokingPage: {
    seoTitle: "Programa para dejar de fumar con hipnosis en Valencia y Sueca · María A. Cabo",
    seoDescription:
      "Programa estructurado de tres sesiones de hipnosis para dejar de fumar en Sueca o a domicilio en Valencia ciudad. Entrevista previa gratuita de 20 minutos sin compromiso.",
    eyebrow: "PROGRAMA ANTITABACO",
    title: "DEJAR DE FUMAR CON HIPNOSIS",
    subtitle:
      "Un recorrido estructurado para cambiar automatismos, desactivar disparadores cotidianos y sostener tu decisión con calma.",
    introText:
      "Fumar no suele ser una decisión consciente: funciona a través de patrones automáticos construidos durante años. Con hipnosis trabajamos precisamente con esa parte involuntaria, para que soltar el tabaco no sea una batalla agotadora contra ti mismo.",
    ctaPrimary: "SOLICITAR ENTREVISTA PREVIA",
    ctaSecondary: "CÓMO ES EL PROGRAMA",
    whyTitle: '¿POR QUÉ LA "FUERZA DE VOLUNTAD" NO SUELE SER SUFICIENTE?',
    whyParagraphs: [
      "La mayoría de las personas que quieren dejar de fumar saben perfectamente por qué deberían hacerlo: salud, dinero, libertad, olor. Sin embargo, en cuanto aparece el estrés, el café de la mañana o una sobremesa con amigos, el cuerpo y la mente activan la respuesta automática antes de que la razón intervenga.",
      "El problema no es que te falte voluntad o carácter. El problema es que el hábito del tabaco se sostiene en asociaciones neuronales profundas que operan de forma automática. Intentar frenarlo únicamente con fuerza de voluntad constante genera tensión, irritabilidad y desgaste.",
      "La hipnosis permite intervenir en el nivel donde se originan esos automatismos: ayuda a desconectar las asociaciones que vinculan el tabaco con la calma o el placer, y a sustituirlas por respuestas saludables y tranquilas.",
    ],
    programTitle: "ESTRUCTURA DEL PROGRAMA (3 SESIONES)",
    programIntro:
      "Un proceso claro, con inicio y fin, diseñado para darte autonomía y evitar dependencias.",
    steps: [
      {
        num: "01",
        title: "ENTREVISTA PREVIA DE 20 MINUTOS",
        badge: "Gratuita y sin compromiso",
        text: "Hablamos por teléfono o videollamada para conocer tu relación con el tabaco, tus motivaciones personales y resolver todas tus dudas antes de empezar.",
      },
      {
        num: "02",
        title: "SESIÓN 1 · EL DÍA DEL CAMBIO",
        badge: "Sueca o a domicilio (75 min)",
        text: "Trabajamos en profundidad tus motivos personales, desactivamos los disparadores cotidianos y anclamos el nuevo estado de no fumador.",
      },
      {
        num: "03",
        title: "SESIÓN 2 · CONSOLIDACIÓN Y CALMA",
        badge: "Sueca o a domicilio (60 min)",
        text: "Evaluamos los primeros días sin fumar, reforzamos la sensación de bienestar, gestionamos posibles picos de tensión y afianzamos nuevas respuestas.",
      },
      {
        num: "04",
        title: "SESIÓN 3 · AUTONOMÍA Y PREVENCIÓN",
        badge: "Sueca o a domicilio (60 min)",
        text: "Proyección a largo plazo, herramientas para situaciones sociales o de estrés imprevisto y cierre del proceso con total independencia.",
      },
    ],
    includedTitle: "QUÉ INCLUYE EL PROGRAMA",
    includedItems: [
      "Entrevista previa de valoración de 20 minutos sin coste.",
      "3 sesiones individuales e intensivas (en Sueca o a domicilio en Valencia).",
      "Grabación de audio de refuerzo personalizada para escuchar en casa.",
      "Seguimiento y apoyo cercano entre sesiones.",
      "Pautas de respiración y autohipnosis para momentos puntuales de tensión.",
    ],
    price: "300 €",
    priceNote:
      "Precio cerrado por el paquete completo de las tres sesiones y todo el material de apoyo.",
    formEyebrow: "ENTREVISTA PREVIA",
    formTitle: "SOLICITAR ENTREVISTA DE 20 MINUTOS",
    formSubtitle:
      "Rellena este breve formulario y me pondré en contacto contigo para concertar la llamada sin ningún compromiso.",
    formFields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      preferredTime: "Horario preferido para la llamada",
      preferredTimePlaceholder: "Selecciona una opción",
      timeOptions: [
        "Mañanas (09:00 - 13:00)",
        "Mediodía (13:00 - 16:00)",
        "Tardes (16:00 - 20:00)",
        "Indiferente / Cualquier horario",
      ],
      preferredMethod: "Medio preferido",
      methodOptions: ["Llamada telefónica", "Videollamada"],
      habitDetails: "¿Cuánto fumas habitualmente? (Opcional)",
      habitDetailsPlaceholder: "Ej. 1 paquete al día desde hace 10 años, fumo más por estrés...",
      message: "¿Alguna duda o comentario adicional? (Opcional)",
      messagePlaceholder: "¿Hay algo que quieras consultar antes de la llamada?",
      consent: "He leído y acepto la política de privacidad.",
      submit: "Solicitar entrevista previa gratuita",
      submitting: "Enviando solicitud...",
      success:
        "Gracias. He recibido tu solicitud. Te llamaré o escribiré en breve para confirmar el horario de la entrevista.",
      fallbackMailto: "Enviar por correo electrónico",
    },
    faqTitle: "PREGUNTAS FRECUENTES SOBRE EL PROGRAMA",
    faqs: [
      {
        q: "¿Dejaré de fumar desde la primera sesión?",
        a: "El objetivo es que dejes de fumar en la primera sesión presencial. La entrevista previa nos permite preparar ese momento para que llegues decidido, y las sesiones 2 y 3 sirven para consolidar el cambio y asegurar que te mantienes sin fumar sin sufrimiento.",
      },
      {
        q: "¿Tendré ansiedad o ganas incontrolables de fumar?",
        a: "La hipnosis ayuda precisamente a reducir el componente de ansiedad psicológica asociado a la abstinencia. Te daremos además una grabación de refuerzo y pautas sencillas de calma para los momentos puntuales.",
      },
      {
        q: "¿Qué pasa si no funciona o tengo dudas?",
        a: "Por eso realizamos la entrevista previa gratuita de 20 minutos: para evaluar honestamente tu caso. Si consideramos que no es el momento adecuado o que necesitas otro tipo de acompañamiento, te lo diré con total transparencia.",
      },
      {
        q: "¿Dónde se realizan las sesiones?",
        a: "Las sesiones presenciales se realizan en mi despacho dentro del Centro Sanar en Sueca (Valencia) o a domicilio en casas de particulares en Valencia ciudad (consultar suplemento por desplazamiento según zona). La entrevista previa de 20 minutos se realiza cómodamente por teléfono o videollamada.",
      },
    ],
  },
  anxietyPage: {
    seoTitle:
      "Gestión de la Ansiedad Cotidiana y Miedos en Valencia y Sueca · Hipnosis | María A. Cabo",
    seoDescription:
      "Aprende a gestionar la ansiedad cotidiana, calmar la tensión y trabajar miedos (volar, conducir, hablar en público) con hipnosis en Sueca, Valencia y online. 70 €/sesión.",
    eyebrow: "HIPNOSIS Y DESARROLLO PERSONAL · VALENCIA Y SUECA",
    eyebrowNav: "Gestión de Ansiedad y Miedos",
    title: "GESTIONAR LA ANSIEDAD COTIDIANA, CALMAR LA TENSIÓN Y TRABAJAR MIEDOS",
    subtitle:
      "Aprende a responder de otra manera ante situaciones que generan tensión, preocupación o bloqueo, enseñando a tu cuerpo a recuperar la calma.",
    introText:
      "Opresión en el pecho, respiración corta, mente que anticipa preocupaciones o bloqueo ante situaciones como volar, conducir o hablar en público. Cuando el estrés y la preocupación se repiten, el cuerpo reacciona de forma refleja antes de que la razón intervenga. Con hipnosis clínica y desarrollo personal trabajamos en ese nivel de respuestas automáticas: facilitamos recursos para que tu cuerpo recuerde la calma, aprendas a responder con serenidad ante los disparadores de tensión y recuperes tu tranquilidad cotidiana de forma respetuosa y natural.",
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA HIPNOSIS",
    trustBadges: [
      "Acompañamiento respetuoso y natural",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Sesiones individuales de 1h · 70 € (a tu propio ritmo)",
    ],
    symptomsTitle: "CUANDO EL CUERPO VIVE EN ESTADO DE ALERTA CONTINUO",
    symptomsSubtitle:
      "La ansiedad no es una debilidad ni una falta de carácter; es tu sistema nervioso interpretando amenazas en piloto automático.",
    symptoms: [
      {
        title: "Tensión física y opresión",
        text: "Opresión en el pecho o garganta, respiración entrecortada, mandíbula apretada, mareo tensional o nudo en el estómago.",
      },
      {
        title: "Mente acelerada y rumiación",
        text: "Pensamientos anticipatorios en bucle, preocupación desmedida por el futuro y dificultad para frenar el flujo mental.",
      },
      {
        title: "Miedos y fobias específicas",
        text: "Bloqueo y pánico ante situaciones concretas: miedo a volar, conducir en autovías o túneles (amaxofobia), agujas o hablar en público.",
      },
      {
        title: "Miedo a desbordarse y evitación",
        text: "Temor a perder el control, crisis de angustia o cancelar planes y viajes para evitar la sensación de agobio.",
      },
    ],
    whyTitle: "¿POR QUÉ NO BASTA CON DECIRTE 'CÁLMATE'?",
    whyParagraphs: [
      "La mayoría de las personas con ansiedad ya saben que sus preocupaciones son exageradas. La razón lo entiende, pero el cuerpo no obedece: el corazón se acelera, el aire parece no entrar y los músculos se tensan. ¿Por qué ocurre esto?",
      "Porque la respuesta de ansiedad se origina en el sistema nervioso autónomo (la rama simpática o modo 'lucha o huida'), una red primitiva encargada de tu supervivencia que no responde al lenguaje lógico de los pensamientos conscientes. Intentar frenar la ansiedad obligándote a 'pensar positivo' suele generar más impotencia y frustración.",
      "La hipnosis funciona porque utiliza el mismo lenguaje que tu sistema nervioso: el de la atención focalizada, las señales sensoriales y la distensión somática. Al inducir un estado de relajación profunda guiada, activamos de manera natural el sistema parasimpático (el freno neurobiológico del estrés), enseñando al cuerpo a apagar la alarma y creando nuevos circuitos neuronales de calma.",
    ],
    pillarsTitle: "EL PROCESO PARA ENSEÑAR A TU CUERPO A ESTAR EN CALMA",
    pillarsIntro:
      "Un acompañamiento práctico, individual y enfocado en darte autonomía desde la primera sesión.",
    steps: [
      {
        num: "01",
        badge: "Regulación corporal",
        title: "DESACTIVAR EL MODO ALERTA",
        text: "Rompemos el patrón fisiológico de hipervigilancia. Tu cuerpo experimenta seguridad física profunda real, reduciendo de inmediato la activación del estrés.",
      },
      {
        num: "02",
        badge: "Nivel subconsciente",
        title: "REPROGRAMAR DISPARADORES",
        text: "Identificamos los detonantes que disparaban la angustia (situaciones cotidianas, recuerdos, exigencias) y desvinculamos la respuesta automática de miedo.",
      },
      {
        num: "03",
        badge: "Recursos prácticos",
        title: "ANCLAJES DE SERENIDAD INSTANTÁNEA",
        text: "Instalamos en sesión anclajes neurofisiológicos: señales físicas y mentales que puedes activar tú mismo/a en cualquier momento del día para frenar un pico de ansiedad.",
      },
      {
        num: "04",
        badge: "Para toda la vida",
        title: "AUTOHIPNOSIS Y AUTONOMÍA",
        text: "Aprendes pautas de autohipnosis y respiración para gestionar tu bienestar en tu día a día, a tu ritmo y sin crear dependencias.",
      },
    ],
    locationsTitle: "DÓNDE REALIZAMOS LAS SESIONES",
    locationsIntro:
      "Atención cercana en la comarca de la Ribera Baixa y Valencia, adaptada a tus preferencias:",
    locations: [
      {
        name: "Despacho en Sueca (Centro Sanar)",
        area: "Ribera Baixa",
        desc: "Espacio sereno, independiente y confidencial en Sueca. De muy fácil acceso para personas de Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara y El Perelló.",
      },
      {
        name: "A domicilio en Valencia ciudad",
        area: "Valencia capital y alrededores",
        desc: "Ideal si los desplazamientos te generan agobio o prefieres trabajar desde la comodidad y privacidad absoluta de tu propio hogar en Valencia.",
      },
      {
        name: "Sesiones Online en directo",
        area: "Cualquier ubicación",
        desc: "Por videoconferencia individual en directo, con la misma eficacia y guiada paso a paso desde el espacio donde te sientas más tranquilo/a.",
      },
    ],
    pricingTitle: "PRECIOS CLAROS Y CONDICIONES TRANSPARENTES",
    price: "70 €",
    priceUnit: "por sesión (1 hora)",
    pricingFeatures: [
      "Sesión individual y personalizada de 60 minutos.",
      "Sueca (Centro Sanar), a domicilio en Valencia ciudad u online.",
      "A tu propio ritmo: sin paquetes obligatorios ni compromisos cerrados.",
      "Pautas de autohipnosis y ejercicios prácticos entre sesiones.",
      "Resolución de dudas previa sin compromiso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "DA EL PRIMER PASO HACIA LA CALMA",
    formSubtitle:
      "Rellena este breve formulario para consultar tus dudas o solicitar tu sesión. Te responderé personalmente con total cercanía.",
    formFields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      modality: "Modalidad de atención preferida",
      modalityOptions: [
        "Despacho en Sueca (Centro Sanar)",
        "A domicilio en Valencia ciudad",
        "Sesión Online (Videollamada)",
        "Aún no lo tengo claro / Prefiero consultarlo",
      ],
      symptoms: "¿En qué momentos o situaciones notas más la ansiedad? (Opcional)",
      symptomsPlaceholder:
        "Ej. En el trabajo, al conducir, para dormir, opresión en el pecho constante...",
      message: "¿Alguna duda o detalle que quieras comentar? (Opcional)",
      messagePlaceholder: "Escribe aquí cualquier consulta previa...",
      consent: "He leído y acepto la política de privacidad.",
      submit: "Enviar consulta / Solicitar sesión",
      submitting: "Enviando mensaje...",
      success:
        "Gracias por tu mensaje. Lo he recibido correctamente y me pondré en contacto contigo lo antes posible para atender tu caso.",
      fallbackMailto: "Enviar por correo electrónico",
    },
    faqTitle: "PREGUNTAS FRECUENTES SOBRE HIPNOSIS Y ANSIEDAD",
    faqs: [
      {
        q: "¿Cómo ayuda exactamente la hipnosis a reducir la ansiedad?",
        a: "La hipnosis actúa directamente sobre la respuesta neurobiológica del estrés. Mientras que conscientemente intentas 'tranquilizarte' sin éxito, en hipnosis accedemos a un estado donde el sistema parasimpático toma el control, permitiendo que el cuerpo desactive la tensión muscular, regule la respiración y desaprenda las asociaciones automáticas de alarma.",
      },
      {
        q: "¿Voy a perder el control o quedarme inconsciente durante la sesión?",
        a: "No, en absoluto. La hipnosis clínica y ericksoniana no tiene nada que ver con los espectáculos de televisión. Estarás plenamente consciente en todo momento, escucharás mi voz, podrás hablar, moverte y decidir qué decir. Se trata de un estado de atención focalizada y profunda relajación voluntaria.",
      },
      {
        q: "¿En cuántas sesiones se suele notar el cambio?",
        a: "Muchas personas experimentan un alivio significativo y una profunda sensación de ligereza corporal desde la primera sesión. Como no hay compromisos obligatorios, valoramos juntos tras cada sesión y avanzas a tu propio ritmo según tu evolución personal.",
      },
      {
        q: "¿Es compatible si ya tomo medicación ansiolítica o voy al psicólogo?",
        a: "Sí, es compatible. La hipnosis clínica y el desarrollo personal son herramientas rigurosas orientadas a potenciar tus propios recursos de autorregulación. No realizamos diagnósticos clínicos de trastornos mentales graves ni sustituimos los tratamientos médicos o psiquiátricos, colaborando o respetando siempre las indicaciones de tus facultativos.",
      },
      {
        q: "¿Realizas sesiones en Sueca, la Ribera Baixa y Valencia?",
        a: "Sí. Atiendo presencialmente en mi despacho del Centro Sanar en Sueca (muy accesible desde Cullera, Alzira, Algemesí, Sollana, etc.), a domicilio en casas de particulares en Valencia ciudad para mayor comodidad, y en formato online para cualquier ubicación.",
      },
    ],
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
    mythsTitle: "Mitos y realidades",
    myths: [
      "No es un espectáculo: nadie pierde la voluntad ni el control.",
      "No realizamos diagnósticos clínicos de trastornos mentales graves.",
      "No sustituye la atención médica o psiquiátrica ante patologías severas.",
      "Es un proceso serio, activo y respaldado por la evidencia científica.",
    ],
    safetyTitle: "Seguridad y límites claros",
    safetyText:
      "El servicio se dirige a personas mayores de 18 años. Si tu situación requiere atención médica o psiquiátrica preferente, te lo indicaré con total claridad y honestidad profesional.",
  },
  areas: {
    title: "Ámbitos de acompañamiento",
    intro:
      "Ocho áreas principales donde la hipnosis y el desarrollo personal ayudan a reorganizar respuestas automáticas, hábitos y formas de afrontar la vida con serenidad y aplomo.",
    noticeTitle: "Rigor profesional y límites éticos",
    notice:
      "Las sesiones de hipnosis y desarrollo personal están orientadas al cambio personal y el bienestar emocional. No sustituyen la atención médica, psicológica o psiquiátrica ante patologías severas, ni realizamos diagnósticos clínicos de trastornos mentales graves. Si tu caso requiere atención médica o psiquiátrica especializada, te orientaremos con total transparencia.",
    items: [
      {
        title: "Estrés, calma e insomnio",
        text: "Entrenar recursos de relajación profunda para desactivar la alerta del sistema nervioso, calmar la rumiación nocturna y favorecer un sueño reparador y natural.",
        slug: "/insomnio",
        cta: "Ver hipnosis para insomnio y estrés",
      },
      {
        title: "Dejar de fumar",
        text: "Un recorrido específico y estructurado para cambiar automatismos, desactivar disparadores cotidianos y sostener tu decisión con calma.",
        slug: "/dejar-de-fumar",
        cta: "Ver programa antitabaco",
      },
      {
        title: "Hábitos y relación con la comida",
        text: "Trabajar sobre hábitos, impulsos, rutinas y comportamientos relacionados con la alimentación y la saciedad corporal real.",
        slug: "/control-de-peso",
        cta: "Ver hábitos y alimentación",
      },
      {
        title: "Hábitos nerviosos y morderse las uñas",
        text: "Modificar automatismos involuntarios como morderse las uñas (onicofagia), bruxismo diurno o tensión inconsciente.",
        slug: "/habitos-nerviosos",
        cta: "Ver hábitos nerviosos",
      },
      {
        title: "Gestión de ansiedad y miedos",
        text: "Aprender a responder con serenidad ante situaciones cotidianas de tensión o temores concretos como volar, conducir o hablar en público.",
        slug: "/ansiedad",
        cta: "Ver gestión de ansiedad y miedos",
      },
      {
        title: "Autoestima y confianza",
        text: "Trabajar seguridad personal, superar la inseguridad, poner límites y expresarte con claridad y aplomo.",
        slug: "/autoestima-y-confianza",
        cta: "Ver autoestima y confianza",
      },
      {
        title: "Concentración, foco y estudio",
        text: "Preparación de oposiciones, exámenes exigentes y proyectos entrenando concentración, claridad mental y gestión de la presión.",
        slug: "/concentracion-y-foco",
        cta: "Ver foco y concentración",
      },
      {
        title: "Deporte y motivación",
        text: "Entrenar el estado de flujo, la visualización mental de gestos técnicos, constancia en entrenamientos y calma en competición.",
        slug: "/deporte-y-motivacion",
        cta: "Ver deporte y motivación",
      },
    ],
    closing:
      "Si tienes dudas sobre si este acompañamiento encaja contigo, escríbeme antes de reservar.",
    cta: "Resolver una duda",
  },
  sessions: {
    title: "Sesiones",
    intro:
      "Sesiones individuales presenciales en Sueca (Centro Sanar), a domicilio en casas de particulares en Valencia ciudad, u online por videoconferencia. Precios claros y con política de cambios transparente.",
    items: [
      {
        name: "Sesión individual",
        price: "70 €",
        unit: "por hora",
        text: "Una hora de acompañamiento con hipnosis y desarrollo personal para trabajar descanso, estrés, gestión de la ansiedad cotidiana, miedos, hábitos o el objetivo que definamos.",
        points: [
          "Duración de 60 minutos",
          "Sueca, a domicilio en Valencia u online",
          "A tu propio ritmo",
        ],
      },
      {
        name: "Programa para dejar de fumar",
        price: "300 €",
        unit: "paquete de tres sesiones",
        text: "Un recorrido estructurado en tres sesiones para acompañar la decisión de dejar de fumar y sostenerla.",
        points: [
          "Tres sesiones (Sueca, a domicilio o en línea)",
          "Seguimiento entre sesiones",
          "Entrevista previa gratuita de 20 min",
        ],
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
    name: "María A. Cabo",
    role: "Profesional especializada en hipnosis y desarrollo personal",
    intro:
      "Soy María Cabo, profesional especializada en hipnosis y desarrollo personal. Acompaño a personas adultas que quieren cambiar hábitos, regular el estrés y la ansiedad cotidiana, superar determinados miedos o ganar confianza y bienestar emocional utilizando la hipnosis como una herramienta rigurosa de cambio. Cuento con formación especializada en el Instituto Erickson Madrid en Hipnosis Ericksoniana, desde un enfoque cercano, práctico y respetuoso con el ritmo de cada persona.",
    traits: ["Cercanía", "Formación Ericksoniana", "Recursos útiles"],
    highlights: [
      {
        title: "Instituto Erickson Madrid",
        text: "Formación especializada en Hipnosis Ericksoniana en el Instituto Erickson Madrid.",
      },
      {
        title: "Experiencia internacional",
        text: "He vivido y trabajado entre Los Ángeles, Londres, Barcelona, Madrid y Valencia.",
      },
      {
        title: "Mirada corporativa",
        text: "Conozco retos habituales de empresas y equipos: presión, foco, confianza y comunicación.",
      },
      {
        title: "Sesiones en dos idiomas",
        text: "Trabajo en castellano e inglés, con personas y organizaciones.",
      },
    ],
    body: [
      "Acompaño a personas adultas que quieren producir un cambio concreto y no saben por dónde empezar. Mi manera de trabajar es tranquila, curiosa y honesta: primero entender, luego proponer.",
      "Creo en las expectativas realistas. La hipnosis es una herramienta muy útil para trabajar hábitos, atención y respuesta al estrés, pero no lo resuelve todo ni sustituye a la atención sanitaria.",
      "Trabajo en Sueca, en castellano e inglés, en un despacho independiente dentro del Centro Sanar, a domicilio en casas de particulares en Valencia ciudad y en formato online.",
    ],
    valuesTitle: "Cómo trabajo",
    valuesSidebarTitle: "En cada sesión",
    values: [
      "Escucha y respeto por cada persona.",
      "Objetivos claros y expectativas realistas.",
      "Participación activa durante todo el proceso.",
      "Confidencialidad.",
      "Herramientas prácticas para el día a día.",
    ],
    controlNote:
      "La persona mantiene siempre la consciencia, la participación y el control sobre la experiencia.",
    statement:
      "Mi trabajo consiste en acompañar a cada persona a explorar sus patrones y ofrecerle herramientas para responder de una manera más útil para ella.",
    workEyebrow: "Mi forma de trabajar",
    workTitle: "La hipnosis como herramienta, no como fórmula mágica.",
    workText:
      "Entiendo la hipnosis como un recurso para facilitar procesos de cambio, observar respuestas automáticas y entrenar nuevas formas de afrontar situaciones concretas con más calma, seguridad y capacidad de elección.",
    focusAreas: [
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
    ],
    pathEyebrow: "Trayectoria",
    pathTitle:
      "Una mirada construida entre culturas, entornos profesionales y formación especializada.",
    cities: ["Los Ángeles", "Londres", "Barcelona", "Madrid", "Valencia"],
    pathParagraphs: [
      "A lo largo de mi trayectoria he trabajado en entornos corporativos e internacionales y he vivido en ciudades como Los Ángeles, Londres, Barcelona, Valencia y Madrid.",
      "Formada en el Instituto Erickson Madrid en Hipnosis Ericksoniana, una de las instituciones de referencia en España, empleo un modelo que pone el foco en los recursos inconscientes y aprendizajes previos de la propia persona para generar respuestas más adaptativas y duraderas.",
      "Esa combinación entre formación técnica especializada en hipnosis y experiencia vital en entornos de alta exigencia me ayuda a entender que detrás de cada objetivo hay una historia, una forma de responder y unas circunstancias diferentes.",
    ],
    pathExtra:
      "Mi experiencia previa en empresas internacionales me ayuda a entender retos habituales del trabajo: hablar en público, asumir responsabilidades, rendir bajo presión, mantener el foco o desenvolverse con mayor confianza en situaciones exigentes.",
    sessionsEyebrow: "Sesiones y colaboraciones",
    serviceAreaTitle: "Valencia · Sueca · Ribera Baixa · Gandia",
    sessionsTexts: [
      "Las sesiones individuales se realizan en mi despacho en Sueca o a domicilio en casas de particulares en Valencia ciudad.",
      "También realizo sesiones en formato online por videoconferencia y me desplazo a empresas y organizaciones para talleres y programas de desarrollo profesional.",
    ],
    quote:
      "Muchas veces el cambio no consiste en convertirse en otra persona, sino en dejar de estar limitado por patrones que ya no necesitamos.",
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
    upcomingTitle: "Próximos eventos",
    pastTitle: "Eventos pasados",
    pastBadge: "Evento pasado",
    items: [
      {
        dateISO: "2026-09-14",
        date: "14 sept",
        time: "18:00",
        title: "Tabaquismo",
        text: "Un encuentro para comprender cómo se sostienen los automatismos del tabaco y cómo puede acompañarse el cambio con hipnosis.",
      },
      {
        dateISO: "2026-09-21",
        date: "21 sept",
        time: "18:00",
        title: "Ansiedad, miedos y fobias",
        text: "Una introducción serena a recursos de atención, calma y preparación interna ante situaciones que generan tensión.",
      },
      {
        dateISO: "2026-09-28",
        date: "28 sept",
        time: "18:00",
        title: "Estudio y exámenes",
        text: "Una sesión grupal para explorar foco, confianza y ensayo mental antes de retos académicos o pruebas importantes.",
      },
      {
        dateISO: "2026-10-05",
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
        slug: "hipnosis-y-fobias-aprender-una-respuesta-diferente",
        title: "Hipnosis y fobias: aprender una respuesta diferente",
        excerpt:
          "Una fobia puede sentirse como una reacción automática. La hipnosis permite trabajar con esa parte más automática de la experiencia.",
      },
      {
        slug: "por-que-evitar-aquello-que-tememos-puede-mantener-el-miedo",
        title: "¿Por qué evitar aquello que tememos puede mantener el miedo?",
        excerpt:
          "Evitar aquello que nos produce miedo funciona muy bien a corto plazo. Precisamente por eso puede convertirse en parte del problema.",
      },
      {
        slug: "que-es-realmente-una-fobia",
        title: "¿Qué es realmente una fobia?",
        excerpt:
          "Tener miedo es humano. Una fobia aparece cuando ese miedo se vuelve desproporcionado y empieza a condicionar lo que hacemos.",
      },
      {
        slug: "hipnosis-y-ansiedad-aprender-una-respuesta-diferente",
        title: "Hipnosis y ansiedad: aprender una respuesta diferente",
        excerpt:
          "La hipnosis puede ofrecer un contexto diferente para trabajar con la atención, la imaginación y respuestas aprendidas.",
      },
      {
        slug: "cuando-el-cuerpo-aprende-a-estar-en-alerta",
        title: "Cuando el cuerpo aprende a estar en alerta",
        excerpt:
          "A veces la situación cambia, pero nuestro organismo continúa reaccionando como si el peligro siguiera ahí.",
      },
      {
        slug: "que-es-realmente-la-ansiedad",
        title: "¿Qué es realmente la ansiedad?",
        excerpt:
          "La ansiedad no es necesariamente algo malo. Es un mecanismo de protección que puede empezar a activarse demasiado.",
      },
      {
        slug: "como-es-una-sesion-de-hipnosis",
        title: "¿Cómo es una sesión de hipnosis?",
        excerpt:
          "Una sesión es un espacio de colaboración, no una experiencia en la que otra persona toma el control.",
      },
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
    seriesTitle: "Series de lectura",
    seriesIntro: "Lee cada serie en orden para seguir mejor el hilo de los artículos relacionados.",
    series: [
      {
        title: "Fobias y miedo aprendido",
        description:
          "Tres textos para entender qué es una fobia, por qué la evitación puede mantener el miedo y cómo puede trabajarse una respuesta diferente.",
        posts: [
          "que-es-realmente-una-fobia",
          "por-que-evitar-aquello-que-tememos-puede-mantener-el-miedo",
          "hipnosis-y-fobias-aprender-una-respuesta-diferente",
        ],
      },
      {
        title: "Ansiedad y respuestas aprendidas",
        description:
          "Tres textos para entender qué es la ansiedad, cómo se aprende la alerta y cómo puede trabajarse una respuesta diferente.",
        posts: [
          "que-es-realmente-la-ansiedad",
          "cuando-el-cuerpo-aprende-a-estar-en-alerta",
          "hipnosis-y-ansiedad-aprender-una-respuesta-diferente",
        ],
      },
      {
        title: "Entender la hipnosis",
        description:
          "Una introducción ordenada a la hipnosis, el cerebro, los hábitos y cómo puede ser una sesión.",
        posts: [
          "que-es-la-hipnosis",
          "que-ocurre-en-el-cerebro-durante-la-hipnosis",
          "por-que-cuesta-cambiar-un-habito",
          "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
          "como-es-una-sesion-de-hipnosis",
        ],
      },
    ],
    standaloneTitle: "También en el blog",
    soon: "Próximamente",
    latest: "Último artículo",
    readPost: "Leer artículo",
    backToBlog: "Volver al blog",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Voy a perder el control durante la sesión?",
        a: "No, en absoluto. En la hipnosis clínica y ericksoniana mantienes la consciencia y el control en todo momento. No tiene nada que ver con los espectáculos televisivos: puedes hablar, moverte, recordar lo sucedido y detener la sesión cuando lo desees.",
      },
      {
        q: "¿Qué es la hipnosis clínica y cuál es su aval científico?",
        a: "La hipnosis clínica es un procedimiento estructurado avalado por la neurociencia y la medicina. Consiste en un estado de atención focalizada y relajación profunda que modula la actividad cerebral y permite intervenir sobre automatismos, el estrés, los hábitos y las respuestas emocionales aprendidas.",
      },
      {
        q: "¿En qué se diferencia de un tratamiento o diagnóstico psiquiátrico?",
        a: "La hipnosis clínica y el desarrollo personal son herramientas serias enfocadas en procesos de cambio personal, bienestar emocional y superación de bloqueos. No realizamos diagnósticos clínicos de trastornos mentales graves ni sustituimos la atención médica o psiquiátrica cuando esta es necesaria.",
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Depende del objetivo y de cada persona. Muchas personas trabajan con sesiones individuales sueltas; para dejar de fumar el recorrido está estructurado en tres sesiones.",
      },
      {
        q: "¿Y si creo que no soy susceptible a la hipnosis?",
        a: "El modelo ericksoniano no busca un trance rígido ni forzado, sino que aprovecha la forma natural en que tu mente focaliza la atención. Todo el mundo experimenta trances cotidianos (como al abstraerse leyendo o conduciendo). Adaptamos el método a ti.",
      },
      {
        q: "¿Es confidencial?",
        a: "Sí. Lo que compartes en sesión se rige por un estricto compromiso de confidencialidad y secreto profesional.",
      },
      {
        q: "¿Qué precio tiene?",
        a: "La sesión individual son 70 € la hora. El programa específico para dejar de fumar son 300 € e incluye tres sesiones completas.",
      },
    ],
  },
  contact: {
    title: "Contacto",
    intro:
      "Si tienes una duda antes de reservar, escríbeme y te respondo con calma. No hace falta que expliques nada que no quieras contar.",
    phone: "Teléfono",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Tu mensaje",
    consent: "He leído y acepto la política de privacidad.",
    send: "Enviar mensaje",
    sent: "Gracias, he recibido tu mensaje. Te responderé en breve.",
    note: "Envía tu mensaje y te responderé en breve. Si prefieres, también puedes reservar directamente en el calendario.",
    infoTitle: "Datos",
    area: "Sueca (Centro Sanar) · A domicilio en Valencia ciudad · Sesiones online",
    languages: "Sesiones en castellano e inglés",
    hours: "Horario de atención en hora peninsular",
  },
  legal: {
    title: "Información legal",
    intro:
      "Información legal, privacidad y condiciones de reserva de María A. Cabo. Si necesitas una aclaración adicional, puedes escribir a maria.a.cabo@gmail.com.",
    sections: [
      {
        title: "Aviso legal",
        text: "Titular del sitio: María A. Cabo. Contacto: maria.a.cabo@gmail.com. Actividad: acompañamiento de desarrollo personal mediante hipnosis, con sesiones presenciales en Sueca dentro de un despacho independiente del Centro Sanar. El contenido publicado en esta web tiene carácter informativo y no constituye asesoramiento sanitario, psicológico, médico ni legal.",
      },
      {
        title: "Datos identificativos",
        text: "La responsable del tratamiento y titular de la actividad es María A. Cabo. El NIF, domicilio fiscal y demás datos identificativos completos se facilitarán en la contratación, factura o comunicaciones precontractuales cuando resulten necesarios. Para solicitarlos antes de contratar, escribe a maria.a.cabo@gmail.com.",
      },
      {
        title: "Privacidad y finalidad",
        text: "Los datos que facilites mediante formularios, email o solicitud de reserva se usan para responder a tu consulta, gestionar citas, preparar la prestación solicitada y mantener comunicaciones relacionadas con el servicio. No se solicitan datos de salud a través de la web; si voluntariamente incluyes información sensible en un mensaje, se tratará solo para atender tu solicitud y con la máxima confidencialidad posible.",
      },
      {
        title: "Base legal y conservación",
        text: "La base legal del tratamiento es tu consentimiento al enviar un formulario o escribir por email, la aplicación de medidas precontractuales si solicitas una sesión y, cuando proceda, el cumplimiento de obligaciones legales. Los datos se conservarán durante el tiempo necesario para gestionar la consulta o reserva y, después, durante los plazos exigibles por obligaciones fiscales, contables o de defensa de reclamaciones.",
      },
      {
        title: "Proveedores",
        text: "La web puede apoyarse en proveedores técnicos para alojamiento, analítica, calendario, protección antispam, formularios y envío o registro de mensajes: Vercel, Google Calendar, Google Analytics con consentimiento, Google reCAPTCHA cuando esté activo, Google Sheets si se usa como registro interno y SendGrid si se usa para el envío de correos. Estos proveedores tratan datos solo en la medida necesaria para prestar sus servicios.",
      },
      {
        title: "Derechos",
        text: "Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a maria.a.cabo@gmail.com. También puedes retirar tu consentimiento cuando el tratamiento dependa de él. Si consideras que tus derechos no han sido atendidos, puedes presentar una reclamación ante la Agencia Española de Protección de Datos.",
      },
      {
        title: "Cookies",
        text: "La web utiliza almacenamiento técnico necesario para recordar idioma y preferencias de consentimiento. La etiqueta de Google se inicia con el consentimiento de analítica denegado por defecto, y solo se concede si aceptas esa categoría.",
      },
      {
        title: "Condiciones de reserva, cancelación y reembolso",
        text: "El servicio se dirige a personas mayores de 18 años. La sesión individual tiene una duración aproximada de una hora y el programa para dejar de fumar incluye tres sesiones. Si necesitas cambiar o cancelar una cita, avisa con al menos 24 horas de antelación para poder reprogramarla sin coste. Las sesiones ya realizadas no son reembolsables. Los importes abonados por sesiones no realizadas podrán reprogramarse o reembolsarse si la cancelación se comunica dentro del plazo indicado o si la sesión no pudiera prestarse por causa imputable a María A. Cabo.",
      },
    ],
  },
  footer: {
    rights: "Todos los derechos reservados.",
    disclaimer:
      "María A. Cabo · Hipnosis y desarrollo personal. Acompañamiento orientado al cambio personal y bienestar emocional. No sustituye la atención médica o psiquiátrica ante patologías severas.",
    legal: "Información legal",
  },
  common: {
    bookNow: "Reservar una sesión",
    bookSoon: "Reserva directamente en el calendario o escríbeme si prefieres consultarlo.",
    bookIntro: "Reserva directamente en el calendario o escríbeme si prefieres consultarlo.",
    contactMe: "Escríbeme",
    draft: "Contenido provisional pendiente de tus datos definitivos.",
    bookCalendar: "Reservar en el calendario",
    smokeEmail: "Quiero dejar de fumar",
    smokeEmailNote: "Te escribo un email y concertamos una entrevista de 20 minutos.",
  },
  cookies: {
    bannerAriaLabel: "Aviso de cookies",
    bannerTitle: "Uso de cookies",
    bannerText:
      "Utilizamos almacenamiento necesario para que la web funcione y, solo si lo aceptas, Google Analytics para entender el uso general del sitio. Puedes aceptar, rechazar o configurar tus preferencias.",
    policyLink: "Política de cookies",
    acceptAll: "Aceptar todas",
    reject: "Rechazar",
    configure: "Configurar",
    panelTitle: "Configurar cookies",
    panelIntro:
      "Puedes decidir qué categorías permites. Las cookies necesarias están siempre activas porque sostienen funciones básicas del sitio.",
    necessaryTitle: "Necesarias",
    necessaryText:
      "Incluyen la preferencia de idioma, el registro de consentimiento y almacenamiento técnico para recargar la aplicación correctamente.",
    alwaysActive: "Siempre activas",
    analyticsTitle: "Analítica",
    analyticsText:
      "Permite a Google Analytics medir visitas y uso agregado del sitio. Sin tu consentimiento, la etiqueta se mantiene con almacenamiento de analítica denegado.",
    marketingTitle: "Marketing",
    marketingText: "Actualmente no usamos cookies ni scripts de marketing.",
    savePreferences: "Guardar preferencias",
    close: "Cerrar",
    footerConfigure: "Configurar cookies",
    policyTitle: "Política de cookies",
    policyIntro:
      "Esta página explica qué almacenamiento usa la web, qué servicios externos pueden cargarse y cómo puedes cambiar tu consentimiento.",
    policySections: [
      {
        title: "Cookies y almacenamiento necesarios",
        text: "La web guarda la preferencia de idioma, la decisión de consentimiento y un dato técnico temporal para gestionar errores de carga. Son necesarios para prestar el servicio solicitado y no se usan para analítica ni publicidad.",
      },
      {
        title: "Analítica opcional",
        text: "Google Analytics, con identificador G-HEF4PZK50X, usa Consent Mode: la analítica queda denegada por defecto y solo se concede cuando aceptas esta categoría. Si rechazas o revocas el permiso, se vuelve a denegar la analítica y se intentan borrar sus cookies (_ga, _gid, _gat y equivalentes).",
      },
      {
        title: "Servicios externos",
        text: "El botón de reserva abre Google Calendar en una pestaña nueva sin cargar su script dentro de la web. reCAPTCHA solo se solicita al enviar el formulario de contacto si está configurado, como medida de seguridad contra abuso.",
      },
      {
        title: "Cambiar tu elección",
        text: "Puedes volver a abrir el panel desde el enlace permanente del pie de página. Rechazar es tan sencillo como aceptar.",
      },
    ],
  },
  professionalsPage: professionalsEs,
  pastLivesPage: pastLivesEs,
  ...servicesEs,
};

export type Dict = typeof es;

const va: Dict = {
  brand: "María A. Cabo",
  tagline: "Hipnosi i desenvolupament personal",
  nav: {
    home: "Inici",
    how: "Com funciona",
    areas: "Àmbits",
    professionals: "Professionals",
    companies: "Empreses",
    sessions: "Sessions",
    about: "Sobre mi",
    events: "Esdeveniments",
    journal: "Blog",
    faq: "Preguntes",
    contact: "Contacte",
    book: "Reservar",
  },
  home: {
    eyebrow: "València i Sueca · Presencial i a domicili",
    title: "Un espai per a canviar des de dins",
    subtitle:
      "Acompanyament amb hipnosi i desenvolupament personal per a persones que busquen canvis reals: hàbits, calma, descans profund i seguretat. Amb rigor científic, proximitat i expectatives clares.",
    pillars: [
      {
        title: "Evidència i rigor",
        text: "Hipnosi clínica i ericksoniana amb base científica i neurobiològica, sense mites ni falses promeses.",
      },
      {
        title: "Hipnosi ericksoniana",
        text: "Un acompanyament respectuós que activa els teus propis recursos inconscients i s'adapta al teu ritme.",
      },
      {
        title: "Límits ètics clars",
        text: "Orientat a objectius de canvi i benestar, sense realitzar diagnòstics de trastorns psiquiàtrics greus.",
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
      "Descans i insomni: apagar la ment i recuperar el son reparador",
      "Preparació de reptes concrets",
    ],
    journalTitle: "Últims escrits",
    journalLink: "Veure tots els escrits",
    faqTitle: "Dubtes freqüents",
    faqLink: "Veure totes les preguntes",
    finalTitle: "Fem el primer pas?",
    finalText: "Pots reservar directament o escriure abans si tens algun dubte.",
    finalSecondary: "Tinc un dubte abans de reservar",
    heroEyebrow: "HIPNOSI I DESENVOLUPAMENT PERSONAL · VALÈNCIA I SUECA",
    heroTitle1: "HIPNOSI PER A CANVIAR",
    heroTitle2: "EL QUE JA NO ET SERVIX.",
    heroTitle3: "AVANÇA AMB SERENITAT.",
    heroIntro:
      "Sessions individuals d'hipnosi i desenvolupament personal orientades al canvi d'hàbits, la gestió de l'estrès i l'ansietat quotidiana, l'insomni i la seguretat personal. Despatx a Sueca (Centre Sanar), a domicili a València ciutat i en línia.",
    heroPrimary: "RESERVAR SESSIÓ",
    heroSecondary: "COM FUNCIONA LA HIPNOSI",
    heroHow: "Conéixer com funciona la hipnosi pas a pas →",
    heroImageAlt: "Fotografia natural relacionada amb la hipnosi",
    changeEyebrow: "ACOMPANYAMENT INDIVIDUAL",
    changeTitle: "QUÈ VOLS CANVIAR?",
    changeCards: [
      {
        title: "ANSIETAT QUOTIDIANA I ESTRÉS",
        text: "Eines per a gestionar millor situacions que generen tensió, preocupació o nerviosisme.",
        slug: "/ansiedad",
        cta: "Veure gestió d'ansietat",
      },
      {
        title: "DESCANS I INSOMNI",
        text: "Desactivar l'alerta del cos, calmar la rumiació nocturna i recuperar un son profund i reparador.",
        slug: "/insomnio",
        cta: "Veure insomni i descans",
      },
      {
        title: "CANVI D'HÀBITS",
        text: "Tabac, alimentació, rutines i conductes que vols modificar de manera conscient.",
        slug: "/habitos-nerviosos",
        cta: "Veure canvi d'hàbits",
      },
      {
        title: "DEIXAR DE FUMAR",
        text: "Acompanyament específic i estructurat per a canviar la teua relació amb el tabac en 3 sessions.",
        slug: "/dejar-de-fumar",
        cta: "Veure suport antitabac",
      },
      {
        title: "CONFIANÇA I AUTOESTIMA",
        text: "Treballar seguretat personal, diàleg intern i resposta serena davant de situacions exigents.",
        slug: "/autoestima-y-confianza",
        cta: "Veure autoestima i confiança",
      },
      {
        title: "ESTUDI I RENDIMENT",
        text: "Concentració, preparació d'exàmens, focus mental i gestió de la pressió.",
        slug: "/concentracion-y-foco",
        cta: "Veure estudi i rendiment",
      },
    ],
    changeLink: "VEURE TOTS ELS ÀMBITS",
    hypnosisEyebrow: "MÈTODE I EVIDÈNCIA",
    hypnosisTitle: "HIPNOSI CLÍNICA: UN PROCÉS SERIÓS, CIENTÍFICAMENT AVALAT.",
    hypnosisText1:
      "La hipnosi clínica i ericksoniana és un estat d'atenció focalitzada recolzat per la neurociència moderna. Lluny dels mites de l'espectacle, és un procediment estructurat on romanen plenament conscient i amb el control en tot moment, facilitant canvis profunds en hàbits, respostes automàtiques davant la tensió i patrons de conducta.",
    hypnosisText2:
      "A través de l'acompanyament amb hipnosi no s'imposen solucions externes ni fórmules màgiques: activem els teus propis recursos interns per a aprendre a respondre amb serenitat davant situacions d'estrès o bloqueig. Treballem sobre objectius personals i de benestar amb el màxim rigor ètic i professional, sense realitzar diagnòstics psiquiàtrics de trastorns mentals greus.",
    hypnosisLink: "COM FUNCIONA LA HIPNOSI",
    hypnosisImageAlt: "Fotografia de sessió tranquil·la",
    contextsTitle: "DOS CONTEXTOS. UNA MATEIXA IDEA: CANVIAR COM RESPONEM.",
    individualTitle: "SESSIONS INDIVIDUALS",
    individualText:
      "Treball personalitzat per a abordar hàbits, confiança, pors, focus i altres objectius de desenvolupament personal.",
    individualLink: "VEURE SESSIONS",
    companiesTitle: "DESENVOLUPAMENT I RENDIMENT",
    companiesText:
      "Programes i tallers per a ajudar les persones a gestionar millor la seua atenció, confiança, aprenentatge i resposta davant de la pressió.",
    companiesLink: "SOLUCIONS PER A EMPRESES",
    processEyebrow: "EL PROCÉS",
    processTitle: "CLAR, PERSONAL I PRÀCTIC.",
    processSteps: [
      {
        title: "ENTENEM L’OBJECTIU",
        text: "Primer parlem de què vols canviar i en quines situacions apareix el patró actual.",
      },
      {
        title: "TREBALLEM AMB HIPNOSI",
        text: "La sessió s'adapta al teu objectiu i a la teua manera de respondre.",
      },
      {
        title: "INTEGREM EL CANVI",
        text: "Observem el que has aprés i incorporem pràctiques senzilles entre sessions.",
      },
    ],
    aboutEyebrow: "MARÍA CABO",
    aboutTitle: "UNA MANERA PROPERA I RIGUROSA DE TREBALLAR AMB EL CANVI.",
    aboutText:
      "El meu treball partix d'una certesa: moltes vegades sabem racionalment què volem fer, però el nostre cos i ment automàtica reaccionen d'una altra manera. Formada a l'Institut Erickson Madrid en Hipnosi Ericksoniana, empri aquestes eines per a intervindre sobre eixos patrons profunds, facilitant canvis sòlids i sostenibles amb total seguretat, proximitat i rigor professional.",
    aboutLink: "CONÉIXER-ME",
    aboutImageAlt: "María A. Cabo",
    eventsTitle: "TROBADES",
    eventsLink: "VEURE ESDEVENIMENTS",
    eventsEmpty: "Pròximes dates en preparació.",
    learnTitle: "APRENDRE",
    learnLink: "VEURE TOTS ELS ARTICLES",
    faqHomeTitle: "ENTENDRE LA HIPNOSI",
    faqHomeLink: "VEURE PREGUNTES FREQÜENTS",
    ctaTitle: "EL CANVI POT COMENÇAR AMB UNA CONVERSA.",
    ctaPrimary: "RESERVAR UNA SESSIÓ",
    ctaSecondary: "PREGUNTAR ABANS DE RESERVAR",
    ctaCompanies: "Representes una empresa? Veure solucions per a organitzacions →",
  },
  companiesPage: {
    seoTitle: "Programes de desenvolupament professional per a empreses · María A. Cabo",
    seoDescription:
      "Tallers i programes per a treballar atenció, confiança, aprenentatge, hàbits i preparació davant situacions professionals exigents.",
    heroTitle: "DESENVOLUPAMENT PROFESSIONAL",
    heroLead: "Atenció, confiança, aprenentatge i canvi d'hàbits aplicats a l'entorn professional.",
    heroText:
      "Dissenye tallers i programes que utilitzen ferramentes d'hipnosi, atenció focalitzada i canvi de patrons per a ajudar les persones a treballar d'una manera més conscient davant situacions de pressió, distracció, inseguretat o bloqueig.",
    heroPrimary: "PARLAR SOBRE UN PROGRAMA",
    heroSecondary: "FORMATS PER A EMPRESES",
    heroImageAlt: "Equip treballant",
    leadTitle: 'QUAN "SABER QUÈ FER" NO ÉS SUFICIENT',
    leadText:
      "En moltes situacions professionals, el problema no és la falta de coneixements. Gran part del nostre comportament funciona mitjançant associacions, expectatives i respostes automatitzades. Treballar sobre estos patrons complementa la formació tradicional i ajuda a desenvolupar noves formes de respondre.",
    areasEyebrow: "ÀREES DE TREBALL",
    areas: [
      {
        title: "CONFIANÇA PROFESSIONAL",
        text: "Presentacions, reunions, entrevistes i situacions d'exposició.",
      },
      {
        title: "FOCUS I ATENCIÓ",
        text: "Hàbits de concentració, recuperació del focus i gestió de distraccions.",
      },
      {
        title: "APRENENTATGE",
        text: "Crear condicions mentals i hàbits favorables per a incorporar noves habilitats.",
      },
      {
        title: "GESTIÓ DE LA PRESSIÓ",
        text: "Preparació mental per a rendir en situacions exigents.",
      },
      {
        title: "CANVI D'HÀBITS",
        text: "Reduir automatismes que dificulten el treball i construir hàbits útils.",
      },
      {
        title: "PREPARACIÓ MENTAL",
        text: "Intervencions dissenyades per a situacions concretes: negociacions, certificacions o mediació de conflictes.",
      },
    ],
    formatsTitle: "FORMATS PER A EMPRESES",
    formats: [
      {
        title: "SESSIONS INTRODUCTÒRIES",
        text: "45–60 minuts. Introducció pràctica a l'atenció i els automatismes.",
      },
      {
        title: "TALLERS",
        text: "90 minuts – 3 hores. Sessions pràctiques centrades en una habilitat concreta.",
      },
      {
        title: "PROGRAMES",
        text: "Diverses sessions amb seguiment quan es requerix pràctica i consolidació.",
      },
      {
        title: "SESSIONS INDIVIDUALS",
        text: "Sessions dins de programes per a persones que necessiten un treball més personalitzat.",
      },
    ],
    confidentialityTitle: "CONFIDENCIALITAT, CONSENTIMENT I OBJECTIUS COMPARTITS",
    confidentialityParagraphs: [
      "Les sessions individuals són un espai privat i confidencial entre el professional i l'empleat. L'empresa pot participar en la definició de l'objectiu general del programa, però el contingut de les converses i de les sessions no es compartix amb l'organització.",
      "El treball partix sempre del consentiment de l'empleat. La hipnosi no s'utilitza per a modificar els seus valors, la seua personalitat, les seues opinions ni per a induir comportaments que no desitja. Al contrari: és una ferramenta orientada a ajudar la persona a desenvolupar un major control sobre determinades respostes automàtiques, emocions o hàbits que ella mateixa vol canviar.",
      "Els objectius, per tant, han de tindre sentit per a les dos parts: poden afavorir el desenvolupament professional i, al mateix temps, representar una millora real per a la persona.",
    ],
    exampleTitle: "Exemple",
    exampleText:
      "Una empresa vol promocionar un empleat a un lloc que implica viatjar amb més freqüència, però eixa persona té una por intensa a volar. L'empresa i l'empleat poden acordar que treballar eixa por seria beneficiós per a la nova responsabilitat. A partir d'ací, les sessions i converses es mantenen de forma privada, i el procés només es realitza si l'empleat vol treballar eixe objectiu i dona el seu consentiment.",
    exampleSummary:
      "L'empresa acorda l'objectiu. L'empleat decidix participar. La sessió continua sent privada.",
    processAria: "Com treballem amb organitzacions",
    processTitle: "COM ÉS UNA SESSIÓ O TALLER",
    processSteps: [
      {
        title: "DEFINIM L'OBJECTIU.",
        text: "Parlem amb l'organització per a entendre la situació i el resultat esperat.",
      },
      {
        title: "EXPLIQUEM COM FUNCIONA.",
        text: "Què és la hipnosi, què es pot esperar i què no ocorre durant el procés.",
      },
      {
        title: "PRACTIQUEM.",
        text: "Exercicis d'atenció, visualitzacions i preparació mental adequats a l'objectiu.",
      },
      {
        title: "HO TRASLLADEM AL TREBALL REAL.",
        text: "Busquem que les ferramentes s'utilitzen en situacions professionals concretes.",
      },
    ],
    finalTitle: "PARLEM DEL TEU EQUIP",
    finalText:
      "Conta'm què vols millorar i valorarem si este enfocament té sentit per a la vostra organització.",
    finalCta: "SOL·LICITAR UNA CONVERSA",
    aboutLink: "CONÉIXER MÉS SOBRE MARÍA",
  },
  companiesContact: {
    seoTitle: "Parlar sobre un programa per a empreses · María A. Cabo",
    seoDescription:
      "Formulari per a empreses interessades en tallers o programes de desenvolupament professional amb María A. Cabo.",
    eyebrow: "Empreses",
    title: "Parlar sobre un programa",
    intro:
      "Conta'm el context de l'organització per a valorar si un taller o programa pot encaixar amb el vostre objectiu.",
    fields: {
      company: "Empresa",
      contactName: "Persona de contacte",
      role: "Càrrec",
      email: "Email",
      phone: "Telèfon",
      employees: "Nº d'empleats",
      objective: "Objectiu del programa",
      format: "Format d'interés",
      participants: "Participants previstos",
      message: "Missatge",
    },
    objectivePlaceholder: "Ex. millorar focus, preparar presentacions, gestionar pressió...",
    formatPlaceholder: "Selecciona una opció",
    formats: [
      "Sessió introductòria",
      "Taller",
      "Programa de diverses sessions",
      "Sessions individuals dins d'empresa",
      "No ho tinc clar",
    ],
    consent: "He llegit i accepte la política de privacitat.",
    send: "Enviar consulta d'empresa",
    sent: "Gràcies, he rebut la consulta. Et respondré per a valorar l'encaix.",
    mailto: "Enviar per correu",
    asideTitle: "Per a preparar la conversa",
    asideItems: [
      "L'objectiu pot ser individual, grupal o d'equip.",
      "El format s'ajusta a la mida del grup i al context de treball.",
      "No es compartixen continguts privats de sessions individuals amb l'empresa.",
    ],
    back: "Tornar a empreses",
    emailSubject: "Programa per a empreses",
    emailSummary: "Consulta B2B des de la web",
    notProvided: "No indicat",
  },
  smokingPage: {
    seoTitle: "Programa per a deixar de fumar amb hipnosi a Sueca · María A. Cabo",
    seoDescription:
      "Programa estructurat de tres sessions d'hipnosi per a deixar de fumar a Sueca (València). Entrevista prèvia gratuïta de 20 minuts sense compromís.",
    eyebrow: "PROGRAMA ANTITABAC",
    title: "DEIXAR DE FUMAR AMB HIPNOSI",
    subtitle:
      "Un recorregut estructurat per a canviar automatismes, desactivar disparadors quotidians i sostindre la teua decisió amb calma.",
    introText:
      "Fumar no sol ser una decisió conscient: funciona a través de patrons automàtics construïts durant anys. Amb hipnosi treballem precisament amb eixa part involuntària, perquè soltar el tabac no siga una batalla esgotadora contra tu mateix.",
    ctaPrimary: "SOL·LICITAR ENTREVISTA PRÈVIA",
    ctaSecondary: "COM ÉS EL PROGRAMA",
    whyTitle: 'PER QUÈ LA "FORÇA DE VOLUNTAT" NO SOL SER SUFICIENT?',
    whyParagraphs: [
      "La majoria de les persones que volen deixar de fumar saben perfectament per què haurien de fer-ho: salut, diners, llibertat, olor. No obstant això, en quant apareix l'estrés, el cafè del matí o una sobretaula amb amics, el cos i la ment activen la resposta automàtica abans que la raó intervinga.",
      "El problema no és que et falte voluntat o caràcter. El problema és que l'hàbit del tabac se sosté en associacions neuronals profundes que operen de forma automàtica. Intentar frenar-lo únicament amb força de voluntat constant genera tensió, irritabilitat i desgast.",
      "La hipnosi permet intervindre en el nivell on s'originen eixos automatismes: ajuda a desconnectar les associacions que vinculen el tabac amb la calma o el plaer, i a substituir-les per respostes saludables i tranquil·les.",
    ],
    programTitle: "ESTRUCTURA DEL PROGRAMA (3 SESSIONS)",
    programIntro:
      "Un procés clar, amb inici i fi, dissenyat per a donar-te autonomia i evitar dependències.",
    steps: [
      {
        num: "01",
        title: "ENTREVISTA PRÈVIA DE 20 MINUTS",
        badge: "Gratuïta i sense compromís",
        text: "Parlem per telèfon o videotelefonada per a conéixer la teua relació amb el tabac, els teus motius personals i resoldre tots els dubtes abans de començar.",
      },
      {
        num: "02",
        title: "SESSIÓ 1 · EL DIA DEL CANVI",
        badge: "Presencial a Sueca (75 min)",
        text: "Treballem en profunditat els teus motius personals, desactivem els disparadors quotidians i anclem el nou estat de no fumador.",
      },
      {
        num: "03",
        title: "SESSIÓ 2 · CONSOLIDACIÓ I CALMA",
        badge: "Presencial a Sueca (60 min)",
        text: "Avaluem els primers dies sense fumar, reforcem la sensació de benestar, gestionem possibles pics de tensió i afermem noves respostes.",
      },
      {
        num: "04",
        title: "SESSIÓ 3 · AUTONOMIA I PREVENCIÓ",
        badge: "Presencial a Sueca (60 min)",
        text: "Projecció a llarg termini, ferramentes per a situacions socials o d'estrés imprevist i tancament del procés amb total independència.",
      },
    ],
    includedTitle: "QUÈ INCLOU EL PROGRAMA",
    includedItems: [
      "Entrevista prèvia de valoració de 20 minuts sense cost.",
      "3 sessions presencials individuals i intensives a Sueca.",
      "Gravació d'àudio de reforç personalitzada per a escoltar a casa.",
      "Seguiment i suport proper entre sessions.",
      "Pautes de respiració i autohipnosi per a moments puntuals de tensió.",
    ],
    price: "300 €",
    priceNote: "Preu tancat pel paquet complet de les tres sessions i tot el material de suport.",
    formEyebrow: "ENTREVISTA PRÈVIA",
    formTitle: "SOL·LICITAR ENTREVISTA DE 20 MINUTOS",
    formSubtitle:
      "Emplena este breu formulari i em posaré en contacte amb tu per a concertar la telefonada sense cap compromís.",
    formFields: {
      name: "Nom complet",
      email: "Correu electrònic",
      phone: "Telèfon",
      preferredTime: "Horari preferit per a la telefonada",
      preferredTimePlaceholder: "Selecciona una opció",
      timeOptions: [
        "Matins (09:00 - 13:00)",
        "Migdia (13:00 - 16:00)",
        "Vesprades (16:00 - 20:00)",
        "Indiferent / Qualsevol horari",
      ],
      preferredMethod: "Mitjà preferit",
      methodOptions: ["Telefonada", "Videotelefonada"],
      habitDetails: "Quant fumes habitualment? (Opcional)",
      habitDetailsPlaceholder: "Ex. 1 paquet al dia des de fa 10 anys, fume més per estrés...",
      message: "Algun dubte o comentari addicional? (Opcional)",
      messagePlaceholder: "Hi ha alguna cosa que vulgues consultar abans de la telefonada?",
      consent: "He llegit i accepte la política de privacitat.",
      submit: "Sol·licitar entrevista prèvia gratuïta",
      submitting: "Enviant sol·licitud...",
      success:
        "Gràcies. He rebut la teua sol·licitud. Et telefonaré o escriuré prompte per a confirmar l'horari de l'entrevista.",
      fallbackMailto: "Enviar per correu electrònic",
    },
    faqTitle: "PREGUNTES FREQÜENTS SOBRE EL PROGRAMA",
    faqs: [
      {
        q: "Deixaré de fumar des de la primera sessió?",
        a: "L'objectiu és que deixes de fumar en la primera sessió presencial. L'entrevista prèvia ens permet preparar eixe moment perquè arribes decidit, i les sessions 2 i 3 servixen per a consolidar el canvi i assegurar que et mantens sense fumar sense patiment.",
      },
      {
        q: "Tindré ansietat o ganes incontrolables de fumar?",
        a: "La hipnosi ajuda precisament a reduir el component d'ansietat psicològica associat a l'abstinència. Et donarem a més una gravació de reforç i pautes senzilles de calma per als moments puntuals.",
      },
      {
        q: "Què passa si no funciona o tinc dubtes?",
        a: "Per això realitzem l'entrevista prèvia gratuïta de 20 minuts: per a avaluar honestament el teu cas. Si considerem que no és el moment adequat o que necessites un altre tipus d'acompanyament, t'ho diré amb total transparència.",
      },
      {
        q: "On es realitzen les sessions?",
        a: "Les 3 sessions presencials es realitzen en el meu despatx independent dins del Centre Sanar a Sueca (València). L'entrevista prèvia de 20 minuts es realitza còmodament per telèfon o videotelefonada.",
      },
    ],
  },
  anxietyPage: {
    seoTitle:
      "Gestió de l'Ansietat Quotidiana i Pors a València i Sueca · Hipnosi | María A. Cabo",
    seoDescription:
      "Aprén a gestionar l'ansietat quotidiana, calmar la tensió i treballar pors (volar, conduir, parlar en públic) amb hipnosi a Sueca, València i en línia. 70 €/sessió.",
    eyebrow: "HIPNOSI I DESENVOLUPAMENT PERSONAL · VALÈNCIA I SUECA",
    eyebrowNav: "Gestió d'Ansietat i Pors",
    title: "GESTIONAR L'ANSIETAT QUOTIDIANA, CALMAR LA TENSIÓ I TREBALLAR PORS",
    subtitle:
      "Aprén a respondre d'una altra manera davant de situacions que generen tensió, preocupació o bloqueig, ensenyant al teu cos a recuperar la calma.",
    introText:
      "Opressió al pit, respiració curta, ment que anticipa preocupacions o bloqueig davant de situacions com volar, conduir o parlar en públic. Quan l'estrés i la preocupació es repetixen, el cos reacciona de forma reflexa abans que la raó intervinga. Amb hipnosi clínica i recursos de desenvolupament personal treballem en eixe nivell de respostes automàtiques: facilitem recursos perquè el teu cos recorde la calma, aprengues a respondre amb serenitat davant dels disparadors de tensió i recuperes la teua tranquil·litat quotidiana de forma respectuosa i natural.",
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA HIPNOSI",
    trustBadges: [
      "Acompanyament respectuós i natural",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Sessions individuals d'1h · 70 € (al teu propi ritme)",
    ],
    symptomsTitle: "QUAN EL COS VIU EN ESTAT D'ALERTA CONTINU",
    symptomsSubtitle:
      "L'ansietat no és una feblesa ni una falta de caràcter; és el teu sistema nerviós interpretant amenaces en pilot automàtic.",
    symptoms: [
      {
        title: "Tensió física i opressió",
        text: "Opressió al pit o al coll, respiració entretallada, mandíbula serrada, mareig tensional o nus a l'estómac.",
      },
      {
        title: "Ment accelerada i rumiació",
        text: "Pensaments anticipatoris en bucle, preocupació desmesurada pel futur i dificultat per a frenar el flux mental.",
      },
      {
        title: "Pors i fòbies específiques",
        text: "Bloqueig i pànic davant de situacions concretes: por a volar, conduir en autovies o túnels (amaxofòbia), agulles o parlar en públic.",
      },
      {
        title: "Por a desbordar-se i evitació",
        text: "Temor a perdre el control, crisi d'angoixa o cancel·lar plans i viatges per a evitar la sensació de malestar.",
      },
    ],
    whyTitle: "PER QUÈ NO N'HI HA PROU AMB DIR-TE 'CALMA'T'?",
    whyParagraphs: [
      "La majoria de les persones amb ansietat ja saben que les seues preocupacions són exagerades. La raó ho entén, però el cos no obeïx: el cor s'accelera, l'aire sembla no entrar i els músculs es tensen. Per què passa açò?",
      "Perquè la resposta d'ansietat s'origina en el sistema nerviós autònom (la branca simpàtica o mode 'lluita o fugida'), una xarxa primitiva encarregada de la teua supervivència que no respon al llenguatge lògic dels pensaments conscients. Intentar frenar l'ansietat obligant-te a 'pensar en positiu' sol generar més impotència i frustració.",
      "La hipnosi funciona perquè utilitza el mateix llenguatge que el teu sistema nerviós: el de l'atenció focalitzada, els senyals sensorials i la distensió somàtica. En induir un estat de relaxació profunda guiada, activem de manera natural el sistema parasimpàtic (el fre neurobiològic de l'estrès), ensenyant al cos a apagar l'alarma i creant nous circuits neuronals de calma.",
    ],
    pillarsTitle: "EL PROCÉS PER A ENSENYAR AL TEU COS A ESTAR EN CALMA",
    pillarsIntro:
      "Un acompanyament pràctic, individual i enfocat en donar-te autonomia des de la primera sessió.",
    steps: [
      {
        num: "01",
        badge: "Regulació corporal",
        title: "DESACTIVAR EL MODE ALERTA",
        text: "Trenquem el patró fisiològic d'hipervigilància. El teu cos experimenta seguretat física profunda real, reduint immediatament l'activació de l'estrès.",
      },
      {
        num: "02",
        badge: "Nivell subconscient",
        title: "REPROGRAMAR DISPARADORS",
        text: "Identifiquem els detonants que disparaven l'angoixa (situacions quotidianes, records, exigències) i desvinculem la resposta automàtica de por.",
      },
      {
        num: "03",
        badge: "Recursos pràctics",
        title: "ANCORATGES DE SERENITAT INSTANTÀNIA",
        text: "Instal·lem en sessió ancoratges neurofisiològics: senyals físics i mentals que pots activar tu mateix/a en qualsevol moment del dia per a frenar un pic d'ansietat.",
      },
      {
        num: "04",
        badge: "Per a tota la vida",
        title: "AUTOHIPNOSI I AUTONOMIA",
        text: "Aprens pautes d'autohipnosi i respiració per a gestionar el teu benestar en el teu dia a dia, al teu ritme i sense crear dependències.",
      },
    ],
    locationsTitle: "ON FEM LES SESSIONS",
    locationsIntro:
      "Atenció propera a la comarca de la Ribera Baixa i València, adaptada a les teues preferències:",
    locations: [
      {
        name: "Despatx a Sueca (Centre Sanar)",
        area: "Ribera Baixa",
        desc: "Espai serè, independent i confidencial a Sueca. De molt fàcil accés per a persones de Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara i El Perelló.",
      },
      {
        name: "A domicili a València ciutat",
        area: "València capital i voltants",
        desc: "Ideal si els desplaçaments et generen angoixa o prefereixes treballar des de la comoditat i privacitat absoluta de la teua pròpia llar a València.",
      },
      {
        name: "Sessions En línia en directe",
        area: "Qualsevol ubicació",
        desc: "Per videoconferència individual en directe, amb la mateixa eficàcia i guiada pas a pas des de l'espai on et sentes més tranquil/a.",
      },
    ],
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    price: "70 €",
    priceUnit: "per sessió (1 hora)",
    pricingFeatures: [
      "Sessió individual i personalitzada de 60 minuts.",
      "Sueca (Centre Sanar), a domicili a València ciutat o en línia.",
      "Al teu propi ritme: sense paquets obligatoris ni compromisos tancats.",
      "Pautes d'autohipnosi i exercicis pràctics entre sessions.",
      "Resolució de dubtes prèvia sense compromís.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "FES EL PRIMER PAS CAP A LA CALMA",
    formSubtitle:
      "Emplena este breu formulari per a consultar els teus dubtes o sol·licitar la teua sessió. Et respondré personalment amb total proximitat.",
    formFields: {
      name: "Nom complet",
      email: "Correu electrònic",
      phone: "Telèfon",
      modality: "Modalitat d'atenció preferida",
      modalityOptions: [
        "Despatx a Sueca (Centre Sanar)",
        "A domicili a València ciutat",
        "Sessió En línia (Videotrucada)",
        "Encara no ho tinc clar / Preferisc consultar-ho",
      ],
      symptoms: "En quins moments o situacions notes més l'ansietat? (Opcional)",
      symptomsPlaceholder: "Ex. A la feina, en conduir, per a dormir, opressió al pit constant...",
      message: "Algun dubte o detall que vulgues comentar? (Opcional)",
      messagePlaceholder: "Escriu ací qualsevol consulta prèvia...",
      consent: "He llegit i accepte la política de privacitat.",
      submit: "Enviar consulta / Sol·licitar sessió",
      submitting: "Enviant missatge...",
      success:
        "Gràcies pel teu missatge. L'he rebut correctament i em posaré en contacte amb tu al més prompte possible.",
      fallbackMailto: "Enviar per correu electrònic",
    },
    faqTitle: "PREGUNTES FREQÜENTS SOBRE HIPNOSI I ANSIETAT",
    faqs: [
      {
        q: "Com ajuda exactament la hipnosi a reduir l'ansietat?",
        a: "La hipnosi actua directament sobre la resposta neurobiològica de l'estrès. Mentre que conscientment intentes 'tranquil·litzar-te' sense èxit, en hipnosi accedim a un estat on el sistema parasimpàtic pren el control, permetent que el cos desactive la tensió muscular, regule la respiració i desaprena les associacions automàtiques d'alarma.",
      },
      {
        q: "Vaig a perdre el control o quedar-me inconscient durant la sessió?",
        a: "No, en absolut. La hipnosi clínica i ericksoniana no té res a veure amb els espectacles de televisió. Estaràs plenament conscient en tot moment, escoltaràs la meua veu, podràs parlar, moure't i decidir què dir. Es tracta d'un estat d'atenció focalitzada i profunda relaxació voluntària.",
      },
      {
        q: "En quantes sessions se sol notar el canvi?",
        a: "Moltes persones experimenten un alleujament significatiu i una profunda sensació de lleugeresa corporal des de la primera sessió. Com que no hi ha compromisos obligatoris, valorem junts després de cada sessió i avances al teu propi ritme segons la teua evolució personal.",
      },
      {
        q: "És compatible si ja prenc medicació ansiolítica o vaig al psicòleg?",
        a: "Sí, és compatible com a suport d'autoregulació. La hipnosi clínica i l'acompanyament personal t'ajuden a connectar amb els teus recursos interns naturals. No realitzem diagnòstics clínics de trastorns mentals greus ni substituïm els tractaments mèdics o psiquiàtrics pautats per facultatius especialistes.",
      },
      {
        q: "Realitzes sessions a Sueca, la Ribera Baixa i València?",
        a: "Sí. Atenc presencialment al meu despatx del Centre Sanar a Sueca (molt accessible des de Cullera, Alzira, Algemesí, Sollana, etc.), a domicili en cases de particulars a València ciutat per a major comoditat, i en format en línia per a qualsevol ubicació.",
      },
    ],
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
    mythsTitle: "Mites i realitats",
    myths: [
      "No és un espectacle: ningú perd la voluntat ni el control.",
      "No realitzem diagnòstics clínics de trastorns mentals greus.",
      "No substituïx l'atenció mèdica o psiquiàtrica davant patologies severes.",
      "És un procés seriós, actiu i recolzat per l'evidència científica.",
    ],
    safetyTitle: "Seguretat i límits clars",
    safetyText:
      "El servici s'adreça a persones majors de 18 anys. Si la teua situació requerix atenció mèdica o psiquiàtrica preferent, t'ho indicaré amb total claredat i honestedat professional.",
  },
  areas: {
    title: "Àmbits d'acompanyament",
    intro:
      "Huit àrees principals on la hipnosi i el desenvolupament personal ajuden a reorganitzar respostes automàtiques, hàbits i formes d'afrontar la vida amb serenitat i aplom.",
    noticeTitle: "Rigor professional i límits ètics",
    notice:
      "Les sessions d'hipnosi i desenvolupament personal estan orientades al canvi personal i el benestar emocional. No substituïxen l'atenció mèdica o psiquiàtrica davant patologies severes, ni realitzem diagnòstics clínics de trastorns mentals greus. Si el teu cas requerix atenció mèdica o psiquiàtrica especialitzada, t'orientarem amb total transparència.",
    items: [
      {
        title: "Estrés, calma i insomni",
        text: "Entrenar recursos de relaxació profunda per a desactivar l'alerta del sistema nerviós, calmar la rumiació nocturna i afavorir un son reparador i natural.",
        slug: "/insomnio",
        cta: "Veure hipnosi per a insomni i estrés",
      },
      {
        title: "Deixar de fumar",
        text: "Un recorregut específic i estructurat per a canviar automatismes, desactivar disparadors quotidians i sostindre la teua decisió amb calma.",
        slug: "/dejar-de-fumar",
        cta: "Veure programa antitabac",
      },
      {
        title: "Hàbits i relació amb el menjar",
        text: "Treballar sobre hàbits, impulsos, rutines i comportaments relacionats amb l'alimentació i la sacietat corporal real.",
        slug: "/control-de-peso",
        cta: "Veure hàbits i alimentació",
      },
      {
        title: "Hàbits nerviosos i rostegar-se les ungles",
        text: "Modificar automatismes involuntaris com rostegar-se les ungles (onicofàgia), bruxisme diürn o tensió inconscient.",
        slug: "/habitos-nerviosos",
        cta: "Veure hàbits nerviosos",
      },
      {
        title: "Gestió d'ansietat i pors",
        text: "Aprendre a respondre amb serenitat davant de situacions quotidianes de tensió o temors concrets com volar, conduir o parlar en públic.",
        slug: "/ansiedad",
        cta: "Veure gestió d'ansietat i pors",
      },
      {
        title: "Autoestima i confiança",
        text: "Treballar seguretat personal, superar la inseguretat, posar límits i expressar-te amb claredat i aplom.",
        slug: "/autoestima-y-confianza",
        cta: "Veure autoestima i confiança",
      },
      {
        title: "Concentració, focus i estudi",
        text: "Preparació d'oposicions, exàmens exigents i projectes entrenant concentració, claredat mental i gestió de la pressió.",
        slug: "/concentracion-y-foco",
        cta: "Veure focus i concentració",
      },
      {
        title: "Esport i motivació",
        text: "Entrenar l'estat de flux, la visualització mental de gestos tècnics, constància en entrenaments i calma en competició.",
        slug: "/deporte-y-motivacion",
        cta: "Veure esport i motivació",
      },
    ],
    closing: "Si dubtes de si este acompanyament encaixa amb tu, escriu-me abans de reservar.",
    cta: "Resoldre un dubte",
  },
  sessions: {
    title: "Sessions",
    intro:
      "Sessions individuals presencials a Sueca, en un despatx independent dins de Centro Sanar. Preus clars i amb política de canvis transparent.",
    items: [
      {
        name: "Sessió individual",
        price: "70 €",
        unit: "per hora",
        text: "Una hora d'acompanyament amb hipnosi i desenvolupament personal per a treballar descans, estrès, gestió de l'ansietat quotidiana, pors, hàbits o l'objectiu que definim.",
        points: ["Duració de 60 minuts", "Presencial", "Al teu propi ritme"],
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
    name: "María A. Cabo",
    role: "Especialista en hipnosi i desenvolupament personal",
    intro:
      "Sóc María Cabo, especialista en hipnosi i desenvolupament personal. Acompanye a persones adultes que volen canviar hàbits, regular l'estrès i l'ansietat quotidiana, superar determinades pors o guanyar confiança i benestar emocional utilitzant la hipnosi com una ferramenta rigorosa de canvi. Compte amb formació especialitzada a l'Institut Erickson Madrid en Hipnosi Ericksoniana, des d'un enfocament pròxim, pràctic i respectuós amb el ritme de cada persona.",
    traits: ["Proximitat", "Formació Ericksoniana", "Recursos útils"],
    highlights: [
      {
        title: "Institut Erickson Madrid",
        text: "Formació especialitzada en Hipnosi Ericksoniana en l'Institut Erickson Madrid.",
      },
      {
        title: "Experiència internacional",
        text: "He viscut i treballat entre Los Angeles, Londres, Barcelona, Madrid i València.",
      },
      {
        title: "Mirada corporativa",
        text: "Conec reptes habituals d'empreses i equips: pressió, focus, confiança i comunicació.",
      },
      {
        title: "Sessions en dos idiomes",
        text: "Treballe en castellà i anglés, amb persones i organitzacions.",
      },
    ],
    body: [
      "Acompanye persones adultes que volen produir un canvi concret i no saben per on començar. La meua manera de treballar és tranquil·la, curiosa i honesta: primer entendre, després proposar.",
      "Crec en les expectatives realistes. La hipnosi és una eina molt útil per a treballar hàbits, atenció i resposta a l'estrés, però no ho resol tot ni substituïx l'atenció sanitària.",
      "Treballe a Sueca, en castellà i anglés, en un despatx independent dins de Centro Sanar, a domicili a València ciutat i en format online.",
    ],
    valuesTitle: "Com treballe",
    valuesSidebarTitle: "En cada sessió",
    values: [
      "Escolta i respecte per cada persona.",
      "Objectius clars i expectatives realistes.",
      "Participació activa durant tot el procés.",
      "Confidencialitat.",
      "Ferramentes pràctiques per al dia a dia.",
    ],
    controlNote:
      "La persona manté sempre la consciència, la participació i el control sobre l'experiència.",
    statement:
      "El meu treball consistix a acompanyar cada persona a explorar els seus patrons i oferir-li ferramentes per a respondre d'una manera més útil per a ella.",
    workEyebrow: "La meua manera de treballar",
    workTitle: "La hipnosi com a eina, no com a fórmula màgica.",
    workText:
      "Entenc la hipnosi com un recurs per a facilitar processos de canvi, observar respostes automàtiques i entrenar noves formes d'afrontar situacions concretes amb més calma, seguretat i capacitat d'elecció.",
    focusAreas: [
      {
        title: "Canvi pràctic",
        text: "Sessions orientades a objectius concrets, amb recursos que puguen traslladar-se a la vida real.",
      },
      {
        title: "Procés conscient",
        text: "La persona participa activament, entén què estem fent i manté sempre el control.",
      },
      {
        title: "Ritme personal",
        text: "Cada treball s'adapta a la història, les circumstàncies i la manera d'experimentar el procés.",
      },
    ],
    pathEyebrow: "Trajectòria",
    pathTitle:
      "Una mirada construïda entre cultures, entorns professionals i formació especialitzada.",
    cities: ["Los Angeles", "Londres", "Barcelona", "Madrid", "València"],
    pathParagraphs: [
      "Al llarg de la meua trajectòria he treballat en entorns corporatius i internacionals i he viscut en ciutats com Los Angeles, Londres, Barcelona, València i Madrid.",
      "Formada a l'Institut Erickson Madrid en Hipnosi Ericksoniana, una de les institucions de referència a Espanya, treballe amb un model que emfatitza els recursos inconscients i els aprenentatges previs de la pròpia persona per a desenvolupar respostes més adaptatives i duradores.",
      "Eixa combinació entre formació tècnica especialitzada en hipnosi i experiència vital en entorns d'alta exigència m'ajuda a entendre que darrere de cada objectiu hi ha una història, una manera de respondre i unes circumstàncies diferents.",
    ],
    pathExtra:
      "La meua experiència prèvia en empreses internacionals m'ajuda a entendre reptes habituals del treball: parlar en públic, assumir responsabilitats, rendir sota pressió, mantindre el focus o moure's amb més confiança en situacions exigents.",
    sessionsEyebrow: "Sessions i col·laboracions",
    serviceAreaTitle: "Sueca · Ribera Baixa · València · Gandia",
    sessionsTexts: [
      "Les sessions individuals es fan de manera presencial en un despatx a Sueca o a domicili en cases de particulars a València ciutat.",
      "També realitze sessions en format online per videoconferència i em desplace a empreses i organitzacions per a tallers i programes de desenvolupament professional.",
    ],
    quote:
      "Moltes vegades el canvi no consistix a convertir-se en una altra persona, sinó a deixar d'estar limitat per patrons que ja no necessitem.",
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
    upcomingTitle: "Pròxims esdeveniments",
    pastTitle: "Esdeveniments passats",
    pastBadge: "Esdeveniment passat",
    items: [
      {
        dateISO: "2026-09-14",
        date: "14 set",
        time: "18:00",
        title: "Tabaquisme",
        text: "Una trobada per a comprendre com se sostenen els automatismes del tabac i com pot acompanyar-se el canvi amb hipnosi.",
      },
      {
        dateISO: "2026-09-21",
        date: "21 set",
        time: "18:00",
        title: "Ansietat, pors i fòbies",
        text: "Una introducció serena a recursos d'atenció, calma i preparació interna davant situacions que generen tensió.",
      },
      {
        dateISO: "2026-09-28",
        date: "28 set",
        time: "18:00",
        title: "Estudi i exàmens",
        text: "Una sessió grupal per a explorar focus, confiança i assaig mental abans de reptes acadèmics o proves importants.",
      },
      {
        dateISO: "2026-10-05",
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
        slug: "hipnosis-y-fobias-aprender-una-respuesta-diferente",
        title: "Hipnosi i fòbies: aprendre una resposta diferent",
        excerpt:
          "Una fòbia pot sentir-se com una reacció automàtica. La hipnosi permet treballar amb eixa part més automàtica de l'experiència.",
      },
      {
        slug: "por-que-evitar-aquello-que-tememos-puede-mantener-el-miedo",
        title: "Per què evitar allò que temem pot mantindre la por?",
        excerpt:
          "Evitar allò que ens fa por funciona molt bé a curt termini. Precisament per això pot convertir-se en part del problema.",
      },
      {
        slug: "que-es-realmente-una-fobia",
        title: "Què és realment una fòbia?",
        excerpt:
          "Tindre por és humà. Una fòbia apareix quan eixa por es torna desproporcionada i comença a condicionar el que fem.",
      },
      {
        slug: "hipnosis-y-ansiedad-aprender-una-respuesta-diferente",
        title: "Hipnosi i ansietat: aprendre una resposta diferent",
        excerpt:
          "La hipnosi pot oferir un context diferent per a treballar amb l'atenció, la imaginació i respostes apreses.",
      },
      {
        slug: "cuando-el-cuerpo-aprende-a-estar-en-alerta",
        title: "Quan el cos aprén a estar en alerta",
        excerpt:
          "De vegades la situació canvia, però l'organisme continua reaccionant com si el perill encara fora present.",
      },
      {
        slug: "que-es-realmente-la-ansiedad",
        title: "Què és realment l'ansietat?",
        excerpt:
          "L'ansietat no és necessàriament una cosa dolenta. És un mecanisme de protecció que pot començar a activar-se massa.",
      },
      {
        slug: "como-es-una-sesion-de-hipnosis",
        title: "Com és una sessió d'hipnosi?",
        excerpt:
          "Una sessió és un espai de col·laboració, no una experiència en què una altra persona pren el control.",
      },
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
    seriesTitle: "Sèries de lectura",
    seriesIntro: "Llig cada sèrie en ordre per a seguir millor el fil dels articles relacionats.",
    series: [
      {
        title: "Fòbies i por apresa",
        description:
          "Tres textos per a entendre què és una fòbia, per què l'evitació pot mantindre la por i com pot treballar-se una resposta diferent.",
        posts: [
          "que-es-realmente-una-fobia",
          "por-que-evitar-aquello-que-tememos-puede-mantener-el-miedo",
          "hipnosis-y-fobias-aprender-una-respuesta-diferente",
        ],
      },
      {
        title: "Ansietat i respostes apreses",
        description:
          "Tres textos per a entendre què és l'ansietat, com s'aprén l'alerta i com pot treballar-se una resposta diferent.",
        posts: [
          "que-es-realmente-la-ansiedad",
          "cuando-el-cuerpo-aprende-a-estar-en-alerta",
          "hipnosis-y-ansiedad-aprender-una-respuesta-diferente",
        ],
      },
      {
        title: "Entendre la hipnosi",
        description:
          "Una introducció ordenada a la hipnosi, el cervell, els hàbits i com pot ser una sessió.",
        posts: [
          "que-es-la-hipnosis",
          "que-ocurre-en-el-cerebro-durante-la-hipnosis",
          "por-que-cuesta-cambiar-un-habito",
          "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
          "como-es-una-sesion-de-hipnosis",
        ],
      },
    ],
    standaloneTitle: "També en el blog",
    soon: "Pròximament",
    latest: "Últim article",
    readPost: "Llegir article",
    backToBlog: "Tornar al blog",
  },
  faq: {
    title: "Preguntes freqüents",
    items: [
      {
        q: "Perdré el control durant la sessió?",
        a: "En absolut. En la hipnosi clínica i ericksoniana mantens la consciència i el control en tot moment. No té res a veure amb l'espectacle de televisió: pots parlar, moure't, recordar tot el que succeïx i detindre la sessió quan vullgues.",
      },
      {
        q: "Què és la hipnosi clínica i quin és el seu aval científic?",
        a: "La hipnosi clínica és un procediment estructurat avalat per la neurociència i la medicina. Consistix en un estat d'atenció focalitzada i relaxació profunda que modula l'activitat cerebral i permet intervindre sobre automatismes, l'estrès, els hàbits i les respostes emocionals apreses.",
      },
      {
        q: "En què es diferencia d'un diagnòstic o tractament psiquiàtric?",
        a: "La hipnosi clínica i el desenvolupament personal són ferramentes serioses enfocades en processos de canvi personal, benestar emocional i superació de bloquejos. No realitzem diagnòstics clínics de trastorns mentals greus ni substituïm l'atenció mèdica o psiquiàtrica quan esta siga necessària.",
      },
      {
        q: "Quantes sessions necessite?",
        a: "Depén de l'objectiu i de cada persona. Moltes persones treballen amb sessions individuals soltes; per a deixar de fumar el recorregut està estructurat en tres sessions.",
      },
      {
        q: "I si crec que no em vaig a hipnotitzar?",
        a: "El model ericksonià no busca un trànsit rígid ni forçat, sinó que aprofita la manera natural en què la teua ment focalitza l'atenció. Tothom experimenta trànsits quotidians (com en abstraure's llegint o conduint). Adaptem el mètode a tu amb total proximitat.",
      },
      {
        q: "És confidencial?",
        a: "Sí, amb absoluta confidencialitat i secret professional. El que compartixes en sessió queda estrictament entre nosaltres.",
      },
      {
        q: "Quin preu té?",
        a: "La sessió individual són 70 € l'hora. El programa específic per a deixar de fumar són 300 € i inclou tres sessions completes.",
      },
    ],
  },
  contact: {
    title: "Contacte",
    intro:
      "Si tens un dubte abans de reservar, escriu-me i et responc amb calma. No cal que expliques res que no vulgues contar.",
    phone: "Telèfon",
    name: "Nom",
    email: "Correu electrònic",
    message: "El teu missatge",
    consent: "He llegit i accepte la política de privacitat.",
    send: "Enviar missatge",
    sent: "Gràcies, he rebut el teu missatge. Et respondré ben aviat.",
    note: "Envia el teu missatge i et respondré prompte. Si ho preferixes, també pots reservar directament en el calendari.",
    infoTitle: "Dades",
    area: "Sueca (Centre Sanar) · A domicili a València ciutat · Sessions online",
    languages: "Sessions en castellà i anglés",
    hours: "Horari d'atenció en hora peninsular",
  },
  legal: {
    title: "Informació legal",
    intro:
      "Informació legal, privacitat i condicions de reserva de María A. Cabo. Si necessites un aclariment addicional, pots escriure a maria.a.cabo@gmail.com.",
    sections: [
      {
        title: "Avís legal",
        text: "Titular del lloc: María A. Cabo. Contacte: maria.a.cabo@gmail.com. Activitat: acompanyament de desenvolupament personal mitjançant hipnosi, amb sessions presencials a Sueca dins d'un despatx independent del Centre Sanar. El contingut publicat en esta web té caràcter informatiu i no constituïx assessorament sanitari, psicològic, mèdic ni legal.",
      },
      {
        title: "Dades identificatives",
        text: "La responsable del tractament i titular de l'activitat és María A. Cabo. El NIF, domicili fiscal i la resta de dades identificatives completes es facilitaran en la contractació, factura o comunicacions precontractuals quan siguen necessàries. Per a sol·licitar-les abans de contractar, escriu a maria.a.cabo@gmail.com.",
      },
      {
        title: "Privacitat i finalitat",
        text: "Les dades que facilites mitjançant formularis, email o sol·licitud de reserva s'utilitzen per a respondre la consulta, gestionar cites, preparar el servici sol·licitat i mantindre comunicacions relacionades amb el servici. No se sol·liciten dades de salut a través de la web; si voluntàriament inclous informació sensible en un missatge, es tractarà només per a atendre la teua sol·licitud i amb la màxima confidencialitat possible.",
      },
      {
        title: "Base legal i conservació",
        text: "La base legal del tractament és el teu consentiment en enviar un formulari o escriure per email, l'aplicació de mesures precontractuals si sol·licites una sessió i, quan pertoque, el compliment d'obligacions legals. Les dades es conservaran durant el temps necessari per a gestionar la consulta o reserva i, després, durant els terminis exigibles per obligacions fiscals, comptables o de defensa de reclamacions.",
      },
      {
        title: "Proveïdors",
        text: "La web pot recolzar-se en proveïdors tècnics per a allotjament, analítica, calendari, protecció antispam, formularis i enviament o registre de missatges: Vercel, Google Calendar, Google Analytics amb consentiment, Google reCAPTCHA quan estiga actiu, Google Sheets si s'utilitza com a registre intern i SendGrid si s'utilitza per a l'enviament de correus. Estos proveïdors tracten dades només en la mesura necessària per a prestar els seus servicis.",
      },
      {
        title: "Drets",
        text: "Pots exercir els teus drets d'accés, rectificació, supressió, oposició, limitació i portabilitat escrivint a maria.a.cabo@gmail.com. També pots retirar el consentiment quan el tractament depenga d'ell. Si consideres que els teus drets no han sigut atesos, pots presentar una reclamació davant l'Agència Espanyola de Protecció de Dades.",
      },
      {
        title: "Galetes",
        text: "La web utilitza emmagatzematge tècnic necessari per a recordar l'idioma i les preferències de consentiment. L'etiqueta de Google s'inicia amb el consentiment d'analítica denegat per defecte, i només es concedix si acceptes eixa categoria.",
      },
      {
        title: "Condicions del servici",
        text: "El servici s'adreça a persones majors de 18 anys. La sessió individual té una duració aproximada d'una hora i el programa per a deixar de fumar inclou tres sessions. Si necessites canviar o cancel·lar una cita, avisa amb almenys 24 hores d'antelació per a poder reprogramar-la sense cost. Les sessions ja realitzades no són reemborsables. Els imports abonats per sessions no realitzades podran reprogramar-se o reemborsar-se si la cancel·lació es comunica dins del termini indicat o si la sessió no poguera prestar-se per causa imputable a María A. Cabo.",
      },
    ],
  },
  footer: {
    rights: "Tots els drets reservats.",
    disclaimer:
      "María A. Cabo · Hipnosi i desenvolupament personal. Acompanyament orientat al canvi personal i benestar emocional. No substituïx l'atenció mèdica o psiquiàtrica davant patologies severes.",
    legal: "Informació legal",
  },
  common: {
    bookNow: "Reservar una sessió",
    bookSoon: "Reserva directament en el calendari o escriu-me si preferixes consultar-ho.",
    bookIntro: "Reserva directament en el calendari o escriu-me si preferixes consultar-ho.",
    contactMe: "Escriu-me",
    draft: "Contingut provisional pendent de les teues dades definitives.",
    bookCalendar: "Reservar en el calendari",
    smokeEmail: "Vull deixar de fumar",
    smokeEmailNote: "M'escrius un email i concertem una entrevista de 20 minuts.",
  },
  cookies: {
    bannerAriaLabel: "Avís de galetes",
    bannerTitle: "Ús de galetes",
    bannerText:
      "Utilitzem emmagatzematge necessari perquè la web funcione i, només si ho acceptes, Google Analytics per a entendre l'ús general del lloc. Pots acceptar, rebutjar o configurar les preferències.",
    policyLink: "Política de galetes",
    acceptAll: "Acceptar totes",
    reject: "Rebutjar",
    configure: "Configurar",
    panelTitle: "Configurar galetes",
    panelIntro:
      "Pots decidir quines categories permets. Les galetes necessàries estan sempre actives perquè sostenen funcions bàsiques del lloc.",
    necessaryTitle: "Necessàries",
    necessaryText:
      "Inclouen la preferència d'idioma, el registre de consentiment i emmagatzematge tècnic per a recarregar l'aplicació correctament.",
    alwaysActive: "Sempre actives",
    analyticsTitle: "Analítica",
    analyticsText:
      "Permet a Google Analytics mesurar visites i ús agregat del lloc. Sense el teu consentiment, l'etiqueta es manté amb emmagatzematge d'analítica denegat.",
    marketingTitle: "Màrqueting",
    marketingText: "Actualment no utilitzem galetes ni scripts de màrqueting.",
    savePreferences: "Guardar preferències",
    close: "Tancar",
    footerConfigure: "Configurar galetes",
    policyTitle: "Política de galetes",
    policyIntro:
      "Esta pàgina explica quin emmagatzematge usa la web, quins servicis externs poden carregar-se i com pots canviar el consentiment.",
    policySections: [
      {
        title: "Galetes i emmagatzematge necessaris",
        text: "La web guarda la preferència d'idioma, la decisió de consentiment i una dada tècnica temporal per a gestionar errors de càrrega. Són necessaris per a prestar el servici sol·licitat i no s'usen per a analítica ni publicitat.",
      },
      {
        title: "Analítica opcional",
        text: "Google Analytics, amb identificador G-HEF4PZK50X, usa Consent Mode: l'analítica queda denegada per defecte i només es concedix quan acceptes esta categoria. Si rebutges o revoques el permís, es torna a denegar l'analítica i s'intenten esborrar les seues galetes (_ga, _gid, _gat i equivalents).",
      },
      {
        title: "Servicis externs",
        text: "El botó de reserva obri Google Calendar en una pestanya nova sense carregar el seu script dins de la web. reCAPTCHA només se sol·licita en enviar el formulari de contacte si està configurat, com a mesura de seguretat contra abús.",
      },
      {
        title: "Canviar la teua elecció",
        text: "Pots tornar a obrir el panell des de l'enllaç permanent del peu de pàgina. Rebutjar és tan senzill com acceptar.",
      },
    ],
  },
  professionalsPage: professionalsVa,
  pastLivesPage: pastLivesVa,
  ...servicesVa,
};

const en: Dict = {
  brand: "María A. Cabo",
  tagline: "Hypnosis and personal development",
  nav: {
    home: "Home",
    how: "How it works",
    areas: "Areas",
    professionals: "Professionals",
    companies: "Organisations",
    sessions: "Sessions",
    about: "About me",
    events: "Events",
    journal: "Blog",
    faq: "FAQs",
    contact: "Contact",
    book: "Book",
  },
  home: {
    eyebrow: "Valencia & Sueca · In-person & Home visits",
    title: "A space to change from within",
    subtitle:
      "Hypnosis and personal development for adults seeking real change: habits, calm, deep restorative sleep and confidence. With scientific grounding, warmth and clear expectations.",
    pillars: [
      {
        title: "Evidence and rigor",
        text: "Clinical and Ericksonian hypnosis with scientific and neurobiological grounding, without myths or false claims.",
      },
      {
        title: "Ericksonian hypnosis",
        text: "A respectful approach activating your own unconscious resources, tailored to your pace and goals.",
      },
      {
        title: "Clear ethical boundaries",
        text: "Focused on concrete goals of personal change and emotional well-being, without diagnosing severe psychiatric disorders.",
      },
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
      "Rest and insomnia: quieting the mind and regaining deep sleep",
      "Preparing for specific challenges",
    ],
    journalTitle: "Latest writing",
    journalLink: "Read the journal",
    faqTitle: "Common questions",
    faqLink: "See all questions",
    finalTitle: "Shall we take the first step?",
    finalText: "You can book directly, or write first if something is unclear.",
    finalSecondary: "I have a question before booking",
    heroEyebrow: "HYPNOSIS & PERSONAL DEVELOPMENT · VALENCIA & SUECA",
    heroTitle1: "HYPNOSIS TO CHANGE",
    heroTitle2: "WHAT NO LONGER SERVES YOU.",
    heroTitle3: "MOVE FORWARD WITH CALM.",
    heroIntro:
      "Individual sessions of hypnosis and personal development focused on habit change, managing everyday stress and anxiety, insomnia and personal confidence. In-person room in Sueca (Centro Sanar), home visits in Valencia city, and online.",
    heroPrimary: "BOOK A SESSION",
    heroSecondary: "HOW HYPNOSIS WORKS",
    heroHow: "Learn how hypnosis works step-by-step →",
    heroImageAlt: "Natural photograph related to hypnosis",
    changeEyebrow: "INDIVIDUAL SUPPORT",
    changeTitle: "WHAT WOULD YOU LIKE TO CHANGE?",
    changeCards: [
      {
        title: "EVERYDAY ANXIETY & STRESS",
        text: "Tools to better manage situations that trigger tension, worry or restlessness.",
        slug: "/ansiedad",
        cta: "Explore anxiety management",
      },
      {
        title: "REST & INSOMNIA",
        text: "Deactivate the body's alert state, calm nighttime rumination, and regain deep, restorative sleep.",
        slug: "/insomnio",
        cta: "Explore insomnia & rest",
      },
      {
        title: "HABIT CHANGE",
        text: "Smoking, eating habits, routines and behaviours you want to consciously modify.",
        slug: "/habitos-nerviosos",
        cta: "Explore habit change",
      },
      {
        title: "QUIT SMOKING",
        text: "Structured 3-session programme to change your relationship with tobacco and remain smoke-free.",
        slug: "/dejar-de-fumar",
        cta: "Explore stop smoking programme",
      },
      {
        title: "CONFIDENCE & SELF-ESTEEM",
        text: "Work on grounded self-worth, positive inner dialogue and calm responses under high pressure.",
        slug: "/autoestima-y-confianza",
        cta: "Explore confidence",
      },
      {
        title: "FOCUS & PERFORMANCE",
        text: "Concentration, studying, exam preparation, mental focus and pressure management.",
        slug: "/concentracion-y-foco",
        cta: "Explore focus & performance",
      },
    ],
    changeLink: "EXPLORE ALL AREAS",
    hypnosisEyebrow: "METHOD & EVIDENCE",
    hypnosisTitle: "CLINICAL HYPNOSIS: A RIGOROUS, SCIENTIFICALLY SUPPORTED PROCESS.",
    hypnosisText1:
      "Clinical and Ericksonian hypnosis is a state of focused attention supported by modern neuroscience. Far from stage myths, it is a structured procedure where you remain fully conscious and in control at all times, facilitating deep shifts in habits, automatic responses to tension, and behavioural patterns.",
    hypnosisText2:
      "Through hypnosis and personal development support, no external solutions are forced: we activate your own internal resources to learn to respond with poise in stressful or blocked situations. We focus on personal goals and emotional well-being with complete professional rigor, without diagnosing severe psychiatric disorders.",
    hypnosisLink: "HOW HYPNOSIS WORKS",
    hypnosisImageAlt: "Photograph of a calm session",
    contextsTitle: "TWO CONTEXTS. ONE IDEA: CHANGING HOW WE RESPOND.",
    individualTitle: "INDIVIDUAL SESSIONS",
    individualText:
      "Individual work focused on habits, confidence, fears, focus and other personal development goals.",
    individualLink: "VIEW SESSIONS",
    companiesTitle: "DEVELOPMENT & PERFORMANCE",
    companiesText:
      "Programmes and workshops designed to help people develop their attention, confidence, learning and response under pressure.",
    companiesLink: "SOLUTIONS FOR ORGANISATIONS",
    processEyebrow: "THE PROCESS",
    processTitle: "CLEAR, PERSONAL AND PRACTICAL.",
    processSteps: [
      {
        title: "WE DEFINE THE GOAL",
        text: "We begin by exploring what you would like to change and the situations in which the current pattern appears.",
      },
      {
        title: "WE WORK WITH HYPNOSIS",
        text: "Each session is adapted to your goal and the way you respond.",
      },
      {
        title: "WE INTEGRATE THE CHANGE",
        text: "We review what emerges from the session and, when useful, introduce simple practices between sessions.",
      },
    ],
    aboutEyebrow: "MARÍA CABO",
    aboutTitle: "A GROUNDED, RIGOROUS APPROACH TO FACILITATING CHANGE.",
    aboutText:
      "My work stems from a simple reality: often we know rationally what we want to do, yet our body and automatic mind react otherwise. Trained at the Instituto Erickson Madrid in Ericksonian Hypnosis, I use these tools to address those deeper automatic patterns, enabling lasting, reliable change with safety, warmth, and professional rigor.",
    aboutLink: "ABOUT ME",
    aboutImageAlt: "María A. Cabo",
    eventsTitle: "EVENTS",
    eventsLink: "VIEW EVENTS",
    eventsEmpty: "New dates coming soon.",
    learnTitle: "LEARN",
    learnLink: "VIEW ALL ARTICLES",
    faqHomeTitle: "UNDERSTANDING HYPNOSIS",
    faqHomeLink: "VIEW FAQs",
    ctaTitle: "CHANGE CAN START WITH A CONVERSATION.",
    ctaPrimary: "BOOK A SESSION",
    ctaSecondary: "ASK A QUESTION BEFORE BOOKING",
    ctaCompanies: "Representing an organisation? Explore our solutions →",
  },
  companiesPage: {
    seoTitle: "Professional Development Programmes for Organisations · María A. Cabo",
    seoDescription:
      "Workshops and programmes focusing on focus, confidence, learning, habits and mental preparation for high-demand professional environments.",
    heroTitle: "PROFESSIONAL DEVELOPMENT",
    heroLead: "Focus, confidence, learning and habit change applied to the workplace.",
    heroText:
      "I design workshops and programmes using hypnosis, focused attention and pattern-shifting tools to help individuals work more consciously through pressure, distraction, self-doubt or mental blocks.",
    heroPrimary: "DISCUSS A PROGRAMME",
    heroSecondary: "FORMATS FOR BUSINESSES",
    heroImageAlt: "Team working together",
    leadTitle: 'WHEN "KNOWING WHAT TO DO" IS NOT ENOUGH',
    leadText:
      "In many professional situations, the issue is not a lack of knowledge. Much of our behaviour is driven by automatic associations, expectations and habits. Working directly on these patterns complements traditional training and enables new ways of responding.",
    areasEyebrow: "FOCUS AREAS",
    areas: [
      {
        title: "PROFESSIONAL CONFIDENCE",
        text: "Presentations, high-stakes meetings, interviews and public speaking.",
      },
      {
        title: "FOCUS & ATTENTION",
        text: "Concentration routines, reclaiming focus and managing modern distractions.",
      },
      {
        title: "LEARNING & ADAPTABILITY",
        text: "Cultivating mental conditions that facilitate acquiring new skills quickly.",
      },
      {
        title: "PRESSURE MANAGEMENT",
        text: "Mental preparation to perform calmly under tight deadlines and scrutiny.",
      },
      {
        title: "HABIT RESTRUCTURING",
        text: "Reducing counter-productive automatic behaviours and building sustainable habits.",
      },
      {
        title: "TARGETED MENTAL PREPARATION",
        text: "Specific interventions for key milestones: negotiations, certifications or mediation.",
      },
    ],
    formatsTitle: "FORMATS FOR ORGANISATIONS",
    formats: [
      {
        title: "INTRODUCTORY SESSIONS",
        text: "45–60 minutes. A practical introduction to attention and subconscious automatisms.",
      },
      {
        title: "WORKSHOPS",
        text: "90 minutes – 3 hours. Hands-on sessions centred on a specific skill or challenge.",
      },
      {
        title: "PROGRAMMES",
        text: "Multi-session journeys with follow-up when ongoing practice is required.",
      },
      {
        title: "INDIVIDUAL SESSIONS",
        text: "Tailored 1-on-1 sessions within corporate initiatives for specific team members.",
      },
    ],
    confidentialityTitle: "CONFIDENTIALITY, CONSENT AND SHARED OBJECTIVES",
    confidentialityParagraphs: [
      "Individual sessions are a private and confidential space between the practitioner and the employee. While the organisation participates in defining overarching goals, session conversations and contents are never disclosed to the company.",
      "All work is strictly based on the employee's genuine consent. Hypnosis is never used to alter someone's values, personality, or opinions, nor to induce unwanted behaviours. On the contrary, it is a tool designed to help individuals regain conscious control over automatic habits or emotional reactions they themselves wish to change.",
      "Objectives must therefore make sense for both parties: supporting professional development while offering genuine personal growth.",
    ],
    exampleTitle: "Example",
    exampleText:
      "A company wishes to promote an employee into a role requiring frequent travel, but the individual experiences intense fear of flying. Both company and employee may agree that addressing this fear benefits the new responsibility. From that point onwards, sessions remain entirely confidential, and the process only takes place if the employee genuinely consents to working on that goal.",
    exampleSummary:
      "The organisation agrees on the objective. The employee chooses to participate. Sessions remain private.",
    processAria: "How we work with organisations",
    processTitle: "HOW A SESSION OR WORKSHOP RUNS",
    processSteps: [
      {
        title: "DEFINING THE OBJECTIVE.",
        text: "We speak with the organisation to understand the context and desired outcome.",
      },
      {
        title: "EXPLAINING THE PROCESS.",
        text: "Clarifying what hypnosis is, what to expect, and what does not happen during sessions.",
      },
      {
        title: "PRACTISING TOGETHER.",
        text: "Tailored attention exercises, mental imagery and rehearsals suited to the goal.",
      },
      {
        title: "APPLYING TO REAL WORK.",
        text: "Ensuring techniques are practical and immediately usable in daily professional life.",
      },
    ],
    finalTitle: "LET'S TALK ABOUT YOUR TEAM",
    finalText:
      "Tell me what you would like to improve, and we will assess whether this approach suits your organisation.",
    finalCta: "REQUEST A CONVERSATION",
    aboutLink: "LEARN MORE ABOUT MARÍA",
  },
  companiesContact: {
    seoTitle: "Discuss a Corporate Programme · María A. Cabo",
    seoDescription:
      "Contact form for companies interested in professional development programmes and workshops with María A. Cabo.",
    eyebrow: "Organisations",
    title: "Discuss a programme",
    intro:
      "Tell me about your organisation's context to assess whether a workshop or programme fits your goals.",
    fields: {
      company: "Company",
      contactName: "Contact person",
      role: "Role / Position",
      email: "Email",
      phone: "Phone",
      employees: "No. of employees",
      objective: "Programme objective",
      format: "Format of interest",
      participants: "Expected participants",
      message: "Message",
    },
    objectivePlaceholder: "e.g. improve focus, prepare presentations, manage stress...",
    formatPlaceholder: "Select an option",
    formats: [
      "Introductory session",
      "Workshop",
      "Multi-session programme",
      "Individual sessions within company",
      "Not sure yet",
    ],
    consent: "I have read and accept the privacy policy.",
    send: "Send enquiry",
    sent: "Thank you, I have received your enquiry. I will reply shortly to discuss next steps.",
    mailto: "Send via email",
    asideTitle: "Before our conversation",
    asideItems: [
      "Objectives can be individual, group or team-wide.",
      "Formats are tailored to group size and work environment.",
      "Private contents of individual sessions are never shared with the organisation.",
    ],
    back: "Back to organisations",
    emailSubject: "Programme for organisations",
    emailSummary: "B2B web enquiry",
    notProvided: "Not provided",
  },
  smokingPage: {
    seoTitle: "Quit Smoking with Hypnosis in Sueca · María A. Cabo",
    seoDescription:
      "Structured 3-session hypnosis programme to stop smoking permanently in Sueca (Valencia). Request your free 20-minute consultation.",
    eyebrow: "STOP SMOKING PROGRAMME",
    title: "QUIT SMOKING WITH HYPNOSIS",
    subtitle:
      "A structured journey to change automatic habits, disable daily triggers and sustain your decision calmly.",
    introText:
      "Smoking is rarely a conscious choice: it operates through automatic patterns built over years. With hypnosis, we work directly on that involuntary mechanism, so that quitting does not feel like an exhausting battle against yourself.",
    ctaPrimary: "REQUEST INITIAL CONSULTATION",
    ctaSecondary: "HOW THE PROGRAMME WORKS",
    whyTitle: 'WHY "WILLPOWER" ALONE IS RARELY ENOUGH',
    whyParagraphs: [
      "Most people who want to quit smoking know exactly why they should: health, finances, freedom, smell. However, the moment stress strikes, morning coffee arrives, or friends gather around a table, the subconscious triggers the automatic urge before rational thinking intervenes.",
      "The problem is not a lack of willpower or character. The problem is that the smoking habit is sustained by deep neural associations that fire automatically. Relying solely on constant willpower creates tension, irritability and fatigue.",
      "Hypnosis allows us to intervene where those automatisms originate: disconnecting the links between smoking and calmness or reward, and replacing them with healthy, calm responses.",
    ],
    programTitle: "PROGRAMME STRUCTURE (3 SESSIONS)",
    programIntro:
      "A clear process with a beginning and an end, designed to foster your long-term independence.",
    steps: [
      {
        num: "01",
        title: "20-MINUTE INITIAL CONSULTATION",
        badge: "Free & no obligation",
        text: "We speak by phone or video call to understand your smoking history, personal motivations and answer any questions before beginning.",
      },
      {
        num: "02",
        title: "SESSION 1 · THE TURNING POINT",
        badge: "In-person in Sueca (75 min)",
        text: "We address your personal drivers in depth, neutralise everyday triggers and establish your new identity as a non-smoker.",
      },
      {
        num: "03",
        title: "SESSION 2 · CONSOLIDATION & CALM",
        badge: "In-person in Sueca (60 min)",
        text: "We review your first smoke-free days, reinforce positive sensations, navigate potential tension spikes and anchor new habits.",
      },
      {
        num: "04",
        title: "SESSION 3 · LONG-TERM RESILIENCE",
        badge: "In-person in Sueca (60 min)",
        text: "Future-pacing for social events or unforeseen stress, prevention tools and concluding the process with complete autonomy.",
      },
    ],
    includedTitle: "WHAT IS INCLUDED",
    includedItems: [
      "Free 20-minute preliminary assessment consultation.",
      "3 intensive individual in-person sessions in Sueca.",
      "Personalised audio reinforcement recording to listen to at home.",
      "Support and follow-up between sessions.",
      "Breathing and self-hypnosis tools for situational stress.",
    ],
    price: "€300",
    priceNote: "All-inclusive price covering the three sessions and all supplementary materials.",
    formEyebrow: "INITIAL CONSULTATION",
    formTitle: "REQUEST YOUR FREE 20-MINUTE CALL",
    formSubtitle:
      "Fill out this brief form and I will get in touch with you shortly to schedule our conversation with no obligation.",
    formFields: {
      name: "Full name",
      email: "Email address",
      phone: "Phone number",
      preferredTime: "Preferred time for the call",
      preferredTimePlaceholder: "Select an option",
      timeOptions: [
        "Mornings (09:00 - 13:00)",
        "Midday (13:00 - 16:00)",
        "Afternoons (16:00 - 20:00)",
        "Any time / Flexible",
      ],
      preferredMethod: "Preferred method",
      methodOptions: ["Phone call", "Video call"],
      habitDetails: "How much do you currently smoke? (Optional)",
      habitDetailsPlaceholder: "e.g. 1 pack a day for 10 years, smoke more when stressed...",
      message: "Any questions or additional notes? (Optional)",
      messagePlaceholder: "Is there anything you would like to ask before our call?",
      consent: "I have read and accept the privacy policy.",
      submit: "Request free consultation",
      submitting: "Sending request...",
      success:
        "Thank you. Your request has been received. I will be in touch shortly to confirm a time for our call.",
      fallbackMailto: "Send via email",
    },
    faqTitle: "FREQUENTLY ASKED QUESTIONS",
    faqs: [
      {
        q: "Will I quit smoking right after the first session?",
        a: "The goal is for you to stop smoking during the first in-person session. The preliminary consultation ensures you arrive prepared and committed, while sessions 2 and 3 consolidate the shift so you remain smoke-free comfortably.",
      },
      {
        q: "Will I experience intense cravings or anxiety?",
        a: "Hypnosis specifically alleviates the psychological anxiety linked to withdrawal. You will also receive an audio recording and simple calming techniques for specific moments.",
      },
      {
        q: "What if it does not work or I have doubts?",
        a: "That is precisely why we hold the free 20-minute preliminary interview: to assess your situation honestly. If it is not the right moment or approach, I will tell you with complete transparency.",
      },
      {
        q: "Where do sessions take place?",
        a: "All 3 in-person sessions take place at my independent practice within Centro Sanar in Sueca (Valencia). The 20-minute initial consultation is conducted comfortably by phone or video call.",
      },
    ],
  },
  anxietyPage: {
    seoTitle:
      "Everyday Anxiety Management and Fears in Valencia & Sueca · Hypnosis | María A. Cabo",
    seoDescription:
      "Learn to manage everyday anxiety, ease tension and work through fears (flying, driving, public speaking) with hypnosis in Sueca, Valencia and online. €70/session.",
    eyebrow: "HYPNOSIS & PERSONAL DEVELOPMENT · VALENCIA & SUECA",
    eyebrowNav: "Anxiety Management & Fears",
    title: "MANAGE EVERYDAY ANXIETY, EASE TENSION AND WORK THROUGH FEARS",
    subtitle:
      "Learn to respond differently to situations that bring tension, worry or hesitation, helping your body return to calm.",
    introText:
      "Chest tightness, shallow breathing, a mind anticipating worries, or hesitation around flying, driving or public speaking. When stress and worry recur, the body reacts automatically before logic can intervene. Through clinical hypnosis and personal development tools, we work at that involuntary level of automatic responses: providing resources so your body remembers calm, you learn to respond with poise to tension triggers, and you regain everyday peace in a respectful, natural way.",
    ctaPrimary: "BOOK A SESSION OR ENQUIRE",
    ctaSecondary: "HOW HYPNOSIS HELPS YOU",
    trustBadges: [
      "Respectful, natural approach",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "Individual 1h sessions · €70 (at your own pace)",
    ],
    symptomsTitle: "WHEN THE BODY LIVES IN PERPETUAL ALERT",
    symptomsSubtitle:
      "Anxiety is not a character flaw; it is your nervous system running on survival autopilot.",
    symptoms: [
      {
        title: "Persistent physical tension",
        text: "Chest or throat tightness, shallow breathing, clenched jaw, tension dizziness or knot in the stomach.",
      },
      {
        title: "Racing mind and rumination",
        text: "Looping catastrophic thoughts, overthinking future scenarios and difficulty unwinding at the end of the day.",
      },
      {
        title: "Specific fears and phobias",
        text: "Freeze and panic in specific situations: fear of flying, driving on motorways or tunnels (amaxophobia), needles or public speaking.",
      },
      {
        title: "Fear of being overwhelmed and avoidance",
        text: "Fear of losing control, panic sensations, or cancelling plans and trips to avoid feeling distressed.",
      },
    ],
    whyTitle: "WHY TELLING YOURSELF TO 'JUST CALM DOWN' DOESN'T WORK",
    whyParagraphs: [
      "Most people experiencing anxiety already know rationally that their worries are magnified. The intellect understands, but the physiology doesn't obey: the heart races, breathing stays shallow, and muscles brace. Why?",
      "Because the anxiety response is generated by the autonomic nervous system (the sympathetic 'fight or flight' branch) — an ancient survival circuit that does not answer to logical self-talk. Trying to stop anxiety through sheer conscious willpower often leads to greater frustration and exhaustion.",
      "Hypnosis works because it speaks the nervous system's native language: focused sensory attention and neuromuscular relaxation. By guiding you into deep stillness, we engage the parasympathetic nervous system (the physiological brake on stress), teaching the body to quiet the alarm and building lasting neural pathways of composure.",
    ],
    pillarsTitle: "THE PROCESS: TEACHING YOUR BODY TO REST IN CALM",
    pillarsIntro:
      "A practical, individualized journey focused on giving you self-reliance from session one.",
    steps: [
      {
        num: "01",
        badge: "Physiological reset",
        title: "DEACTIVATING THE ALARM",
        text: "We disrupt the physical loop of hypervigilance. Your body experiences genuine somatic safety, immediately downregulating stress hormones.",
      },
      {
        num: "02",
        badge: "Subconscious level",
        title: "REPROGRAMMING TRIGGERS",
        text: "We identify everyday situations or memories that set off anxiety and unlink them from the automatic panic response.",
      },
      {
        num: "03",
        badge: "Practical anchors",
        title: "INSTANT CALM ANCHORS",
        text: "We establish conditioned physiological anchors: physical and sensory cues you can activate yourself anytime to halt an anxiety surge.",
      },
      {
        num: "04",
        badge: "Lifelong skills",
        title: "SELF-HYPNOSIS & INDEPENDENCE",
        text: "You learn self-hypnosis and breathwork protocols to sustain your well-being in daily life, at your pace, without dependency.",
      },
    ],
    locationsTitle: "WHERE SESSIONS TAKE PLACE",
    locationsIntro: "Warm, personalized care across the Ribera Baixa area and Valencia city:",
    locations: [
      {
        name: "Office in Sueca (Centro Sanar)",
        area: "Ribera Baixa",
        desc: "A peaceful, private space in Sueca, convenient for clients from Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara and El Perelló.",
      },
      {
        name: "Home visits in Valencia city",
        area: "Valencia city & metropolitan area",
        desc: "Ideal if commuting triggers distress or if you simply prefer the comfort and privacy of your own home in Valencia.",
      },
      {
        name: "Live Online Sessions",
        area: "Worldwide",
        desc: "Via one-to-one secure video call, equally effective, guided step-by-step from the comfort of your chosen environment.",
      },
    ],
    pricingTitle: "CLEAR PRICING AND TRANSPARENT CONDITIONS",
    price: "€70",
    priceUnit: "per session (1 hour)",
    pricingFeatures: [
      "Tailored 60-minute individual session.",
      "Sueca (Centro Sanar), home visits in Valencia city or online.",
      "At your own pace: no fixed commitments or mandatory packages.",
      "Self-hypnosis audio and practical daily exercises included.",
      "Pre-session questions answered with zero obligation.",
    ],
    formEyebrow: "ENQUIRY & BOOKING",
    formTitle: "TAKE THE FIRST STEP TOWARDS CALM",
    formSubtitle:
      "Fill out this brief form to ask any questions or request an appointment. I will respond to you personally.",
    formFields: {
      name: "Full name",
      email: "Email address",
      phone: "Phone number",
      modality: "Preferred session format",
      modalityOptions: [
        "Office in Sueca (Centro Sanar)",
        "Home visit in Valencia city",
        "Online session (Video call)",
        "Not sure yet / Want to discuss first",
      ],
      symptoms: "When do you notice anxiety most intensely? (Optional)",
      symptomsPlaceholder: "E.g. At work, while driving, before sleep, constant chest tightness...",
      message: "Any questions or details to share? (Optional)",
      messagePlaceholder: "Write your questions here...",
      consent: "I have read and agree to the privacy policy.",
      submit: "Send enquiry / Request session",
      submitting: "Sending message...",
      success:
        "Thank you for your message. I have received it and will get back to you as soon as possible.",
      fallbackMailto: "Send via email client",
    },
    faqTitle: "FREQUENTLY ASKED QUESTIONS ABOUT HYPNOSIS, ANXIETY & PHOBIAS",
    faqs: [
      {
        q: "How exactly does hypnosis help reduce anxiety and phobias?",
        a: "Hypnosis addresses the neurobiology of fear and stress directly. While conscious rationalization often fails to quiet panic, in hypnosis we tap into a state where the parasympathetic nervous system takes over, releasing muscle tension, steadying breathing and desensitizing conditioned alarm reactions.",
      },
      {
        q: "Will I lose control or be unconscious during the session?",
        a: "Not at all. Clinical and Ericksonian hypnosis is grounded and collaborative. You remain fully conscious throughout, you hear everything, can speak, move and decide what to share. It is a state of focused inward attention and deep physical comfort, far removed from stage entertainment.",
      },
      {
        q: "How many sessions are typically needed?",
        a: "Many clients experience a profound sense of lightness and physical relief from the very first session. Because there are no mandatory commitments, we evaluate progress together after each session, moving at your natural rhythm.",
      },
      {
        q: "Is it compatible with medication or medical care?",
        a: "Yes, it is entirely compatible as a supportive self-regulation discipline. Clinical hypnosis and personal development support help you tap into natural internal resources. We do not perform clinical diagnoses of severe mental disorders, nor do we replace medical or psychiatric treatments prescribed by healthcare specialists.",
      },
      {
        q: "Do you offer sessions in Sueca, the Ribera Baixa and Valencia?",
        a: "Yes. I see clients in person at my office inside Centro Sanar in Sueca (readily accessible from Cullera, Alzira, Algemesí, Sollana, etc.), at home in Valencia city for added convenience, and online worldwide.",
      },
    ],
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
    mythsTitle: "Myths and realities",
    myths: [
      "It is not a stage show: you never lose your will or control.",
      "We do not perform clinical diagnoses of severe mental disorders.",
      "It does not replace medical or psychiatric care for severe pathologies.",
      "It is an active, structured process supported by scientific evidence.",
    ],
    safetyTitle: "Safety and clear boundaries",
    safetyText:
      "This service is for adults over 18. If your situation requires specialized medical or psychiatric care, I will tell you with complete clarity and professional honesty.",
  },
  areas: {
    title: "Focus areas",
    intro:
      "Eight core areas where hypnosis and personal development help reorganize automatic responses, habits, and ways of approaching life with calm and poise.",
    noticeTitle: "Professional rigor and ethical boundaries",
    notice:
      "Hypnosis and personal development sessions focus on personal change and emotional well-being. They do not replace medical, psychological, or psychiatric care for severe pathologies, nor do we perform clinical diagnoses of severe mental disorders. If your situation requires specialized medical or psychiatric care, we will guide you with complete transparency.",
    items: [
      {
        title: "Stress, calm and insomnia",
        text: "Train deep relaxation resources to quiet the nervous system's alarm state, calm nighttime rumination and restore deep, natural restorative sleep.",
        slug: "/insomnio",
        cta: "Explore hypnosis for insomnia and stress",
      },
      {
        title: "Stopping smoking",
        text: "A structured journey to change automatic habits, disable daily triggers and sustain your decision calmly.",
        slug: "/dejar-de-fumar",
        cta: "Explore stop smoking programme",
      },
      {
        title: "Habits and relationship with food",
        text: "Work on habits, impulses, routines and behaviours related to eating and genuine physical satiety signals.",
        slug: "/control-de-peso",
        cta: "Explore habits and food",
      },
      {
        title: "Nervous habits & nail biting",
        text: "Modify involuntary automatisms such as nail biting (onychophagia), daytime jaw clenching or nervous tension.",
        slug: "/habitos-nerviosos",
        cta: "Explore nervous habits",
      },
      {
        title: "Everyday anxiety management and fears",
        text: "Learn to respond with poise to everyday situations that bring tension or specific fears such as flying, driving, or public speaking.",
        slug: "/ansiedad",
        cta: "Explore anxiety management & fears",
      },
      {
        title: "Self-esteem and confidence",
        text: "Build grounded security, overcome insecurity, set healthy boundaries and express yourself with clarity.",
        slug: "/autoestima-y-confianza",
        cta: "Explore confidence",
      },
      {
        title: "Focus, study and exams",
        text: "Prepare for competitive exams, demanding tests and career milestones by training deep focus and pressure management.",
        slug: "/concentracion-y-foco",
        cta: "Explore focus & study",
      },
      {
        title: "Sports and motivation",
        text: "Cultivate flow state, mental rehearsal of motor skills, training consistency and composure during competition.",
        slug: "/deporte-y-motivacion",
        cta: "Explore sports hypnosis",
      },
    ],
    closing:
      "If you are unsure whether this support is a good fit for you, write to me before booking.",
    cta: "Ask a question",
  },
  sessions: {
    title: "Sessions",
    intro:
      "One-to-one in-person sessions in Sueca, in an independent consultation room at Centro Sanar. Clear prices and a transparent change policy.",
    items: [
      {
        name: "Individual session",
        price: "€70",
        unit: "per hour",
        text: "One hour of support with hypnosis and personal development to work on rest, stress, everyday anxiety, habits, or the specific goal we define together.",
        points: ["60 minutes", "In person", "At your own pace"],
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
    name: "María A. Cabo",
    role: "Specialist in hypnosis and personal development",
    intro:
      "I am María Cabo, specialist in hypnosis and personal development. I support adults who want to transform habits, regulate everyday stress and anxiety, work through fears, or build grounded confidence using hypnosis as a rigorous tool for change. I completed specialized training in Ericksonian Hypnosis at the Instituto Erickson Madrid, with an approachable, practical, and evidence-based approach.",
    traits: ["Warmth", "Ericksonian Training", "Practical tools"],
    highlights: [
      {
        title: "Instituto Erickson Madrid",
        text: "Specialized training in Ericksonian Hypnosis at the Instituto Erickson Madrid.",
      },
      {
        title: "International experience",
        text: "I have lived and worked across Los Angeles, London, Barcelona, Madrid and Valencia.",
      },
      {
        title: "Corporate perspective",
        text: "I understand common challenges in companies and teams: pressure, focus, confidence and communication.",
      },
      {
        title: "Sessions in two languages",
        text: "I work in Spanish and English, with individuals and organisations.",
      },
    ],
    body: [
      "I work with adults who want to make a specific change and don't know where to start. My way of working is calm, curious and honest: understand first, propose after.",
      "I believe in realistic expectations. Hypnosis is a valuable tool for habits, attention and stress responses, but it doesn't solve everything and never replaces healthcare.",
      "I work in Sueca, in Spanish and English, from an independent consultation room at Centro Sanar, at private homes in Valencia city and online.",
    ],
    valuesTitle: "How I work",
    valuesSidebarTitle: "In every session",
    values: [
      "Listening and respect for each person.",
      "Clear goals and realistic expectations.",
      "Active participation throughout the process.",
      "Confidentiality.",
      "Practical tools for everyday life.",
    ],
    controlNote: "You remain aware, involved and in control of the experience at all times.",
    statement:
      "My work is about supporting each person as they explore their patterns and offering tools to respond in ways that are more useful for them.",
    workEyebrow: "My way of working",
    workTitle: "Hypnosis as a tool, not a magic formula.",
    workText:
      "I understand hypnosis as a resource that supports change, helps observe automatic responses, and trains new ways of facing specific situations with more calm, confidence, and choice.",
    focusAreas: [
      {
        title: "Practical change",
        text: "Sessions focused on concrete goals, with resources that can be carried into real life.",
      },
      {
        title: "A conscious process",
        text: "The person participates actively, understands what we are doing and always remains in control.",
      },
      {
        title: "Personal pace",
        text: "Each process adapts to the person's story, circumstances and way of experiencing the work.",
      },
    ],
    pathEyebrow: "Background",
    pathTitle:
      "A perspective shaped across cultures, professional settings and specialized training.",
    cities: ["Los Angeles", "London", "Barcelona", "Madrid", "Valencia"],
    pathParagraphs: [
      "Throughout my career I have worked in corporate and international environments and lived in cities such as Los Angeles, London, Barcelona, Valencia and Madrid.",
      "Trained at the Instituto Erickson Madrid in Ericksonian Hypnosis, one of Spain's leading reference institutions, I work with a model emphasizing each person's unconscious resources and prior learnings to develop more adaptive and lasting responses.",
      "Combining specialized training in hypnosis with international experience helps me understand that behind every goal lies a unique story, way of responding, and set of circumstances.",
    ],
    pathExtra:
      "My previous experience in international companies helps me understand common work-related challenges: public speaking, taking on responsibility, performing under pressure, staying focused or moving through demanding situations with more confidence.",
    sessionsEyebrow: "Sessions and collaborations",
    serviceAreaTitle: "Sueca · Ribera Baixa · Valencia · Gandia",
    sessionsTexts: [
      "Individual sessions take place in person in a consultation room in Sueca, at private homes in Valencia city, or online.",
      "I can also travel to companies, offices, centres and organisations for sessions, workshops or professional-development programmes.",
    ],
    quote:
      "Very often, change is not about becoming someone else, but about no longer being limited by patterns we no longer need.",
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
    upcomingTitle: "Upcoming events",
    pastTitle: "Past events",
    pastBadge: "Past event",
    items: [
      {
        dateISO: "2026-09-14",
        date: "14 Sept",
        time: "18:00",
        title: "Smoking",
        text: "A gathering to understand how smoking automatisms are maintained and how hypnosis can support change.",
      },
      {
        dateISO: "2026-09-21",
        date: "21 Sept",
        time: "18:00",
        title: "Anxiety, fears and phobias",
        text: "A calm introduction to attention, grounding and inner preparation for situations that create tension.",
      },
      {
        dateISO: "2026-09-28",
        date: "28 Sept",
        time: "18:00",
        title: "Study and exams",
        text: "A group session to explore focus, confidence and mental rehearsal before academic challenges or important tests.",
      },
      {
        dateISO: "2026-10-05",
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
        slug: "hipnosis-y-fobias-aprender-una-respuesta-diferente",
        title: "Hypnosis and phobias: learning a different response",
        excerpt:
          "A phobia can feel like an automatic reaction. Hypnosis can work with that more automatic part of the experience.",
      },
      {
        slug: "por-que-evitar-aquello-que-tememos-puede-mantener-el-miedo",
        title: "Why avoiding what we fear can keep fear in place",
        excerpt:
          "Avoiding what frightens us works very well in the short term. That is precisely why it can become part of the problem.",
      },
      {
        slug: "que-es-realmente-una-fobia",
        title: "What is a phobia, really?",
        excerpt:
          "Fear is human. A phobia appears when that fear becomes disproportionate and starts shaping what we do.",
      },
      {
        slug: "hipnosis-y-ansiedad-aprender-una-respuesta-diferente",
        title: "Hypnosis and anxiety: learning a different response",
        excerpt:
          "Hypnosis can offer a different context for working with attention, imagination and learned responses.",
      },
      {
        slug: "cuando-el-cuerpo-aprende-a-estar-en-alerta",
        title: "When the body learns to stay on alert",
        excerpt:
          "Sometimes the situation changes, but the body keeps responding as if the danger were still there.",
      },
      {
        slug: "que-es-realmente-la-ansiedad",
        title: "What is anxiety, really?",
        excerpt:
          "Anxiety is not necessarily a bad thing. It is a protective mechanism that can begin to activate too often.",
      },
      {
        slug: "como-es-una-sesion-de-hipnosis",
        title: "What is a hypnosis session like?",
        excerpt:
          "A session is a collaborative space, not an experience where someone else takes control.",
      },
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
    seriesTitle: "Reading series",
    seriesIntro: "Read each series in order to follow the thread between related articles.",
    series: [
      {
        title: "Phobias and learned fear",
        description:
          "Three pieces to understand what a phobia is, why avoidance can keep fear in place and how a different response can be practised.",
        posts: [
          "que-es-realmente-una-fobia",
          "por-que-evitar-aquello-que-tememos-puede-mantener-el-miedo",
          "hipnosis-y-fobias-aprender-una-respuesta-diferente",
        ],
      },
      {
        title: "Anxiety and learned responses",
        description:
          "Three pieces to understand what anxiety is, how alertness is learned and how a different response can be practised.",
        posts: [
          "que-es-realmente-la-ansiedad",
          "cuando-el-cuerpo-aprende-a-estar-en-alerta",
          "hipnosis-y-ansiedad-aprender-una-respuesta-diferente",
        ],
      },
      {
        title: "Understanding hypnosis",
        description:
          "An ordered introduction to hypnosis, the brain, habits and what a session can be like.",
        posts: [
          "que-es-la-hipnosis",
          "que-ocurre-en-el-cerebro-durante-la-hipnosis",
          "por-que-cuesta-cambiar-un-habito",
          "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
          "como-es-una-sesion-de-hipnosis",
        ],
      },
    ],
    standaloneTitle: "Also in the blog",
    soon: "Coming soon",
    latest: "Latest article",
    readPost: "Read article",
    backToBlog: "Back to the blog",
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Will I lose control during the session?",
        a: "Not at all. In clinical and Ericksonian hypnosis, you remain conscious and in control at all times. It has nothing to do with stage hypnosis: you can talk, move, remember everything, and pause the session whenever you choose.",
      },
      {
        q: "What is clinical hypnosis and what is its scientific backing?",
        a: "Clinical hypnosis is a structured procedure supported by neuroscience and medicine. It consists of a state of focused attention and deep relaxation that modulates brain activity, allowing intervention in automatic reactions, stress, habits, and learned emotional patterns.",
      },
      {
        q: "How does it differ from psychiatric treatment or diagnosis?",
        a: "Clinical hypnosis and personal development are serious tools focused on personal change, emotional well-being, and overcoming blocks. We do not perform clinical diagnoses of severe mental disorders, nor do we replace medical or psychiatric care when required.",
      },
      {
        q: "How many sessions will I need?",
        a: "It depends on your goal and pace. Many people work with individual sessions for specific goals; the quit-smoking programme is structured into three sessions.",
      },
      {
        q: "What if I think I cannot be hypnotized?",
        a: "The Ericksonian approach does not force a rigid trance; it builds on how your mind naturally focuses attention. Everyone enters everyday trance states (such as being absorbed in a book or driving). We adapt the method to you.",
      },
      {
        q: "Is it confidential?",
        a: "Yes, strictly confidential with full professional privacy. Everything shared in session remains exclusively between us.",
      },
      {
        q: "How much does it cost?",
        a: "An individual session is €70 per hour. The stop-smoking programme is €300 and includes three full sessions.",
      },
    ],
  },
  contact: {
    title: "Contact",
    intro:
      "If you have a question before booking, write to me and I'll reply calmly. You don't need to explain anything you'd rather keep private.",
    phone: "Phone",
    name: "Name",
    email: "Email",
    message: "Your message",
    consent: "I have read and accept the privacy policy.",
    send: "Send message",
    sent: "Thank you, your message has been received. I'll reply shortly.",
    note: "Send your message and I'll reply shortly. If you prefer, you can also book directly in the calendar.",
    infoTitle: "Details",
    area: "Sueca (Centro Sanar) · Home visits in Valencia city · Online sessions",
    languages: "Sessions available in Spanish and English",
    hours: "Opening hours in mainland Spain time",
  },
  legal: {
    title: "Legal information",
    intro:
      "Legal information, privacy and booking terms for María A. Cabo. If you need any further clarification, you can write to maria.a.cabo@gmail.com.",
    sections: [
      {
        title: "Legal notice",
        text: "Site owner: María A. Cabo. Contact: maria.a.cabo@gmail.com. Activity: personal development support through hypnosis, with in-person sessions in Sueca in an independent practice within Centro Sanar. The content published on this website is informational and does not constitute healthcare, psychological, medical or legal advice.",
      },
      {
        title: "Identification details",
        text: "The controller and owner of the activity is María A. Cabo. Tax ID, fiscal address and full identification details will be provided in the booking process, invoice or pre-contractual communications when required. To request them before booking, write to maria.a.cabo@gmail.com.",
      },
      {
        title: "Privacy and purpose",
        text: "The data you provide through forms, email or booking requests is used to answer your enquiry, manage appointments, prepare the requested service and maintain communications related to the service. Health data is not requested through the website; if you voluntarily include sensitive information in a message, it will be processed only to handle your request and with the highest possible confidentiality.",
      },
      {
        title: "Legal basis and retention",
        text: "The legal basis for processing is your consent when you submit a form or write by email, the application of pre-contractual measures when you request a session and, where applicable, compliance with legal obligations. Data will be kept for the time needed to manage the enquiry or booking and, afterwards, for the periods required for tax, accounting or legal defence obligations.",
      },
      {
        title: "Providers",
        text: "The website may rely on technical providers for hosting, analytics, calendar booking, anti-spam protection, forms and message delivery or logging: Vercel, Google Calendar, Google Analytics with consent, Google reCAPTCHA when active, Google Sheets if used as an internal record and SendGrid if used for email delivery. These providers process data only to the extent necessary to provide their services.",
      },
      {
        title: "Rights",
        text: "You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to maria.a.cabo@gmail.com. You can also withdraw consent when processing depends on it. If you believe your rights have not been addressed, you may lodge a complaint with the Spanish Data Protection Agency.",
      },
      {
        title: "Cookies",
        text: "The site uses necessary technical storage to remember language and consent preferences. The Google tag starts with analytics consent denied by default, and it is only granted if you accept that category.",
      },
      {
        title: "Terms of service",
        text: "The service is for adults over 18. Individual sessions last approximately one hour and the stop-smoking programme includes three sessions. If you need to change or cancel an appointment, please give at least 24 hours' notice so it can be rescheduled at no cost. Sessions that have already taken place are non-refundable. Amounts paid for sessions not yet provided may be rescheduled or refunded if cancellation is communicated within the stated notice period or if the session cannot be provided for a reason attributable to María A. Cabo.",
      },
    ],
  },
  footer: {
    rights: "All rights reserved.",
    disclaimer:
      "María A. Cabo · Hypnosis and personal development. Support focused on personal change and emotional well-being. Does not replace medical or psychiatric care for severe conditions.",
    legal: "Legal information",
  },
  common: {
    bookNow: "Book a session",
    bookSoon:
      "Book directly in the calendar, or write to me first if you prefer to ask a question.",
    bookIntro:
      "Book directly in the calendar, or write to me first if you prefer to ask a question.",
    contactMe: "Write to me",
    draft: "Placeholder content pending your final details.",
    bookCalendar: "Book in the calendar",
    smokeEmail: "I want to quit smoking",
    smokeEmailNote: "Send an email and we'll arrange a 20-minute interview.",
  },
  cookies: {
    bannerAriaLabel: "Cookie notice",
    bannerTitle: "Cookie use",
    bannerText:
      "We use necessary storage so the site can work and, only if you accept it, Google Analytics to understand overall site usage. You can accept, reject or configure your preferences.",
    policyLink: "Cookie policy",
    acceptAll: "Accept all",
    reject: "Reject",
    configure: "Configure",
    panelTitle: "Configure cookies",
    panelIntro:
      "You can decide which categories you allow. Necessary cookies are always active because they support basic site functions.",
    necessaryTitle: "Necessary",
    necessaryText:
      "These include the language preference, the consent record and technical storage used to reload the application correctly.",
    alwaysActive: "Always active",
    analyticsTitle: "Analytics",
    analyticsText:
      "Allows Google Analytics to measure visits and aggregated site usage. Without your consent, the tag remains set to denied analytics storage.",
    marketingTitle: "Marketing",
    marketingText: "We currently do not use marketing cookies or scripts.",
    savePreferences: "Save preferences",
    close: "Close",
    footerConfigure: "Configure cookies",
    policyTitle: "Cookie policy",
    policyIntro:
      "This page explains what storage the website uses, which external services may load and how you can change your consent.",
    policySections: [
      {
        title: "Necessary cookies and storage",
        text: "The website stores the language preference, the consent decision and a temporary technical value to handle loading errors. These are necessary to provide the requested service and are not used for analytics or advertising.",
      },
      {
        title: "Optional analytics",
        text: "Google Analytics, using ID G-HEF4PZK50X, uses Consent Mode: analytics is denied by default and is only granted when you accept this category. If you reject or revoke permission, analytics is denied again and its cookies (_ga, _gid, _gat and equivalents) are deleted where possible.",
      },
      {
        title: "External services",
        text: "The booking button opens Google Calendar in a new tab without loading its script inside the website. reCAPTCHA is only requested when the contact form is submitted, if configured, as a security measure against abuse.",
      },
      {
        title: "Change your choice",
        text: "You can reopen the panel from the permanent link in the footer. Rejecting is just as simple as accepting.",
      },
    ],
  },
  professionalsPage: professionalsEn,
  pastLivesPage: pastLivesEn,
  ...servicesEn,
};

export const dictionaries: Record<Lang, Dict> = { es, va, en };
