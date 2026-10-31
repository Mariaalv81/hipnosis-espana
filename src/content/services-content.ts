import type { ServiceLandingPageData } from "@/components/service-landing-page";

export interface ServicesDictionary {
  weightPage: ServiceLandingPageData;
  nervousHabitsPage: ServiceLandingPageData;
  sportsPage: ServiceLandingPageData;
  fearsPage: ServiceLandingPageData;
  confidencePage: ServiceLandingPageData;
  focusPage: ServiceLandingPageData;
  insomniaPage: ServiceLandingPageData;
}

export const servicesEs: ServicesDictionary = {
  weightPage: {
    eyebrow: "RELACIÓN SANA CON LA COMIDA · TERAPIA EN SUECA Y VALENCIA",
    title: "CONTROL DE PESO: CALMAR EL HAMBRE EMOCIONAL Y RECONECTAR CON TU CUERPO",
    subtitle:
      "Comer compulsivamente no es falta de voluntad; es una respuesta automática del sistema nervioso ante el estrés, el aburrimiento o el vacío emocional.",
    introText:
      "¿Cuántas veces has empezado una dieta estricta prometiéndote que esta vez sería diferente, solo para terminar picoteando por la noche con una enorme sensación de culpa? Cuando la comida se convierte en la única válvula de escape contra la tensión diaria, forzarte a no comer solo genera obsesión. Mediante un proceso terapéutico focalizado en producir resultados duraderos a largo plazo, intervenimos en el origen automático del impulso: calmamos el ansia por dulces o ultraprocesados, restauramos la señal biológica de saciedad y te ayudamos a construir una relación tranquila, libre y definitiva con tu cuerpo.",
    trustBadges: [
      "Sin dietas restrictivas ni efecto rebote",
      "Acompañamiento terapéutico para resultados a largo plazo",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Valoración previa de 15 min sin compromiso · 70 €/sesión",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA TERAPIA",
    symptomsTitle: "PATRONES COMUNES EN EL COMER EMOCIONAL",
    symptomsSubtitle:
      "El problema no es que no sepas qué comer; el problema es que el cuerpo busca comida en piloto automático.",
    symptoms: [
      {
        title: "Picoteo inconsciente por estrés",
        text: "Abres la nevera sin hambre física real, especialmente al llegar a casa por la tarde o tras un día agotador.",
      },
      {
        title: "Ansiedad por dulces o procesados",
        text: "Necesidad imperiosa e inmediata de azúcar o carbohidratos como recompensa, consuelo o válvula de escape rápida.",
      },
      {
        title: "Comer deprisa y con culpa posterior",
        text: "Comer desconectado/a de las señales corporales, terminando con pesadez estomacal y un fuerte sentimiento de arrepentimiento.",
      },
      {
        title: "El bucle infinito de las dietas",
        text: "Pasar de la restricción extrema al abandono total, viviendo en una constante batalla mental y obsesiva con la báscula.",
      },
    ],
    symptomsNote:
      "El hambre física se calma en el estómago; el hambre emocional busca calmarse en la mente. La terapia enseña a tu sistema nervioso a regularse sin necesitar la comida como refugio.",
    whyTitle: "¿POR QUÉ LAS DIETAS TRADICIONALES FALLAN CUANDO HAY ANSIEDAD?",
    whyParagraphs: [
      "Las dietas se centran exclusivamente en qué y cuánto pones en el plato, pero ignoran por qué abres la nevera en primer lugar. Si utilizas la comida para calmar el estrés, la soledad o el agotamiento, retirar la comida por la fuerza deja a tu sistema nervioso sin su mecanismo habitual de consuelo, provocando que tarde o temprano aparezca el desbordamiento.",
      "La comida rica en azúcares y grasas estimula intensamente los circuitos de recompensa y dopamina del cerebro. Cuando repites esa asociación durante meses o años, se crea un carril neuronal automático que se activa antes de que tu mente racional pueda intervenir.",
      "Este abordaje terapéutico riguroso actúa sobre esos patrones subcorticales automáticos. Te permite sentir saciedad antes, disfrutar de porciones adecuadas sin esfuerzo, saborear conscientemente y desvincular el alivio emocional del acto de comer, logrando una regulación natural, saludable y duradera a largo plazo.",
    ],
    pillarsTitle: "CÓMO TRABAJAMOS EL CONTROL DE PESO",
    pillarsIntro:
      "Un proceso respetuoso en cuatro etapas para transformar tu relación con la alimentación y tu cuerpo.",
    steps: [
      {
        num: "01",
        badge: "EXPLORACIÓN",
        title: "Mapa de disparadores emocionales",
        text: "Identificamos con precisión los momentos, emociones y contextos del día a día que activan la necesidad compulsiva de comer.",
      },
      {
        num: "02",
        badge: "DESACTIVACIÓN",
        title: "Reducción del impulso y la urgencia",
        text: "Desactivamos la carga dopaminérgica hacia alimentos detonantes y eliminamos la sensación de privación o prohibición.",
      },
      {
        num: "03",
        badge: "RECONEXIÓN",
        title: "Señales corporales y saciedad real",
        text: "Entrenamos a tu cuerpo para percibir y respetar las señales biológicas de plenitud, disfrutando de porciones naturales sin esfuerzo.",
      },
      {
        num: "04",
        badge: "AUTONOMÍA",
        title: "Hábitos sostenibles y calma interna",
        text: "Anclamos nuevas rutinas automáticas de autocuidado, movimiento y gestión emocional para consolidar el cambio a largo plazo.",
      },
    ],
    locationsTitle: "DÓNDE REALIZAMOS LAS SESIONES",
    locationsIntro:
      "Atención cercana y personalizada en Sueca, la comarca de la Ribera Baixa y Valencia ciudad:",
    locations: [
      {
        name: "Despacho en Sueca (Centro Sanar)",
        area: "Ribera Baixa",
        desc: "Espacio sereno, independiente y confidencial en Sueca. De muy fácil acceso para personas de Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara y El Perelló.",
      },
      {
        name: "A domicilio en Valencia ciudad",
        area: "Valencia capital y alrededores",
        desc: "Ideal si prefieres trabajar desde la comodidad, privacidad absoluta y tranquilidad de tu propio hogar en Valencia.",
      },
      {
        name: "Sesiones Online en directo",
        area: "Cualquier ubicación",
        desc: "Por videoconferencia individual en directo, con la misma eficacia y guiada paso a paso desde el espacio donde te sientas más cómodo/a.",
      },
    ],
    pricingTitle: "PRECIOS CLAROS Y CONDICIONES TRANSPARENTES",
    price: "70 €",
    priceUnit: "por sesión (1 hora)",
    priceNote: "A tu propio ritmo · Sin compromisos obligatorios",
    pricingFeatures: [
      "Sesión individual y personalizada de 60 minutos.",
      "Sueca (Centro Sanar), a domicilio en Valencia ciudad u online.",
      "A tu propio ritmo: sin paquetes obligatorios ni ataduras.",
      "Ejercicios prácticos y audios de apoyo entre sesiones.",
      "Valoración previa de 15 minutos sin compromiso para orientar tu caso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "DA EL PRIMER PASO HACIA UNA ALIMENTACIÓN EN PAZ",
    formSubtitle:
      "Rellena este breve formulario para consultar tus dudas o solicitar tu sesión. Si lo prefieres, podemos tener una valoración previa de 15 minutos por teléfono o WhatsApp para conocer tu situación sin ningún compromiso.",
    formFields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      modality: "Modalidad de atención preferida",
      specificDetail: "¿En qué momentos o situaciones notas más la ansiedad por la comida?",
      message: "¿Alguna duda o detalle que quieras comentar? (Opcional)",
      submit: "Enviar consulta / Solicitar sesión",
      submitting: "Enviando mensaje...",
      successTitle: "Mensaje recibido correctamente",
      successText:
        "Gracias por tu consulta. He recibido tus datos y te responderé en breve personalmente.",
      mailtoFallback:
        "Si ha habido un problema con el envío automático, puedes escribirme directamente:",
    },
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE EL CONTROL DE PESO",
    faqsSubtitle: "Respuestas claras a las dudas más habituales sobre el acompañamiento:",
    faqs: [
      {
        q: "¿Este acompañamiento para el control de peso sustituye a un nutricionista o médico?",
        a: "No. Mi trabajo es de desarrollo personal y gestión de patrones automáticos: ayuda a resolver el componente emocional y conductual que sabotea tu alimentación. Si necesitas pautas médicas o nutricionales clínicas, te animo a coordinarlo con profesionales sanitarios.",
      },
      {
        q: "¿Cómo se trabaja la saciedad temprana y la reducción del impulso?",
        a: "Utilizamos técnicas de visualización y regulación somática para recuperar la saciedad temprana y el respeto biológico a tu cuerpo, adaptadas a tu caso particular, para que te sientas satisfecho/a con menor cantidad de comida de forma completamente natural.",
      },
      {
        q: "¿En cuántas sesiones se suele notar el cambio?",
        a: "Desde la primera o segunda sesión se suele notar un cambio radical en la calma frente al picoteo y la velocidad al comer. Habitualmente se realizan entre 3 y 5 sesiones espaciadas según tu evolución, sin paquetes obligatorios.",
      },
      {
        q: "¿Realizas sesiones en Sueca, la Ribera Baixa y Valencia?",
        a: "Sí. Atiendo presencialmente en mi despacho del Centro Sanar en Sueca (muy accesible desde Cullera, Alzira, Algemesí, Sollana, etc.), a domicilio en casas de particulares en Valencia ciudad para mayor comodidad, y en formato online para cualquier ubicación.",
      },
    ],
  },

  nervousHabitsPage: {
    eyebrow: "DESACTIVAR AUTOMATISMOS · TERAPIA EN SUECA Y VALENCIA",
    title:
      "DEJAR DE MORDERSE LAS UÑAS Y SUPERAR HÁBITOS NERVIOSOS: REENTRENAR RESPUESTAS AUTOMÁTICAS",
    subtitle:
      "La onicofagia y los gestos compulsivos no son 'malas costumbres': son válvulas de escape automáticas ante la tensión involuntaria.",
    introText:
      "Llevarte las manos a la boca mientras conduces, morderte las uñas y padrastros frente a la pantalla del ordenador, apretar los dientes o arrancarte pellejitos sin darte cuenta. Has probado esmaltes de sabor amargo, tiritas y propósitos conscientes, pero en cuanto tu atención se distrae, el cuerpo vuelve al mismo gesto. A través de la terapia focalizada en producir resultados duraderos a largo plazo, no forzamos la contención: enseñamos al cerebro a descargar la microtensión de forma fisiológica y reprogramamos el reflejo involuntario para que tus manos descansen tranquilas sin esfuerzo.",
    trustBadges: [
      "Eficaz donde la fuerza de voluntad ha fallado",
      "Acompañamiento terapéutico para resultados a largo plazo",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Valoración previa de 15 min sin compromiso · 70 €/sesión",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA TERAPIA",
    symptomsTitle: "HÁBITOS NERVIOSOS FRECUENTES",
    symptomsSubtitle:
      "Patrones repetitivos e involuntarios que se activan antes de que tu mente consciente pueda frenarlos.",
    symptoms: [
      {
        title: "Onicofagia automática",
        text: "Morderte las uñas y la piel de los dedos mientras miras una pantalla, lees o piensas, dándote cuenta solo cuando ya hay dolor o sangre.",
      },
      {
        title: "Vergüenza e incomodidad social",
        text: "Esconder las manos en reuniones, citas o fotos, sintiendo frustración constante por no poder lucir unas manos cuidadas y sanas.",
      },
      {
        title: "Bruxismo diurno y mandíbula apretada",
        text: "Apretar los dientes o tensar la mandíbula durante el día cuando estás concentrado/a, conduciendo o bajo presión.",
      },
      {
        title: "Otros tics y gestos compulsivos",
        text: "Tocarse repetidamente la cara, arrancarse cabellos (tricotilomanía leve), morderse las mejillas por dentro o pellizcarse la piel.",
      },
    ],
    symptomsNote:
      "Estos hábitos no son falta de fuerza de voluntad; son bucles senso-motores involuntarios que el cerebro automatizó para autorregular el sistema nervioso. El abordaje terapéutico sustituye ese bucle en la raíz.",
    whyTitle: "¿POR QUÉ LOS REMEDIOS CASEROS Y EL ESMALTE AMARGO NO FUNCIONAN?",
    whyParagraphs: [
      "Los esmaltes amargos o el esfuerzo consciente intentan corregir el problema en el último eslabón de la cadena: cuando la mano ya está en la boca. Pero el disparador ocurrió segundos antes en forma de micro-ansiedad, aburrimiento o necesidad de concentración profunda.",
      "Al frenar conscientemente el gesto, la tensión interna no se disuelve; de hecho, suele aumentar la inquietud, haciendo que el impulso regrese con más fuerza en cuanto baja la guardia racional.",
      "En sesión intervenimos en la fase de anticipación involuntaria mediante terapia focalizada: enseñamos al cuerpo a reconocer el impulso antes de que se ejecute la acción física y reentrenamos una respuesta refleja de serenidad y soltura motora con resultados estables a largo plazo.",
    ],
    pillarsTitle: "CÓMO ELIMINAMOS EL HÁBITO NERVIOSO",
    pillarsIntro:
      "Un proceso guiado para reprogramar la respuesta motora y devolver la calma a tu cuerpo.",
    steps: [
      {
        num: "01",
        badge: "DETECCIÓN",
        title: "Mapeo del detonante involuntario",
        text: "Identificamos qué estados emocionales o momentos del día disparan el gesto sin que te des cuenta.",
      },
      {
        num: "02",
        badge: "DESCONEXIÓN",
        title: "Reprogramación subconsciente",
        text: "Desvinculamos el alivio de la tensión del acto de morderse, pellizcarse o tocarse las manos compulsivamente.",
      },
      {
        num: "03",
        badge: "SUSTITUCIÓN",
        title: "Anclaje de respuesta sustituta",
        text: "Instalamos un reflejo somático de descarga neutra y agradable que mantiene tus manos relajadas, quietas y libres.",
      },
      {
        num: "04",
        badge: "CONSOLIDACIÓN",
        title: "Autonomía e imagen corporal",
        text: "Reforzamos la satisfacción y la tranquilidad de ver tus uñas crecer sanas y tu mandíbula completamente relajada.",
      },
    ],
    locationsTitle: "DÓNDE REALIZAMOS LAS SESIONES",
    locationsIntro:
      "Atención cercana en la comarca de la Ribera Baixa y Valencia ciudad, adaptada a tus preferencias:",
    locations: [
      {
        name: "Despacho en Sueca (Centro Sanar)",
        area: "Ribera Baixa",
        desc: "Espacio sereno, independiente y confidencial en Sueca. De muy fácil acceso para personas de Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara y El Perelló.",
      },
      {
        name: "A domicilio en Valencia ciudad",
        area: "Valencia capital y alrededores",
        desc: "Ideal si prefieres trabajar desde la comodidad y privacidad absoluta de tu propio hogar en Valencia.",
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
    priceNote: "A tu propio ritmo · Sin compromisos obligatorios",
    pricingFeatures: [
      "Sesión individual y personalizada de 60 minutos.",
      "Sueca (Centro Sanar), a domicilio en Valencia ciudad u online.",
      "A tu propio ritmo: sin paquetes obligatorios ni ataduras.",
      "Ejercicios de anclaje neuromuscular entre sesiones.",
      "Valoración previa de 15 minutos sin compromiso para orientar tu caso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "LIBÉRATE DEL HÁBITO Y RECUPERA TUS MANOS",
    formSubtitle:
      "Rellena este formulario para consultar tu caso o solicitar tu sesión. Si lo prefieres, podemos tener una valoración previa de 15 minutos por teléfono o WhatsApp sin ningún compromiso.",
    formFields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      modality: "Modalidad de atención preferida",
      specificDetail: "¿Qué hábito nervioso te gustaría eliminar y desde cuándo lo tienes?",
      message: "¿Alguna duda o detalle adicional que quieras comentar? (Opcional)",
      submit: "Enviar consulta / Solicitar sesión",
      submitting: "Enviando mensaje...",
      successTitle: "Mensaje recibido correctamente",
      successText:
        "Gracias por contactar. He recibido tu mensaje y te responderé personalmente a la mayor brevedad.",
      mailtoFallback:
        "Si ha habido un problema con el envío automático, puedes escribirme directamente:",
    },
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE HÁBITOS NERVIOSOS",
    faqsSubtitle: "Respuestas claras a dudas comunes sobre la terapia para hábitos adquiridos:",
    faqs: [
      {
        q: "Llevo mordiéndome las uñas desde niño/a, ¿se puede cambiar tras tantos años?",
        a: "Sí. La plasticidad cerebral no tiene edad. Aunque lleves 20 o 30 años con el hábito, el trabajo terapéutico permite crear nuevas asociaciones neuronales mucho más rápido porque actúa directamente sobre la memoria procedimental involuntaria.",
      },
      {
        q: "¿Cuántas sesiones suelen ser necesarias para la onicofagia?",
        a: "Muchas personas frenan el impulso drásticamente tras la primera o segunda sesión. Normalmente con 2 o 3 sesiones es suficiente para consolidar el reflejo y permitir que las uñas crezcan con total normalidad.",
      },
      {
        q: "¿Sirve también para bruxismo diurno o pellizcarse la piel?",
        a: "Absolutamente. El mecanismo neurobiológico es idéntico: una descarga motora automática ante tensión subliminal. En sesión reeducamos la relajación miofascial y muscular para soltar la tensión de forma natural.",
      },
      {
        q: "¿Dónde se realizan las sesiones presenciales?",
        a: "En Sueca (Centro Sanar, muy accesible desde Cullera, Alzira, Algemesí y la comarca de la Ribera Baixa), a domicilio en casas de particulares en Valencia ciudad, o en formato online.",
      },
    ],
  },

  sportsPage: {
    eyebrow: "HIPNOSIS PARA EL DEPORTE · VALENCIA, CASTELLÓN Y SUECA",
    title: "HIPNOSIS PARA EL DEPORTE: RENDIMIENTO, TEMPLE Y ESTADO DE FLUJO",
    subtitle:
      "En la competición, el cuerpo llega hasta donde la mente le permite. Con hipnosis para el deporte y visualización neuromuscular, compites con soltura bajo presión.",
    introText:
      "Entrenas duro, cumples con la preparación física y conoces la técnica al detalle. Sin embargo, cuando llega el día de la competición o un momento decisivo, los nervios atenazan la respiración y tu cuerpo no responde con la fluidez de los entrenamientos. Las sesiones de hipnosis para el deporte en Valencia, Castellón y online permiten entrenar el diálogo interno y activar el estado de flujo (flow). A través de visualización neuromuscular de alta precisión, anclajes propioceptivos y regulación del sistema nervioso, blindamos tu concentración, temple y constancia ante cualquier reto deportivo.",
    trustBadges: [
      "Hipnosis para deportistas federados y populares",
      "Visualización neuromuscular y temple competitivo",
      "Sueca (Centro Sanar) · A domicilio Valencia · Online Castellón",
      "Valoración previa de 15 min sin compromiso · 70 €/sesión",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA TERAPIA",
    symptomsTitle: "BARRERAS MENTALES FRECUENTES EN EL DEPORTE",
    symptomsSubtitle:
      "Obstáculos psicológicos que impiden que tu rendimiento real se refleje en tus resultados.",
    symptoms: [
      {
        title: "Bloqueo y tensión en competición",
        text: "Rendir muy por debajo de tu nivel real el día de la prueba, carrera o partido debido al exceso de presión y nerviosismo.",
      },
      {
        title: "Diálogo interno autocrítico",
        text: "Pensamientos intrusivos de duda ('no voy a aguantar', 'voy a fallar') que drenan tu energía y concentración en momentos decisivos.",
      },
      {
        title: "Falta de constancia y motivación",
        text: "Dificultad para mantener la disciplina en los entrenamientos diarios, posponiendo sesiones y sintiendo frustración.",
      },
      {
        title: "Miedo e inseguridad tras una lesión",
        text: "Miedo inconsciente a volver a lesionarte que provoca rigidez articular, desconfianza y gestos técnicos forzados.",
      },
    ],
    symptomsNote:
      "La visualización focalizada activa exactamente las mismas redes neuronales y musculares que el entrenamiento físico real. Es el entrenamiento invisible definitivo para afianzar la memoria motora sin fatiga articular.",
    whyTitle: "CÓMO POTENCIA LA HIPNOSIS EL RENDIMIENTO DEPORTIVO",
    whyParagraphs: [
      "En los momentos de máxima exigencia deportiva, pensar demasiado es el peor enemigo del rendimiento. Cuando el córtex prefrontal intenta controlar cada movimiento en lugar de dejar actuar a la memoria motora automatizada, el cuerpo se vuelve rígido y lento.",
      "La hipnosis deportiva permite entrar voluntariamente en lo que la psicología del rendimiento denomina 'estado de flujo' (flow state): un estado de absorción profunda donde la atención se estrecha al presente, desaparece el miedo al fallo y la ejecución técnica fluye con máxima eficacia.",
      "Además, mediante pautas de atención focalizada y anclajes propioceptivos, aprendes a activar de forma instantánea estados de potencia, calma o foco en el calentamiento previo a cualquier reto competitivo en Valencia, Castellón o a nivel nacional.",
    ],
    pillarsTitle: "PLAN DE ENTRENAMIENTO MENTAL Y FOCO",
    pillarsIntro:
      "Un recorrido estructurado para alinear tu concentración, motivación y potencia física.",
    steps: [
      {
        num: "01",
        badge: "DIAGNÓSTICO",
        title: "Análisis del reto y bloqueos",
        text: "Definimos tus metas deportivas, los puntos críticos donde flaquea la mente y los hábitos de preparación que deseas mejorar.",
      },
      {
        num: "02",
        badge: "DESPEJE",
        title: "Limpieza de interferencias mentales",
        text: "Desactivamos memorias de fallos pasados, miedos residuales tras lesiones y el diálogo interno desgastante.",
      },
      {
        num: "03",
        badge: "VISUALIZACIÓN",
        title: "Ensayo neuromuscular y anclajes",
        text: "Visualizamos la ejecución técnica óptima y fijamos anclajes físicos de energía, calma y concentración bajo presión.",
      },
      {
        num: "04",
        badge: "COMPETICIÓN",
        title: "Integración y autonomía competitiva",
        text: "Consolidamos tu capacidad de autoinvocar el estado de foco en la competición real para rendir a tu máximo potencial.",
      },
    ],
    locationsTitle: "DÓNDE REALIZAMOS LAS SESIONES",
    locationsIntro:
      "Atención personalizada para deportistas en Sueca, Valencia ciudad, Castellón y online:",
    locations: [
      {
        name: "Despacho en Sueca (Centro Sanar)",
        area: "Ribera Baixa y comarcas",
        desc: "Espacio sereno, independiente y confidencial en Sueca. De muy fácil acceso para deportistas de Cullera, Alzira, Algemesí, Carcaixent y Sollana.",
      },
      {
        name: "A domicilio en Valencia ciudad",
        area: "Valencia capital y área metropolitana",
        desc: "Ideal si prefieres trabajar la preparación mental desde la intimidad y comodidad de tu propio hogar o entorno de entrenamiento.",
      },
      {
        name: "Sesiones Online para Castellón, Valencia y resto de España",
        area: "Castellón, Valencia y cualquier ubicación",
        desc: "Por videoconferencia individual en directo, con total flexibilidad de horarios para encajar con tus sesiones de entrenamiento y viajes de competición.",
      },
    ],
    pricingTitle: "PRECIOS CLAROS Y CONDICIONES TRANSPARENTES",
    price: "70 €",
    priceUnit: "por sesión (1 hora)",
    priceNote: "A tu propio ritmo · Sin compromisos obligatorios",
    pricingFeatures: [
      "Sesión individual y personalizada de 60 minutos.",
      "Sueca (Centro Sanar), a domicilio en Valencia ciudad u online.",
      "A tu propio ritmo: sin paquetes obligatorios ni ataduras.",
      "Audios de visualización y entrenamiento mental pre-competición.",
      "Valoración previa de 15 minutos sin compromiso para orientar tu caso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "IMPULSA TU RENDIMIENTO Y FORTALEZA MENTAL",
    formSubtitle:
      "Rellena este formulario para consultar tu caso deportivo o solicitar tu sesión. Si lo prefieres, podemos comentar tu objetivo en una valoración previa de 15 minutos sin ningún compromiso.",
    formFields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      modality: "Modalidad de atención preferida",
      specificDetail: "¿Qué deporte practicas y qué objetivo o bloqueo mental quieres trabajar?",
      message: "¿Alguna duda o detalle que quieras comentar? (Opcional)",
      submit: "Enviar consulta / Solicitar sesión",
      submitting: "Enviando mensaje...",
      successTitle: "Mensaje recibido correctamente",
      successText:
        "Gracias por contactar. He recibido tu consulta y me pondré en contacto contigo lo antes posible.",
      mailtoFallback:
        "Si ha habido un problema con el envío automático, puedes escribirme directamente:",
    },
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE HIPNOSIS PARA EL DEPORTE",
    faqsSubtitle: "Respuestas a dudas habituales sobre el entrenamiento mental y el rendimiento:",
    faqs: [
      {
        q: "¿La hipnosis para el deporte es solo para profesionales o también para aficionados?",
        a: "Es igualmente eficaz para ambos. Desde corredores populares o ciclistas que quieren superar sus marcas, hasta deportistas federados o de competición en Valencia, Castellón y otras provincias que buscan dar un salto cualitativo en su temple y seguridad bajo presión.",
      },
      {
        q: "¿Cómo ayuda la hipnosis deportiva con la motivación para entrenar a diario?",
        a: "La motivación forzada se agota pronto. En sesión conectamos con el placer intrínseco del movimiento y la satisfacción del esfuerzo, haciendo que ponerse en marcha deje de requerir una lucha interna agotadora.",
      },
      {
        q: "¿Se puede trabajar el miedo a recaer tras una lesión física ya curada?",
        a: "Sí, es uno de los campos más agradecidos. Cuando el traumatólogo o fisioterapeuta da el alta médica, el cerebro a menudo mantiene un reflejo de hiperprotección y tensión involuntaria. En sesión le enseñamos al cuerpo que la zona ya es segura y fuerte.",
      },
      {
        q: "¿Dónde se realizan las sesiones para deportistas de Castellón y Valencia?",
        a: "En mi despacho de Sueca (Centro Sanar, Ribera Baixa), a domicilio en Valencia ciudad para tu comodidad, o de forma online mediante videollamada para deportistas de Castellón y toda España.",
      },
    ],
  },

  fearsPage: {
    eyebrow: "HIPNOSIS Y TERAPIA EN VALENCIA Y SUECA · RECUPERAR TU LIBERTAD",
    title: "HIPNOSIS PARA SUPERAR FOBIAS Y MIEDOS EN VALENCIA: DESACTIVAR EL PÁNICO",
    subtitle:
      "Sabes racionalmente que no hay peligro real, pero tu cuerpo reacciona en alerta. Con hipnosis ericksoniana consciente y desensibilización suave, recuperas tu calma.",
    introText:
      "Miedo a volar en avión, pánico a conducir por autopistas o túneles (amaxofobia), fobia a las agujas, claustrofobia en ascensores o bloqueo paralizante al exponerte ante un grupo. Cuando un miedo se consolida como fobia, la lógica no sirve de nada: la amígdala secuestra tu fisiología disparando palpitaciones, mareo, sudores y una necesidad desesperada de huir. Con sesiones de hipnosis para superar fobias en Valencia y Sueca, facilitamos una desensibilización sistemática suave en un estado de profunda seguridad somática: enseñamos a tu cerebro a desaprender la asociación de amenaza para que recuperes tu serenidad y libertad de movimiento con total autonomía.",
    trustBadges: [
      "Hipnosis ericksoniana consciente y respetuosa",
      "Desensibilización sistemática sin shock",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Valoración previa de 15 min sin compromiso · 70 €/sesión",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA TERAPIA",
    symptomsTitle: "CÓMO SE MANIFIESTAN LOS MIEDOS Y FOBIAS",
    symptomsSubtitle:
      "Respuestas corporales reflejas que escapan por completo al control de la lógica consciente.",
    symptoms: [
      {
        title: "Reacción física desproporcionada",
        text: "Taquicardia súbita, temblores, dificultad para respirar o mareo ante el estímulo o solo al anticiparlo mentalmente.",
      },
      {
        title: "Evitación constante y limitaciones",
        text: "Cancelar viajes de ocio, dar rodeos de kilómetros para no coger la autovía o rechazar oportunidades laborales por miedo.",
      },
      {
        title: "Ansiedad anticipatoria desgastante",
        text: "Pasar días o semanas previas en angustia continua antes de tener que afrontar la situación que te bloquea.",
      },
      {
        title: "Frustración e incomprensión",
        text: "Sentir enfado contigo mismo/a por tener una respuesta que tú mismo/a reconoces como irracional pero no puedes frenar.",
      },
    ],
    symptomsNote:
      "Las fobias no son defectos de personalidad ni falta de valentía; son aprendizajes ultrarrápidos de supervivencia que quedaron grabados en el sistema nervioso. La hipnosis clínica y la terapia focalizada permiten reescribir ese archivo de memoria.",
    whyTitle: "CÓMO DESACTIVA LA HIPNOSIS LAS ASOCIACIONES DE MIEDO Y FOBIA",
    whyParagraphs: [
      "El miedo fóbico se almacena en la memoria implícita e involuntaria. Cuando te encuentras frente al estímulo, la información llega a la amígdala antes de que pase por la corteza cerebral reflexiva, desencadenando la respuesta refleja de 'lucha o huida'.",
      "Las terapias de choque o exposición forzada pueden resultar abrumadoras e incluso retraumatizantes si el cuerpo no dispone de un anclaje sólido de seguridad fisiológica.",
      "En sesión de hipnosis ericksoniana en Valencia y Sueca, facilitamos que tu cuerpo entre en un estado parasimpático de profunda calma y distensión. Desde ese espacio de total seguridad, exponemos a la mente a la situación de forma disociada y gradual, 'desacoplando' el estímulo del reflejo de alarma y reprogramando una respuesta neutra o tranquila con resultados consolidados a largo plazo.",
    ],
    pillarsTitle: "RECORRIDO PASO A PASO FRENTE AL MIEDO",
    pillarsIntro:
      "Un proceso progresivo, seguro y respetuoso para recuperar la confianza y la calma.",
    steps: [
      {
        num: "01",
        badge: "SEGURIDAD",
        title: "Evaluación y anclaje de calma",
        text: "Construimos un recurso somático seguro de relajación que será tu base durante todo el proceso de trabajo.",
      },
      {
        num: "02",
        badge: "DISOCIACIÓN",
        title: "Desensibilización gradual y suave",
        text: "Procesamos la escena temida a través de técnicas de distancia mental segura, sin sufrimiento ni desbordamiento.",
      },
      {
        num: "03",
        badge: "RECONEXIÓN",
        title: "Reprogramación del reflejo",
        text: "Sustituimos la respuesta de parálisis o huida por reflejos corporales de presencia, respiración pausada y serenidad.",
      },
      {
        num: "04",
        badge: "INTEGRACIÓN",
        title: "Ensayo futuro y comprobación",
        text: "Proyectamos tu respuesta en situaciones reales para que las afrontes con soltura, autonomía y naturalidad.",
      },
    ],
    locationsTitle: "DÓNDE REALIZAMOS LAS SESIONES",
    locationsIntro: "Atención cercana en Sueca, la comarca de la Ribera Baixa y Valencia ciudad:",
    locations: [
      {
        name: "Despacho en Sueca (Centro Sanar)",
        area: "Ribera Baixa",
        desc: "Espacio sereno, independiente y confidencial en Sueca. De muy fácil acceso para personas de Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara y El Perelló.",
      },
      {
        name: "A domicilio en Valencia ciudad",
        area: "Valencia capital y alrededores",
        desc: "Ideal si los desplazamientos o ciertas situaciones te generan agobio y prefieres trabajar desde la intimidad de tu hogar.",
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
    priceNote: "A tu propio ritmo · Sin compromisos obligatorios",
    pricingFeatures: [
      "Sesión individual y personalizada de 60 minutos.",
      "Sueca (Centro Sanar), a domicilio en Valencia ciudad u online.",
      "A tu propio ritmo: sin paquetes obligatorios ni ataduras.",
      "Herramientas de autogestión somática entre sesiones.",
      "Valoración previa de 15 minutos sin compromiso para orientar tu caso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "RECUPERA TU TRANQUILIDAD Y LIBERTAD",
    formSubtitle:
      "Rellena este formulario para consultar tu caso o solicitar tu sesión. Si lo prefieres, podemos tener una valoración previa de 15 minutos por teléfono o WhatsApp para conocer tu situación sin compromiso.",
    formFields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      modality: "Modalidad de atención preferida",
      specificDetail: "¿A qué situación, estímulo o fobia te enfrentas?",
      message: "¿Alguna duda o detalle que quieras comentar? (Opcional)",
      submit: "Enviar consulta / Solicitar sesión",
      submitting: "Enviando mensaje...",
      successTitle: "Mensaje recibido correctamente",
      successText:
        "Gracias por contactar. He recibido tu mensaje y me pondré en contacto contigo lo antes posible.",
      mailtoFallback:
        "Si ha habido un problema con el envío automático, puedes escribirme directamente:",
    },
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE MIEDOS Y BLOQUEOS",
    faqsSubtitle: "Respuestas claras a dudas comunes sobre las sesiones para superar miedos:",
    faqs: [
      {
        q: "¿Tendré que enfrentarme a lo que me da miedo durante la sesión de forma brusca?",
        a: "No, en absoluto. Todo el trabajo se realiza de manera progresiva y suave en tu imaginación, facilitando una relajación profunda que ayuda a tu sistema nervioso a asimilar la calma y la seguridad.",
      },
      {
        q: "¿Sirve para el miedo a volar en avión o a conducir por autovía?",
        a: "Son dos de las consultas más frecuentes y con mejores resultados. El trabajo terapéutico permite desactivar la sensación de angustia o desbordamiento y entrenar a tu mente para viajar o conducir con total tranquilidad.",
      },
      {
        q: "¿Cuántas sesiones suelen ser necesarias para una fobia concreta?",
        a: "Para miedos o fobias específicas y acotadas, normalmente se logran cambios muy notables en entre 2 y 4 sesiones individuales.",
      },
      {
        q: "¿Dónde se realizan las sesiones presenciales?",
        a: "En mi despacho de Sueca (Centro Sanar, comarca de la Ribera Baixa), a domicilio en Valencia ciudad o mediante videollamada online segura.",
      },
    ],
  },

  confidencePage: {
    eyebrow: "SUPERAR LA AUTOESTIMA BAJA EN VALENCIA Y SUECA · SEGURIDAD PERSONAL",
    title: "AUTOESTIMA BAJA Y CONFIANZA EN UNO MISMO: MEJORA DE AUTOCONFIANZA REAL",
    subtitle:
      "Aumentar la confianza en uno mismo no consiste en repetir frases vacías, sino en desactivar la voz autocrítica y sentir tu valor con calma y firmeza.",
    introText:
      "Dudar constantemente de tus capacidades, convivir con la autoestima baja en el trabajo o las relaciones, sentirte como un fraude (síndrome del impostor) o ser incapaz de poner límites por miedo a decepcionar. La mejora de autoconfianza duradera se logra actualizando las respuestas automáticas de tu sistema nervioso. En nuestras sesiones en Sueca, Valencia y online, trabajamos para superar la autoestima baja y aumentar la confianza en uno mismo: transformamos viejas etiquetas limitantes, reforzamos tu asertividad y consolidamos una presencia tranquila, segura y auténtica ante cualquier situación.",
    trustBadges: [
      "Mejora de autoconfianza y asertividad",
      "Aumentar la confianza en uno mismo de forma real",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Valoración previa de 15 min sin compromiso · 70 €/sesión",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA TERAPIA",
    symptomsTitle: "SEÑALES DE AUTOESTIMA BAJA Y FALTA DE CONFIANZA EN UNO MISMO",
    symptomsSubtitle:
      "Patrones de diálogo interno y conducta que desgastan tu bienestar y frenan tus decisiones en el día a día.",
    symptoms: [
      {
        title: "Síndrome del impostor y comparación",
        text: "Atribuir tus éxitos a la suerte y vivir con el miedo continuo a que los demás descubran que 'no eres suficiente'.",
      },
      {
        title: "Incapacidad para poner límites y complacencia",
        text: "Aceptar compromisos por complacer o por temor al conflicto, acabando agotado/a, invisible y con resentimiento.",
      },
      {
        title: "Miedo al juicio ajeno y bloqueo al exponerte",
        text: "Sentir que todas las miradas te juzgan, con nudo en la garganta y palpitaciones al hablar en público o defender tu postura.",
      },
      {
        title: "Crítica interna implacable y autoexigencia",
        text: "Una voz mental exigente que magnifica cada error cometido y minimiza tus cualidades, logros y talentos.",
      },
    ],
    symptomsNote:
      "La autoestima baja no es un rasgo innato con el que tengas que resignarte a vivir; es una creencia aprendida que se repite en piloto automático. A través de la terapia focalizada puedes actualizar esa autoimagen y recuperar tu fuerza personal.",
    whyTitle: "CÓMO AUMENTAR LA CONFIANZA EN UNO MISMO Y MEJORAR LA AUTOCONFIANZA",
    whyParagraphs: [
      "La confianza en uno mismo no es un concepto puramente intelectual, es una experiencia física. Cuando te sientes seguro/a, tu postura corporal se abre, tu voz es firme y tu respiración es amplia. Cuando domina la autoestima baja, el cuerpo se contrae como si estuviera ante una amenaza inminente.",
      "Gran parte de nuestras dudas proceden de experiencias pasadas donde internalizamos juicios, comparaciones o exigencias. Aunque hoy seamos personas adultas capaces, el cerebro emocional sigue reaccionando con viejos patrones automáticos de indefensión.",
      "En sesión intervenimos en ese nivel profundo de autoconcepto mediante relajación somática y reprogramación de creencias limitantes. Desactivamos las voces críticas heredadas y anclamos sensaciones de solidez, dignidad y merecimiento para lograr una mejora de autoconfianza visible y duradera en Valencia y Sueca.",
    ],
    pillarsTitle: "EL CAMINO HACIA UNA CONFIANZA AUTÉNTICA",
    pillarsIntro:
      "Cuatro fases para soltar la necesidad de aprobación y habitar tu propia seguridad.",
    steps: [
      {
        num: "01",
        badge: "CONCIENCIA",
        title: "Identificación del juez interno",
        text: "Reconocemos el origen de la autoexigencia desmedida y las creencias limitantes que se activan sin tu permiso.",
      },
      {
        num: "02",
        badge: "LIBERACIÓN",
        title: "Desactivación de etiquetas del pasado",
        text: "Reencuadramos experiencias formativas para soltar el miedo al rechazo y la necesidad de agradar a todo el mundo.",
      },
      {
        num: "03",
        badge: "CONSTRUCCIÓN",
        title: "Desarrollo del Yo seguro y congruente",
        text: "Creamos y consolidamos una autoimagen serena, alineada con tus valores reales y con tu legitimidad para expresarte.",
      },
      {
        num: "04",
        badge: "ACCIÓN",
        title: "Asertividad y presencia en el día a día",
        text: "Ensayamos mentalmente situaciones reales (decir no, exponer ideas, negociar) desde una postura de calma y firmeza.",
      },
    ],
    locationsTitle: "DÓNDE REALIZAMOS LAS SESIONES",
    locationsIntro: "Atención cercana en Sueca, la comarca de la Ribera Baixa y Valencia ciudad:",
    locations: [
      {
        name: "Despacho en Sueca (Centro Sanar)",
        area: "Ribera Baixa",
        desc: "Espacio sereno, independiente y confidencial en Sueca. De muy fácil acceso para personas de Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara y El Perelló.",
      },
      {
        name: "A domicilio en Valencia ciudad",
        area: "Valencia capital y alrededores",
        desc: "Ideal si prefieres trabajar tu crecimiento personal desde la comodidad y privacidad de tu propio hogar.",
      },
      {
        name: "Sesiones Online en directo",
        area: "Cualquier ubicación",
        desc: "Por videoconferencia individual en directo, con la misma cercanía y eficacia desde donde tú elijas.",
      },
    ],
    pricingTitle: "PRECIOS CLAROS Y CONDICIONES TRANSPARENTES",
    price: "70 €",
    priceUnit: "por sesión (1 hora)",
    priceNote: "A tu propio ritmo · Sin compromisos obligatorios",
    pricingFeatures: [
      "Sesión individual y personalizada de 60 minutos.",
      "Sueca (Centro Sanar), a domicilio en Valencia ciudad u online.",
      "A tu propio ritmo: sin paquetes obligatorios ni ataduras.",
      "Pautas de asertividad y anclajes de seguridad.",
      "Valoración previa de 15 minutos sin compromiso para orientar tu caso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "EMPIEZA A CREER EN TI CON TOTAL NATURALIDAD",
    formSubtitle:
      "Rellena este formulario para consultar tus dudas o concertar tu sesión. Si lo prefieres, podemos comentar tus dudas en una valoración previa de 15 minutos sin ningún compromiso.",
    formFields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      modality: "Modalidad de atención preferida",
      specificDetail: "¿En qué situaciones o áreas notas que te falta seguridad o confianza?",
      message: "¿Alguna duda o detalle que quieras comentar? (Opcional)",
      submit: "Enviar consulta / Solicitar sesión",
      submitting: "Enviando mensaje...",
      successTitle: "Mensaje recibido correctamente",
      successText:
        "Gracias por contactar. He recibido tu mensaje y te responderé en breve de forma personalizada.",
      mailtoFallback:
        "Si ha habido un problema con el envío automático, puedes escribirme directamente:",
    },
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE AUTOESTIMA Y CONFIANZA",
    faqsSubtitle:
      "Respuestas claras a las dudas sobre el fortalecimiento de la seguridad personal:",
    faqs: [
      {
        q: "¿La terapia me hará volverme arrogante o cambiar mi personalidad?",
        a: "En absoluto. La verdadera confianza no necesita pisar a nadie ni fingir superioridad. La terapia fomenta una seguridad tranquila, amable y honesta, donde puedes ser tú mismo/a sin tener que protegerte continuamente.",
      },
      {
        q: "¿Ayuda esta terapia a superar el miedo a hablar en público o exponer ideas?",
        a: "Sí, es una de las aplicaciones más directas. Desactiva la respuesta de peligro social ante el grupo y ancla una sensación de presencia escénica y conexión natural.",
      },
      {
        q: "¿En cuántas sesiones se nota mayor seguridad personal?",
        a: "Muchas personas notan un alivio en el diálogo interno y mayor aplomo corporal desde la primera sesión. Un proceso de 3 a 4 sesiones permite afianzar el cambio de forma duradera.",
      },
      {
        q: "¿Dónde se realizan las sesiones?",
        a: "En Sueca (Centro Sanar, Ribera Baixa), a domicilio en Valencia ciudad para tu máxima privacidad, o de forma online mediante videollamada.",
      },
    ],
  },

  focusPage: {
    eyebrow: "RENDIMIENTO INTELECTUAL Y CLARIDAD · TERAPIA EN SUECA Y VALENCIA",
    title: "CONCENTRACIÓN, FOCO Y ESTUDIO: PREPARAR OPOSICIONES Y RETOS CON CALMA",
    subtitle:
      "Estudiar con ansiedad bloquea la memoria. Entrena a tu cerebro para asimilar conocimientos con claridad y rendir al máximo bajo presión.",
    introText:
      "Pasar horas frente a los apuntes leyendo el mismo párrafo sin retener nada, dispersarte con el móvil cada diez minutos, sentir que el tiempo se agota antes de tu examen u oposición y sufrir el temido 'bloqueo en blanco' durante las pruebas. La capacidad de concentración no depende de pasar más horas sufriendo en la silla, sino del estado neurobiológico en el que estudias. Con un proceso de terapia y desarrollo personal para producir resultados duraderos a largo plazo, entrenamos estados de atención focalizada profunda (ondas alfa y theta), optimizamos la retención mnémica y te enseñamos a gestionar la presión para que demuestres en el examen todo lo que has trabajado.",
    trustBadges: [
      "Ideal para opositores y estudiantes universitarios",
      "Terapia y desarrollo personal para resultados duraderos",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Valoración previa de 15 min sin compromiso · 70 €/sesión",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA TERAPIA",
    symptomsTitle: "DIFICULTADES COMUNES EN EL ESTUDIO Y EXÁMENES",
    symptomsSubtitle: "Patrones de dispersión y estrés que sabotean tu esfuerzo intelectual:",
    symptoms: [
      {
        title: "Dispersión y procrastinación crónica",
        text: "Costar un mundo ponerse a estudiar, buscar excusas para levantarse continuamente y perder horas en distracciones.",
      },
      {
        title: "Niebla mental y saturación rápida",
        text: "Sentir el cerebro colapsado al poco tiempo de empezar, con dificultad para hilar conceptos complejos o memorizar datos.",
      },
      {
        title: "Ansiedad anticipatoria y bloqueo en blanco",
        text: "Saberte la materia en casa pero sufrir taquicardia y parálisis cognitiva ante el examen o el tribunal evaluador.",
      },
      {
        title: "Agotamiento mental e insomnio",
        text: "Irte a la cama repasando apuntes mentalmente, sin descansar bien y despertando con la mente pesada y fatigada.",
      },
    ],
    symptomsNote:
      "Cuando los niveles de cortisol se disparan por el estrés, el hipocampo (responsable de recuperar la memoria) se inhibe biológicamente. El trabajo de regulación mantiene tu canal de memoria abierto y disponible bajo presión.",
    whyTitle: "CÓMO MULTIPLICA LA TERAPIA LA CAPACIDAD DE ESTUDIO",
    whyParagraphs: [
      "La concentración no es una cuestión de forzar los ojos sobre el papel; es un estado de calma atenta. En sesión entrenamos de forma voluntaria estados de atención focalizada y ondas cerebrales alfa, las mismas que se producen en los momentos de inspiración y aprendizaje acelerado.",
      "Además de mejorar el foco durante el estudio, la terapia focalizada es extraordinariamente eficaz contra el pánico a los exámenes: desensibiliza la situación de evaluación y reprograma las respuestas de alarma del cuerpo ante tribunales u hojas de examen.",
      "Mediante anclajes de memoria y sugestiones de claridad, el estudiante aprende a asociar el momento de la prueba con lucidez, tranquilidad y confianza en su preparación previa, manteniendo los resultados estables a largo plazo.",
    ],
    pillarsTitle: "ESTRATEGIA DE RENDIMIENTO Y FOCO COGNITIVO",
    pillarsIntro:
      "Un recorrido estructurado para optimizar tu tiempo de estudio y asegurar tu claridad en las pruebas.",
    steps: [
      {
        num: "01",
        badge: "DIAGNÓSTICO",
        title: "Mapa de fugas de atención y estrés",
        text: "Identificamos los factores de distracción, la gestión de descansos y los momentos donde aparece la fatiga mental.",
      },
      {
        num: "02",
        badge: "ESTADO ALFA",
        title: "Entrenamiento en absorción profunda",
        text: "Aprendes a entrar rápidamente en un estado de foco limpio, donde la información se asimila con menor esfuerzo y mayor retención.",
      },
      {
        num: "03",
        badge: "DESENSIBILIZACIÓN",
        title: "Desactivación del pánico al examen",
        text: "Desensibilizamos los simulacros, el tribunal evaluador y el miedo al resultado final para que no interfieran en tu rendimiento.",
      },
      {
        num: "04",
        badge: "ANCLAJE",
        title: "Anclaje de memoria y lucidez ágil",
        text: "Fijamos anclajes físicos de calma y memoria rápida para utilizarlos durante la prueba real y recuperar datos con fluidez.",
      },
    ],
    locationsTitle: "DÓNDE REALIZAMOS LAS SESIONES",
    locationsIntro: "Atención cercana en Sueca, la comarca de la Ribera Baixa y Valencia ciudad:",
    locations: [
      {
        name: "Despacho en Sueca (Centro Sanar)",
        area: "Ribera Baixa",
        desc: "Espacio sereno, independiente y confidencial en Sueca. De muy fácil acceso para personas de Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara y El Perelló.",
      },
      {
        name: "A domicilio en Valencia ciudad",
        area: "Valencia capital y alrededores",
        desc: "Ideal para opositores y estudiantes que prefieren optimizar su tiempo y trabajar sin desplazamientos desde su lugar de estudio.",
      },
      {
        name: "Sesiones Online en directo",
        area: "Cualquier ubicación",
        desc: "Por videoconferencia individual en directo, con total adaptabilidad a tus horarios de preparación.",
      },
    ],
    pricingTitle: "PRECIOS CLAROS Y CONDICIONES TRANSPARENTES",
    price: "70 €",
    priceUnit: "por sesión (1 hora)",
    priceNote: "A tu propio ritmo · Sin compromisos obligatorios",
    pricingFeatures: [
      "Sesión individual y personalizada de 60 minutos.",
      "Sueca (Centro Sanar), a domicilio en Valencia ciudad u online.",
      "A tu propio ritmo: sin paquetes obligatorios ni ataduras.",
      "Audios de inducción al estudio profundo y descanso reparador.",
      "Valoración previa de 15 minutos sin compromiso para orientar tu caso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "ENTRENA TU MENTE PARA RENDIR AL MÁXIMO",
    formSubtitle:
      "Rellena este formulario para consultar tu situación u oposiciones. Si lo prefieres, podemos tener una valoración previa de 15 minutos por teléfono o WhatsApp sin ningún compromiso.",
    formFields: {
      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      modality: "Modalidad de atención preferida",
      specificDetail: "¿Qué oposición o examen preparas y qué te gustaría mejorar?",
      message: "¿Alguna duda o detalle que quieras comentar? (Opcional)",
      submit: "Enviar consulta / Solicitar sesión",
      submitting: "Enviando mensaje...",
      successTitle: "Mensaje recibido correctamente",
      successText:
        "Gracias por contactar. He recibido tu consulta y me pondré en contacto contigo a la mayor brevedad.",
      mailtoFallback:
        "Si ha habido un problema con el envío automático, puedes escribirme directamente:",
    },
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE CONCENTRACIÓN Y OPOSICIONES",
    faqsSubtitle: "Respuestas claras a dudas comunes sobre el foco mental y el estudio:",
    faqs: [
      {
        q: "¿La terapia me hará aprender el temario sin estudiar?",
        a: "No, la terapia no sustituye las horas de estudio ni hace milagros. Lo que hace es optimizar radicalmente cada hora que dedicas: multiplica tu capacidad de asimilación, evita el desgaste mental y te asegura que el día del examen puedas volcar tus conocimientos con tranquilidad.",
      },
      {
        q: "¿Es útil para opositores a judicatura, sanidad, docencia o policía?",
        a: "Es extraordinariamente útil. Los opositores soportan una presión sostenida durante meses o años que agota el sistema nervioso. El acompañamiento terapéutico les ayuda a regular el descanso, mantener la motivación y llegar al examen en su mejor estado cognitivo.",
      },
      {
        q: "¿En cuántas sesiones se nota mejoría en el estudio?",
        a: "Con 2 o 3 sesiones bien orientadas se nota un cambio muy importante en la capacidad de concentración, en la reducción del agobio y en la seguridad ante las pruebas.",
      },
      {
        q: "¿Dónde se realizan las sesiones?",
        a: "En Sueca (Centro Sanar, Ribera Baixa), a domicilio en Valencia ciudad para no perder tiempo en traslados, o en formato online por videollamada.",
      },
    ],
  },

  insomniaPage: {
    eyebrow: "SUEÑO PROFUNDO Y ANSIEDAD NOCTURNA · TERAPIA EN SUECA Y VALENCIA",
    title: "TERAPIA PARA EL INSOMNIO Y LA ANSIEDAD NOCTURNA: APAGAR LA MENTE Y DESCANSAR",
    subtitle:
      "La ansiedad nocturna y el insomnio no son falta de sueño, sino tu sistema nervioso interpretando la noche como un estado de alerta continua en piloto automático.",
    introText:
      "Te metes en la cama con agotamiento físico, pero en cuanto apagas la luz, la ansiedad nocturna acelera tus pensamientos: repasas el día, anticipas problemas de mañana o miras el reloj con angustia viendo cómo pasan las horas. O tal vez te duermes, pero te despiertas sobresaltado/a a las 3 de la madrugada con taquicardia y la mente en alerta sin poder volver a conciliar el sueño. Con un abordaje terapéutico focalizado en regular el sistema nervioso en Sueca y Valencia, calmamos la ansiedad nocturna, frenamos la rumiación mental y enseñamos a tu cuerpo a activar de manera natural el reflejo del descanso profundo y reparador.",
    trustBadges: [
      "Calma para la ansiedad nocturna e insomnio",
      "Descanso natural sin fármacos ni dependencias",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Valoración previa de 15 min sin compromiso · 70 €/sesión",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA TERAPIA",
    symptomsTitle: "CÓMO SE MANIFIESTAN EL INSOMNIO Y LA ANSIEDAD NOCTURNA",
    symptomsSubtitle:
      "Patrones fisiológicos involuntarios de alerta que impiden la transición biológica al sueño profundo.",
    symptoms: [
      {
        title: "Dificultad para conciliar el sueño y rumiación",
        text: "Pasar más de una hora dando vueltas en la cama con una mente acelerada que no encuentra el botón de apagado.",
      },
      {
        title: "Ansiedad nocturna y despertares con angustia",
        text: "Despertarse de madrugada con palpitaciones, taquicardia o sobresalto en el pecho y angustia al ver que el reloj avanza.",
      },
      {
        title: "Bucle de pensamientos anticipatorios",
        text: "Pensar compulsivamente en tareas pendientes, preocupaciones cotidianas o en lo cansado/a que vas a estar al día siguiente.",
      },
      {
        title: "Fatiga crónica y pesadez diurna",
        text: "Levantarte con pesadez corporal, sensación de no haber descansado, irritabilidad y falta de energía durante la jornada.",
      },
    ],
    symptomsNote:
      "El sueño es un proceso reflejo: no se puede exigir por la fuerza. Cuanto más intentas obligarte a dormir, más cortisol y adrenalina liberas. La terapia desactiva la ansiedad nocturna y restaura el permiso biológico para soltar el control y descansar.",
    whyTitle: "¿POR QUÉ LA TERAPIA ES TAN EFECTIVA CONTRA EL INSOMNIO Y LA ANSIEDAD NOCTURNA?",
    whyParagraphs: [
      "El insomnio psicofisiológico y la ansiedad nocturna surgen de un condicionamiento involuntario: tu cerebro ha asociado el acto de acostarse no con la desconexión, sino con el esfuerzo por dormir y la hipervigilancia. Esta tensión refleja activa el sistema simpático ('lucha o huida'), manteniendo los niveles de alerta corporal elevados justo de noche.",
      "Los fármacos inductores del sueño suelen actuar como un anestésico químico que suprime la conciencia pero altera las fases de sueño REM y delta profundo, generando tolerancia sin resolver la causa subyacente.",
      "En sesión en Valencia y Sueca entrenamos a tu sistema nervioso para transitar conscientemente de las ondas beta de alerta a las frecuencias alfa y theta de relajación profunda. Al asociar la cama con seguridad somática y silencio mental mediante terapia focalizada, disolvemos la ansiedad nocturna y reactivamos el automatismo natural del sueño reparador con resultados duraderos.",
    ],
    pillarsTitle: "EL RECORRIDO PARA RECUPERAR UN SUEÑO PROFUNDO",
    pillarsIntro:
      "Un proceso terapéutico estructurado enfocado en devolverte el descanso desde la primera sesión.",
    steps: [
      {
        num: "01",
        badge: "DESACTIVACIÓN",
        title: "Apagar la alerta somática del cuerpo",
        text: "Enseñamos a tu sistema nervioso a pasar del modo alerta al modo parasimpático de descanso, liberando tensión en cuello, mandíbula y respiración.",
      },
      {
        num: "02",
        badge: "REPROGRAMACIÓN",
        title: "Desacoplar la cama de la angustia",
        text: "Eliminamos la asociación refleja entre meterse en la cama y la ansiedad por no dormir, transformando el dormitorio en un espacio seguro de paz.",
      },
      {
        num: "03",
        badge: "SILENCIO MENTAL",
        title: "Frenar el diálogo interno y la rumiación",
        text: "Instalamos recursos de focalización y técnicas de autorregulación somática para apagar los pensamientos intrusivos y preocupaciones nocturnas al instante.",
      },
      {
        num: "04",
        badge: "AUTONOMÍA",
        title: "Pautas de sueño y descanso duradero",
        text: "Integras anclajes sencillos para mantener un sueño continuo, profundo y reparador noche tras noche, a tu ritmo y sin crear dependencias.",
      },
    ],
    locationsTitle: "DÓNDE REALIZAMOS LAS SESIONES",
    locationsIntro:
      "Atención cercana y personalizada en Sueca, la comarca de la Ribera Baixa y Valencia ciudad:",
    locations: [
      {
        name: "Despacho en Sueca (Centro Sanar)",
        area: "Ribera Baixa",
        desc: "Espacio sereno, independiente y confidencial en Sueca. De muy fácil acceso para personas de Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara y El Perelló.",
      },
      {
        name: "A domicilio en Valencia ciudad",
        area: "Valencia capital y alrededores",
        desc: "Ideal si prefieres trabajar desde la comodidad, privacidad absoluta y tranquilidad de tu propio hogar en Valencia.",
      },
      {
        name: "Sesiones Online en directo",
        area: "Cualquier ubicación",
        desc: "Por videoconferencia individual en directo, con la misma eficacia y guiada paso a paso desde el espacio donde te sientas más cómodo/a.",
      },
    ],
    pricingTitle: "PRECIOS CLAROS Y CONDICIONES TRANSPARENTES",
    price: "70 €",
    priceUnit: "por sesión (1 hora)",
    priceNote: "A tu propio ritmo · Sin compromisos obligatorios",
    pricingFeatures: [
      "Sesión individual y personalizada de 60 minutos.",
      "Sueca (Centro Sanar), a domicilio en Valencia ciudad u online.",
      "A tu propio ritmo: sin paquetes obligatorios ni ataduras.",
      "Valoración previa de 15 minutos sin compromiso para orientar tu caso.",
      "Pautas prácticas de neurobiología del sueño e higiene del descanso.",
      "Técnicas de autorregulación somática aplicables cada noche desde tu cama.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "RECUPERA TU SUEÑO Y TU CALMA NOCTURNA",
    formSubtitle:
      "Rellena este breve formulario para consultar tus dudas o pedir tu sesión. Si lo prefieres, podemos comentar tu descanso en una valoración previa de 15 minutos por teléfono o WhatsApp.",
    formFields: {
      name: "Tu nombre",
      email: "Tu correo electrónico",
      phone: "Tu teléfono de contacto",
      modality: "Modalidad preferida",
      modalityOptions: {
        sueca: "Despacho en Sueca (Centro Sanar)",
        valencia: "A domicilio en Valencia ciudad",
        online: "Online por videoconferencia",
      },
      specificDetail: "¿Qué patrón de insomnio experimentas con más frecuencia?",
      message: "Cuéntame brevemente tu situación con el sueño...",
      submit: "Enviar consulta sobre insomnio",
      submitting: "Enviando consulta...",
      successTitle: "Mensaje recibido con éxito",
      successText:
        "Gracias por contactar. Te responderé en breve para valorar tu caso y orientarte sobre cómo podemos trabajar tu descanso.",
      mailtoFallback: "O escríbeme directamente por email si lo prefieres",
    },
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE EL TRATAMIENTO DEL INSOMNIO",
    faqsSubtitle: "Respuestas claras a las dudas más habituales sobre el acompañamiento:",
    faqs: [
      {
        q: "¿Cómo ayuda la terapia si llevo meses o años con insomnio?",
        a: "El insomnio crónico suele sostenerse por el 'miedo a no poder dormir'. La terapia rompe ese círculo vicioso desactivando la hipervigilancia del sistema nervioso y devolviendo al cuerpo su reflejo natural de relajación somática.",
      },
      {
        q: "¿Es compatible con la medicación para dormir que ya tomo?",
        a: "Totalmente. El trabajo terapéutico es no invasivo y complementario. Muchas personas notan que, al calmar la mente de forma natural y recuperar confianza, pueden coordinar con su médico una reducción progresiva cuando se sienten preparadas.",
      },
      {
        q: "¿Me quedaré dormido/a durante la sesión?",
        a: "Durante la sesión estás en un estado de relajación profunda pero consciente, escuchando mi voz y participando activamente. El objetivo no es que duermas en la consulta, sino que tu cerebro aprenda a reproducir ese estado por la noche en tu cama.",
      },
      {
        q: "¿En cuántas sesiones se nota mejoría en el sueño?",
        a: "Desde la primera sesión adquieres herramientas de calma y te llevas pautas de relajación y regulación somática. Para consolidar el cambio y reajustar los ciclos de sueño se suelen necesitar entre 2 y 4 sesiones, siempre a tu propio ritmo.",
      },
      {
        q: "¿Dónde se realizan las sesiones?",
        a: "En mi despacho en Sueca (Centro Sanar, Ribera Baixa), a domicilio en casas de particulares en Valencia ciudad para tu máxima comodidad, o en formato online por videoconferencia.",
      },
    ],
  },
};

export const servicesVa: ServicesDictionary = {
  weightPage: {
    ...servicesEs.weightPage,
    eyebrow: "RELACIÓ SANA AMB EL MENJAR · TERÀPIA A SUECA I VALÈNCIA",
    title: "CONTROL DE PES: CALMAR LA FONA EMOCIONAL I RECONNECTAR AMB EL COS",
    subtitle:
      "Menjar de manera compulsiva no és falta de voluntat; és una resposta automàtica del sistema nerviós davant l'estrés, l'avorriment o el buit emocional.",
    introText:
      "Quantes vegades has començat una dieta estricta prometent-te que esta vegada seria diferent, només per acabar picant a la nit amb una enorme sensació de culpa? Quan el menjar es convertix en l'única vàlvula d'escapament contra la tensió diària, forçar-te a no menjar només genera més obsessió. Mitjançant un procés terapèutic focalitzat a produir resultats duradors a llarg termini, intervenim en l'origen automàtic de l'impuls: calmam l'ànsia per dolços o ultraprocessats, restaurem el senyal biològic de sacietat i t'ajudem a construir una relació tranquil·la, lliure i definitiva amb el teu cos.",
    trustBadges: [
      "Sense dietes restrictives ni efecte rebot",
      "Acompanyament terapèutic per a resultats a llarg termini",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Valoració prèvia de 15 min sense compromís · 70 €/sessió",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA TERÀPIA",
    symptomsTitle: "PATRONS HABITUALS EN EL MENJAR EMOCIONAL",
    symptomsSubtitle:
      "El problema no és que no sàpigues què menjar; el problema és que el cos busca menjar en pilot automàtic.",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "FES EL PRIMER PAS CAP A UNA ALIMENTACIÓ EN PAU",
    formSubtitle:
      "Emplena este breu formulari per a consultar els teus dubtes o demanar la teua sessió. Si ho preferixes, podem tindre una valoració prèvia de 15 minuts per telèfon o WhatsApp sense cap compromís.",
  },

  nervousHabitsPage: {
    ...servicesEs.nervousHabitsPage,
    eyebrow: "DESACTIVAR AUTOMATISMES · TERÀPIA A SUECA I VALÈNCIA",
    title:
      "DEIXAR DE ROSTEGAR-SE LES UNGLES I SUPERAR HÀBITS NERVIOSOS: REENTRENAR RESPOSTES AUTOMÀTIQUES",
    subtitle:
      "L'onicofàgia i els gestos compulsius no són 'males costums': són vàlvules d'escapament automàtiques davant la tensió involuntària.",
    introText:
      "Portar-te les mans a la boca mentre condueixes, rostegar-te les ungles davant de la pantalla de l'ordinador, prémer les dents o arrancar-te pellenets sense adonar-te'n. A través de la psicoteràpia focalitzada a produir resultats duradors a llarg termini, no forcem la contenció: ensenyem al cervell a descarregar la microtensió de forma fisiològica i reprogramem el reflex involuntari perquè les teues mans descansen tranquil·les sense esforç.",
    trustBadges: [
      "Eficaç on la força de voluntat ha fallat",
      "Acompanyament terapèutic per a resultats a llarg termini",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Valoració prèvia de 15 min sense compromís · 70 €/sessió",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA TERÀPIA",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "ALLIBERA'T DE L'HÀBIT I RECUPERA LES TEUES MANS",
    formSubtitle:
      "Emplena este formulari per a consultar el teu cas o sol·licitar la teua sessió. Si ho preferixes, podem tindre una valoració prèvia de 15 minuts per telèfon o WhatsApp sense cap compromís.",
  },

  sportsPage: {
    ...servicesEs.sportsPage,
    eyebrow: "HIPNOSI PER A L'ESPORT · VALÈNCIA, CASTELLÓ I SUECA",
    title: "HIPNOSI PER A L'ESPORT: RENDIMENT, TEMPLE I ESTAT DE FLUX",
    subtitle:
      "En l'esport, el cos arriba fins on la ment li permet. Amb hipnosi per a l'esport i visualització neuromuscular, competixes amb soltesa sota pressió.",
    introText:
      "Entrenes de valent, complixes amb la preparació física i coneixes la tècnica al detall. Tanmateix, quan arriba el dia de la competició o un moment decisiu, els nervis atenallen la respiració i el cos no respon amb la soltesa dels entrenaments. Les sessions d'hipnosi per a l'esport a València, Castelló i en línia permeten entrenar el diàleg intern i activar l'estat de flux (flow). Mitjançant visualització neuromuscular d'alta precisió, ancoratges propioceptius i regulació del sistema nerviós, blindem la teua concentració, temple i constància davant qualsevol repte esportiu.",
    trustBadges: [
      "Hipnosi per a esportistes federats i populars",
      "Visualització neuromuscular i temple competitiu",
      "Sueca (Centre Sanar) · A domicili València · En línia Castelló",
      "Valoració prèvia de 15 min sense compromís · 70 €/sessió",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA TERÀPIA",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "IMPULSA EL TEU RENDIMENT I FORTALESA MENTAL",
    formSubtitle:
      "Emplena este formulari per a consultar el teu repte esportiu o sol·licitar la teua sessió. Si ho preferixes, podem valorar el teu cas en una crida prèvia de 15 minuts sense compromís.",
  },

  fearsPage: {
    ...servicesEs.fearsPage,
    eyebrow: "HIPNOSI I TERÀPIA A VALÈNCIA I SUECA · RECUPERAR LA TEUA LLIBERTAT",
    title: "HIPNOSI PER A SUPERAR PORS I FÒBIES A VALÈNCIA: DESACTIVAR EL PÀNIC",
    subtitle:
      "Saps racionalment que no hi ha perill real, però el teu cos reacciona en alerta. Amb hipnosi ericksoniana conscient i desensibilització suau, recuperes la teua calma.",
    introText:
      "Por a volar en avió, pànic a conduir per autopistes o túnels (amaxofòbia), terror a les agulles, claustrofòbia en ascensors o bloqueig paralitzant en exposar-te davant d'un grup. Amb sessions d'hipnosi per a superar fòbies a València i Sueca, realitzem una desensibilització sistemàtica suau en un estat de seguretat absoluta: ensenyem al teu cervell a desaprendre l'associació d'amenaça perquè recuperes la teua tranquil·litat i llibertat de moviment amb total autonomia.",
    trustBadges: [
      "Hipnosi ericksoniana conscient i respectuosa",
      "Desensibilització sistemàtica sense xoc",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Valoració prèvia de 15 min sense compromís · 70 €/sessió",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA TERÀPIA",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "RECUPERA LA TEUA TRANQUIL·LITAT I LLIBERTAT",
    formSubtitle:
      "Emplena este formulari per a consultar el teu cas o sol·licitar la teua sessió. Si ho preferixes, podem tindre una valoració prèvia de 15 minuts per telèfon o WhatsApp sense cap compromís.",
  },

  confidencePage: {
    ...servicesEs.confidencePage,
    eyebrow: "SUPERAR L'AUTOESTIMA BAIXA A VALÈNCIA I SUECA · SEGURETAT PERSONAL",
    title: "AUTOESTIMA BAIXA I CONFIANÇA EN UN MATEIX: MILLORA D'AUTOCONFIANÇA REAL",
    subtitle:
      "Augmentar la confiança en un mateix no consistix a repetir frases buides, sinó a desactivar la veu autocrítica i sentir el teu valor amb calma i fermesa.",
    introText:
      "Dubtar constantment de les teues capacitats, conviure amb l'autoestima baixa en la feina o relacions, sentir-te com un frau (síndrome de l'impostor) o ser incapaç de posar límits per por a decebre. La millora d'autoconfiança duradora s'aconseguix actualitzant les respostes del sistema nerviós. En les nostres sessions a Sueca, València i en línia, treballem per a superar l'autoestima baixa i augmentar la confiança en un mateix: alliberem velles etiquetes limitants, reforcem la teua assertivitat i ancorem una presència tranquil·la, segura i autèntica.",
    trustBadges: [
      "Millora d'autoconfiança i assertivitat",
      "Augmentar la confiança en un mateix de manera real",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Valoración prèvia de 15 min sense compromís · 70 €/sessió",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA TERÀPIA",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "COMENÇA A CONFIAR EN TU AMB TOTAL NATURALITAT",
    formSubtitle:
      "Emplena este formulari per a consultar els teus dubtes o demanar sessió. Si ho preferixes, podem comentar la teua situació en una valoració prèvia de 15 minuts sense cap compromís.",
  },

  focusPage: {
    ...servicesEs.focusPage,
    eyebrow: "RENDIMENT INTEL·LECTUAL I CLARESA · TERÀPIA A SUECA I VALÈNCIA",
    title: "CONCENTRACIÓ, FOCUS I ESTUDI: PREPARAR OPOSICIONS I REPTES AMB CALMA",
    subtitle:
      "Estudiar amb angoixa bloqueja la memòria. Entrena el teu cervell per assimilar coneixements amb claredat i rendir al màxim sota pressió.",
    introText:
      "Passar hores davant dels apunts sense retindre res, dispersar-te amb el mòbil, patir pel temps abans d'un examen o oposició i patir el temut 'bloqueig en blanc'. Amb un acompanyament terapèutic i de desenvolupament personal per a produir resultats duradors a llarg termini, entrenem estats d'atenció focalitzada profunda, optimitzem la retenció mnèmica i t'ensenyem a gestionar la pressió perquè demostres tot el que has treballat.",
    trustBadges: [
      "Ideal per a opositors i estudiants universitaris",
      "Teràpia i desenvolupament personal per a resultats duradors",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Valoració prèvia de 15 min sense compromís · 70 €/sessió",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA TERÀPIA",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "ENTRENA LA TEUA MENT PER A RENDIR AL MÀXIM",
    formSubtitle:
      "Emplena este formulari per a consultar la teua situació o oposició. Si ho preferixes, podem tindre una valoració prèvia de 15 minuts per telèfon o WhatsApp sense cap compromís.",
  },

  insomniaPage: {
    ...servicesEs.insomniaPage,
    eyebrow: "SON PROFUND I ANSIETAT NOCTURNA · TERÀPIA A SUECA I VALÈNCIA",
    title: "TERÀPIA PER A L'INSOMNI I L'ANSIETAT NOCTURNA: APAGAR LA MENT I DESCANSAR",
    subtitle:
      "L'ansietat nocturna i l'insomni no són falta de son; és el teu sistema nerviós interpretant la nit com un estat d'alerta contínua en pilot automàtic.",
    introText:
      "Et fiques al llit amb esgotament físic, però en apagar la llum l'ansietat nocturna accelera els teus pensaments: repasses el dia, anticipes problemes o mires el rellotge amb angoixa veient com passen les hores. O tal vegada t'adorms, però et despertes a les 3 de la matinada amb taquicàrdia i no pots tornar a agafar el son. Amb un abordatge terapèutic a Sueca i València, calmem l'ansietat nocturna, frenem la rumiació mental i ensenyem al teu cos a activar de manera natural les respostes de descans profund.",
    trustBadges: [
      "Calma per a l'ansietat nocturna i insomni",
      "Descans 100% natural sense fàrmacs",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Valoració prèvia de 15 min sense compromís · 70 €/sessió",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA TERÀPIA",
    symptomsTitle: "COM ES MANIFESTA L'INSOMNI I L'ANSIETAT NOCTURNA",
    symptomsSubtitle:
      "Patrons fisiològics involuntaris d'alerta que impedixen la transició biològica al son profund.",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "RECUPERA EL TEU SON I LA CALMA NOCTURNA",
    formSubtitle:
      "Emplena este breu formulari per a consultar els teus dubtes o demanar la teua sessió. Si ho preferixes, podem comentar el teu descans en una valoració prèvia de 15 minuts per telèfon o WhatsApp.",
  },
};

export const servicesEn: ServicesDictionary = {
  weightPage: {
    ...servicesEs.weightPage,
    eyebrow: "HEALTHY RELATIONSHIP WITH FOOD · THERAPY IN SUECA & VALENCIA",
    title:
      "WEIGHT CONTROL & MINDFUL EATING: CALMING EMOTIONAL HUNGER & RECONNECTING WITH YOUR BODY",
    subtitle:
      "Compulsive eating is not a lack of willpower; it is an automatic nervous system response to stress, boredom or emotional emptiness.",
    introText:
      "How many times have you started a strict diet promising yourself that this time would be different, only to end up late-night snacking accompanied by deep guilt? When food becomes an emotional anesthetic against daily exhaustion, forcing yourself not to eat only breeds more obsession. Through a focused therapeutic approach producing solid long-term results, we address the automatic root of the impulse: calming cravings for sugar and processed foods, restoring biological satiety signals, and helping you build a peaceful, lasting relationship with food and your body.",
    trustBadges: [
      "No restrictive diets or rebound effect",
      "Therapeutic guidance for long-term results",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "Free 15-min preliminary consultation · 70 €/session",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW THERAPY HELPS YOU",
    symptomsTitle: "COMMON PATTERNS IN EMOTIONAL EATING",
    symptomsSubtitle:
      "The issue is not knowing what to eat; it is your body reaching for food on autopilot.",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "TAKE THE FIRST STEP TOWARDS PEACEFUL EATING",
    formSubtitle:
      "Fill out this brief form to ask any questions or request your session. If you prefer, we can hold a free 15-minute preliminary consultation by phone or WhatsApp without commitment.",
  },

  nervousHabitsPage: {
    ...servicesEs.nervousHabitsPage,
    eyebrow: "DISABLE AUTOMATIC HABITS · THERAPY IN SUECA & VALENCIA",
    title: "STOP NAIL BITING & OVERCOME NERVOUS HABITS: RETRAINING AUTOMATIC RESPONSES",
    subtitle:
      "Nail biting and compulsive gestures are not 'bad manners': they are automatic release valves for subconscious tension.",
    introText:
      "Reaching for your nails while driving, biting cuticles in front of your computer screen, clenching your jaw, or picking at skin without realizing it. You have tried bitter nail polishes, bandages and conscious resolutions, but the moment your attention wanders, the body repeats the gesture. Through focused therapy for lasting long-term results, we do not rely on exhausting self-restraint: we teach your nervous system to release tension physiologically and retrain the motor reflex so your hands remain calm without struggle.",
    trustBadges: [
      "Effective where willpower has failed",
      "Therapeutic guidance for long-term results",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "Free 15-min preliminary consultation · 70 €/session",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW THERAPY HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "FREE YOURSELF FROM THE HABIT AND RECLAIM YOUR HANDS",
    formSubtitle:
      "Fill out this form to inquire about your case or book a session. If you prefer, we can hold a free 15-minute preliminary consultation by phone or WhatsApp without commitment.",
  },

  sportsPage: {
    ...servicesEs.sportsPage,
    eyebrow: "SPORTS HYPNOSIS · VALENCIA, CASTELLÓN & SUECA",
    title: "SPORTS HYPNOSIS & MENTAL TRAINING: PERFORMANCE, CONSISTENCY & FLOW",
    subtitle:
      "In sports, the body reaches where the mind permits. With sports hypnosis and neuromuscular imagery, compete with poise under pressure.",
    introText:
      "You train hard, follow physical conditioning, and master the technique. Yet, when competition arrives, nervousness tightens your muscles and your body does not respond with its usual fluidity. Sessions of sports hypnosis in Valencia, Castellón and online train your inner dialogue and trigger the flow state. Through precision neuromuscular visualization, proprioceptive anchors, and nervous system regulation, we solidify your focus, composure, and athletic consistency.",
    trustBadges: [
      "Hypnosis for competitive and recreational athletes",
      "Neuromuscular imagery & mental composure",
      "Sueca (Centro Sanar) · Home visits Valencia · Online Castellón",
      "Free 15-min preliminary consultation · 70 €/session",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW THERAPY HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "BOOST YOUR ATHLETIC PERFORMANCE & MENTAL FOCUS",
    formSubtitle:
      "Fill out this form to discuss your sports goals or book a session. If you prefer, we can discuss your goals in a free 15-minute preliminary phone consultation without commitment.",
  },

  fearsPage: {
    ...servicesEs.fearsPage,
    eyebrow: "HYPNOSIS & THERAPY IN VALENCIA & SUECA · RECLAIM YOUR FREEDOM",
    title: "HYPNOSIS FOR PHOBIAS & FEARS IN VALENCIA: DISARMING THE PANIC ALARM",
    subtitle:
      "You know rationally there is no actual threat, but your body reacts in panic. With conscious Ericksonian hypnosis and gentle desensitization, reclaim your calm.",
    introText:
      "Fear of flying, motorway driving phobia (amaxophobia), fear of needles, claustrophobia or debilitating stage fright before speaking. When a fear becomes a phobia, logic is powerless. With hypnosis sessions to overcome phobias in Valencia and Sueca, we conduct gentle, deep systematic desensitization in complete physiological safety: teaching your brain to unlearn the threat association so you reclaim your peace and freedom of movement.",
    trustBadges: [
      "Conscious, respectful Ericksonian hypnosis",
      "Systematic desensitization without shock",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "Free 15-min preliminary consultation · 70 €/session",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW THERAPY HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "RESTORE YOUR PEACE OF MIND AND FREEDOM",
    formSubtitle:
      "Fill out this form to inquire about your situation or book a session. If you prefer, we can hold a free 15-minute preliminary consultation by phone or WhatsApp without commitment.",
  },

  confidencePage: {
    ...servicesEs.confidencePage,
    eyebrow: "OVERCOME LOW SELF-ESTEEM IN VALENCIA & SUECA · INNER SECURITY",
    title: "LOW SELF-ESTEEM & SELF-CONFIDENCE: GENUINE SELF-TRUST ENHANCEMENT",
    subtitle:
      "Boosting self-confidence is not about repeating empty affirmations, but quieting the inner critic and feeling grounded in your inherent worth.",
    introText:
      "Constantly doubting your abilities, struggling with low self-esteem at work or in relationships, feeling like an impostor or being unable to set boundaries for fear of letting others down. Long-lasting confidence enhancement is achieved by updating your nervous system's automatic responses. In our sessions in Sueca, Valencia, and online, we work to overcome low self-esteem and build genuine self-trust: releasing limiting labels, reinforcing assertiveness, and establishing an authentic, grounded calm.",
    trustBadges: [
      "Self-trust enhancement & assertiveness",
      "Genuine increase in self-confidence",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "Free 15-min preliminary consultation · 70 €/session",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW THERAPY HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "START TRUSTING YOURSELF NATURALLY",
    formSubtitle:
      "Fill out this form to ask any questions or arrange a session. If you prefer, we can discuss your situation in a free 15-minute preliminary phone consultation without commitment.",
  },

  focusPage: {
    ...servicesEs.focusPage,
    eyebrow: "INTELLECTUAL PERFORMANCE & CLARITY · THERAPY IN SUECA & VALENCIA",
    title: "CONCENTRATION, FOCUS & STUDY: PREPARING EXAMS WITH CALM CLARITY",
    subtitle:
      "Studying under anxiety blocks memory retrieval. Train your mind to absorb knowledge with clarity and perform at your best.",
    introText:
      "Staring at the same page without retaining anything, getting distracted by your phone every ten minutes, feeling panic as exam dates approach, and dreading going blank during the test. Through personal development and focused therapy for long-term results, we train deep focused attention states (alpha and theta brainwaves), optimize retention, and teach you to handle exam pressure with calm clarity.",
    trustBadges: [
      "Ideal for competitive exams & university students",
      "Therapy & personal development for lasting results",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "Free 15-min preliminary consultation · 70 €/session",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW THERAPY HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "TRAIN YOUR MIND TO PERFORM AT ITS PEAK",
    formSubtitle:
      "Fill out this form to inquire about your studies or book a session. If you prefer, we can hold a free 15-minute preliminary consultation by phone or WhatsApp without commitment.",
  },

  insomniaPage: {
    ...servicesEs.insomniaPage,
    eyebrow: "DEEP SLEEP & NOCTURNAL ANXIETY · THERAPY IN SUECA & VALENCIA",
    title: "THERAPY FOR INSOMNIA & NOCTURNAL ANXIETY: QUIET THE MIND & REST",
    subtitle:
      "Nocturnal anxiety and insomnia are not an inability to sleep; they are your nervous system interpreting bedtime as an alert state on autopilot.",
    introText:
      "You get into bed physically exhausted, yet the moment you turn off the light, nocturnal anxiety accelerates your thoughts: reviewing the day, anticipating problems, or anxiously watching the clock. Or perhaps you wake up startled at 3 AM with a racing heartbeat and unable to fall back asleep. Through a focused therapeutic approach in Sueca and Valencia, we calm nighttime anxiety, silence mental loops, and teach your body to naturally access deep, restorative sleep.",
    trustBadges: [
      "Calm for nocturnal anxiety & insomnia",
      "100% natural, medication-free approach",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "Free 15-min preliminary consultation · 70 €/session",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW THERAPY HELPS YOU",
    symptomsTitle: "SIGNS OF INSOMNIA & NOCTURNAL ANXIETY",
    symptomsSubtitle:
      "Involuntary physiological alert patterns that interrupt the natural transition to deep sleep.",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "RECLAIM RESTFUL SLEEP & NIGHTTIME CALM",
    formSubtitle:
      "Fill out this brief form to discuss your sleep situation or book a session. If you prefer, we can hold a free 15-minute preliminary phone consultation without commitment.",
  },
};
