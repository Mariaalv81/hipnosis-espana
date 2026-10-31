import type { Lang } from "@/lib/i18n";
import { servicesEs, servicesVa, servicesEn } from "./services-content";
import { professionalsEs, professionalsVa, professionalsEn } from "./professionals-content";
import { pastLivesEs, pastLivesVa, pastLivesEn } from "./past-lives-content";
import { qrContentEs, qrContentVa, qrContentEn } from "./qr-content";

const es = {
  brand: "María A. Cabo",
  tagline: "Terapia y desarrollo personal",
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
      "Acompañamiento terapéutico y desarrollo personal para personas que buscan cambios reales: hábitos, calma, descanso profundo y seguridad. Con rigor científico, cercanía y expectativas claras.",
    pillars: [
      {
        title: "Evidencia y rigor",
        text: "Atención focalizada y abordaje ericksoniano con base científica y neurobiológica, sin mitos ni falsas promesas.",
      },
      {
        title: "Abordaje ericksoniano",
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
      "Una guía para reconocer objetivos de desarrollo personal que podemos trabajar en sesión, siempre desde un enfoque no clínico.",
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
    finalText:
      "Solicita tu valoración previa gratuita de 15 minutos o escríbeme para comentar tu caso sin compromiso.",
    finalSecondary: "Tengo una duda antes de comenzar",
    heroEyebrow: "TERAPIA Y DESARROLLO PERSONAL · VALENCIA Y SUECA",
    heroTitle1: "CAMBIA",
    heroTitle2: "LO QUE YA NO TE SIRVE.",
    heroIntro:
      "Sesiones individuales de terapia y desarrollo personal orientadas al cambio de hábitos, la gestión del estrés y la ansiedad cotidiana, el insomnio y la seguridad personal. Despacho en Sueca (Centro Sanar), a domicilio en Valencia ciudad y formato online.",
    heroPrimary: "VALORACIÓN GRATUITA (15 MIN)",
    heroSecondary: "CONSULTAR POR WHATSAPP",
    heroHow: "Conocer cómo funciona el proceso paso a paso →",
    heroImageAlt: "Fotografía natural en un espacio terapéutico",
    changeEyebrow: "ACOMPAÑAMIENTO INDIVIDUAL",
    changeTitle: "¿QUÉ QUIERES CAMBIAR?",
    changeCards: [
      {
        title: "ANSIEDAD COTIDIANA Y ESTRÉS",
        text: "Desactivar el modo alerta del sistema nervioso, calmar la opresión física y recuperar serenidad ante la sobrecarga diaria.",
        slug: "/ansiedad",
        cta: "Ver gestión de ansiedad",
      },
      {
        title: "DESCANSO E INSOMNIO",
        text: "Frenar la rumiación y la ansiedad nocturna, apagar la mente y recuperar el reflejo biológico de un sueño reparador.",
        slug: "/insomnio",
        cta: "Ver insomnio y descanso",
      },
      {
        title: "DEJAR DE FUMAR",
        text: "Superar el síndrome de abstinencia del tabaco y la ansiedad por nicotina sin batallas de fuerza de voluntad.",
        slug: "/dejar-de-fumar",
        cta: "Ver programa antitabaco",
      },
      {
        title: "MIEDOS Y FOBIAS",
        text: "Hipnosis para superar fobias: miedo a volar, a conducir en autovía (amaxofobia), agujas o claustrofobia con desensibilización suave.",
        slug: "/miedos-y-fobias",
        cta: "Ver miedos y fobias",
      },
      {
        title: "AUTOESTIMA Y CONFIANZA",
        text: "Superar la autoestima baja, aumentar la confianza en uno mismo, vencer el síndrome del impostor y hablar con seguridad.",
        slug: "/autoestima-y-confianza",
        cta: "Ver autoestima y confianza",
      },
      {
        title: "CONTROL DE PESO",
        text: "Calmar el hambre emocional y el picoteo por estrés, restaurar la saciedad biológica y reconciliarte con tu cuerpo.",
        slug: "/control-de-peso",
        cta: "Ver control de peso",
      },
      {
        title: "HÁBITOS NERVIOSOS",
        text: "Morderse las uñas (onicofagia), bruxismo diurno o pellizcarse la piel: desactivar la descarga refleja de tensión inconsciente.",
        slug: "/habitos-nerviosos",
        cta: "Ver hábitos nerviosos",
      },
      {
        title: "DEPORTE Y ALTO RENDIMIENTO",
        text: "Hipnosis para el deporte: competir en estado de flujo, blindar el temple bajo presión y acelerar la recuperación.",
        slug: "/deporte-y-motivacion",
        cta: "Ver deporte y rendimiento",
      },
      {
        title: "CONCENTRACIÓN Y ESTUDIO",
        text: "Preparación de oposiciones y exámenes exigentes: foco sostenido, máxima asimilación mental y calma ante la prueba.",
        slug: "/concentracion-y-foco",
        cta: "Ver estudio y concentración",
      },
    ],
    changeLink: "VER TODOS LOS ÁMBITOS DE TERAPIA",
    hypnosisEyebrow: "MÉTODO Y EVIDENCIA",
    hypnosisTitle: "HIPNOSIS ERICKSONIANA Y NEUROCIENCIA: RIGOR, CALMA Y CAMBIO PROFUNDO.",
    hypnosisText1:
      "El abordaje ericksoniano es un proceso estructurado que utiliza la atención focalizada y la relajación somática para producir resultados sólidos y duraderos a largo plazo. Respaldado por la neurociencia moderna, permite intervenir de raíz sobre hábitos automáticos, respuestas físicas ante la tensión y patrones de conducta que no se resuelven solo con fuerza de voluntad.",
    hypnosisText2:
      "Durante la sesión facilitamos una relajación profunda que ayuda a tu sistema nervioso a calmarse e internalizar los avances que alcanzamos. A través de este proceso de psicoterapia no se imponen fórmulas externas ni soluciones mágicas: activamos tus propios recursos internos para aprender a responder con serenidad ante situaciones de estrés o bloqueo, con el máximo rigor ético y profesional.",
    hypnosisLink: "CÓMO FUNCIONA EL PROCESO",
    hypnosisImageAlt: "Fotografía de sesión tranquila",
    contextsTitle: "MODALIDADES DE ATENCIÓN: INDIVIDUAL Y EMPRESAS",
    individualTitle: "SESIONES INDIVIDUALES",
    individualText:
      "Atención personalizada para hábitos, descanso, miedos, ansiedad, deporte y confianza. En Sueca (Centro Sanar), a domicilio en Valencia ciudad u online.",
    individualLink: "VER SESIONES Y TARIFAS",
    companiesTitle: "PROGRAMAS PARA EMPRESAS Y EQUIPOS",
    companiesText:
      "Talleres y formaciones aplicadas a organizaciones: foco mental, gestión de la presión, presentaciones de impacto y bienestar corporativo.",
    companiesLink: "SOLUCIONES PARA EMPRESAS",
    processEyebrow: "EL PROCESO EN 3 PASOS",
    processTitle: "UN RECORRIDO TRANSPARENTE, RIGUROSO Y SIN DEPENDENCIAS.",
    processSteps: [
      {
        title: "1 · VALORACIÓN PREVIA DE 15 MIN",
        text: "Hablamos por teléfono o videollamada sin coste ni compromiso. Evaluamos con honestidad tu caso y resolvemos cualquier duda.",
      },
      {
        title: "2 · TRABAJO EN SESIÓN INDIVIDUAL",
        text: "Sesiones personalizadas de 60 minutos en Sueca (Centro Sanar), a domicilio en Valencia ciudad o en formato online.",
      },
      {
        title: "3 · INTEGRACIÓN Y AUTONOMÍA",
        text: "Consolidamos los avances con pautas somáticas entre sesiones para que disfrutes de un cambio sólido y duradero a tu propio ritmo.",
      },
    ],
    aboutEyebrow: "MARÍA CABO",
    aboutTitle: "UNA FORMA CERCANA Y RIGUROSA DE TRABAJAR CON EL CAMBIO.",
    aboutText:
      "Mi trabajo parte de una certeza: muchas veces sabemos racionalmente qué queremos hacer, pero nuestro cuerpo y mente automática reaccionan de otra manera. Formada en el Instituto Erickson Madrid, empleo estas disciplinas para intervenir sobre esos patrones profundos, facilitando cambios sólidos y sostenibles con total seguridad, cercanía y rigor profesional.",
    aboutLink: "CONOCERME",
    aboutImageAlt: "María A. Cabo",
    eventsTitle: "ENCUENTROS",
    eventsLink: "VER EVENTOS",
    eventsEmpty: "Próximas fechas en preparación.",
    learnTitle: "APRENDER",
    learnLink: "VER TODOS LOS ARTÍCULOS",
    faqHomeTitle: "RESOLVER DUDAS",
    faqHomeLink: "VER PREGUNTAS FRECUENTES",
    testimonialsEyebrow: "EXPERIENCIAS REALES",
    testimonialsTitle: "HISTORIAS DE CAMBIO Y BIENESTAR",
    testimonialsSubtitle:
      "Acompañamiento cercano, práctico y riguroso en Sueca, Valencia y online.",
    testimonials: [
      {
        quote:
          "Llevaba más de 20 años fumando casi un paquete diario. El enfoque sin juicios de María y trabajar las asociaciones inconscientes me permitieron soltarlo sin la angustia constante de otros intentos. El programa de 3 sesiones se amortizó en mes y medio.",
        author: "J. M., 46 años",
        service: "Dejar de fumar",
        location: "Sueca",
      },
      {
        quote:
          "Tenía un bloqueo tremendo con las presentaciones en el trabajo y me costaba horrores conducir por autovía. Aprender a desactivar la respuesta física de alarma y recuperar la serenidad en sesión ha sido un antes y un después en mi día a día.",
        author: "Carmen R., 38 años",
        service: "Ansiedad cotidiana y miedos",
        location: "Valencia",
      },
      {
        quote:
          "Me despertaba casi todas las noches a las 3 de la madrugada con la cabeza a mil por hora. Con las sesiones y los audios de refuerzo aprendí a calmar el ritmo interno y volví a dormir profundamente y levantarme descansado.",
        author: "Vicente S., 52 años",
        service: "Insomnio y descanso profundo",
        location: "Cullera",
      },
      {
        quote:
          "Tenía el hábito inconsciente de morderme las uñas y apretar la mandíbula en cuanto me sentaba ante el ordenador. En pocas semanas desactivamos ese automatismo de tensión y ahora me siento mucho más tranquila y segura.",
        author: "Laura G., 31 años",
        service: "Hábitos y tensión nerviosa",
        location: "Alzira",
      },
    ],
    consultationEyebrow: "VALORACIÓN SIN COMPROMISO",
    consultationTitle: "¿DUDAS SOBRE SI ESTE ENFOQUE ENCAJA CONTIGO?",
    consultationSubtitle:
      "Empecemos por una conversación previa de 15 minutos gratuita por teléfono o videollamada. Sin coste, sin compromiso y sin ninguna presión de contratación.",
    consultationPoints: [
      "15 minutos dedicados a conocer tu caso y lo que quieres cambiar.",
      "Evaluación honesta: valoramos juntos si este acompañamiento es adecuado para ti.",
      "Decides con total libertad después de hablar, sin ningún compromiso previo.",
    ],
    consultationCtaPrimary: "SOLICITAR VALORACIÓN PREVIA (15 MIN)",
    consultationCtaWhatsApp: "CONSULTAR POR WHATSAPP",
    ctaTitle: "EL CAMBIO PUEDE EMPEZAR POR UNA CONVERSACIÓN.",
    ctaPrimary: "SOLICITAR ENTREVISTA DE 15 MIN",
    ctaSecondary: "CONSULTAR POR WHATSAPP",
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
      "Diseño talleres y programas que utilizan herramientas de regulación del sistema nervioso, atención focalizada y cambio de patrones para ayudar a las personas a trabajar de forma más consciente frente a situaciones de presión, distracción, inseguridad o bloqueo.",
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
      "El trabajo parte siempre del consentimiento del empleado. Estas sesiones no se utilizan para modificar sus valores, su personalidad, sus opiniones ni para inducir comportamientos que no desea. Al contrario: es una herramienta orientada a ayudar a la persona a responder con mayor serenidad y eficacia ante determinadas respuestas automáticas, emociones o hábitos que ella misma quiere cambiar.",
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
        text: "En qué consiste el método, qué se puede esperar y qué no ocurre durante el proceso.",
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
    successTitle: "¡Consulta recibida!",
    sendAnother: "Enviar otra consulta",
    serverError: "No se pudo conectar con el servidor. Puedes enviarlo directamente por correo:",
    asideDirectHelp: "¿Prefieres una consulta ágil directa?",
    asideWhatsApp: "Consultar por WhatsApp",
  },
  smokingPage: {
    seoTitle:
      "Dejar de Fumar en Valencia y Sueca · Supera la Abstinencia y Ansiedad por Nicotina · María A. Cabo",
    seoDescription:
      "Supera el síndrome de abstinencia del tabaco y la ansiedad por nicotina en Valencia y Sueca. Programa de 3 sesiones con hipnosis y reentrenamiento neurobiológico. Sin recaídas.",
    eyebrow: "PROGRAMA ANTITABACO EN VALENCIA Y SUECA · HIPNOSIS Y DESARROLLO PERSONAL",
    title: "DEJAR DE FUMAR: VENCE EL SÍNDROME DE ABSTINENCIA Y LA ANSIEDAD POR NICOTINA",
    subtitle:
      "Un recorrido estructurado para cambiar automatismos, desactivar la abstinencia de tabaco y sostener tu decisión con calma y sin ansiedad.",
    introText:
      "Fumar no suele ser una decisión consciente: funciona a través de asociaciones automáticas en el sistema nervioso. Con hipnosis clínica y regulación somática trabajamos directamente sobre el síndrome de abstinencia del tabaco y la ansiedad por nicotina en Valencia y Sueca: desacoplamos el impulso automático, desactivamos disparadores cotidianos y sostenemos tu libertad con calma duradera, sin luchas agotadoras contra la fuerza de voluntad.",
    ctaPrimary: "SOLICITAR ENTREVISTA PREVIA",
    ctaSecondary: "CÓMO ES EL PROGRAMA",
    trustBadges: [
      "Entrevista previa de 15 min sin coste ni compromiso",
      "Sueca (Centro Sanar) y a domicilio en Valencia ciudad",
      "Programa estructurado de 3 sesiones · 300 € (todo incluido)",
    ],
    whyTitle: '¿POR QUÉ LA "FUERZA DE VOLUNTAD" FALLA ANTE EL SÍNDROME DE ABSTINENCIA?',
    whyParagraphs: [
      "La mayoría de las personas que quieren dejar de fumar saben perfectamente por qué deberían hacerlo: salud, dinero, libertad, olor. Sin embargo, en cuanto aparece el estrés, el café de la mañana o una sobremesa con amigos, el cuerpo dispara la abstinencia de nicotina y el deseo compulsivo antes de que la razón intervenga.",
      "El síndrome de abstinencia del tabaco tiene dos dimensiones muy diferentes: la abstinencia física de nicotina (que el cuerpo elimina de forma natural en unas 48 a 72 horas) y la ansiedad psicológica por nicotina, que es un patrón reflejo sostenido en circuitos neuronales de recompensa.",
      "A través de un enfoque de psicoterapia aplicada que utiliza la hipnosis ericksoniana, intervenimos en el nivel neurobiológico donde se originan esos automatismos. Desactivamos la ansiedad por nicotina, desligamos el tabaco de la calma o el alivio y anclamos respuestas naturales de serenidad, logrando resultados sólidos y duraderos a largo plazo sin sustituir el cigarro por comida ni sufrir irritabilidad.",
    ],
    programTitle: "ESTRUCTURA DEL PROGRAMA (3 SESIONES)",
    programIntro:
      "Un proceso claro, con inicio y fin, diseñado para darte autonomía y evitar dependencias.",
    steps: [
      {
        num: "01",
        title: "ENTREVISTA PREVIA DE 15 MINUTOS",
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
      "Entrevista previa de valoración de 15 minutos sin coste.",
      "3 sesiones individuales e intensivas (en Sueca o a domicilio en Valencia).",
      "Grabación de audio de refuerzo personalizada para escuchar en casa.",
      "Seguimiento y apoyo cercano entre sesiones.",
      "Pautas de respiración y autorregulación para momentos puntuales de tensión.",
    ],
    price: "300 €",
    priceNote:
      "Precio cerrado por el paquete completo de las tres sesiones y todo el material de apoyo.",
    formEyebrow: "ENTREVISTA PREVIA",
    formTitle: "SOLICITAR ENTREVISTA DE 15 MINUTOS",
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
        a: "El objetivo del programa es que el cambio de hábito se produzca desde la primera sesión presencial de trabajo. En la entrevista previa preparamos el terreno para que llegues con total claridad y determinación, mientras que las sesiones 2 y 3 se centran en consolidar los nuevos patrones, gestionar disparadores cotidianos y afianzar la calma a largo plazo.",
      },
      {
        q: "¿Tendré ansiedad por nicotina o síndrome de abstinencia insoportable?",
        a: "La hipnosis ericksoniana y la distensión somática actúan directamente sobre el sistema nervioso autónomo para desactivar la ansiedad por nicotina y suavizar el síndrome de abstinencia del tabaco en Valencia y Sueca. La abstinencia física pasa rápido; el reto real es la respuesta aprendida. Al reprogramar los disparadores automáticos y dotarte de anclajes de serenidad y un audio de refuerzo, transitas los primeros días con tranquilidad y sin sensación de privación.",
      },
      {
        q: "¿Subiré de peso al dejar de fumar con hipnosis?",
        a: "Cuando se deja de fumar solo por fuerza de voluntad, la ansiedad no resuelta suele canalizarse hacia el picoteo compulsivo de comida. En nuestras sesiones desactivamos la raíz de la ansiedad por nicotina, de modo que no necesitas compensar con comida lo que ya no echas en falta.",
      },
      {
        q: "¿Qué pasa si no funciona o tengo dudas?",
        a: "Por eso realizamos la entrevista previa gratuita de 15 minutos: para evaluar honestamente tu caso. Si consideramos que no es el momento adecuado o que necesitas otro tipo de acompañamiento, te lo diré con total transparencia.",
      },
      {
        q: "¿Dónde se realizan las sesiones en Valencia y Sueca?",
        a: "Las sesiones presenciales se realizan en mi despacho dentro del Centro Sanar en Sueca (Valencia) o a domicilio en casas de particulares en Valencia ciudad (consultar suplemento por desplazamiento según zona). La entrevista previa de 15 minutos se realiza cómodamente por teléfono o videollamada.",
      },
      {
        q: "¿Por qué un programa de 3 sesiones en lugar de prometer una sola sesión milagrosa?",
        a: "Desconfiamos de las falsas promesas de soluciones mágicas en una sola hora. Fumar es un hábito complejo vinculado a múltiples disparadores cotidianos (el café, el estrés laboral, los momentos sociales). La primera sesión marca el punto de corte con el tabaco, pero las sesiones posteriores aseguran la consolidación somática, previenen recaídas ante situaciones de estrés imprevisto y te dotan de herramientas de respiración y autorregulación para mantener tu calma y autonomía definitiva.",
      },
    ],
    savingsTitle: "¿CUÁNTO TE CUESTA SEGUIR FUMANDO?",
    savingsSubtitle:
      "El programa antitabaco no es un gasto: se amortiza por completo en mes y medio y a partir del segundo mes ahorras miles de euros.",
    savingsCards: [
      {
        consumption: "Medio paquete / día",
        cigs: "10 cigarrillos al día",
        badge: "Consumo moderado",
        monthlyCost: "~85 € / mes",
        yearlyCost: "~1.020 € / año",
        amortization: "Amortizado en 3,5 meses",
        netYearOne: "Ahorro año 1: +720 €",
      },
      {
        consumption: "1 paquete / día",
        cigs: "20 cigarrillos al día",
        badge: "Caso más habitual",
        monthlyCost: "~170 € / mes",
        yearlyCost: "~2.040 € / año",
        amortization: "Amortizado en solo 53 días",
        netYearOne: "Ahorro año 1: +1.740 €",
      },
      {
        consumption: "1 paquete y medio / día",
        cigs: "30 cigarrillos al día",
        badge: "Consumo alto",
        monthlyCost: "~255 € / mes",
        yearlyCost: "~3.060 € / año",
        amortization: "Amortizado en solo 35 días",
        netYearOne: "Ahorro año 1: +2.760 €",
      },
    ],
    savingsNote:
      "Cálculo orientativo basado en un coste medio de 5,60 € por cajetilla de tabaco comercial.",
    testimonialsTitle: "EXPERIENCIAS REALES DE CAMBIO",
    testimonialsSubtitle:
      "Personas que decidieron soltar el tabaco y recuperar su libertad y calma cotidiana.",
    testimonials: [
      {
        quote:
          "Llevaba 22 años fumando un paquete diario y había probado parches y pastillas sin éxito porque siempre volvía al primer pico de estrés. Con María entendí que el tabaco era una respuesta automática que mi cuerpo usaba para desconectar. En 3 sesiones cambiamos ese chip y lo mejor es que no he vivido con la ansiedad constante que temía.",
        author: "J. M., 46 años",
        location: "Sueca",
        detail: "Exfumador tras 22 años de consumo",
      },
      {
        quote:
          "Lo que más me sorprendió fue la ausencia total de juicio. No te regaña ni te da sermones sobre salud que ya te sabes de memoria. Trabajamos sobre el café de la mañana y las sobremesas con amigos. Salir a cenar y no sentir la necesidad de fumar fue una sensación de libertad increíble.",
        author: "Carmen B., 39 años",
        location: "Valencia",
        detail: "Libre de tabaco desde hace 8 meses",
      },
      {
        quote:
          "El cálculo del dinero fue lo que me empujó a probarlo. Me gastaba casi 200 euros al mes. Ahora ese dinero se queda en mi cuenta y respiro mejor cuando subo las escaleras o salgo a caminar. La entrevista previa de 15 minutos me dio toda la confianza para dar el paso.",
        author: "R. F., 51 años",
        location: "Cullera",
        detail: "Consumo previo de 25 cigarrillos/día",
      },
    ],
  },
  anxietyPage: {
    seoTitle: "Gestión de la Ansiedad Cotidiana y Miedos en Valencia y Sueca · María A. Cabo",
    seoDescription:
      "Aprende a gestionar la ansiedad cotidiana, calmar la tensión y trabajar miedos (volar, conducir, hablar en público) en Sueca, Valencia y online. 70 €/sesión.",
    eyebrow: "TERAPIA Y DESARROLLO PERSONAL · VALENCIA Y SUECA",
    eyebrowNav: "Gestión de Ansiedad y Miedos",
    title: "GESTIONAR LA ANSIEDAD COTIDIANA, CALMAR LA TENSIÓN Y TRABAJAR MIEDOS",
    subtitle:
      "Aprende a responder de otra manera ante situaciones que generan tensión, preocupación o bloqueo, enseñando a tu cuerpo a recuperar la calma.",
    introText:
      "Opresión en el pecho, respiración corta, mente que anticipa preocupaciones o bloqueo ante situaciones como volar, conducir o hablar en público. Cuando el estrés y la preocupación se repiten, el cuerpo reacciona de forma refleja antes de que la razón intervenga. Con un enfoque de psicoterapia que utiliza el estado hipnótico para producir resultados duraderos a largo plazo, intervenimos en ese nivel de respuestas automáticas: facilitamos recursos para que tu cuerpo recuerde la calma, aprendas a responder con serenidad ante los disparadores de tensión y consolides tu tranquilidad cotidiana con total seguridad y autonomía.",
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA TERAPIA",
    trustBadges: [
      "Acompañamiento terapéutico basado en evidencia",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Valoración previa de 15 min sin compromiso",
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
        text: "Crisis de angustia, sensación de saturación física o cancelar planes y viajes para evitar el agobio.",
      },
    ],
    whyTitle: "¿POR QUÉ NO BASTA CON DECIRTE 'CÁLMATE'?",
    whyParagraphs: [
      "La mayoría de las personas con ansiedad ya saben que sus preocupaciones son exageradas. La razón lo entiende, pero el cuerpo no obedece: el corazón se acelera, el aire parece no entrar y los músculos se tensan. ¿Por qué ocurre esto?",
      "Porque la respuesta de ansiedad se origina en el sistema nervioso autónomo (la rama simpática o modo 'lucha o huida'), una red primitiva encargada de tu supervivencia que no responde al lenguaje lógico de los pensamientos conscientes. Intentar frenar la ansiedad obligándote a 'pensar positivo' suele generar más impotencia y frustración.",
      "Este abordaje de terapia y desarrollo personal utiliza el mismo lenguaje que tu sistema nervioso: el de la atención focalizada, las señales sensoriales y la distensión somática. Al facilitar un estado de relajación profunda guiada, activamos de manera natural el sistema parasimpático (el freno neurobiológico del estrés), enseñando al cuerpo a apagar la alarma y creando nuevos circuitos neuronales de calma que producen resultados estables y duraderos a largo plazo.",
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
        title: "AUTONOMÍA Y REGULACIÓN SOMÁTICA",
        text: "Aprendes pautas de autorregulación somática y respiración para gestionar tu bienestar en tu día a día, a tu ritmo y sin crear dependencias.",
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
      "Pautas de autorregulación y ejercicios prácticos entre sesiones.",
      "Valoración previa de 15 minutos sin compromiso para orientar tu caso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "DA EL PRIMER PASO HACIA LA CALMA",
    formSubtitle:
      "Rellena este breve formulario para consultar tus dudas o solicitar tu sesión. Si lo prefieres, podemos tener una valoración previa de 15 minutos por teléfono o WhatsApp para conocer tu caso sin compromiso.",
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
    faqTitle: "PREGUNTAS FRECUENTES SOBRE ANSIEDAD Y REGULACIÓN",
    faqs: [
      {
        q: "¿Cómo ayuda exactamente la terapia a reducir la ansiedad?",
        a: "La terapia actúa directamente sobre la respuesta neurobiológica del estrés. Mientras que conscientemente intentas 'tranquilizarte' sin éxito, en sesión inducimos una relajación profunda que activa el sistema parasimpático, permitiendo que el cuerpo desactive la tensión muscular, regule la respiración y el sistema nervioso internalice los avances y la calma a nivel fisiológico.",
      },
      {
        q: "¿Cómo se trabaja durante la sesión y qué se experimenta?",
        a: "Durante la sesión trabajamos con una relajación profunda y guiada que ayuda al sistema nervioso a calmarse e integrar los avances que alcanzamos. Permanece activa tu consciencia en todo momento: escuchas mi voz, puedes hablar, moverte y participar con total normalidad mientras tu organismo asimila nuevas respuestas de tranquilidad.",
      },
      {
        q: "¿En cuántas sesiones se suele notar el cambio?",
        a: "Muchas personas experimentan un alivio significativo y una profunda sensación de ligereza corporal desde la primera sesión. Como no hay compromisos obligatorios, valoramos juntos tras cada sesión y avanzas a tu propio ritmo según tu evolución personal.",
      },
      {
        q: "¿Es compatible si ya tomo medicación ansiolítica o voy al psicólogo?",
        a: "Sí, es compatible. El acompañamiento terapéutico y el desarrollo personal son herramientas rigurosas orientadas a potenciar tus propios recursos de autorregulación. No realizamos diagnósticos clínicos de trastornos mentales graves ni sustituimos los tratamientos médicos o psiquiátricos, colaborando o respetando siempre las indicaciones de tus facultativos.",
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
      "El trabajo que realizamos es un proceso de psicoterapia y desarrollo personal basado en la neurociencia y la atención focalizada. Durante la sesión facilitamos una relajación profunda que ayuda al sistema nervioso a calmarse e internalizar los avances que alcanzamos, logrando cambios sólidos y duraderos en tus hábitos y bienestar emocional.",
    stepsTitle: "El recorrido, paso a paso",
    steps: [
      {
        title: "1 · Conversación inicial o valoración gratuita (15 min)",
        text: "Hablamos de lo que quieres cambiar, resolvemos todas tus dudas y vemos con total honestidad si este acompañamiento terapéutico es adecuado para ti.",
      },
      {
        title: "2 · Objetivo concreto",
        text: "Definimos juntas un objetivo observable y realista, con la parte que depende de mí y la que depende de ti.",
      },
      {
        title: "3 · Sesión de terapia",
        text: "Un proceso guiado, tranquilo y en todo momento consentido. Recordarás lo vivido y podrás parar cuando quieras.",
      },
      {
        title: "4 · Entre sesiones",
        text: "Pequeñas prácticas para sostener el cambio en tu día a día, sin sobrecargar tu agenda.",
      },
    ],
    mythsTitle: "Mitos y realidades",
    myths: [
      "La relajación profunda ayuda a tu sistema nervioso a integrar cambios de forma natural y consciente.",
      "No realizamos diagnósticos clínicos de trastornos mentales graves.",
      "No sustituye la atención médica o psiquiátrica ante patologías severas.",
      "Es un proceso serio, activo y respaldado por la evidencia científica.",
    ],
    safetyTitle: "Seguridad y límites claros",
    safetyText:
      "El servicio se dirige a personas mayores de 18 años. Si tu situación requiere atención médica o psiquiátrica preferente, te lo indicaré con total claridad y honestidad profesional.",
    ctaTitle: "¿Dudas sobre si este acompañamiento es para ti?",
    ctaSubtitle:
      "Hablemos 15 minutos por teléfono o WhatsApp sin compromiso. Analizamos tu caso, resolvemos cualquier inquietud y te explico cómo enfocaríamos tu proceso.",
    ctaPrimary: "Solicitar valoración previa de 15 min",
    ctaWhatsApp: "Consultar por WhatsApp",
  },
  areas: {
    title: "Ámbitos de acompañamiento terapéutico",
    intro:
      "Nueve áreas principales donde la terapia y la hipnosis ericksoniana consciente ayudan a reorganizar respuestas automáticas, superar bloqueos y afrontar la vida con serenidad y aplomo.",
    noticeTitle: "Rigor profesional y límites éticos",
    notice:
      "Las sesiones de terapia y desarrollo personal están orientadas al cambio personal y el bienestar emocional. No sustituyen la atención médica, psicológica o psiquiátrica ante patologías severas, ni realizamos diagnósticos clínicos de trastornos mentales graves. Si tu caso requiere atención médica o psiquiátrica especializada, te orientaremos con total transparencia.",
    items: [
      {
        title: "Ansiedad cotidiana y estrés",
        text: "Desactivar la alarma fisiológica, calmar la opresión física y aprender a responder con serenidad ante situaciones cotidianas de sobrecarga.",
        slug: "/ansiedad",
        cta: "Ver gestión de ansiedad",
      },
      {
        title: "Estrés, calma, insomnio y ansiedad nocturna",
        text: "Entrenar recursos somáticos de relajación profunda para desactivar la hipervigilancia, calmar la rumiación nocturna y recuperar un sueño natural.",
        slug: "/insomnio",
        cta: "Ver terapia para insomnio",
      },
      {
        title: "Dejar de fumar: abstinencia y ansiedad por nicotina",
        text: "Un recorrido específico y estructurado en 3 sesiones para superar el síndrome de abstinencia, desactivar disparadores y vivir sin tabaco.",
        slug: "/dejar-de-fumar",
        cta: "Ver programa antitabaco",
      },
      {
        title: "Hipnosis para superar fobias y miedos",
        text: "Desensibilización sistemática suave para miedo a volar, conducir en autovía (amaxofobia), agujas, claustrofobia o hablar en público.",
        slug: "/miedos-y-fobias",
        cta: "Ver hipnosis para fobias",
      },
      {
        title: "Autoestima baja y confianza en uno mismo",
        text: "Trabajar seguridad personal, superar la autocrítica destructiva, vencer el síndrome del impostor y poner límites con asertividad y calma.",
        slug: "/autoestima-y-confianza",
        cta: "Ver autoestima y confianza",
      },
      {
        title: "Control de peso y relación con la comida",
        text: "Calmar el hambre emocional y el picoteo compulsivo por estrés, recuperando la saciedad biológica real sin dietas restrictivas.",
        slug: "/control-de-peso",
        cta: "Ver control de peso",
      },
      {
        title: "Hábitos nerviosos y morderse las uñas",
        text: "Modificar automatismos involuntarios como morderse las uñas (onicofagia), bruxismo diurno o pellizcarse la piel mediante reeducación motora.",
        slug: "/habitos-nerviosos",
        cta: "Ver hábitos nerviosos",
      },
      {
        title: "Hipnosis para el deporte y rendimiento mental",
        text: "Entrenar el estado de flujo, la visualización motora subconsciente, el temple competitivo y la constancia en entrenamientos en Valencia y Castellón.",
        slug: "/deporte-y-motivacion",
        cta: "Ver deporte y motivación",
      },
      {
        title: "Concentración, foco y estudio de oposiciones",
        text: "Preparación de oposiciones y exámenes universitarios exigentes: concentración sostenida, absorción cognitiva y gestión de la presión.",
        slug: "/concentracion-y-foco",
        cta: "Ver foco y concentración",
      },
    ],
    closing:
      "Si tienes dudas sobre si este acompañamiento encaja contigo, escríbeme antes de solicitar tu sesión o pide tu valoración previa de 15 minutos sin compromiso.",
    cta: "Resolver una duda o consultar",
  },
  sessions: {
    title: "Sesiones de hipnosis consciente y acompañamiento terapéutico",
    intro:
      "Sesiones individuales de hipnosis ericksoniana consciente y desarrollo personal con María A. Cabo en Sueca (Centro Sanar), a domicilio en casas de particulares en Valencia ciudad, u online por videoconferencia. Tarifas transparentes, atención cercana y sin paquetes obligatorios.",
    items: [
      {
        name: "Sesión individual de hipnosis y terapia",
        price: "70 €",
        unit: "por sesión (60 minutos)",
        text: "Sesión individual y personalizada de hipnosis consciente y terapia para abordar ansiedad, descanso e insomnio, miedos o fobias, control de hábitos, rendimiento deportivo o seguridad personal.",
        points: [
          "Sesión individual de 60 minutos con María A. Cabo",
          "En Sueca (Centro Sanar), a domicilio en Valencia ciudad u online",
          "A tu propio ritmo (sin bonos obligatorios ni ataduras)",
          "Valoración previa de 15 min sin compromiso para orientar tu caso",
        ],
      },
      {
        name: "Programa para dejar de fumar",
        price: "300 €",
        unit: "paquete cerrado de 3 sesiones",
        text: "Programa estructurado con técnicas de hipnosis clínica para superar el síndrome de abstinencia y la ansiedad por nicotina, desactivar detonantes del tabaco y consolidar tu calma definitiva.",
        points: [
          "Tres sesiones completas e intensivas (Sueca, a domicilio u online)",
          "Grabación de audio de refuerzo personalizada para casa",
          "Pautas somáticas para momentos de tensión y seguimiento cercano",
          "Entrevista previa gratuita de 15 min sin compromiso",
        ],
      },
    ],
    policyTitle: "Antes de solicitar tu sesión",
    policy: [
      "Acompañamiento pensado para personas adultas.",
      "Si tienes dudas sobre si es adecuado para ti, escríbeme antes o pide tu valoración previa de 15 minutos.",
      "Los cambios y cancelaciones se acuerdan con antelación razonable.",
      "Horarios en hora peninsular (Europe/Madrid).",
    ],
  },
  about: {
    title: "Sobre mí",
    name: "María A. Cabo",
    role: "Especialista en procesos de cambio y desarrollo personal",
    intro:
      "Soy María Cabo, especialista en desarrollo personal y procesos de cambio. Acompaño a personas adultas mediante un enfoque terapéutico focalizado en producir resultados duraderos a largo plazo en el cambio de hábitos, la regulación del estrés y la ansiedad cotidiana, la superación de miedos y la seguridad personal. Cuento con formación en el Instituto Erickson Madrid, con un método cercano, riguroso y respetuoso con el ritmo de cada persona.",
    traits: ["Cercanía", "Formación Ericksoniana", "Recursos útiles"],
    highlights: [
      {
        title: "Instituto Erickson Madrid",
        text: "Formación especializada en el Instituto Erickson Madrid.",
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
      "Creo en las expectativas realistas. Esta metodología es una herramienta muy útil para trabajar hábitos, atención y respuesta al estrés, pero no lo resuelve todo ni sustituye a la atención sanitaria.",
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
      "Durante la sesión facilitamos una relajación profunda que ayuda a tu sistema nervioso a calmarse e internalizar los avances que alcanzamos.",
    statement:
      "Mi trabajo consiste en acompañar a cada persona a explorar sus patrones y ofrecerle herramientas para responder de una manera más útil para ella.",
    workEyebrow: "Mi forma de trabajar",
    workTitle: "Acompañamiento terapéutico: una herramienta rigurosa, no una fórmula mágica.",
    workText:
      "Entiendo este trabajo como un proceso de psicoterapia y desarrollo personal para facilitar cambios profundos y sostenibles: observar respuestas automáticas, activar los recursos propios de la persona y consolidar nuevas formas de responder ante situaciones cotidianas con resultados sólidos a largo plazo.",
    focusAreas: [
      {
        title: "Cambio práctico",
        text: "Sesiones orientadas a objetivos concretos, con recursos que puedan trasladarse a la vida real.",
      },
      {
        title: "Proceso consciente",
        text: "La persona participa activamente mientras la relajación profunda permite al sistema nervioso asimilar e internalizar los avances.",
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
      "Formada en el Instituto Erickson Madrid, una de las instituciones de referencia en España, empleo un modelo que pone el foco en los recursos inconscientes y aprendizajes previos de la propia persona para generar respuestas más adaptativas y duraderas.",
      "Esa combinación entre formación técnica rigurosa y experiencia vital en entornos de alta exigencia me ayuda a entender que detrás de cada objetivo hay una historia, una forma de responder y unas circunstancias diferentes.",
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
        text: "Un encuentro para comprender cómo se sostienen los automatismos del tabaco y cómo puede acompañarse el cambio hacia una vida libre de humo.",
        ctaText: "Reservar plaza por WhatsApp",
        whatsappMessage:
          "Hola María, me gustaría consultar o reservar plaza para el encuentro de Tabaquismo en Sueca (Centro Sanar).",
      },
      {
        dateISO: "2026-09-21",
        date: "21 sept",
        time: "18:00",
        title: "Ansiedad, miedos y fobias",
        text: "Una introducción serena a recursos de atención, calma y preparación interna ante situaciones que generan tensión.",
        ctaText: "Reservar plaza por WhatsApp",
        whatsappMessage:
          "Hola María, me gustaría consultar o reservar plaza para el encuentro de Ansiedad, miedos y fobias en Sueca (Centro Sanar).",
      },
      {
        dateISO: "2026-09-28",
        date: "28 sept",
        time: "18:00",
        title: "Estudio y exámenes",
        text: "Una sesión grupal para explorar foco, confianza y ensayo mental antes de retos académicos o pruebas importantes.",
        ctaText: "Reservar plaza por WhatsApp",
        whatsappMessage:
          "Hola María, me gustaría consultar o reservar plaza para el encuentro de Estudio y exámenes en Sueca (Centro Sanar).",
      },
      {
        dateISO: "2026-10-05",
        date: "5 oct",
        time: "18:00",
        title: "Hábitos y control del peso",
        text: "Un espacio para hablar de motivación, repetición y relación con las rutinas cotidianas desde un enfoque no clínico.",
        ctaText: "Reservar plaza por WhatsApp",
        whatsappMessage:
          "Hola María, me gustaría consultar o reservar plaza para el encuentro de Hábitos y control del peso en Sueca (Centro Sanar).",
      },
      {
        dateISO: "2026-10-24",
        date: "24 oct",
        time: "10:00–11:30",
        title: "Calma práctica · Taller experiencial",
        badge: "Taller en grupo · 15 €",
        place: "Cullera · Sat Nam Yoga",
        text: "¿Y si aprendieras a vivir en calma? Ven a experimentarlo. Un taller experiencial en grupo para explorar, jugar y sorprenderte con recursos prácticos de serenidad. Plazas limitadas.",
        ctaText: "Reservar plaza por WhatsApp",
        whatsappMessage:
          "Hola María, me gustaría reservar mi plaza para el taller Calma Práctica en Cullera (Sat Nam Yoga).",
      },
      {
        dateISO: "2026-11-08",
        date: "8 nov",
        time: "10:00–11:30",
        title: "Aprende a querer sin perderte · Taller práctico",
        badge: "Taller en grupo · 15 €",
        place: "Cullera · Sat Nam Yoga",
        text: "Comprende y experimenta cómo vincularte y relacionarte sin perder tu propio centro, espacio y bienestar. Un taller práctico en grupo para cultivar relaciones sanas y conscientes. Plazas limitadas.",
        ctaText: "Reservar plaza por WhatsApp",
        whatsappMessage:
          "Hola María, me gustaría reservar mi plaza para el taller 'Aprende a querer sin perderte' del domingo 8 de noviembre en Cullera (Sat Nam Yoga).",
      },
      {
        dateISO: "2026-11-22",
        date: "22 nov",
        time: "10:00–11:30",
        title: "Calma práctica · Taller práctico",
        badge: "Taller en grupo · 15 €",
        place: "Cullera · Sat Nam Yoga",
        text: "¿Y si aprendieras a vivir en calma? Ven a experimentarlo. Un taller práctico en grupo para explorar, comprender y experimentar herramientas para gestionar el estrés y cultivar calma. Plazas limitadas.",
        ctaText: "Reservar plaza por WhatsApp",
        whatsappMessage:
          "Hola María, me gustaría reservar mi plaza para el taller Calma Práctica del domingo 22 de noviembre en Cullera (Sat Nam Yoga).",
      },
    ] as Array<{
      dateISO: string;
      date: string;
      time: string;
      title: string;
      text: string;
      badge?: string;
      place?: string;
      ctaText?: string;
      whatsappMessage?: string;
    }>,
    empty: "Ahora mismo no hay fechas abiertas.",
    emptyText:
      "Estoy preparando el calendario de talleres. Si quieres que te avise cuando se publiquen, escríbeme y te lo cuento.",
    cta: "Reservar plaza por WhatsApp",
  },
  journal: {
    title: "Blog",
    intro:
      "Textos breves para entender mejor los procesos de cambio, los hábitos y el bienestar personal. Nunca diagnósticos ni recetas.",
    posts: [
      {
        slug: "hipnosis-y-fobias-aprender-una-respuesta-diferente",
        title: "Terapia y fobias: aprender una respuesta diferente",
        excerpt:
          "Una fobia puede sentirse como una reacción automática. La terapia permite trabajar con esa parte más automática de la experiencia.",
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
        title: "Terapia y ansiedad: aprender una respuesta diferente",
        excerpt:
          "La terapia puede ofrecer un contexto diferente para trabajar con la atención, la imaginación y respuestas aprendidas.",
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
        title: "¿Cómo es una sesión de cambio y acompañamiento?",
        excerpt:
          "Una sesión es un espacio de colaboración donde facilitamos una relajación profunda para que el sistema nervioso integre los avances de forma natural.",
      },
      {
        slug: "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
        title: "Terapia y cambio de hábitos: ¿cómo puede ayudar?",
        excerpt:
          "La terapia no borra un hábito. Puede ayudarnos a ensayar y fortalecer nuevas maneras de responder.",
      },
      {
        slug: "por-que-cuesta-cambiar-un-habito",
        title: "¿Por qué nos cuesta tanto cambiar un hábito?",
        excerpt:
          "Porque saber lo que queremos hacer y conseguir hacerlo no siempre son la misma cosa.",
      },
      {
        slug: "que-ocurre-en-el-cerebro-durante-la-hipnosis",
        title: "¿Qué ocurre en el cerebro durante los estados de focalización?",
        excerpt:
          "La ciencia ha observado cambios en la atención y la comunicación entre redes cerebrales, sin apagar la mente racional.",
      },
      {
        slug: "que-es-la-hipnosis",
        title: "¿Qué es realmente este enfoque de atención focalizada?",
        excerpt:
          "Un estado de atención focalizada y relajación profunda que permite al sistema nervioso asimilar e internalizar nuevos patrones de bienestar.",
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
        title: "Entender el cambio y el cerebro",
        description:
          "Una introducción ordenada a los procesos de cambio, el cerebro, los hábitos y cómo puede ser una sesión.",
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
        q: "¿Qué se experimenta durante la sesión de terapia?",
        a: "Durante la sesión guiamos un estado de relajación profunda donde permaneces plenamente consciente. Esta calma permite a tu sistema nervioso bajar el nivel de alerta e internalizar de manera orgánica los avances y recursos trabajados, con total comodidad y tranquilidad.",
      },
      {
        q: "¿Qué base científica y aval tiene este abordaje terapéutico?",
        a: "Es un procedimiento estructurado de psicoterapia y cambio avalado por la neurociencia y la medicina. Utiliza la atención focalizada y la relajación somática profunda para modular la actividad cerebral e intervenir sobre automatismos, el estrés y los hábitos aprendidos, produciendo resultados eficaces y sostenibles a largo plazo.",
      },
      {
        q: "¿En qué se diferencia de un tratamiento o diagnóstico psiquiátrico?",
        a: "Este abordaje terapéutico y el desarrollo personal son herramientas serias enfocadas en procesos de cambio personal, bienestar emocional y superación de bloqueos. No realizamos diagnósticos clínicos de trastornos mentales graves ni sustituimos la atención médica o psiquiátrica cuando esta es necesaria.",
      },
      {
        q: "¿Cuántas sesiones necesito?",
        a: "Depende del objetivo y de cada persona. Muchas personas trabajan con sesiones individuales sueltas; para dejar de fumar el recorrido está estructurado en tres sesiones.",
      },
      {
        q: "¿Y si creo que me cuesta concentrarme o relajarme?",
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
    ctaTitle: "¿Tienes alguna otra duda o quieres valorar tu caso?",
    ctaSubtitle:
      "Puedes solicitar una valoración previa de 15 minutos sin coste ni compromiso o escribirme directamente.",
  },
  contact: {
    title: "Contacto",
    intro:
      "Si tienes una duda antes de solicitar tu sesión o deseas solicitar la valoración previa gratuita de 15 minutos (por teléfono o videollamada, sin compromiso), escríbeme y te responderé con calma.",
    calloutTitle: "Valoración previa de 15 minutos sin compromiso",
    calloutText:
      "Puedes usar este formulario para consultar tus dudas o solicitar una llamada previa de 15 minutos sin coste. Hablaremos con honestidad de tu caso antes de agendar ninguna sesión.",
    phone: "Teléfono",
    name: "Nombre",
    email: "Correo electrónico",
    message: "Tu mensaje",
    consent: "He leído y acepto la política de privacidad.",
    send: "Enviar mensaje",
    sent: "Gracias, he recibido tu mensaje. Te responderé en breve.",
    note: "Envía tu mensaje y te responderé en breve para coordinar tu cita o responder a tus preguntas.",
    infoTitle: "Datos",
    area: "Sueca (Centro Sanar) · Sesiones presenciales y online",
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
        text: "Titular del sitio: María A. Cabo. Contacto: maria.a.cabo@gmail.com. Actividad: desarrollo personal y acompañamiento terapéutico, con sesiones presenciales en Sueca dentro de un despacho independiente del Centro Sanar. El contenido publicado en esta web tiene carácter informativo y no constituye asesoramiento sanitario, psicológico, médico ni legal.",
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
        text: "La web puede apoyarse en proveedores técnicos para alojamiento, analítica, protección antispam, formularios y envío o registro de mensajes: Vercel, Google Analytics con consentimiento, Google reCAPTCHA cuando esté activo, Google Sheets si se usa como registro interno y SendGrid si se usa para el envío de correos. Estos proveedores tratan datos solo en la medida necesaria para prestar sus servicios.",
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
      "María A. Cabo · Terapia y desarrollo personal. Acompañamiento orientado al cambio personal y bienestar emocional. No sustituye la atención médica o psiquiátrica ante patologías severas.",
    legal: "Información legal",
    navigation: "Navegación",
    services: "Áreas de terapia",
    socialSubtitle: "Divulgación, reflexiones y día a día",
  },
  common: {
    bookNow: "Solicitar una sesión",
    bookSoon:
      "Solicita una valoración previa de 15 minutos sin compromiso o escríbeme directamente.",
    bookIntro:
      "Solicita una valoración previa de 15 minutos sin compromiso o escríbeme para cualquier consulta.",
    contactMe: "Escríbeme",
    draft: "Contenido provisional pendiente de tus datos definitivos.",
    bookCalendar: "Solicitar valoración 15 min",
    smokeEmail: "Quiero dejar de fumar",
    smokeEmailNote: "Te escribo un email y concertamos una entrevista de 15 minutos.",
    askQuestionLink: "¿Dudas antes de agendar? Escríbeme directamente →",
  },
  cookies: {
    bannerAriaLabel: "Aviso de cookies",
    bannerTitle: "Uso de cookies",
    bannerText:
      "Utilizamos cookies técnicas necesarias para el funcionamiento del sitio web y, solo si lo autorizas, Google Analytics para analizar de forma anónima el tráfico y entender cómo interactúas con la web. Puedes aceptar directamente o acceder a más información para configurar o rechazar su uso.",
    policyLink: "Política de cookies",
    acceptAll: "Aceptar",
    reject: "Rechazar",
    rejectAll: "Rechazar todas",
    configure: "Configurar cookies",
    moreInfo: "Ver más información",
    back: "Volver",
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
        text: "Los formularios y solicitudes gestionan la información de manera segura sin cargar scripts externos innecesarios. reCAPTCHA solo se solicita al enviar el formulario si está configurado, como medida de seguridad contra abuso.",
      },
      {
        title: "Cambiar tu elección",
        text: "Puedes volver a abrir el panel desde el enlace permanente del pie de página. Rechazar es tan sencillo como aceptar.",
      },
    ],
  },
  professionalsPage: professionalsEs,
  pastLivesPage: pastLivesEs,
  qrPage: qrContentEs,
  ...servicesEs,
};

export type Dict = typeof es;

const va: Dict = {
  brand: "María A. Cabo",
  tagline: "Teràpia i desenvolupament personal",
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
      "Acompanyament terapèutic i desenvolupament personal per a persones que busquen canvis reals: hàbits, calma, descans profund i seguretat. Amb rigor científic, proximitat i expectatives clares.",
    pillars: [
      {
        title: "Evidència i rigor",
        text: "Atenció focalitzada i abordatge ericksonià amb base científica i neurobiològica, sense mites ni falses promeses.",
      },
      {
        title: "Abordatge ericksonià",
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
      "Una guia per a reconéixer objectius de desenvolupament personal que podem treballar en sessió, sempre des d'un enfocament no clínic.",
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
    finalText:
      "Sol·licita la teua valoració prèvia gratuïta de 15 minuts o escriu-me per a comentar el teu cas sense compromís.",
    finalSecondary: "Tinc un dubte abans de començar",
    heroEyebrow: "TERÀPIA I DESENVOLUPAMENT PERSONAL · VALÈNCIA I SUECA",
    heroTitle1: "CANVIA",
    heroTitle2: "EL QUE JA NO ET SERVIX.",
    heroIntro:
      "Sessions individuals de teràpia i desenvolupament personal orientades al canvi d'hàbits, la gestió de l'estrés i l'ansietat quotidiana, l'insomni i la seguretat personal. Despatx a Sueca (Centre Sanar), a domicili a València ciutat i en línia.",
    heroPrimary: "VALORACIÓ GRATUÏTA (15 MIN)",
    heroSecondary: "CONSULTAR PER WHATSAPP",
    heroHow: "Conéixer com funciona el procés pas a pas →",
    heroImageAlt: "Fotografia natural en un espai terapèutic",
    changeEyebrow: "ACOMPANYAMENT INDIVIDUAL",
    changeTitle: "QUÈ VOLS CANVIAR?",
    changeCards: [
      {
        title: "ANSIETAT QUOTIDIANA I ESTRÉS",
        text: "Desactivar el mode alerta del sistema nerviós, calmar l'opressió física i recuperar la serenitat en el dia a dia.",
        slug: "/ansiedad",
        cta: "Veure gestió d'ansietat",
      },
      {
        title: "DESCANS I INSOMNI",
        text: "Frenar la rumiació i l'ansietat nocturna, apagar la ment i recuperar el reflex biològic d'un son reparador.",
        slug: "/insomnio",
        cta: "Veure insomni i descans",
      },
      {
        title: "DEIXAR DE FUMAR",
        text: "Superar la síndrome d'abstinència del tabac i l'ansietat per nicotina sense lluites esgotadores de voluntat.",
        slug: "/dejar-de-fumar",
        cta: "Veure programa antitabac",
      },
      {
        title: "PORS I FÒBIES",
        text: "Hipnosi per a superar fòbies: por a volar, a conduir per autovia (amaxofòbia), agulles o claustrofòbia amb desensibilització suau.",
        slug: "/miedos-y-fobias",
        cta: "Veure pors i fòbies",
      },
      {
        title: "CONFIANÇA I AUTOESTIMA",
        text: "Superar l'autoestima baixa, augmentar la confiança en un mateix, véncer la síndrome de l'impostor i parlar amb seguretat.",
        slug: "/autoestima-y-confianza",
        cta: "Veure autoestima i confiança",
      },
      {
        title: "CONTROL DE PES",
        text: "Calmar la gana emocional i el picoteig per estrés, restaurant la sacietat biològica i reconciliant-te amb el teu cos.",
        slug: "/control-de-peso",
        cta: "Veure control de pes",
      },
      {
        title: "HÀBITS NERVIOSOS",
        text: "Rostegar-se les ungles (onicofàgia), bruxisme diürn o pessigar-se la pell: desactivar la descàrrega reflexa de tensió inconscient.",
        slug: "/habitos-nerviosos",
        cta: "Veure hàbits nerviosos",
      },
      {
        title: "ESPORT I ALT RENDIMENT",
        text: "Hipnosi per a l'esport: competir en estat de flux, blindar el temple sota pressió i accelerar la recuperació mental.",
        slug: "/deporte-y-motivacion",
        cta: "Veure esport i rendiment",
      },
      {
        title: "CONCENTRACIÓ I ESTUDI",
        text: "Preparació d'oposicions i exàmens exigents: focus sostingut, màxima assimilació mental i calma davant la prova.",
        slug: "/concentracion-y-foco",
        cta: "Veure estudi i concentració",
      },
    ],
    changeLink: "VEURE TOTS ELS ÀMBITS DE TERÀPIA",
    hypnosisEyebrow: "MÈTODE I EVIDÈNCIA",
    hypnosisTitle: "HIPNOSI ERICKSONIANA I NEUROCIÈNCIA: RIGOR, CALMA I CANVI PROFUND.",
    hypnosisText1:
      "L'abordatge ericksonià és un procés estructurat que utilitza l'atenció focalitzada i la relaxació somàtica per a produir resultats sòlids i duradors a llarg termini. Recolzat per la neurociència moderna, permet intervindre d'arrel sobre hàbits automàtics, respostes físiques davant la tensió i patrons de conducta que no es resolen només amb força de voluntat.",
    hypnosisText2:
      "Durant la sessió facilitem una relaxació profunda que ajuda al teu sistema nerviós a calmar-se i internalitzar els avanços que aconseguim. A través d'este procés de psicoteràpia no s'imposen fórmules externes ni solucions màgiques: activem els teus propis recursos interns per a aprendre a respondre amb serenitat davant situacions d'estrès o bloqueig, amb el màxim rigor ètic i professional.",
    hypnosisLink: "COM FUNCIONA EL PROCÉS",
    hypnosisImageAlt: "Fotografia de sessió tranquil·la",
    contextsTitle: "MODALITATS D'ATENCIÓ: INDIVIDUAL I EMPRESES",
    individualTitle: "SESSIONS INDIVIDUALS",
    individualText:
      "Atenció personalitzada per a hàbits, descans, pors, ansietat, esport i confiança. A Sueca (Centre Sanar), a domicili a València ciutat o en línia.",
    individualLink: "VEURE SESSIONS I TARIFES",
    companiesTitle: "PROGRAMES PER A EMPRESES I EQUIPS",
    companiesText:
      "Tallers i formacions aplicades a organitzacions: focus mental, gestió de la pressió, comunicació d'impacte i benestar corporatiu.",
    companiesLink: "SOLUCIONS PER A EMPRESES",
    processEyebrow: "EL PROCÉS EN 3 PASSOS",
    processTitle: "UN RECORREGUT TRANSPARENT, RIGURÓS I SENSE DEPENDÈNCIES.",
    processSteps: [
      {
        title: "1 · VALORACIÓ PRÈVIA DE 15 MIN",
        text: "Parlem per telèfon o videotelefonada sense cost ni compromís. Avaluem amb honestedat el teu cas i resolem qualsevol dubte.",
      },
      {
        title: "2 · TREBALL EN SESSIÓ INDIVIDUAL",
        text: "Sessions personalitzades de 60 minuts a Sueca (Centre Sanar), a domicili a València ciutat o en format en línia.",
      },
      {
        title: "3 · INTEGRACIÓ I AUTONOMIA",
        text: "Consolidem els avanços amb pautes somàtiques entre sessions perquè gaudis d'un canvi sòlid i durador al teu ritme.",
      },
    ],
    aboutEyebrow: "MARÍA CABO",
    aboutTitle: "UNA MANERA PROPERA I RIGUROSA DE TREBALLAR AMB EL CANVI.",
    aboutText:
      "El meu treball partix d'una certesa: moltes vegades sabem racionalment què volem fer, però el nostre cos i ment automàtica reaccionen d'una altra manera. Formada a l'Institut Erickson Madrid, empri aquestes eines per a intervindre sobre eixos patrons profunds, facilitant canvis sòlids i sostenibles amb total seguretat, proximitat i rigor professional.",
    aboutLink: "CONÉIXER-ME",
    aboutImageAlt: "María A. Cabo",
    eventsTitle: "TROBADES",
    eventsLink: "VEURE ESDEVENIMENTS",
    eventsEmpty: "Pròximes dates en preparació.",
    learnTitle: "APRENDRE",
    learnLink: "VEURE TOTS ELS ARTICLES",
    faqHomeTitle: "RESOLDRE DUBTES",
    faqHomeLink: "VEURE PREGUNTES FREQÜENTS",
    testimonialsEyebrow: "EXPERIÈNCIES REALS",
    testimonialsTitle: "HISTÒRIES DE CANVI I BENESTAR",
    testimonialsSubtitle: "Acompanyament proper, pràctic i rigorós a Sueca, València i en línia.",
    testimonials: [
      {
        quote:
          "Portava més de 20 anys fumant quasi un paquet diari. L'enfocament sense judicis de Maria i treballar les associacions inconscients em van permetre soltar-lo sense l'angoixa constant d'altres intents. El programa de 3 sessions es va amortitzar en mes i mig.",
        author: "J. M., 46 anys",
        service: "Deixar de fumar",
        location: "Sueca",
      },
      {
        quote:
          "Tenia un bloqueig enorme amb les presentacions en la feina i em costava molt conduir per autovia. Aprendre a desactivar la resposta física d'alarma i recuperar la serenitat en sessió ha sigut un abans i un després.",
        author: "Carmen R., 38 anys",
        service: "Ansietat quotidiana i pors",
        location: "València",
      },
      {
        quote:
          "Em despertava quasi totes les nits a les 3 de la matinada amb el cap a mil per hora. Amb les sessions i els àudios de reforç vaig aprendre a calmar el ritme intern i vaig tornar a dormir profundament.",
        author: "Vicente S., 52 anys",
        service: "Insomni i descans profund",
        location: "Cullera",
      },
      {
        quote:
          "Tenia l'hàbit inconscient de rosegar-me les ungles i prémer la mandíbula davant l'ordinador. En poques setmanes vam desactivar eixe automatisme de tensió i ara em sent molt més tranquil·la.",
        author: "Laura G., 31 anys",
        service: "Hàbits i tensió nerviosa",
        location: "Alzira",
      },
    ],
    consultationEyebrow: "VALORACIÓ SENSE COMPROMÍS",
    consultationTitle: "DUBTES SOBRE SI ESTE ENFOCAMENT ENCAIXA AMB TU?",
    consultationSubtitle:
      "Comencem per una conversa prèvia de 15 minuts gratuïta per telèfon o videodisol·licitud. Sense cost, sense compromís i sense cap pressió.",
    consultationPoints: [
      "15 minuts dedicats a conéixer el teu cas i el que vols canviar.",
      "Avaluació honesta: valorem junts si este acompanyament és adequat per al teu objectiu.",
      "Decideixes amb total llibertat després de parlar, sense cap compromís previ.",
    ],
    consultationCtaPrimary: "SOL·LICITAR VALORACIÓ PRÈVIA (15 MIN)",
    consultationCtaWhatsApp: "CONSULTAR PER WHATSAPP",
    ctaTitle: "EL CANVI POT COMENÇAR AMB UNA CONVERSA.",
    ctaPrimary: "SOL·LICITAR ENTREVISTA DE 15 MIN",
    ctaSecondary: "CONSULTAR PER WHATSAPP",
    ctaCompanies: "Representes una empresa? Veure solucions per a organitzacions →",
  },
  companiesPage: {
    seoTitle: "Programes de desenvolupament professional per a empreses · María A. Cabo",
    seoDescription:
      "Tallers i programes per a treballar atenció, confiança, aprenentatge, hàbits i preparació davant situacions professionals exigents.",
    heroTitle: "DESENVOLUPAMENT PROFESSIONAL",
    heroLead: "Atenció, confiança, aprenentatge i canvi d'hàbits aplicats a l'entorn professional.",
    heroText:
      "Dissenye tallers i programes que utilitzen ferramentes de regulació del sistema nerviós, atenció focalitzada i canvi de patrons per a ajudar les persones a treballar d'una manera més conscient davant situacions de pressió, distracció, inseguretat o bloqueig.",
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
      "El treball partix sempre del consentiment de l'empleat. Estes sessions no s'utilitzen per a modificar els seus valors, la seua personalitat, les seues opinions ni per a induir comportaments que no desitja. Al contrari: és una ferramenta orientada a ajudar la persona a respondre amb major serenitat i eficàcia davant determinades respostes automàtiques, emocions o hàbits que ella mateixa vol canviar.",
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
        text: "En què consistix el mètode, què es pot esperar i què no ocorre durant el procés.",
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
    successTitle: "¡Consulta rebuda!",
    sendAnother: "Enviar una altra consulta",
    serverError: "No s'ha pogut connectar amb el servidor. Pots enviar-ho directament per correu:",
    asideDirectHelp: "Preferixes una consulta àgil directa?",
    asideWhatsApp: "Consultar per WhatsApp",
  },
  smokingPage: {
    seoTitle:
      "Deixar de Fumar a València i Sueca · Supera l'Abstinència i Ansietat per Nicotina · María A. Cabo",
    seoDescription:
      "Supera la síndrome d'abstinència del tabac i l'ansietat per nicotina a València i Sueca. Programa de 3 sessions amb hipnosi i reentrenament neurobiològic. Sense recaigudes.",
    eyebrow: "PROGRAMA ANTITABAC A VALÈNCIA I SUECA · HIPNOSI I DESENVOLUPAMENT PERSONAL",
    title: "DEIXAR DE FUMAR: VÈNCER LA SÍNDROME D'ABSTINÈNCIA I L'ANSIETAT PER NICOTINA",
    subtitle:
      "Un recorregut estructurat per a canviar automatismes, desactivar l'abstinència de tabac i sostindre la teua decisió amb calma i sense ansietat.",
    introText:
      "Fumar no sol ser una decisió conscient: funciona a través d'associacions automàtiques en el sistema nerviós. Amb hipnosi clínica i regulació somàtica treballem directament sobre la síndrome d'abstinència del tabac i l'ansietat per nicotina a València i Sueca: desconnectem l'impuls automàtic, desactivem disparadors quotidians i sostenim la teua llibertat amb calma duradora, sense lluites esgotadores de força de voluntat.",
    ctaPrimary: "SOL·LICITAR ENTREVISTA PRÈVIA",
    ctaSecondary: "COM ÉS EL PROGRAMA",
    trustBadges: [
      "Entrevista prèvia de 15 min sense cost ni compromís",
      "Sueca (Centre Sanar) i a domicili a València ciutat",
      "Programa estructurat de 3 sessions · 300 € (tot inclòs)",
    ],
    whyTitle: 'PER QUÈ LA "FORÇA DE VOLUNTAT" FALLA DAVANT LA SÍNDROME D\'ABSTINÈNCIA?',
    whyParagraphs: [
      "La majoria de les persones que volen deixar de fumar saben perfectament per què haurien de fer-ho: salut, diners, llibertat, olor. No obstant això, en quant apareix l'estrés, el cafè del matí o una sobretaula amb amics, el cos dispara l'abstinència de nicotina i el desig impulsiu abans que la raó intervinga.",
      "La síndrome d'abstinència del tabac té dos dimensions molt diferents: l'abstinència física de nicotina (que el cos elimina de forma natural en unes 48 a 72 hores) i l'ansietat psicològica per nicotina, que és un patró reflex sostingut en circuits neuronals de recompensa.",
      "A través d'un enfocament de psicoteràpia aplicada que utilitza la hipnosi ericksoniana, intervenim en el nivell neurobiològic on s'originen eixos automatismes. Desactivem l'ansietat per nicotina, deslliguem el tabac de la calma o l'alleujament i ancorem respostes naturals de serenitat, aconseguint resultats sòlids i duradors a llarg termini sense substituir el cigarret per menjar ni patir irritabilitat.",
    ],
    programTitle: "ESTRUCTURA DEL PROGRAMA (3 SESSIONS)",
    programIntro:
      "Un procés clar, amb inici i fi, dissenyat per a donar-te autonomia i evitar dependències.",
    steps: [
      {
        num: "01",
        title: "ENTREVISTA PRÈVIA DE 15 MINUTS",
        badge: "Gratuïta i sense compromís",
        text: "Parlem per telèfon o videotelefonada per a conéixer la teua relació amb el tabac, els teus motius personals i resoldre tots els dubtes abans de començar.",
      },
      {
        num: "02",
        title: "SESSIÓ 1 · EL DIA DEL CANVI",
        badge: "Sueca o a domicili (75 min)",
        text: "Treballem en profunditat els teus motius personals, desactivem els disparadors quotidians i anclem el nou estat de no fumador.",
      },
      {
        num: "03",
        title: "SESSIÓ 2 · CONSOLIDACIÓ I CALMA",
        badge: "Sueca o a domicili (60 min)",
        text: "Avaluem els primers dies sense fumar, reforcem la sensació de benestar, gestionem possibles pics de tensió i afermem noves respostes.",
      },
      {
        num: "04",
        title: "SESSIÓ 3 · AUTONOMIA I PREVENCIÓ",
        badge: "Sueca o a domicili (60 min)",
        text: "Projecció a llarg termini, ferramentes per a situacions socials o d'estrés imprevist i tancament del procés amb total independència.",
      },
    ],
    includedTitle: "QUÈ INCLOU EL PROGRAMA",
    includedItems: [
      "Entrevista prèvia de valoració de 15 minuts sense cost.",
      "3 sessions individuals i intensives (a Sueca o a domicili a València).",
      "Gravació d'àudio de reforç personalitzada per a escoltar a casa.",
      "Seguiment i suport proper entre sessions.",
      "Pautes de respiració i autoregulació per a moments puntuals de tensió.",
    ],
    price: "300 €",
    priceNote: "Preu tancat pel paquet complet de les tres sessions i tot el material de suport.",
    formEyebrow: "ENTREVISTA PRÈVIA",
    formTitle: "SOL·LICITAR ENTREVISTA DE 15 MINUTS",
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
        a: "L'objectiu del programa és que el canvi d'hàbit es produïsca des de la primera sessió presencial de treball. En l'entrevista prèvia preparem el terreny perquè arribes amb total claredat i determinació, mentre que les sessions 2 i 3 se centren a consolidar els nous patrons, gestionar disparadors quotidians i afermar la calma a llarg termini.",
      },
      {
        q: "Tindré ansietat per nicotina o síndrome d'abstinència insuportable?",
        a: "La hipnosi ericksoniana i la relaxació somàtica actuen directament sobre el sistema nerviós autònom per a desactivar l'ansietat per nicotina i suavitzar la síndrome d'abstinència del tabac a València i Sueca. L'abstinència física passa ràpid; el repte real és la resposta apresa. En reprogramar els disparadors automàtics i dotar-te d'ancoratges de serenitat i un àudio de reforç, transites els primers dies amb tranquil·litat i sense sensació de privació.",
      },
      {
        q: "Pujaré de pes en deixar de fumar amb hipnosi?",
        a: "Quan es deixa de fumar només per força de voluntat, l'ansietat no resolta sol canalitzar-se cap al picoteig compulsiu de menjar. En les nostres sessions desactivem l'arrel de l'ansietat per nicotina, de manera que no necessites compensar amb menjar el que ja no trobes a faltar.",
      },
      {
        q: "Què passa si no funciona o tinc dubtes?",
        a: "Per això realitzem l'entrevista prèvia gratuïta de 15 minuts: per a avaluar honestament el teu cas. Si considerem que no és el moment adequat o que necessites un altre tipus d'acompanyament, t'ho diré amb total transparència.",
      },
      {
        q: "On es realitzen les sessions a València i Sueca?",
        a: "Les sessions presencials es realitzen en el meu despatx independent dins del Centre Sanar a Sueca (València) o a domicili en cases de particulars a València ciutat (consultar suplement per desplaçament). L'entrevista prèvia de 15 minuts es realitza còmodament per telèfon o videotelefonada.",
      },
      {
        q: "Per què un programa de 3 sessions en lloc de prometre una sola sessió miraculosa?",
        a: "Desconfiem de les falses promeses de solucions màgiques en una sola hora. Fumar és un hàbit complex vinculat a múltiples disparadors quotidians (el café, l'estrés laboral, els moments socials). La primera sessió marca el punt d'inflexió i tall amb el tabac, però les sessions posteriors asseguren la consolidació somàtica, prevenen recaigudes davant situacions d'estrés imprevist i et doten de ferramentes de respiració i autoregulació per a mantindre la teua calma i autonomia.",
      },
    ],
    savingsTitle: "QUANT ET COSTA CONTINUAR FUMANT?",
    savingsSubtitle:
      "El programa antitabac no és una despesa: s'amortitza per complet en mes i mig i a partir del segon mes estalvies milers d'euros.",
    savingsCards: [
      {
        consumption: "Mig paquet / dia",
        cigs: "10 cigarrets al dia",
        badge: "Consum moderat",
        monthlyCost: "~85 € / mes",
        yearlyCost: "~1.020 € / any",
        amortization: "Amortitzat en 3,5 mesos",
        netYearOne: "Estalvi any 1: +720 €",
      },
      {
        consumption: "1 paquet / dia",
        cigs: "20 cigarrets al dia",
        badge: "Cas més habitual",
        monthlyCost: "~170 € / mes",
        yearlyCost: "~2.040 € / any",
        amortization: "Amortitzat en només 53 dies",
        netYearOne: "Estalvi any 1: +1.740 €",
      },
      {
        consumption: "1 paquet i mig / dia",
        cigs: "30 cigarrets al dia",
        badge: "Consum alt",
        monthlyCost: "~255 € / mes",
        yearlyCost: "~3.060 € / any",
        amortization: "Amortitzat en només 35 dies",
        netYearOne: "Estalvi any 1: +2.760 €",
      },
    ],
    savingsNote:
      "Càlcul orientatiu basat en un cost mitjà de 5,60 € per paquet de tabac comercial.",
    testimonialsTitle: "EXPERIÈNCIES REALS DE CANVI",
    testimonialsSubtitle:
      "Persones que van decidir deixar el tabac i recuperar la seua llibertat i calma quotidiana.",
    testimonials: [
      {
        quote:
          "Portava 22 anys fumant un paquet diari i havia provat pegats i pastilles sense èxit perquè sempre tornava al primer pic d'estrés. Amb Maria vaig comprendre que el tabac era una resposta automàtica que el meu cos utilitzava per desconnectar. En 3 sessions vam canviar aquest patró i no he viscut amb l'ansietat que temia.",
        author: "J. M., 46 anys",
        location: "Sueca",
        detail: "Exfumador després de 22 anys de consum",
      },
      {
        quote:
          "El que més em va sorprendre va ser l'absència total de judici. No et renya ni et dona sermons de salut que ja et saps de memòria. Vam treballar sobre el café del matí i les sobretaules amb amics. Eixir a sopar i no sentir la necessitat de fumar va ser una llibertat increïble.",
        author: "Carmen B., 39 anys",
        location: "València",
        detail: "Lliure de tabac des de fa 8 mesos",
      },
      {
        quote:
          "El càlcul dels diners va ser el que em va espentar a provar-ho. Em gastava quasi 200 euros al mes. Ara eixos diners es queden al meu compte i respire millor quan puge les escales o isc a caminar. L'entrevista prèvia de 15 minuts em va donar tota la confiança per a fer el pas.",
        author: "R. F., 51 anys",
        location: "Cullera",
        detail: "Consum previ de 25 cigarrets/dia",
      },
    ],
  },
  anxietyPage: {
    seoTitle: "Gestió de l'Ansietat Quotidiana i Pors a València i Sueca · María A. Cabo",
    seoDescription:
      "Aprén a gestionar l'ansietat quotidiana, calmar la tensió i treballar pors (volar, conduir, parlar en públic) a Sueca, València i en línia. 70 €/sessió.",
    eyebrow: "TERÀPIA I DESENVOLUPAMENT PERSONAL · VALÈNCIA I SUECA",
    eyebrowNav: "Gestió d'Ansietat i Pors",
    title: "GESTIONAR L'ANSIETAT QUOTIDIANA, CALMAR LA TENSIÓ I TREBALLAR PORS",
    subtitle:
      "Aprén a respondre d'una altra manera davant de situacions que generen tensió, preocupació o bloqueig, ensenyant al teu cos a recuperar la calma.",
    introText:
      "Opressió al pit, respiració curta, ment que anticipa preocupacions o bloqueig davant de situacions com volar, conduir o parlar en públic. Quan l'estrés i la preocupació es repetixen, el cos reacciona de forma reflexa abans que la raó intervinga. Amb un enfocament de psicoteràpia que utilitza l'estat hipnòtic per a produir resultats duradors a llarg termini, intervenim en eixe nivell de respostes automàtiques: facilitem recursos perquè el teu cos recorde la calma, aprengues a respondre amb serenitat davant dels disparadors de tensió i consolides la teua tranquil·litat quotidiana amb total seguretat i autonomia.",
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA TERÀPIA",
    trustBadges: [
      "Acompanyament terapèutic basat en evidència",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Valoració prèvia de 15 min sense compromís",
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
        text: "Crisi d'angoixa, sensació de saturació física o cancel·lar plans i viatges per a evitar el malestar.",
      },
    ],
    whyTitle: "PER QUÈ NO N'HI HA PROU AMB DIR-TE 'CALMA'T'?",
    whyParagraphs: [
      "La majoria de les persones amb ansietat ja saben que les seues preocupacions són exagerades. La raó ho entén, però el cos no obeïx: el cor s'accelera, l'aire sembla no entrar i els músculs es tensen. Per què passa açò?",
      "Perquè la resposta d'ansietat s'origina en el sistema nerviós autònom (la branca simpàtica o mode 'lluita o fugida'), una xarxa primitiva encarregada de la teua supervivència que no respon al llenguatge lògic dels pensaments conscients. Intentar frenar l'ansietat obligant-te a 'pensar en positiu' sol generar més impotència i frustració.",
      "Este abordatge de teràpia i desenvolupament personal utilitza el mateix llenguatge que el teu sistema nerviós: el de l'atenció focalitzada, els senyals sensorials i la distensió somàtica. En facilitar un estat de relaxació profunda guiada, activem de manera natural el sistema parasimpàtic (el fre neurobiològic de l'estrés), ensenyant al cos a apagar l'alarma i creant nous circuits neuronals de calma que produïxen resultats estables i duradors a llarg termini.",
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
        title: "AUTONOMIA I REGULACIÓ SOMÀTICA",
        text: "Aprens pautes d'autoregulació somàtica i respiració per a gestionar el teu benestar en el teu dia a dia, al teu ritme i sense crear dependències.",
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
      "Pautes d'autoregulació i exercicis pràctics entre sessions.",
      "Valoració prèvia de 15 minuts sense compromís per a orientar el teu cas.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "FES EL PRIMER PAS CAP A LA CALMA",
    formSubtitle:
      "Emplena este breu formulari per a consultar els teus dubtes o sol·licitar la teua sessió. Si ho prefereixes, podem tindre una valoració prèvia de 15 minuts per telèfon o WhatsApp per a conéixer el teu cas sense compromís.",
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
    faqTitle: "PREGUNTES FREQÜENTS SOBRE ANSIEDAD I REGULACIÓ",
    faqs: [
      {
        q: "Com ajuda exactament la teràpia a reduir l'ansietat?",
        a: "La teràpia actua directament sobre la resposta neurobiològica de l'estrés. Mentre que conscientment intentes 'tranquil·litzar-te' sense èxit, en sessió induïm una relaxació profunda que activa el sistema parasimpàtic, permetent que el cos desactive la tensió muscular, regule la respiració i el sistema nerviós internalitze els avanços i la calma a nivell fisiològic.",
      },
      {
        q: "Com es treballa durant la sessió i què s'experimenta?",
        a: "Durant la sessió treballem amb una relaxació profunda i guiada que ajuda el sistema nerviós a calmar-se i integrar els avanços que aconseguim. La teua consciència roman activa en tot moment: escoltes la meua veu, pots parlar, moure't i participar amb total normalitat mentre el teu organisme assimila noves respostes de tranquil·litat.",
      },
      {
        q: "En quantes sessions se sol notar el canvi?",
        a: "Moltes persones experimenten un alleujament significatiu i una profunda sensació de lleugeresa corporal des de la primera sessió. Com que no hi ha compromisos obligatoris, valorem junts després de cada sessió i avances al teu propi ritme segons la teua evolució personal.",
      },
      {
        q: "És compatible si ja prenc medicació ansiolítica o vaig al psicòleg?",
        a: "Sí, és compatible com a suport d'autoregulació. L'acompanyament terapèutic i el desenvolupament personal t'ajuden a connectar amb els teus recursos interns naturals. No realitzem diagnòstics clínics de trastorns mentals greus ni substituïm els tractaments mèdics o psiquiàtrics pautats per facultatius especialistes.",
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
      "El treball que realitzem és un procés de psicoteràpia i desenvolupament personal basat en la neurociència i l'atenció focalitzada. Durant la sessió facilitem una relaxació profunda que ajuda el sistema nerviós a calmar-se i internalitzar els avanços que aconseguim, aconseguint canvis sòlids i duradors en els teus hàbits i benestar emocional.",
    stepsTitle: "El recorregut, pas a pas",
    steps: [
      {
        title: "1 · Conversa inicial o valoració gratuïta (15 min)",
        text: "Parlem del que vols canviar, resolem tots els teus dubtes i veiem amb total honestedat si este acompanyament terapèutic és adequat per a tu.",
      },
      {
        title: "2 · Objectiu concret",
        text: "Definim un objectiu observable i realista, amb la part que depén de mi i la que depén de tu.",
      },
      {
        title: "3 · Sessió de teràpia",
        text: "Un procés guiat, tranquil i consentit en tot moment. Recordaràs el viscut i podràs parar quan vulgues.",
      },
      {
        title: "4 · Entre sessions",
        text: "Xicotetes pràctiques per a sostindre el canvi en el dia a dia, sense sobrecarregar la teua agenda.",
      },
    ],
    mythsTitle: "Mites i realitats",
    myths: [
      "La relaxació profunda ajuda el teu sistema nerviós a integrar canvis de manera natural i conscient.",
      "No realitzem diagnòstics clínics de trastorns mentals greus.",
      "No substituïx l'atenció mèdica o psiquiàtrica davant patologies severes.",
      "És un procés seriós, actiu i recolzat per l'evidència científica.",
    ],
    safetyTitle: "Seguretat i límits clars",
    safetyText:
      "El servici s'adreça a persones majors de 18 anys. Si la teua situació requerix atenció mèdica o psiquiàtrica preferent, t'ho indicaré amb total claredat i honestedat professional.",
    ctaTitle: "Dubtes sobre si este acompanyament és per a tu?",
    ctaSubtitle:
      "Parlem 15 minuts per telèfon o WhatsApp sense compromís. Analitzem el teu cas, resolem qualsevol inquietud i t'explique com enfocaríem el teu procés.",
    ctaPrimary: "Sol·licitar valoració prèvia de 15 min",
    ctaWhatsApp: "Consultar per WhatsApp",
  },
  areas: {
    title: "Àmbits d'acompanyament terapèutic",
    intro:
      "Nou àrees principals on la teràpia i la hipnosi ericksoniana conscient ajuden a reorganitzar respostes automàtiques, superar bloquejos i afrontar la vida amb serenitat i aplom.",
    noticeTitle: "Rigor professional i límits ètics",
    notice:
      "Les sessions de teràpia i desenvolupament personal estan orientades al canvi personal i el benestar emocional. No substituïxen l'atenció mèdica o psiquiàtrica davant patologies severes, ni realitzem diagnòstics clínics de trastorns mentals greus. Si el teu cas requerix atenció mèdica o psiquiàtrica especialitzada, t'orientarem amb total transparència.",
    items: [
      {
        title: "Ansietat quotidiana i estrés",
        text: "Desactivar l'alarma fisiològica, calmar l'opressió física i aprendre a respondre amb serenitat davant de situacions quotidianes de sobrecàrrega.",
        slug: "/ansiedad",
        cta: "Veure gestió d'ansietat",
      },
      {
        title: "Estrés, calma, insomni i ansietat nocturna",
        text: "Entrenar recursos somàtics de relaxació profunda per a desactivar la hipervigilància, calmar la rumiació nocturna i afavorir un son natural.",
        slug: "/insomnio",
        cta: "Veure teràpia per a insomni",
      },
      {
        title: "Deixar de fumar: abstinència i ansietat per nicotina",
        text: "Un recorregut específic i estructurat en 3 sessions per a superar la síndrome d'abstinència, desactivar disparadors i viure sense tabac.",
        slug: "/dejar-de-fumar",
        cta: "Veure programa antitabac",
      },
      {
        title: "Hipnosi per a superar fòbies i pors",
        text: "Desensibilització sistemàtica suau per a por a volar, conduir per autovia (amaxofòbia), agulles, claustrofòbia o parlar en públic.",
        slug: "/miedos-y-fobias",
        cta: "Veure hipnosi per a fòbies",
      },
      {
        title: "Autoestima baixa i confiança en un mateix",
        text: "Treballar seguretat personal, superar l'autocrítica destructiva, véncer la síndrome de l'impostor i posar límits amb assertivitat i calma.",
        slug: "/autoestima-y-confianza",
        cta: "Veure autoestima i confiança",
      },
      {
        title: "Control de pes i relació amb el menjar",
        text: "Calmar la gana emocional i el picoteig compulsiu per estrés, recuperant la sacietat biològica real sense dietes restrictives.",
        slug: "/control-de-peso",
        cta: "Veure control de pes",
      },
      {
        title: "Hàbits nerviosos i rostegar-se les ungles",
        text: "Modificar automatismes involuntaris com rostegar-se les ungles (onicofàgia), bruxisme diürn o pessigar-se la pell mitjançant reeducació motora.",
        slug: "/habitos-nerviosos",
        cta: "Veure hàbits nerviosos",
      },
      {
        title: "Hipnosi per a l'esport i rendiment mental",
        text: "Entrenar l'estat de flux, la visualització motora subconscient, el temple competitiu i la constància en entrenaments a València i Castelló.",
        slug: "/deporte-y-motivacion",
        cta: "Veure esport i motivació",
      },
      {
        title: "Concentració, focus i estudi d'oposicions",
        text: "Preparació d'oposicions i exàmens exigents: concentració sostinguda, absorció cognitiva i gestió de la pressió.",
        slug: "/concentracion-y-foco",
        cta: "Veure focus i concentració",
      },
    ],
    closing:
      "Si dubtes de si este acompanyament encaixa amb tu, escriu-me abans de sol·licitar la teua sessió o demana la teua valoració prèvia de 15 minuts sense compromís.",
    cta: "Resoldre un dubte o consultar",
  },
  sessions: {
    title: "Sessions d'hipnosi conscient i acompanyament terapèutic",
    intro:
      "Sessions individuals d'hipnosi ericksoniana conscient i desenvolupament personal amb María A. Cabo a Sueca (Centre Sanar), a domicili en cases de particulars a València ciutat, o en línia per videoconferència. Tarifes transparents, atenció propera i sense paquets obligatoris.",
    items: [
      {
        name: "Sessió individual d'hipnosi i teràpia",
        price: "70 €",
        unit: "per sessió (60 minuts)",
        text: "Sessió individual i personalitzada d'hipnosi conscient i teràpia per a abordar ansietat, descans i insomni, pors o fòbies, control d'hàbits, rendiment esportiu o seguretat personal.",
        points: [
          "Sessió individual de 60 minuts amb María A. Cabo",
          "A Sueca (Centre Sanar), a domicili a València ciutat o en línia",
          "Al teu propi ritme (sense bons obligatoris ni lligams)",
          "Valoració prèvia de 15 min sense compromís per a orientar el teu cas",
        ],
      },
      {
        name: "Programa per a deixar de fumar",
        price: "300 €",
        unit: "paquet tancat de 3 sessions",
        text: "Programa estructurat amb tècniques d'hipnosi clínica per a superar la síndrome d'abstinència i l'ansietat per nicotina, desactivar detonants del tabac i consolidar la teua calma definitiva.",
        points: [
          "Tres sessions completes i intensives (Sueca, a domicili o en línia)",
          "Gravació d'àudio de reforç personalitzada per a casa",
          "Pautes somàtiques per a moments de tensió i seguiment proper",
          "Entrevista prèvia gratuïta de 15 min sense compromís",
        ],
      },
    ],
    policyTitle: "Abans de sol·licitar la teua sessió",
    policy: [
      "Acompanyament pensat per a persones adultes.",
      "Si dubtes de si és adequat per a tu, escriu-me abans o demana la teua valoració prèvia de 15 minuts.",
      "Els canvis i cancel·lacions s'acorden amb antelació raonable.",
      "Horaris en hora peninsular (Europe/Madrid).",
    ],
  },
  about: {
    title: "Sobre mi",
    name: "María A. Cabo",
    role: "Especialista en desenvolupament personal i processos de canvi",
    intro:
      "Sóc María Cabo, especialista en desenvolupament personal i processos de canvi. Acompanye a persones adultes mitjançant un enfocament terapèutic focalitzat a produir resultats duradors a llarg termini en el canvi d'hàbits, la regulació de l'estrés i l'ansietat quotidiana, la superació de pors i la seguretat personal. Compte amb formació a l'Institut Erickson Madrid, des d'un mètode pròxim, rigorós i respectuós amb el ritme de cada persona.",
    traits: ["Proximitat", "Formació Ericksoniana", "Recursos útils"],
    highlights: [
      {
        title: "Institut Erickson Madrid",
        text: "Formació especialitzada a l'Institut Erickson Madrid.",
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
      "Crec en les expectatives realistes. Esta metodologia és una eina molt útil per a treballar hàbits, atenció i resposta a l'estrés, però no ho resol tot ni substituïx l'atenció sanitària.",
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
      "Durant la sessió facilitem una relaxació profunda que ajuda al teu sistema nerviós a calmar-se i internalitzar els avanços que aconseguim.",
    statement:
      "El meu treball consistix a acompanyar cada persona a explorar els seus patrons i oferir-li ferramentes per a respondre d'una manera més útil per a ella.",
    workEyebrow: "La meua manera de treballar",
    workTitle: "Acompanyament terapèutic: una eina rigorosa, no una fórmula màgica.",
    workText:
      "Entenc este treball com un procés de psicoteràpia i desenvolupament personal per a facilitar canvis profunds i sostenibles: observar respostes automàtiques, activar els recursos propis de la persona i consolidar noves formes de respondre davant situacions quotidianes amb resultats sòlids a llarg termini.",
    focusAreas: [
      {
        title: "Canvi pràctic",
        text: "Sessions orientades a objectius concrets, amb recursos que puguen traslladar-se a la vida real.",
      },
      {
        title: "Procés conscient",
        text: "La persona participa activament mentre la relaxació profunda permet al sistema nerviós assimilar i internalitzar els avanços.",
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
      "Formada a l'Institut Erickson Madrid, una de les institucions de referència a Espanya, treballe amb un model que posa el focus en els recursos inconscients i aprenentatges previs de la pròpia persona per a generar respostes més adaptatives i duradores.",
      "Eixa combinació entre formació tècnica rigorosa i experiència vital en entorns d'alta exigència m'ajuda a entendre que darrere de cada objectiu hi ha una història, una manera de respondre i unes circumstàncies diferents.",
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
        text: "Una trobada per a comprendre com se sostenen els automatismes del tabac i com pot acompanyar-se el canvi cap a una vida lliure de fum.",
        ctaText: "Reservar plaça per WhatsApp",
        whatsappMessage:
          "Hola María, m'agradaria consultar o reservar plaça per a la trobada de Tabaquisme a Sueca (Centre Sanar).",
      },
      {
        dateISO: "2026-09-21",
        date: "21 set",
        time: "18:00",
        title: "Ansietat, pors i fòbies",
        text: "Una introducció serena a recursos d'atenció, calma i preparació interna davant situacions que generen tensió.",
        ctaText: "Reservar plaça per WhatsApp",
        whatsappMessage:
          "Hola María, m'agradaria consultar o reservar plaça per a la trobada d'Ansietat, pors i fòbies a Sueca (Centre Sanar).",
      },
      {
        dateISO: "2026-09-28",
        date: "28 set",
        time: "18:00",
        title: "Estudi i exàmens",
        text: "Una sessió grupal per a explorar focus, confiança i assaig mental abans de reptes acadèmics o proves importants.",
        ctaText: "Reservar plaça per WhatsApp",
        whatsappMessage:
          "Hola María, m'agradaria consultar o reservar plaça per a la trobada d'Estudi i exàmens a Sueca (Centre Sanar).",
      },
      {
        dateISO: "2026-10-05",
        date: "5 oct",
        time: "18:00",
        title: "Hàbits i control del pes",
        text: "Un espai per a parlar de motivació, repetició i relació amb les rutines quotidianes des d'un enfocament no clínic.",
        ctaText: "Reservar plaça per WhatsApp",
        whatsappMessage:
          "Hola María, m'agradaria consultar o reservar plaça per a la trobada d'Hàbits i control del pes a Sueca (Centre Sanar).",
      },
      {
        dateISO: "2026-10-24",
        date: "24 oct",
        time: "10:00–11:30",
        title: "Calma pràctica · Taller experiencial",
        badge: "Taller en grup · 15 €",
        place: "Cullera · Sat Nam Yoga",
        text: "I si aprengueres a viure en calma? Vine a experimentar-ho. Un taller experiencial en grup per a explorar, jugar i sorprendre't amb recursos pràctics de serenitat. Places limitades.",
        ctaText: "Reservar plaça per WhatsApp",
        whatsappMessage:
          "Hola María, m'agradaria reservar la meua plaça per al taller Calma Pràctica a Cullera (Sat Nam Yoga).",
      },
      {
        dateISO: "2026-11-08",
        date: "8 nov",
        time: "10:00–11:30",
        title: "Aprén a voler sense perdre't · Taller pràctic",
        badge: "Taller en grup · 15 €",
        place: "Cullera · Sat Nam Yoga",
        text: "Comprén i experimenta com vincular-te i relacionar-te sense perdre el teu propi centre, espai i benestar. Un taller pràctic en grup per a cultivar relacions sanes i conscients. Places limitades.",
        ctaText: "Reservar plaça per WhatsApp",
        whatsappMessage:
          "Hola María, m'agradaria reservar la meua plaça per al taller 'Aprén a voler sense perdre't' del diumenge 8 de novembre a Cullera (Sat Nam Yoga).",
      },
      {
        dateISO: "2026-11-22",
        date: "22 nov",
        time: "10:00–11:30",
        title: "Calma pràctica · Taller pràctic",
        badge: "Taller en grup · 15 €",
        place: "Cullera · Sat Nam Yoga",
        text: "I si aprengueres a viure en calma? Vine a experimentar-ho. Un taller pràctic en grup per a explorar, comprendre i experimentar ferramentes per a gestionar l'estrés i cultivar la calma. Places limitades.",
        ctaText: "Reservar plaça per WhatsApp",
        whatsappMessage:
          "Hola María, m'agradaria reservar la meua plaça per al taller Calma Pràctica del diumenge 22 de novembre a Cullera (Sat Nam Yoga).",
      },
    ],
    empty: "Ara mateix no hi ha dates obertes.",
    emptyText:
      "Estic preparant el calendari de tallers. Si vols que t'avise quan es publiquen, escriu-me i t'ho conte.",
    cta: "Reservar plaça per WhatsApp",
  },
  journal: {
    title: "Blog",
    intro:
      "Textos breves per a entendre millor els processos de canvi, els hàbits i el benestar personal. Mai diagnòstics ni receptes.",
    posts: [
      {
        slug: "hipnosis-y-fobias-aprender-una-respuesta-diferente",
        title: "Teràpia i fòbies: aprendre una resposta diferent",
        excerpt:
          "Una fòbia pot sentir-se com una reacció automàtica. La teràpia permet treballar amb eixa part més automàtica de l'experiència.",
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
        title: "Teràpia i ansietat: aprendre una resposta diferent",
        excerpt:
          "La teràpia pot oferir un context diferent per a treballar amb l'atenció, la imaginació i respostes apreses.",
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
        title: "Com és una sessió de canvi i acompanyament?",
        excerpt:
          "Una sessió és un espai de col·laboració on facilitem una relaxació profunda perquè el sistema nerviós integre els avanços de forma natural.",
      },
      {
        slug: "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
        title: "Teràpia i canvi d'hàbits: com pot ajudar?",
        excerpt:
          "La teràpia no esborra un hàbit. Pot ajudar-nos a assajar i reforçar noves maneres de respondre.",
      },
      {
        slug: "por-que-cuesta-cambiar-un-habito",
        title: "Per què ens costa tant canviar un hàbit?",
        excerpt: "Perquè saber què volem fer i aconseguir fer-ho no sempre són la mateixa cosa.",
      },
      {
        slug: "que-ocurre-en-el-cerebro-durante-la-hipnosis",
        title: "Què ocorre en el cervell durant els estats de focalització?",
        excerpt:
          "La ciència ha observat canvis en l'atenció i la comunicació entre xarxes cerebrals, sense apagar la ment racional.",
      },
      {
        slug: "que-es-la-hipnosis",
        title: "Què és realment este enfocament d'atenció focalitzada?",
        excerpt:
          "Un estat d'atenció focalitzada i relaxació profunda que permet al sistema nerviós assimilar i internalitzar nous patrons de benestar.",
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
        title: "Entendre el canvi i el cervell",
        description:
          "Una introducció ordenada als processos de canvi, el cervell, els hàbits i com pot ser una sessió.",
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
        q: "Què s'experimenta durant la sessió de teràpia?",
        a: "Durant la sessió guiem un estat de relaxació profunda on romanen plenament conscient. Esta calma permet al teu sistema nerviós baixar el nivell d'alerta i internalitzar de manera orgànica els avanços i recursos treballats, amb total comoditat i tranquil·litat.",
      },
      {
        q: "Quina base científica i aval té este abordatge terapèutic?",
        a: "És un procediment estructurat de psicoteràpia i canvi avalat per la neurociència i la medicina. Utilitza l'atenció focalitzada i la relaxació somàtica profunda per a modular l'activitat cerebral i intervindre sobre automatismes, l'estrés i els hàbits apresos, produint resultats eficaços i sostenibles a llarg termini.",
      },
      {
        q: "En què es diferencia d'un diagnòstic o tractament psiquiàtric?",
        a: "Este abordatge terapèutic i el desenvolupament personal són ferramentes serioses enfocades en processos de canvi personal, benestar emocional i superació de bloquejos. No realitzem diagnòstics clínics de trastorns mentals greus ni substituïm l'atenció mèdica o psiquiàtrica quan esta siga necessària.",
      },
      {
        q: "Quantes sessions necessite?",
        a: "Depén de l'objectiu i de cada persona. Moltes persones treballen amb sessions individuals soltes; per a deixar de fumar el recorregut està estructurat en tres sessions.",
      },
      {
        q: "I si crec que em costa concentrar-me o relaxar-me?",
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
    ctaTitle: "Tens algun altre dubte o vols valorar el teu cas?",
    ctaSubtitle:
      "Pots sol·licitar una valoració prèvia de 15 minuts sense cost ni compromís o escriure'm directament.",
  },
  contact: {
    title: "Contacte",
    intro:
      "Si tens un dubte abans de sol·licitar la teua sessió o vols sol·licitar la valoració prèvia gratuïta de 15 minuts (per telèfon o videotrucada, sense compromís), escriu-me i et respondré amb calma.",
    calloutTitle: "Valoració prèvia de 15 minuts sense compromís",
    calloutText:
      "Pots utilitzar este formulari per a consultar els teus dubtes o sol·licitar una telefonada prèvia de 15 minuts sense cost. Parlarem amb honestedat del teu cas abans d'agendar cap sessió.",
    phone: "Telèfon",
    name: "Nom",
    email: "Correu electrònic",
    message: "El teu missatge",
    consent: "He llegit i accepte la política de privacitat.",
    send: "Enviar missatge",
    sent: "Gràcies, he rebut el teu missatge. Et respondré ben aviat.",
    note: "Envia el teu missatge i et respondré prompte per a coordinar la teua cita o resoldre qualsevol dubte.",
    infoTitle: "Dades",
    area: "Sueca (Centre Sanar) · Sessions presencials i online",
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
        text: "Titular del lloc: María A. Cabo. Contacte: maria.a.cabo@gmail.com. Activitat: acompanyament de desenvolupament personal i processos de canvi, amb sessions presencials a Sueca dins d'un despatx independent del Centre Sanar. El contingut publicat en esta web té caràcter informatiu i no constituïx assessorament sanitari, psicològic, mèdic ni legal.",
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
        text: "La web pot recolzar-se en proveïdors tècnics per a allotjament, analítica, protecció antispam, formularis i enviament o registre de missatges: Vercel, Google Analytics amb consentiment, Google reCAPTCHA quan estiga actiu, Google Sheets si s'utilitza com a registre intern i SendGrid si s'utilitza per a l'enviament de correus. Estos proveïdors tracten dades només en la mesura necessària per a prestar els seus servicis.",
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
      "María A. Cabo · Teràpia i desenvolupament personal. Acompanyament orientat al canvi personal i benestar emocional. No substituïx l'atenció mèdica o psiquiàtrica davant patologies severes.",
    legal: "Informació legal",
    navigation: "Navegació",
    services: "Àrees de teràpia",
    socialSubtitle: "Divulgació, reflexions i dia a dia",
  },
  common: {
    bookNow: "Sol·licitar una sessió",
    bookSoon:
      "Sol·licita una valoració prèvia de 15 minuts sense compromís o escriu-me directament.",
    bookIntro:
      "Sol·licita una valoració prèvia de 15 minuts sense compromís o escriu-me per a qualsevol consulta.",
    contactMe: "Escriu-me",
    draft: "Contingut provisional pendent de les teues dades definitives.",
    bookCalendar: "Sol·licitar valoració 15 min",
    smokeEmail: "Vull deixar de fumar",
    smokeEmailNote: "M'escrius un email i concertem una entrevista de 15 minuts.",
    askQuestionLink: "Dubtes abans d'agendar? Escriu-me directament →",
  },
  cookies: {
    bannerAriaLabel: "Avís de galetes",
    bannerTitle: "Ús de galetes",
    bannerText:
      "Utilitzem galetes tècniques necessàries per al funcionament del lloc web i, només si ho autoritzes, Google Analytics per a analitzar de manera anònima el trànsit i entendre com interactues amb la web. Pots acceptar directament o accedir a més informació per a configurar o rebutjar el seu ús.",
    policyLink: "Política de galetes",
    acceptAll: "Acceptar",
    reject: "Rebutjar",
    rejectAll: "Rebutjar totes",
    configure: "Configurar galetes",
    moreInfo: "Veure més informació",
    back: "Tornar",
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
        text: "Els formularis i sol·licituds gestionen la informació de manera segura sense carregar scripts externs innecessaris. reCAPTCHA només se sol·licita en enviar el formulari si està configurat, com a mesura de seguretat contra abús.",
      },
      {
        title: "Canviar la teua elecció",
        text: "Pots tornar a obrir el panell des de l'enllaç permanent del peu de pàgina. Rebutjar és tan senzill com acceptar.",
      },
    ],
  },
  professionalsPage: professionalsVa,
  pastLivesPage: pastLivesVa,
  qrPage: qrContentVa,
  ...servicesVa,
};

const en: Dict = {
  brand: "María A. Cabo",
  tagline: "Therapy and personal development",
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
      "Therapeutic support and personal development for adults seeking real change: habits, calm, deep restorative sleep and confidence. With scientific grounding, warmth and clear expectations.",
    pillars: [
      {
        title: "Evidence and rigor",
        text: "Focused attention and Ericksonian approach with scientific and neurobiological grounding, without myths or false claims.",
      },
      {
        title: "Ericksonian approach",
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
      "A guide to personal-development goals that can be explored in sessions, always through a non-clinical approach.",
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
    finalText:
      "Request your free 15-minute consultation or send me a message to discuss your situation with no obligation.",
    finalSecondary: "I have a question before getting started",
    heroEyebrow: "THERAPY & PERSONAL DEVELOPMENT · VALENCIA & SUECA",
    heroTitle1: "CHANGE",
    heroTitle2: "WHAT NO LONGER SERVES YOU.",
    heroIntro:
      "Individual sessions of therapy and personal development focused on habit change, managing everyday stress and anxiety, insomnia and personal confidence. In-person room in Sueca (Centro Sanar), home visits in Valencia city, and online.",
    heroPrimary: "FREE 15-MIN CONSULTATION",
    heroSecondary: "CHAT VIA WHATSAPP",
    heroHow: "Learn how the process works step-by-step →",
    heroImageAlt: "Natural photograph in a therapeutic setting",
    changeEyebrow: "INDIVIDUAL SUPPORT",
    changeTitle: "WHAT WOULD YOU LIKE TO CHANGE?",
    changeCards: [
      {
        title: "EVERYDAY ANXIETY & STRESS",
        text: "Deactivate the nervous system's alert state, soothe somatic tension, and restore calm in daily life.",
        slug: "/ansiedad",
        cta: "Explore anxiety management",
      },
      {
        title: "REST & INSOMNIA",
        text: "Quiet nighttime rumination and anxiety, settle racing thoughts, and regain deep, natural sleep.",
        slug: "/insomnio",
        cta: "Explore insomnia & rest",
      },
      {
        title: "QUIT SMOKING",
        text: "Overcome tobacco withdrawal syndrome and nicotine craving without exhausting battles of willpower.",
        slug: "/dejar-de-fumar",
        cta: "Explore stop smoking programme",
      },
      {
        title: "FEARS & PHOBIAS",
        text: "Hypnosis for phobias: fear of flying, motorway driving (amaxophobia), needles or claustrophobia with gentle desensitization.",
        slug: "/miedos-y-fobias",
        cta: "Explore fears & phobias",
      },
      {
        title: "SELF-ESTEEM & CONFIDENCE",
        text: "Overcome low self-esteem, boost genuine self-trust, silence imposter feelings, and speak up with confidence.",
        slug: "/autoestima-y-confianza",
        cta: "Explore confidence",
      },
      {
        title: "WEIGHT CONTROL",
        text: "Calm emotional hunger and stress-induced snacking, restore biological satiety, and reconnect with your body.",
        slug: "/control-de-peso",
        cta: "Explore weight control",
      },
      {
        title: "NERVOUS HABITS",
        text: "Nail biting (onychophagia), daytime teeth clenching or skin picking: retrain subconscious motor tension reflexes.",
        slug: "/habitos-nerviosos",
        cta: "Explore nervous habits",
      },
      {
        title: "SPORTS & PEAK PERFORMANCE",
        text: "Sports hypnosis: access flow state, maintain composure under competition pressure, and enhance mental recovery.",
        slug: "/deporte-y-motivacion",
        cta: "Explore sports hypnosis",
      },
      {
        title: "STUDY & CONCENTRATION",
        text: "Preparation for competitive exams and university milestones: sustained focus, peak cognitive absorption, and exam-day calm.",
        slug: "/concentracion-y-foco",
        cta: "Explore focus & study",
      },
    ],
    changeLink: "EXPLORE ALL THERAPY AREAS",
    hypnosisEyebrow: "METHOD & EVIDENCE",
    hypnosisTitle: "ERICKSONIAN HYPNOSIS & NEUROSCIENCE: RIGOR, CALM AND DEEP CHANGE.",
    hypnosisText1:
      "The Ericksonian approach is an evidence-based therapeutic process that uses focused attention and somatic relaxation to produce solid, lasting results over the long term. Supported by modern neuroscience, it addresses the root of automatic habits, physical stress responses, and behavioral patterns that willpower alone cannot resolve.",
    hypnosisText2:
      "During each session, we guide a state of deep relaxation that helps your nervous system settle and internalize the breakthroughs and progress achieved. Through this therapeutic process, no external formulas or quick fixes are imposed: we activate your own internal resources to learn to respond with calm in stressful or blocked situations, with complete professional rigor.",
    hypnosisLink: "HOW THE PROCESS WORKS",
    hypnosisImageAlt: "Photograph of a calm session",
    contextsTitle: "CARE MODALITIES: INDIVIDUAL & ORGANISATIONS",
    individualTitle: "INDIVIDUAL SESSIONS",
    individualText:
      "Personalized care for habits, rest, phobias, anxiety, sports and confidence. In Sueca (Centro Sanar), home visits in Valencia city, or online.",
    individualLink: "VIEW SESSIONS & FEES",
    companiesTitle: "PROGRAMMES FOR TEAMS & COMPANIES",
    companiesText:
      "Practical workshops and corporate training: mental focus, pressure management, high-stakes presentations, and executive wellbeing.",
    companiesLink: "SOLUTIONS FOR ORGANISATIONS",
    processEyebrow: "THE 3-STEP PROCESS",
    processTitle: "A TRANSPARENT, RIGOROUS JOURNEY WITHOUT DEPENDENCIES.",
    processSteps: [
      {
        title: "1 · FREE 15-MIN PRELIMINARY CALL",
        text: "We speak by phone or video call with no cost or obligation. We evaluate your situation honestly and answer all questions.",
      },
      {
        title: "2 · INDIVIDUAL THERAPY SESSION",
        text: "Personalized 60-minute sessions in Sueca (Centro Sanar), home visits in Valencia city, or live online video call.",
      },
      {
        title: "3 · INTEGRATION & AUTONOMY",
        text: "We consolidate breakthroughs with somatic practices between sessions for lasting, resilient change at your own pace.",
      },
    ],
    aboutEyebrow: "MARÍA CABO",
    aboutTitle: "A GROUNDED, RIGOROUS APPROACH TO FACILITATING CHANGE.",
    aboutText:
      "My work stems from a simple reality: often we know rationally what we want to do, yet our body and automatic mind react otherwise. Trained at the Instituto Erickson Madrid, I use these tools to address those deeper automatic patterns, enabling lasting, reliable change with safety, warmth, and professional rigor.",
    aboutLink: "ABOUT ME",
    aboutImageAlt: "María A. Cabo",
    eventsTitle: "EVENTS",
    eventsLink: "VIEW EVENTS",
    eventsEmpty: "New dates coming soon.",
    learnTitle: "LEARN",
    learnLink: "VIEW ALL ARTICLES",
    faqHomeTitle: "ANSWERING QUESTIONS",
    faqHomeLink: "VIEW FAQs",
    testimonialsEyebrow: "REAL EXPERIENCES",
    testimonialsTitle: "STORIES OF CHANGE & WELLBEING",
    testimonialsSubtitle:
      "Warm, grounded, and evidence-based support in Sueca, Valencia and online.",
    testimonials: [
      {
        quote:
          "I had smoked almost a pack a day for over 20 years. María's non-judgmental attitude and working on unconscious triggers allowed me to quit without the constant dread of previous attempts. The 3-session program paid for itself in six weeks.",
        author: "J. M., 46",
        service: "Smoking cessation",
        location: "Sueca",
      },
      {
        quote:
          "I had severe dread around work presentations and highway driving. Learning to turn down somatic alarm and restore calm in session has been an absolute turning point in my daily routine.",
        author: "Carmen R., 38",
        service: "Everyday anxiety & fears",
        location: "Valencia",
      },
      {
        quote:
          "I was waking up at 3 AM almost every night with my thoughts racing. Through our sessions and tailored audio recordings, I learned to slow down internal agitation and returned to deep, uninterrupted sleep.",
        author: "Vicente S., 52",
        service: "Insomnia & restful sleep",
        location: "Cullera",
      },
      {
        quote:
          "I had an involuntary habit of nail biting and jaw clenching while working at my computer. Within a few weeks we deactivated that tension reflex, and I now feel grounded and calm.",
        author: "Laura G., 31",
        service: "Nervous habits & tension",
        location: "Alzira",
      },
    ],
    consultationEyebrow: "ZERO-COMMITMENT APPRAISAL",
    consultationTitle: "WONDERING IF THIS APPROACH IS THE RIGHT FIT FOR YOU?",
    consultationSubtitle:
      "Let's start with a free 15-minute phone or video consultation. No cost, no obligation, and zero sales pressure.",
    consultationPoints: [
      "15 minutes focused on your situation and what you want to change.",
      "Honest assessment: we evaluate together whether this therapeutic support is suitable for your goals.",
      "You decide comfortably after our talk, with zero upfront obligation.",
    ],
    consultationCtaPrimary: "REQUEST FREE 15-MIN CONSULTATION",
    consultationCtaWhatsApp: "CHAT VIA WHATSAPP",
    ctaTitle: "CHANGE CAN START WITH A CONVERSATION.",
    ctaPrimary: "REQUEST FREE 15-MIN CONSULTATION",
    ctaSecondary: "CHAT VIA WHATSAPP",
    ctaCompanies: "Representing an organisation? Explore our solutions →",
  },
  companiesPage: {
    seoTitle: "Professional Development Programmes for Organisations · María A. Cabo",
    seoDescription:
      "Workshops and programmes focusing on focus, confidence, learning, habits and mental preparation for high-demand professional environments.",
    heroTitle: "PROFESSIONAL DEVELOPMENT",
    heroLead: "Focus, confidence, learning and habit change applied to the workplace.",
    heroText:
      "I design workshops and programmes using nervous system regulation, focused attention and pattern-shifting tools to help individuals work more consciously through pressure, distraction, self-doubt or mental blocks.",
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
      "All work is strictly based on the employee's genuine consent. These sessions are never used to alter someone's values, personality, or opinions, nor to induce unwanted behaviours. On the contrary, it is a tool designed to help individuals respond with greater calm and effectiveness to automatic reactions, emotions, or habits they themselves wish to change.",
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
        text: "Clarifying how the method works, what to expect, and what does not happen during sessions.",
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
    successTitle: "Inquiry received!",
    sendAnother: "Send another inquiry",
    serverError: "Could not connect to server. You can send it directly by email:",
    asideDirectHelp: "Prefer a direct, informal conversation?",
    asideWhatsApp: "Enquire via WhatsApp",
  },
  smokingPage: {
    seoTitle: "Quit Smoking Programme in Sueca & Valencia · María A. Cabo",
    seoDescription:
      "Structured 3-session programme to stop smoking permanently in Sueca (Valencia) and home visits in Valencia. Request your free 15-minute consultation.",
    eyebrow: "STOP SMOKING PROGRAMME",
    title: "PROGRAMME TO QUIT SMOKING",
    subtitle:
      "A structured journey to change automatic habits, disable daily triggers and sustain your decision calmly.",
    introText:
      "Smoking is rarely a conscious choice: it operates through automated neural loops built over years. With Ericksonian hypnosis and somatic relaxation techniques, we work directly on that subconscious mechanism to soothe tobacco withdrawal syndrome and defuse nicotine anxiety, so that quitting does not feel like an exhausting battle of willpower.",
    ctaPrimary: "REQUEST INITIAL CONSULTATION",
    ctaSecondary: "HOW THE PROGRAMME WORKS",
    trustBadges: [
      "Free 15-minute preliminary assessment consultation",
      "Sueca (Centro Sanar) & home visits in Valencia city",
      "Structured 3-session programme · €300 (all-inclusive)",
    ],
    whyTitle: 'WHY "WILLPOWER" ALONE IS RARELY ENOUGH',
    whyParagraphs: [
      "Most people who want to quit smoking know exactly why they should: health, finances, freedom, smell. However, the moment stress strikes, morning coffee arrives, or friends gather around a table, the subconscious triggers the automatic urge before rational thinking intervenes.",
      "The problem is not a lack of willpower or character. The problem is that the smoking habit is sustained by deep neural associations that fire automatically. Relying solely on constant willpower creates tension, irritability and intense nicotine anxiety.",
      "Through an applied therapeutic approach integrating focused attention and Ericksonian hypnosis, we intervene at the subconscious level where those automatisms originate. This alleviates physical and psychological tobacco withdrawal syndrome, disconnects the associations linking smoking to calm or reward, and replaces them with your own natural states of ease, achieving solid, long-term results without constant battles of willpower.",
    ],
    programTitle: "PROGRAMME STRUCTURE (3 SESSIONS)",
    programIntro:
      "A clear process with a beginning and an end, designed to foster your long-term independence.",
    steps: [
      {
        num: "01",
        title: "15-MINUTE INITIAL CONSULTATION",
        badge: "Free & no obligation",
        text: "We speak by phone or video call to understand your smoking history, personal motivations and answer any questions before beginning.",
      },
      {
        num: "02",
        title: "SESSION 1 · THE TURNING POINT",
        badge: "Sueca or home visit (75 min)",
        text: "We address your personal drivers in depth, neutralise everyday triggers and establish your new identity as a non-smoker.",
      },
      {
        num: "03",
        title: "SESSION 2 · CONSOLIDATION & CALMA",
        badge: "Sueca or home visit (60 min)",
        text: "We review your first smoke-free days, reinforce positive sensations, navigate potential tension spikes and anchor new habits.",
      },
      {
        num: "04",
        title: "SESSION 3 · LONG-TERM RESILIENCE",
        badge: "Sueca or home visit (60 min)",
        text: "Future-pacing for social events or unforeseen stress, prevention tools and concluding the process with complete autonomy.",
      },
    ],
    includedTitle: "WHAT IS INCLUDED",
    includedItems: [
      "Free 15-minute preliminary assessment consultation.",
      "3 intensive individual sessions (in Sueca or home visits in Valencia).",
      "Personalised audio reinforcement recording to listen to at home.",
      "Support and follow-up between sessions.",
      "Breathing and self-regulation tools for situational stress.",
    ],
    price: "€300",
    priceNote: "All-inclusive price covering the three sessions and all supplementary materials.",
    formEyebrow: "INITIAL CONSULTATION",
    formTitle: "REQUEST YOUR FREE 15-MINUTE CALL",
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
        a: "The programme is designed for the shift in habit to occur in the first in-person working session. The preliminary consultation ensures you arrive prepared and committed, while sessions 2 and 3 focus on consolidating the new patterns, defusing daily triggers, and anchoring long-term calm without a constant struggle.",
      },
      {
        q: "Will I experience nicotine anxiety or unbearable tobacco withdrawal symptoms?",
        a: "Ericksonian hypnosis and somatic relaxation act directly on the autonomic nervous system to defuse nicotine anxiety and soothe tobacco withdrawal syndrome in Valencia and Sueca. Physical withdrawal clears in a few days; the real challenge is the subconscious association. By retraining automated cues, providing physical calm anchors, and offering a personalized audio recording, you navigate the initial days with steady ease and without feelings of deprivation.",
      },
      {
        q: "Will I gain weight when quitting smoking with hypnosis?",
        a: "When quitting smoking solely through willpower, unaddressed anxiety often gets channeled into compulsive snacking. In our sessions, we address the root of nicotine anxiety, ensuring you don't feel the need to compensate with food for something you no longer miss.",
      },
      {
        q: "What if it does not work or I have doubts?",
        a: "That is precisely why we hold the free 15-minute preliminary interview: to assess your situation honestly. If it is not the right moment or approach, I will tell you with complete transparency.",
      },
      {
        q: "Where do sessions take place in Valencia and Sueca?",
        a: "In-person sessions take place at my private consultation room inside Centro Sanar in Sueca (Valencia) or at private homes in Valencia city (travel supplement applies depending on area). The 15-minute preliminary consultation is conducted comfortably by phone or video call.",
      },
      {
        q: "Why a 3-session programme instead of promising a miracle in a single hour?",
        a: "We do not believe in unrealistic one-hour miracle promises. Smoking is a multifaceted habit linked to varied daily triggers (coffee, workplace stress, social settings). The first session creates the clear turning point and disconnection from tobacco, while subsequent sessions consolidate somatic stability, prevent relapse during unexpected stress, and equip you with self-regulation and breathing tools for lasting independence.",
      },
    ],
    savingsTitle: "HOW MUCH DOES CONTINUING TO SMOKE COST YOU?",
    savingsSubtitle:
      "The program is not an expense: it pays for itself in just six weeks, and from month two you save thousands of euros.",
    savingsCards: [
      {
        consumption: "Half pack / day",
        cigs: "10 cigarettes a day",
        badge: "Moderate consumption",
        monthlyCost: "~€85 / month",
        yearlyCost: "~€1,020 / year",
        amortization: "Pays off in 3.5 months",
        netYearOne: "Year 1 net savings: +€720",
      },
      {
        consumption: "1 pack / day",
        cigs: "20 cigarettes a day",
        badge: "Most common case",
        monthlyCost: "~€170 / month",
        yearlyCost: "~€2,040 / year",
        amortization: "Pays off in just 53 days",
        netYearOne: "Year 1 net savings: +€1,740",
      },
      {
        consumption: "1.5 packs / day",
        cigs: "30 cigarettes a day",
        badge: "Heavy consumption",
        monthlyCost: "~€255 / month",
        yearlyCost: "~€3,060 / year",
        amortization: "Pays off in just 35 days",
        netYearOne: "Year 1 net savings: +€2,760",
      },
    ],
    savingsNote: "Estimated calculation based on an average pack price of €5.60.",
    testimonialsTitle: "REAL EXPERIENCES OF CHANGE",
    testimonialsSubtitle:
      "People who chose to let go of tobacco and restore daily ease and freedom.",
    testimonials: [
      {
        quote:
          "I had smoked a pack a day for 22 years and tried patches and pills without success because I always relapsed at the first sign of stress. With María I realized smoking was an automatic shutdown response. In 3 sessions we reprogrammed that trigger, and I never felt the agonizing cravings I feared.",
        author: "J. M., 46",
        location: "Sueca",
        detail: "Non-smoker after 22 years of habit",
      },
      {
        quote:
          "What surprised me most was the zero-judgment approach. No moralizing lecture about health risks you already know. We worked directly on morning coffee and social dinners. Going out with friends without craving a cigarette felt like true freedom.",
        author: "Carmen B., 39",
        location: "Valencia",
        detail: "Smoke-free for 8 months",
      },
      {
        quote:
          "The financial math convinced me to give it a try. I was spending almost 200 euros a month. That money now stays in my account and I breathe easily when walking or climbing stairs. The free 15-minute consultation gave me complete peace of mind to begin.",
        author: "R. F., 51",
        location: "Cullera",
        detail: "Former smoker (25 cigarettes/day)",
      },
    ],
  },
  anxietyPage: {
    seoTitle: "Everyday Anxiety Management and Fears in Valencia & Sueca · María A. Cabo",
    seoDescription:
      "Learn to manage everyday anxiety, ease tension and work through fears (flying, driving, public speaking) in Sueca, Valencia and online. €70/session.",
    eyebrow: "THERAPY & PERSONAL DEVELOPMENT · VALENCIA & SUECA",
    eyebrowNav: "Anxiety Management & Fears",
    title: "MANAGE EVERYDAY ANXIETY, EASE TENSION AND WORK THROUGH FEARS",
    subtitle:
      "Learn to respond differently to situations that bring tension, worry or hesitation, helping your body return to calm.",
    introText:
      "Chest tightness, shallow breathing, a mind anticipating worries, or hesitation around flying, driving or public speaking. When stress and worry recur, the body reacts automatically before logic can intervene. Through a focused therapeutic approach producing solid long-term results, we intervene at that level of automatic responses: providing resources so your body remembers calm, you learn to respond with poise to tension triggers, and you establish your everyday peace with complete safety and autonomy.",
    ctaPrimary: "BOOK A SESSION OR ENQUIRE",
    ctaSecondary: "HOW THERAPY HELPS YOU",
    trustBadges: [
      "Evidence-based therapeutic support",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "Free 15-min consultation with no obligation",
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
        text: "Panic episodes, sensations of physical overwhelm, or cancelling plans and trips to avoid distress.",
      },
    ],
    whyTitle: "WHY TELLING YOURSELF TO 'JUST CALM DOWN' DOESN'T WORK",
    whyParagraphs: [
      "Most people experiencing anxiety already know rationally that their worries are magnified. The intellect understands, but the physiology doesn't obey: the heart races, breathing stays shallow, and muscles brace. Why?",
      "Because the anxiety response is generated by the autonomic nervous system (the sympathetic 'fight or flight' branch) — an ancient survival circuit that does not answer to logical self-talk. Trying to stop anxiety through sheer conscious willpower often leads to greater frustration and exhaustion.",
      "This therapy and personal development approach speaks the nervous system's native language: focused sensory attention and neuromuscular relaxation. By guiding you into deep stillness, we naturally engage the parasympathetic nervous system (the physiological brake on stress), teaching the body to quiet the alarm and building lasting neural pathways of composure that produce stable, long-term results.",
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
        title: "AUTONOMY & SOMATIC REGULATION",
        text: "You learn self-regulation and breathwork protocols to sustain your well-being in daily life, at your pace, without dependency.",
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
      "Self-regulation audio and practical daily exercises included.",
      "Free 15-minute preliminary consultation to assess your case.",
    ],
    formEyebrow: "ENQUIRY & BOOKING",
    formTitle: "TAKE THE FIRST STEP TOWARDS CALM",
    formSubtitle:
      "Fill out this brief form to ask any questions or request your session. If you prefer, we can hold a free 15-minute preliminary consultation by phone or WhatsApp to understand your situation with zero obligation.",
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
    faqTitle: "FREQUENTLY ASKED QUESTIONS ABOUT ANXIETY & FEAR REGULATION",
    faqs: [
      {
        q: "How exactly does therapy help reduce anxiety and phobias?",
        a: "Therapy addresses the neurobiology of fear and stress directly. While conscious rationalization often fails to quiet panic, in session we guide a state of deep relaxation that engages the parasympathetic nervous system, allowing the body to release muscle tension, steady breathing and physiologically internalize calm and new progress.",
      },
      {
        q: "What is experienced during a therapy session?",
        a: "During the session, we guide you into a state of deep relaxation that helps your nervous system settle and integrate the progress made. You remain fully conscious throughout: you can hear my voice, speak, move, and participate naturally while your body and mind absorb new, calming patterns.",
      },
      {
        q: "How many sessions are typically needed?",
        a: "Many clients experience a profound sense of lightness and physical relief from the very first session. Because there are no mandatory commitments, we evaluate progress together after each session, moving at your natural rhythm.",
      },
      {
        q: "Is it compatible with medication or medical care?",
        a: "Yes, it is entirely compatible as a supportive self-regulation discipline. Therapeutic support and personal development help you tap into natural internal resources. We do not perform clinical diagnoses of severe mental disorders, nor do we replace medical or psychiatric treatments prescribed by healthcare specialists.",
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
      "Our work is a therapeutic and personal development process grounded in neuroscience and focused attention. During each session, we guide deep relaxation that allows your nervous system to calm down and internalize the progress achieved, producing lasting shifts in your habits and emotional well-being.",
    stepsTitle: "The journey, step by step",
    steps: [
      {
        title: "1 · Initial conversation or free consultation (15 min)",
        text: "We talk about what you want to change, answer all your questions, and honestly explore whether this therapeutic process is right for you.",
      },
      {
        title: "2 · A concrete goal",
        text: "Together we define an observable, realistic goal, clarifying what depends on me and what depends on you.",
      },
      {
        title: "3 · The therapy session",
        text: "A guided, calm and fully consented process. You'll remember it and can stop whenever you wish.",
      },
      {
        title: "4 · Between sessions",
        text: "Small practices to sustain the change in daily life, without overloading your schedule.",
      },
    ],
    mythsTitle: "Myths and realities",
    myths: [
      "Deep relaxation helps your nervous system integrate change naturally and consciously.",
      "We do not perform clinical diagnoses of severe mental disorders.",
      "It does not replace medical or psychiatric care for severe pathologies.",
      "It is an active, structured process supported by scientific evidence.",
    ],
    safetyTitle: "Safety and clear boundaries",
    safetyText:
      "This service is for adults over 18. If your situation requires specialized medical or psychiatric care, I will tell you with complete clarity and professional honesty.",
    ctaTitle: "Wondering if this support is right for you?",
    ctaSubtitle:
      "Let's speak for 15 minutes by phone or WhatsApp with zero obligation. We'll explore your situation, answer questions, and discuss how we would approach your care.",
    ctaPrimary: "Request free 15-min consultation",
    ctaWhatsApp: "Message on WhatsApp",
  },
  areas: {
    title: "Therapeutic focus areas",
    intro:
      "Nine core areas where therapy and conscious Ericksonian hypnosis help reorganize automatic responses, overcome mental blocks, and approach life with calm and poise.",
    noticeTitle: "Professional rigor and ethical boundaries",
    notice:
      "Therapy and personal development sessions focus on personal change and emotional well-being. They do not replace medical, psychological, or psychiatric care for severe pathologies, nor do we perform clinical diagnoses of severe mental disorders. If your situation requires specialized medical or psychiatric care, we will guide you with complete transparency.",
    items: [
      {
        title: "Everyday anxiety and stress",
        text: "Deactivate the physiological alarm, soothe physical tension, and learn to respond with poise to stressful daily situations.",
        slug: "/ansiedad",
        cta: "Explore anxiety management",
      },
      {
        title: "Stress, calm, insomnia & nighttime anxiety",
        text: "Train deep somatic relaxation resources to quiet hypervigilance, calm nighttime rumination and restore deep, natural restorative sleep.",
        slug: "/insomnio",
        cta: "Explore therapy for insomnia",
      },
      {
        title: "Stopping smoking: withdrawal & nicotine anxiety",
        text: "A structured 3-session journey to overcome tobacco withdrawal syndrome, defuse daily triggers, and sustain life smoke-free.",
        slug: "/dejar-de-fumar",
        cta: "Explore stop smoking programme",
      },
      {
        title: "Hypnosis for fears and phobias",
        text: "Gentle systematic desensitization for fear of flying, motorway driving (amaxophobia), needles, claustrophobia, or public speaking.",
        slug: "/miedos-y-fobias",
        cta: "Explore hypnosis for phobias",
      },
      {
        title: "Low self-esteem and self-confidence",
        text: "Build grounded security, silence destructive self-criticism, overcome imposter syndrome, and set healthy boundaries with confidence.",
        slug: "/autoestima-y-confianza",
        cta: "Explore self-esteem & confidence",
      },
      {
        title: "Weight control and relationship with food",
        text: "Calm emotional hunger and stress-induced snacking, restoring genuine biological satiety without restrictive diets.",
        slug: "/control-de-peso",
        cta: "Explore weight control",
      },
      {
        title: "Nervous habits & nail biting",
        text: "Modify involuntary automatisms such as nail biting (onychophagia), daytime teeth clenching or skin picking through subconscious motor retraining.",
        slug: "/habitos-nerviosos",
        cta: "Explore nervous habits",
      },
      {
        title: "Hypnosis for sports and peak performance",
        text: "Cultivate flow state, subconscious motor visualization, competitive composure, and training consistency in Valencia and Castellón.",
        slug: "/deporte-y-motivacion",
        cta: "Explore sports hypnosis",
      },
      {
        title: "Focus, study and exams",
        text: "Prepare for competitive exams and demanding tests: sustained concentration, cognitive absorption, and pressure management.",
        slug: "/concentracion-y-foco",
        cta: "Explore focus & study",
      },
    ],
    closing:
      "If you are unsure whether this support is a good fit for you, write to me before requesting your session or book a free 15-minute consultation.",
    cta: "Ask a question",
  },
  sessions: {
    title: "Conscious hypnosis sessions and therapeutic support",
    intro:
      "Individual sessions of conscious Ericksonian hypnosis and personal development with María A. Cabo in Sueca (Centro Sanar), home visits in Valencia city, or online via live video call. Transparent rates, personalized attention, and no mandatory packages.",
    items: [
      {
        name: "Individual hypnosis & therapy session",
        price: "€70",
        unit: "per session (60 minutes)",
        text: "Individual and personalized session of conscious hypnosis and therapy to address anxiety, sleep & insomnia, fears or phobias, habit change, athletic performance, or personal confidence.",
        points: [
          "60-minute individual session with María A. Cabo",
          "In Sueca (Centro Sanar), home visits in Valencia city or online",
          "At your own pace (no mandatory packages or lock-ins)",
          "Free 15-min consultation with no obligation",
        ],
      },
      {
        name: "Stop-smoking programme",
        price: "€300",
        unit: "all-inclusive 3-session package",
        text: "Structured programme with clinical hypnosis techniques to overcome tobacco withdrawal syndrome and nicotine anxiety, defuse smoking triggers, and consolidate lasting freedom.",
        points: [
          "Three comprehensive, intensive sessions (Sueca, home visits or online)",
          "Personalised audio reinforcement recording for home practice",
          "Somatic calming tools for tension moments and close follow-up",
          "Free 15-min preliminary consultation",
        ],
      },
    ],
    policyTitle: "Before requesting your session",
    policy: [
      "Support designed for adults.",
      "If you're unsure whether this is right for you, write to me first or request a free 15-minute consultation.",
      "Changes and cancellations are agreed with reasonable notice.",
      "Times shown in mainland Spain time (Europe/Madrid).",
    ],
  },
  about: {
    title: "About me",
    name: "María A. Cabo",
    role: "Specialist in personal development and change processes",
    intro:
      "I am María Cabo, specialist in personal development and change processes. I support adults through a therapeutic approach focused on producing lasting results over the long term in habit change, stress and everyday anxiety regulation, overcoming fears, and building grounded confidence. I completed specialized training at the Instituto Erickson Madrid, with an approachable, rigorous, and respectful method.",
    traits: ["Warmth", "Ericksonian Training", "Practical tools"],
    highlights: [
      {
        title: "Instituto Erickson Madrid",
        text: "Specialized training at the Instituto Erickson Madrid.",
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
      "I believe in realistic expectations. This approach is a valuable tool for habits, attention and stress responses, but it doesn't solve everything and never replaces healthcare.",
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
    controlNote:
      "During each session, we facilitate deep relaxation that helps your nervous system settle and internalize the progress achieved.",
    statement:
      "My work is about supporting each person as they explore their patterns and offering tools to respond in ways that are more useful for them.",
    workEyebrow: "My way of working",
    workTitle: "Therapeutic support: a rigorous tool, not a magic formula.",
    workText:
      "I understand this work as a therapeutic process that utilizes focused attention to facilitate deep, sustainable change: observing automatic responses, activating the person's own inner resources, and consolidating new ways of responding to everyday situations with long-term, lasting results.",
    focusAreas: [
      {
        title: "Practical change",
        text: "Sessions focused on concrete goals, with resources that can be carried into real life.",
      },
      {
        title: "A conscious process",
        text: "You participate actively while deep relaxation allows your nervous system to assimilate and internalize the progress.",
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
      "Trained at the Instituto Erickson Madrid, one of Spain's leading reference institutions, I work with a model emphasizing each person's unconscious resources and prior learnings to develop more adaptive and lasting responses.",
      "Combining specialized training with international experience helps me understand that behind every goal lies a unique story, way of responding, and set of circumstances.",
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
        text: "A gathering to understand how smoking automatisms are maintained and how change can be supported towards smoke-free living.",
        ctaText: "Book spot via WhatsApp",
        whatsappMessage:
          "Hello Maria, I would like to inquire or reserve a spot for the Smoking session in Sueca (Centro Sanar).",
      },
      {
        dateISO: "2026-09-21",
        date: "21 Sept",
        time: "18:00",
        title: "Anxiety, fears and phobias",
        text: "A calm introduction to attention, grounding and inner preparation for situations that create tension.",
        ctaText: "Book spot via WhatsApp",
        whatsappMessage:
          "Hello Maria, I would like to inquire or reserve a spot for the Anxiety, fears and phobias session in Sueca (Centro Sanar).",
      },
      {
        dateISO: "2026-09-28",
        date: "28 Sept",
        time: "18:00",
        title: "Study and exams",
        text: "A group session to explore focus, confidence and mental rehearsal before academic challenges or important tests.",
        ctaText: "Book spot via WhatsApp",
        whatsappMessage:
          "Hello Maria, I would like to inquire or reserve a spot for the Study and exams session in Sueca (Centro Sanar).",
      },
      {
        dateISO: "2026-10-05",
        date: "5 Oct",
        time: "18:00",
        title: "Habits and weight management",
        text: "A space to talk about motivation, repetition and everyday routines from a non-clinical perspective.",
        ctaText: "Book spot via WhatsApp",
        whatsappMessage:
          "Hello Maria, I would like to inquire or reserve a spot for the Habits and weight management session in Sueca (Centro Sanar).",
      },
      {
        dateISO: "2026-10-24",
        date: "24 Oct",
        time: "10:00–11:30",
        title: "Practical Calm · Experiential workshop",
        badge: "Group workshop · 15 €",
        place: "Cullera · Sat Nam Yoga",
        text: "What if you learned to live in calm? Come and experience it. An experiential group workshop to explore, play and discover practical resources for serenity. Limited spots.",
        ctaText: "Book spot via WhatsApp",
        whatsappMessage:
          "Hello Maria, I would like to reserve a spot for the Practical Calm workshop in Cullera (Sat Nam Yoga).",
      },
      {
        dateISO: "2026-11-08",
        date: "8 Nov",
        time: "10:00–11:30",
        title: "Learn to love without losing yourself · Practical workshop",
        badge: "Group workshop · 15 €",
        place: "Cullera · Sat Nam Yoga",
        text: "Understand and experience how to connect and relate without losing your own center, space and well-being. A hands-on group workshop to cultivate healthy, mindful relationships. Limited spots.",
        ctaText: "Book spot via WhatsApp",
        whatsappMessage:
          "Hello Maria, I would like to reserve a spot for the 'Learn to love without losing yourself' workshop on Sunday, November 8th in Cullera (Sat Nam Yoga).",
      },
      {
        dateISO: "2026-11-22",
        date: "22 Nov",
        time: "10:00–11:30",
        title: "Practical Calm · Practical workshop",
        badge: "Group workshop · 15 €",
        place: "Cullera · Sat Nam Yoga",
        text: "What if you learned to live in calm? Come and experience it. A hands-on group workshop to explore, understand and experience tools to manage stress and cultivate calm. Limited spots.",
        ctaText: "Book spot via WhatsApp",
        whatsappMessage:
          "Hello Maria, I would like to reserve a spot for the Practical Calm workshop on Sunday, November 22nd in Cullera (Sat Nam Yoga).",
      },
    ],
    empty: "There are no open dates right now.",
    emptyText:
      "The workshop calendar is being prepared. Write to me if you'd like to hear when dates are published.",
    cta: "Reserve spot via WhatsApp",
  },
  journal: {
    title: "Blog",
    intro:
      "Short pieces to better understand personal change, habits and emotional well-being. Never diagnoses or prescriptions.",
    posts: [
      {
        slug: "hipnosis-y-fobias-aprender-una-respuesta-diferente",
        title: "Therapy and phobias: learning a different response",
        excerpt:
          "A phobia can feel like an automatic reaction. Therapy allows us to work with that more automatic part of the experience.",
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
        title: "Therapy and anxiety: learning a different response",
        excerpt:
          "Therapy can offer a different context for working with attention, imagination and learned responses.",
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
        title: "What is a therapy and coaching session like?",
        excerpt:
          "A session is a collaborative space where deep relaxation allows your nervous system to integrate progress naturally.",
      },
      {
        slug: "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
        title: "Therapy and habit change: how can it help?",
        excerpt:
          "Therapy does not erase a habit. It can help us rehearse and strengthen new ways of responding.",
      },
      {
        slug: "por-que-cuesta-cambiar-un-habito",
        title: "Why is changing a habit so hard?",
        excerpt:
          "Because knowing what we want to do and actually doing it are not always the same thing.",
      },
      {
        slug: "que-ocurre-en-el-cerebro-durante-la-hipnosis",
        title: "What happens in the brain during focused states?",
        excerpt:
          "Science has observed changes in attention and communication between brain networks, without switching off rational thought.",
      },
      {
        slug: "que-es-la-hipnosis",
        title: "What is this focused attention approach, really?",
        excerpt:
          "A state of focused attention and deep relaxation that enables the nervous system to assimilate and internalize new patterns of well-being.",
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
        title: "Understanding change and the brain",
        description:
          "An ordered introduction to personal change, the brain, habits and what a session can be like.",
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
        q: "What is experienced during a therapy session?",
        a: "During each session, we guide you into a state of deep relaxation while you remain fully aware. This calm state allows your nervous system to de-escalate alert responses and organically internalize the progress and tools explored, in total comfort and safety.",
      },
      {
        q: "What is the scientific backing and evidence for this therapeutic approach?",
        a: "It is a structured therapeutic procedure backed by neuroscience and medicine. It utilizes focused attention and deep somatic relaxation to modulate brain activity and intervene in automatic reactions, stress, and learned habits, producing effective, lasting results over the long term.",
      },
      {
        q: "How does it differ from psychiatric treatment or diagnosis?",
        a: "This therapeutic approach and personal development are serious tools focused on personal change, emotional well-being, and overcoming blocks. We do not perform clinical diagnoses of severe mental disorders, nor do we replace medical or psychiatric care when required.",
      },
      {
        q: "How many sessions will I need?",
        a: "It depends on your goal and pace. Many people work with individual sessions for specific goals; the quit-smoking programme is structured into three sessions.",
      },
      {
        q: "What if I think I cannot relax or focus easily?",
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
    ctaTitle: "Have another question or want to assess your situation?",
    ctaSubtitle:
      "You can request a free 15-minute preliminary consultation with zero obligation or message me directly.",
  },
  contact: {
    title: "Contact",
    intro:
      "If you have a question before requesting a session or would like to request a free 15-minute preliminary consultation (by phone or video call, with no obligation), drop me a line and I will reply promptly.",
    calloutTitle: "Free 15-minute preliminary consultation",
    calloutText:
      "You can use this form to ask any questions or request a free 15-minute phone call. We will honestly explore your situation before scheduling any session.",
    phone: "Phone",
    name: "Name",
    email: "Email",
    message: "Your message",
    consent: "I have read and accept the privacy policy.",
    send: "Send message",
    sent: "Thank you, your message has been received. I'll reply shortly.",
    note: "Send your message and I'll reply shortly to coordinate your session or answer your questions.",
    infoTitle: "Details",
    area: "Sueca (Centro Sanar) · In-person & online sessions",
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
        text: "Site owner: María A. Cabo. Contact: maria.a.cabo@gmail.com. Activity: personal development and therapeutic change processes, with in-person sessions in Sueca in an independent practice within Centro Sanar. The content published on this website is informational and does not constitute healthcare, psychological, medical or legal advice.",
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
        text: "The website may rely on technical providers for hosting, analytics, anti-spam protection, forms and message delivery or logging: Vercel, Google Analytics with consent, Google reCAPTCHA when active, Google Sheets if used as an internal record and SendGrid if used for email delivery. These providers process data only to the extent necessary to provide their services.",
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
      "María A. Cabo · Therapy and personal development. Support focused on personal change and emotional well-being. Does not replace medical or psychiatric care for severe conditions.",
    legal: "Legal information",
    navigation: "Navigation",
    services: "Therapy areas",
    socialSubtitle: "Insights, mindset and daily practice",
  },
  common: {
    bookNow: "Request a session",
    bookSoon:
      "Request a free 15-minute introductory call or write to me if you prefer to ask a question.",
    bookIntro:
      "Request a free 15-minute introductory call or write to me if you prefer to ask a question.",
    contactMe: "Write to me",
    draft: "Placeholder content pending your final details.",
    bookCalendar: "Request 15-min call",
    smokeEmail: "I want to quit smoking",
    smokeEmailNote: "Send an email and we'll arrange a 15-minute interview.",
    askQuestionLink: "Questions before scheduling? Write to me directly →",
  },
  cookies: {
    bannerAriaLabel: "Cookie notice",
    bannerTitle: "Cookie use",
    bannerText:
      "We use necessary technical cookies for the website to function and, only if authorized, Google Analytics to anonymously analyze traffic and understand site usage. You can accept directly or view more information to configure or reject their use.",
    policyLink: "Cookie policy",
    acceptAll: "Accept",
    reject: "Reject",
    rejectAll: "Reject all",
    configure: "Configure cookies",
    moreInfo: "More information",
    back: "Back",
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
        text: "Forms and requests handle information securely without loading unnecessary external scripts. reCAPTCHA is only requested when submitting a form, if configured, as a security measure against abuse.",
      },
      {
        title: "Change your choice",
        text: "You can reopen the panel from the permanent link in the footer. Rejecting is just as simple as accepting.",
      },
    ],
  },
  professionalsPage: professionalsEn,
  pastLivesPage: pastLivesEn,
  qrPage: qrContentEn,
  ...servicesEn,
};

export const dictionaries: Record<Lang, Dict> = { es, va, en };
