import type { ServiceLandingPageData } from "@/components/service-landing-page";

export interface ServicesDictionary {
  weightPage: ServiceLandingPageData;
  nervousHabitsPage: ServiceLandingPageData;
  sportsPage: ServiceLandingPageData;
  fearsPage: ServiceLandingPageData;
  confidencePage: ServiceLandingPageData;
  focusPage: ServiceLandingPageData;
}

export const servicesEs: ServicesDictionary = {
  weightPage: {
    eyebrow: "RELACIÓN SANA CON LA COMIDA · HIPNOSIS EN SUECA Y VALENCIA",
    title: "CONTROL DE PESO CON HIPNOSIS: CALMAR EL HAMBRE EMOCIONAL Y RECONECTAR CON TU CUERPO",
    subtitle:
      "Comer compulsivamente no es falta de voluntad; es una respuesta automática del sistema nervioso ante el estrés, el aburrimiento o el vacío emocional.",
    introText:
      "¿Cuántas veces has empezado una dieta estricta prometiéndote que esta vez sería diferente, solo para terminar picoteando por la noche con una enorme sensación de culpa? Cuando la comida se convierte en el anestésico contra el cansancio o la tensión diaria, forzarte a no comer solo genera más obsesión. Con hipnosis trabajamos en el origen automático del impulso: desactivamos el ansia por dulces o ultraprocesados, restauramos la señal biológica de saciedad y te ayudamos a construir una relación tranquila, libre y sostenible con tu cuerpo.",
    trustBadges: [
      "Sin dietas restrictivas ni efecto rebote",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Sesiones individuales de 1h · 70 € (a tu propio ritmo)",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA HIPNOSIS",
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
      "El hambre física se calma en el estómago; el hambre emocional busca calmarse en la mente. La hipnosis enseña a tu sistema nervioso a regularse sin necesitar la comida como refugio.",
    whyTitle: "¿POR QUÉ LAS DIETAS TRADICIONALES FALLAN CUANDO HAY ANSIEDAD?",
    whyParagraphs: [
      "Las dietas se centran exclusivamente en qué y cuánto pones en el plato, pero ignoran por qué abres la nevera en primer lugar. Si utilizas la comida para calmar el estrés, la soledad o el agotamiento, retirar la comida por la fuerza deja a tu sistema nervioso sin su mecanismo habitual de consuelo, provocando que tarde o temprano aparezca el desbordamiento.",
      "La comida rica en azúcares y grasas estimula intensamente los circuitos de recompensa y dopamina del cerebro. Cuando repites esa asociación durante meses o años, se crea un carril neuronal automático que se activa antes de que tu mente racional pueda intervenir.",
      "La hipnosis actúa sobre esos patrones subcorticales. Te permite sentir saciedad antes, disfrutar de porciones adecuadas sin esfuerzo, saborear conscientemente y desvincular el alivio emocional del acto de comer, logrando una regulación natural y duradera.",
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
      "Resolución de dudas previa sin compromiso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "DA EL PRIMER PASO HACIA UNA ALIMENTACIÓN EN PAZ",
    formSubtitle:
      "Rellena este breve formulario para consultar tus dudas o solicitar tu sesión. Te responderé personalmente con total cercanía.",
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
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE HIPNOSIS Y CONTROL DE PESO",
    faqsSubtitle: "Respuestas claras a las dudas más habituales sobre el acompañamiento:",
    faqs: [
      {
        q: "¿La hipnosis para control de peso sustituye a un nutricionista o médico?",
        a: "No. Mi trabajo es de desarrollo personal y gestión de patrones automáticos: ayuda a resolver el componente emocional y conductual que sabotea tu alimentación. Si necesitas pautas médicas o nutricionales clínicas, te animo a coordinarlo con profesionales sanitarios.",
      },
      {
        q: "¿Se utiliza la técnica de banda gástrica virtual o hipnótica?",
        a: "Utilizamos sugestiones y visualizaciones de reducción de capacidad y saciedad temprana basadas en evidencia, adaptadas a tu caso particular, para que te sientas satisfecho/a con mucha menor cantidad de comida de forma completamente natural.",
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
    eyebrow: "DESACTIVAR AUTOMATISMOS · HIPNOSIS EN SUECA Y VALENCIA",
    title: "DEJAR DE MORDERSE LAS UÑAS Y SUPERAR HÁBITOS NERVIOSOS CON HIPNOSIS",
    subtitle:
      "La onicofagia y los gestos compulsivos no son 'malas costumbres': son válvulas de escape automáticas ante la tensión involuntaria.",
    introText:
      "Llevarte las manos a la boca mientras conduces, morderte las uñas y padrastros frente a la pantalla del ordenador, apretar los dientes o arrancarte pellejitos sin darte cuenta. Has probado esmaltes de sabor amargo, tiritas y propósitos de año nuevo, pero en cuanto tu atención se distrae, el cuerpo vuelve al mismo gesto. Con hipnosis aplicada no forzamos la contención: enseñamos al cerebro a descargar la microtensión de forma fisiológica y reprogramamos el reflejo involuntario para que tus manos descansen tranquilas.",
    trustBadges: [
      "Eficaz donde la fuerza de voluntad ha fallado",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Sesiones individuales de 1h · 70 € (a tu propio ritmo)",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA HIPNOSIS",
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
      "Estos hábitos no son falta de fuerza de voluntad; son bucles senso-motores involuntarios que el cerebro automatizó para autorregular el sistema nervioso. La hipnosis sustituye ese bucle en la raíz.",
    whyTitle: "¿POR QUÉ LOS REMEDIOS CASEROS Y EL ESMALTE AMARGO NO FUNCIONAN?",
    whyParagraphs: [
      "Los esmaltes amargos o el esfuerzo consciente intentan corregir el problema en el último eslabón de la cadena: cuando la mano ya está en la boca. Pero el disparador ocurrió segundos antes en forma de micro-ansiedad, aburrimiento o necesidad de concentración profunda.",
      "Al frenar conscientemente el gesto, la tensión interna no se disuelve; de hecho, suele aumentar la inquietud, haciendo que el impulso regrese con más fuerza en cuanto baja la guardia racional.",
      "En hipnosis intervenimos en la fase de anticipación subconsciente: enseñamos al cuerpo a reconocer el impulso antes de que se ejecute la acción física y reentrenamos una respuesta refleja de serenidad y soltura motora.",
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
      "Resolución de dudas previa sin compromiso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "LIBÉRATE DEL HÁBITO Y RECUPERA TUS MANOS",
    formSubtitle:
      "Rellena este formulario para consultar tu caso o pedir cita. Te responderé personalmente con total cercanía.",
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
    faqsSubtitle: "Respuestas claras a dudas comunes sobre la hipnosis para hábitos adquiridos:",
    faqs: [
      {
        q: "Llevo mordiéndome las uñas desde niño/a, ¿se puede cambiar tras tantos años?",
        a: "Sí. La plasticidad cerebral no tiene edad. Aunque lleves 20 o 30 años con el hábito, la hipnosis permite crear nuevas asociaciones neuronales mucho más rápido porque trabaja con la memoria procedimental involuntaria.",
      },
      {
        q: "¿Cuántas sesiones suelen ser necesarias para la onicofagia?",
        a: "Muchas personas frenan el impulso drásticamente tras la primera o segunda sesión. Normalmente con 2 o 3 sesiones es suficiente para consolidar el reflejo y permitir que las uñas crezcan con total normalidad.",
      },
      {
        q: "¿Sirve también para bruxismo diurno o pellizcarse la piel?",
        a: "Absolutamente. El mecanismo neurobiológico es idéntico: una descarga motora automática ante tensión subliminal. En hipnosis reeducamos la relajación miofascial y muscular consciente e inconsciente.",
      },
      {
        q: "¿Dónde se realizan las sesiones presenciales?",
        a: "En Sueca (Centro Sanar, muy accesible desde Cullera, Alzira, Algemesí y la comarca de la Ribera Baixa), a domicilio en casas de particulares en Valencia ciudad, o en formato online.",
      },
    ],
  },

  sportsPage: {
    eyebrow: "FOCO, RENDIMIENTO Y FLUJO · HIPNOSIS EN SUECA Y VALENCIA",
    title: "HIPNOSIS PARA EL DEPORTE: RENDIMIENTO, CONSTANCIA Y CONTROL MENTAL",
    subtitle:
      "En el deporte, el cuerpo llega hasta donde la mente le permite. Entrena tu diálogo interno y compite en estado de flujo.",
    introText:
      "Entrenas duro, cumples con la preparación física y conoces la técnica al detalle. Sin embargo, cuando llega el día de la competición o un momento decisivo, los nervios te atenazan, la respiración se acelera y tu cuerpo no responde con la soltura de los entrenamientos. O quizá te cuesta encontrar la constancia diaria para calzarte las zapatillas tras un parón o una lesión. Con hipnosis aplicada al rendimiento deportivo alineamos tu mente inconsciente con tus objetivos físicos: visualización motora de alta precisión, gestión del dolor y la fatiga, y un estado mental inquebrantable de confianza.",
    trustBadges: [
      "Utilizado por deportistas de élite y populares",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Sesiones individuales de 1h · 70 € (a tu propio ritmo)",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA HIPNOSIS",
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
      "La visualización hipnótica activa exactamente las mismas redes neuronales y musculares que el entrenamiento físico real. Es el entrenamiento invisible definitivo para afianzar la memoria motora sin fatiga articular.",
    whyTitle: "CÓMO POTENCIA LA HIPNOSIS EL RENDIMIENTO DEPORTIVO",
    whyParagraphs: [
      "En los momentos de máxima exigencia deportiva, pensar demasiado es el peor enemigo del rendimiento. Cuando el córtex prefrontal intenta controlar cada movimiento en lugar de dejar actuar a la memoria motora automatizada, el cuerpo se vuelve rígido y lento.",
      "La hipnosis permite entrar voluntariamente en lo que la psicología deportiva denomina 'estado de flujo' (in the zone): un estado de absorción profunda donde la atención se estrecha al momento presente, desaparece el miedo al fallo y la ejecución técnica fluye con máxima eficacia.",
      "Además, mediante sugestiones posthipnóticas y anclajes propioceptivos, aprendes a activar de forma instantánea estados de potencia, calma o foco en el calentamiento previo a cualquier reto deportivo.",
    ],
    pillarsTitle: "PLAN DE ENTRENAMIENTO MENTAL CON HIPNOSIS",
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
      "Atención personalizada en Sueca, la comarca de la Ribera Baixa y Valencia ciudad:",
    locations: [
      {
        name: "Despacho en Sueca (Centro Sanar)",
        area: "Ribera Baixa",
        desc: "Espacio sereno, independiente y confidencial en Sueca. De muy fácil acceso para personas de Cullera, Alzira, Algemesí, Carcaixent, Sollana, Albalat de la Ribera, Corbera, Favara y El Perelló.",
      },
      {
        name: "A domicilio en Valencia ciudad",
        area: "Valencia capital y alrededores",
        desc: "Ideal si prefieres trabajar la preparación mental desde la tranquilidad y comodidad de tu propio hogar.",
      },
      {
        name: "Sesiones Online en directo",
        area: "Cualquier ubicación",
        desc: "Por videoconferencia individual en directo, con total flexibilidad de horarios para encajar con tu calendario de entrenamientos.",
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
      "Audios de visualización y autohipnosis pre-competición.",
      "Resolución de dudas previa sin compromiso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "IMPULSA TU RENDIMIENTO Y FORTALEZA MENTAL",
    formSubtitle:
      "Rellena este formulario para consultar tu caso deportivo o concertar una cita. Te responderé personalmente.",
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
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE HIPNOSIS DEPORTIVA",
    faqsSubtitle: "Respuestas a dudas habituales sobre el entrenamiento mental con hipnosis:",
    faqs: [
      {
        q: "¿Es la hipnosis deportiva solo para profesionales o también para aficionados?",
        a: "Es igualmente eficaz para ambos. Desde corredores populares o ciclistas que quieren superar sus marcas, hasta deportistas federados o de competición que buscan dar un salto cualitativo en su temple y seguridad bajo presión.",
      },
      {
        q: "¿Cómo ayuda la hipnosis con la motivación para entrenar a diario?",
        a: "La motivación forzada se agota pronto. Con hipnosis conectamos con el placer intrínseco del movimiento y la satisfacción del esfuerzo, haciendo que ponerse en marcha deje de requerir una lucha interna agotadora.",
      },
      {
        q: "¿Se puede trabajar el miedo a recaer tras una lesión física ya curada?",
        a: "Sí, es uno de los campos más agradecidos. Cuando el traumatólogo o fisioterapeuta da el alta médica, el cerebro a menudo mantiene un reflejo de hiperprotección y tensión involuntaria. Con hipnosis le enseñamos al cuerpo que la zona ya es segura y fuerte.",
      },
      {
        q: "¿Dónde se realizan las sesiones?",
        a: "En mi despacho de Sueca (Centro Sanar, Ribera Baixa), a domicilio en Valencia ciudad para tu comodidad, o de forma online mediante videollamada.",
      },
    ],
  },

  fearsPage: {
    eyebrow: "RECUPERAR TU LIBERTAD · HIPNOSIS EN SUECA Y VALENCIA",
    title: "SUPERAR MIEDOS Y FOBIAS CON HIPNOSIS: DESACTIVAR LA RESPUESTA DE PÁNICO",
    subtitle:
      "Sabes racionalmente que no hay peligro real, pero tu cuerpo reacciona como si tu vida estuviera en juego.",
    introText:
      "Miedo a subirte a un avión, pánico a conducir por autopistas o túneles (amaxofobia), terror a las agujas, claustrofobia en ascensores o bloqueo paralizante al exponerte ante un grupo. Cuando un miedo se consolida como fobia, la lógica no sirve de nada: la amígdala cerebral secuestra tu fisiología disparando palpitaciones, mareo, sudores y una necesidad desesperada de huir. Con hipnosis aplicada realizamos una desensibilización sistemática profunda en un estado de seguridad absoluta: enseñamos a tu cerebro a desaprender la asociación de amenaza para que recuperes tu tranquilidad y tu libertad de movimiento.",
    trustBadges: [
      "Proceso respetuoso, sin exposiciones traumáticas",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Sesiones individuales de 1h · 70 € (a tu propio ritmo)",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA HIPNOSIS",
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
      "Las fobias no son defectos de personalidad ni falta de valentía; son aprendizajes ultrarrápidos de supervivencia que quedaron grabados en el sistema nervioso. La hipnosis permite reescribir ese archivo de memoria.",
    whyTitle: "CÓMO DESACTIVA LA HIPNOSIS LAS ASOCIACIONES DE MIEDO",
    whyParagraphs: [
      "El miedo fóbico se almacena en la memoria implícita e involuntaria. Cuando te encuentras frente al estímulo, la información llega a la amígdala antes de que pase por la corteza cerebral reflexiva, desencadenando la respuesta refleja de 'lucha o huida'.",
      "Las terapias de choque o exposición forzada pueden resultar abrumadoras e incluso retraumatizantes si el cuerpo no dispone de un anclaje sólido de seguridad fisiológica.",
      "En hipnosis, colocamos a tu cuerpo en un estado parasimpático de profunda calma y relajación muscular. Desde ese espacio de total seguridad, exponemos a la mente a la situación de forma disociada y gradual, 'desacoplando' el estímulo del reflejo de alarma y reprogramando una respuesta neutra o tranquila.",
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
      "Resolución de dudas previa sin compromiso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "RECUPERA TU TRANQUILIDAD Y LIBERTAD",
    formSubtitle:
      "Rellena este formulario para consultar tu caso o solicitar cita. Te responderé personalmente con total cercanía.",
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
    faqsTitle: "PREGUNTAS FRECUENTES SOBRE MIEDOS Y FOBIAS",
    faqsSubtitle: "Respuestas claras a dudas comunes sobre el tratamiento con hipnosis:",
    faqs: [
      {
        q: "¿Tendré que enfrentarme a lo que me da miedo durante la sesión de forma brusca?",
        a: "No, en absoluto. Todo el trabajo se realiza de manera progresiva, suave y controlada en tu imaginación, manteniendo siempre el control y un estado corporal de descanso y seguridad.",
      },
      {
        q: "¿Sirve para el miedo a volar en avión o a conducir por autovía?",
        a: "Son dos de las consultas más frecuentes y con mejores resultados. La hipnosis permite desactivar la sensación de encierro o pérdida de control y entrenar a tu mente para viajar o conducir con total tranquilidad.",
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
    eyebrow: "SEGURIDAD INTERIOR · HIPNOSIS EN SUECA Y VALENCIA",
    title: "AUTOESTIMA Y CONFIANZA CON HIPNOSIS: DESACTIVAR LA VOZ AUTOCRÍTICA Y SENTIR TU VALOR",
    subtitle:
      "La verdadera seguridad personal no consiste en fingir que todo está bajo control, sino en sentirte legítimo/a tal y como eres.",
    introText:
      "Dudar constantemente de tus capacidades, sentirte como un fraude a punto de ser descubierto (síndrome del impostor), quedarte callado/a en reuniones para no equivocarte o ser incapaz de decir 'no' a las peticiones de los demás por miedo a decepcionar. La falta de confianza no se arregla repitiendo frases vacías en el espejo: se transforma cambiando el diálogo interno automático que aprendiste en el pasado. Con hipnosis trabajamos en el sustrato emocional profundo de tu identidad: liberamos viejas etiquetas limitantes, reforzamos tu asertividad y anclamos una sensación corporal sólida de presencia y serenidad.",
    trustBadges: [
      "Cambio profundo de narrativa interna",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Sesiones individuales de 1h · 70 € (a tu propio ritmo)",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA HIPNOSIS",
    symptomsTitle: "SEÑALES DE INSEGURIDAD Y FALTA DE CONFIANZA",
    symptomsSubtitle:
      "Patrones de diálogo interno y conducta que desgastan tu bienestar y frenan tus decisiones.",
    symptoms: [
      {
        title: "Síndrome del impostor",
        text: "Atribuir tus éxitos a la suerte y vivir con el miedo continuo a que los demás descubran que 'no eres suficiente'.",
      },
      {
        title: "Incapacidad para poner límites",
        text: "Aceptar compromisos por complacer o por temor al conflicto, acabando agotado/a, invisible y con resentimiento.",
      },
      {
        title: "Miedo paralizante al juicio ajeno",
        text: "Sentir que todas las miradas te juzgan, con nudo en la garganta y palpitaciones al hablar o exponerte en público.",
      },
      {
        title: "Crítica interna implacable",
        text: "Una voz mental exigente que magnifica cada error cometido y minimiza tus cualidades, logros y talentos.",
      },
    ],
    symptomsNote:
      "La inseguridad no es un rasgo innato con el que tengas que resignarte a vivir; es una creencia aprendida que se repite en piloto automático. Con hipnosis puedes actualizar esa autoimagen y recuperar tu fuerza.",
    whyTitle: "CÓMO TRANSFORMA LA HIPNOSIS LA SEGURIDAD PERSONAL",
    whyParagraphs: [
      "La confianza no es un concepto puramente intelectual, es una experiencia física. Cuando te sientes seguro/a, tu postura corporal se abre, tu voz es firme y tu respiración es amplia. Cuando domina la inseguridad, el cuerpo se contrae como si estuviera ante una amenaza inminente.",
      "Gran parte de nuestras dudas proceden de experiencias pasadas donde internalizamos juicios o comparaciones. Aunque hoy seamos personas adultas capaces, el cerebro emocional sigue reaccionando con viejos patrones automáticos de indefensión.",
      "En hipnosis accedemos a ese nivel profundo de autoconcepto, desactivamos las voces críticas heredadas y anclamos sensaciones somáticas de solidez, dignidad y merecimiento que se integran naturalmente en tu vida cotidiana.",
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
      "Resolución de dudas previa sin compromiso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "EMPIEZA A CREER EN TI CON TOTAL NATURALIDAD",
    formSubtitle:
      "Rellena este formulario para consultar tus dudas o concertar tu sesión. Te responderé personalmente con total cercanía.",
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
        q: "¿La hipnosis me hará volverme arrogante o cambiar mi personalidad?",
        a: "En absoluto. La verdadera confianza no necesita pisar a nadie ni fingir superioridad. La hipnosis fomenta una seguridad tranquila, amable y honesta, donde puedes ser tú mismo/a sin tener que protegerte continuamente.",
      },
      {
        q: "¿Ayuda la hipnosis a superar el miedo a hablar en público o exponer ideas?",
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
    eyebrow: "RENDIMIENTO INTELECTUAL Y CLARIDAD · HIPNOSIS EN SUECA Y VALENCIA",
    title: "CONCENTRACIÓN, FOCO Y ESTUDIO CON HIPNOSIS: PREPARAR OPOSICIONES Y RETOS CON CALMA",
    subtitle:
      "Estudiar con ansiedad bloquea la memoria. Entrena a tu cerebro para asimilar conocimientos con claridad y rendir al máximo bajo presión.",
    introText:
      "Pasar horas frente a los apuntes leyendo el mismo párrafo sin retener nada, dispersarte con el móvil cada diez minutos, sentir que el tiempo se agota antes de tu examen u oposición y sufrir el temido 'bloqueo en blanco' durante las pruebas. La capacidad de concentración no depende de pasar más horas sufriendo en la silla, sino del estado neurobiológico en el que estudias. Con hipnosis aplicada entrenamos estados de atención focalizada profunda (ondas alfa y theta), optimizamos la retención mnémica y te enseñamos a gestionar la presión para que demuestres en el examen todo lo que has trabajado.",
    trustBadges: [
      "Ideal para opositores y estudiantes universitarios",
      "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
      "Sesiones individuales de 1h · 70 € (a tu propio ritmo)",
    ],
    ctaPrimary: "RESERVAR SESIÓN O CONSULTAR",
    ctaSecondary: "CÓMO TE AYUDA LA HIPNOSIS",
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
      "Cuando los niveles de cortisol se disparan por el estrés, el hipocampo (responsable de recuperar la memoria) se inhibe biológicamente. La hipnosis mantiene tu canal de memoria abierto y disponible bajo presión.",
    whyTitle: "CÓMO MULTIPLICA LA HIPNOSIS LA CAPACIDAD DE ESTUDIO",
    whyParagraphs: [
      "La concentración no es una cuestión de forzar los ojos sobre el papel; es un estado de calma atenta. En hipnosis inducimos de forma voluntaria ondas cerebrales alfa, las mismas que se producen en los momentos de inspiración y aprendizaje acelerado.",
      "Además de mejorar el foco durante el estudio, la hipnosis es la herramienta más eficaz contra el pánico a los exámenes: desensibiliza la situación de evaluación y reprograma las respuestas de alarma del cuerpo ante tribunales u hojas de examen.",
      "Mediante anclajes de memoria y sugestiones de claridad, el estudiante aprende a asociar el momento de la prueba con lucidez, tranquilidad y confianza en su preparación previa.",
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
      "Resolución de dudas previa sin compromiso.",
    ],
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "ENTRENA TU MENTE PARA RENDIR AL MÁXIMO",
    formSubtitle:
      "Rellena este formulario para consultar tu situación u oposiciones. Te responderé personalmente con total cercanía.",
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
    faqsSubtitle: "Respuestas claras a dudas comunes sobre el foco mental con hipnosis:",
    faqs: [
      {
        q: "¿La hipnosis me hará aprender el temario sin estudiar?",
        a: "No, la hipnosis no sustituye las horas de estudio ni hace milagros. Lo que hace es optimizar radicalmente cada hora que dedicas: multiplica tu capacidad de asimilación, evita el desgaste mental y te asegura que el día del examen puedas volcar tus conocimientos con tranquilidad.",
      },
      {
        q: "¿Es útil para opositores a judicatura, sanidad, docencia o policía?",
        a: "Es extraordinariamente útil. Los opositores soportan una presión sostenida durante meses o años que agota el sistema nervioso. La hipnosis les ayuda a regular el descanso, mantener la motivación y llegar al examen en su mejor estado cognitivo.",
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
};

export const servicesVa: ServicesDictionary = {
  weightPage: {
    ...servicesEs.weightPage,
    eyebrow: "RELACIÓ SANA AMB EL MENJAR · HIPNOSI A SUECA I VALÈNCIA",
    title: "CONTROL DE PES AMB HIPNOSI: CALMAR LA FONA EMOCIONAL I RECONNECTAR AMB EL COS",
    subtitle:
      "Menjar de manera compulsiva no és falta de voluntat; és una resposta automàtica del sistema nerviós davant l'estrés, l'avorriment o el buit emocional.",
    introText:
      "Quantes vegades has començat una dieta estricta prometent-te que esta vegada seria diferent, només per acabar picant a la nit amb una enorme sensació de culpa? Quan el menjar es convertix en l'anestèsic contra el cansament o la tensió diària, forçar-te a no menjar només genera més obsessió. Amb hipnosi treballem en l'origen automàtic de l'impuls: desactivam l'ànsia per dolços o ultraprocessats, restaurem el senyal biològic de sacietat i t'ajudem a construir una relació tranquil·la, lliure i sostenible amb el teu cos.",
    trustBadges: [
      "Sense dietes restrictives ni efecte rebot",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Sessions individuals d'1h · 70 € (al teu propi ritme)",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA HIPNOSI",
    symptomsTitle: "PATRONS HABITUALS EN EL MENJAR EMOCIONAL",
    symptomsSubtitle:
      "El problema no és que no sàpigues què menjar; el problema és que el cos busca menjar en pilot automàtic.",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "FES EL PRIMER PAS CAP A UNA ALIMENTACIÓ EN PAU",
    formSubtitle:
      "Emplena este breu formulari per a consultar els teus dubtes o demanar la teua sessió. Et respondré personalment amb total proximitat.",
  },

  nervousHabitsPage: {
    ...servicesEs.nervousHabitsPage,
    eyebrow: "DESACTIVAR AUTOMATISMES · HIPNOSI A SUECA I VALÈNCIA",
    title: "DEIXAR DE ROSTEGAR-SE LES UNGLES I SUPERAR HÀBITS NERVIOSOS AMB HIPNOSI",
    subtitle:
      "L'onicofàgia i els gestos compulsius no són 'males costums': són vàlvules d'escapament automàtiques davant la tensió involuntària.",
    introText:
      "Portar-te les mans a la boca mentre condueixes, rostegar-te les ungles davant de la pantalla de l'ordinador, prémer les dents o arrancar-te pellenets sense adonar-te'n. Amb hipnosi aplicada no forcem la contenció: ensenyem al cervell a descarregar la microtensió de forma fisiològica i reprogramem el reflex involuntari perquè les teues mans descansen tranquil·les.",
    trustBadges: [
      "Eficaç on la força de voluntat ha fallat",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Sessions individuals d'1h · 70 € (al teu propi ritme)",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA HIPNOSI",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "ALLIBERA'T DE L'HÀBIT I RECUPERA LES TEUES MANS",
    formSubtitle:
      "Emplena este formulari per a consultar el teu cas o demanar cita. Et respondré personalment amb total proximitat.",
  },

  sportsPage: {
    ...servicesEs.sportsPage,
    eyebrow: "FOCUS, RENDIMENT I FLUX · HIPNOSI A SUECA I VALÈNCIA",
    title: "HIPNOSI PER A L'ESPORT: RENDIMENT, CONSTÀNCIA I CONTROL MENTAL",
    subtitle:
      "En l'esport, el cos arriba fins on la ment li permet. Entrena el teu diàleg intern i competix en estat de flux.",
    introText:
      "Entrenes de valent, complixes amb la preparació física i coneixes la tècnica al detall. Tanmateix, quan arriba el dia de la competició o un moment decisiu, els nervis t'atenallen i el cos no respon amb la soltesa habitual. Amb hipnosi aplicada al rendiment esportiu alineem la teua ment inconscient amb els teus objectius físics: visualització motora d'alta precisió, gestió de la fatiga i confiança incondicional.",
    trustBadges: [
      "Utilitzat per esportistes d'elit i populars",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Sessions individuals d'1h · 70 € (al teu propi ritme)",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA HIPNOSI",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "IMPULSA EL TEU RENDIMENT I FORTALESA MENTAL",
    formSubtitle:
      "Emplena este formulari per a consultar el teu repte esportiu. Et respondré personalment.",
  },

  fearsPage: {
    ...servicesEs.fearsPage,
    eyebrow: "RECUPERAR LA TEUA LLIBERTAT · HIPNOSI A SUECA I VALÈNCIA",
    title: "SUPERAR PORS I FÒBIES AMB HIPNOSI: DESACTIVAR LA RESPOSTA DE PÀNIC",
    subtitle:
      "Saps racionalment que no hi ha perill real, però el teu cos reacciona com si la teua vida estiguera en joc.",
    introText:
      "Por a volar en avió, pànic a conduir per autopistes o túnels, terror a les agulles, claustrofòbia o bloqueig paralitzant en exposar-te davant d'un grup. Amb hipnosi aplicada realitzem una desensibilització sistemàtica profunda en un estat de seguretat absoluta: ensenyem al teu cervell a desaprendre l'associació d'amenaça perquè recuperes la teua tranquil·litat.",
    trustBadges: [
      "Procés respectuós, sense exposicions traumàtiques",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Sessions individuals d'1h · 70 € (al teu propi ritme)",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA HIPNOSI",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "RECUPERA LA TEUA TRANQUIL·LITAT I LLIBERTAT",
    formSubtitle:
      "Emplena este formulari per a consultar el teu cas o demanar cita. Et respondré personalment amb total proximitat.",
  },

  confidencePage: {
    ...servicesEs.confidencePage,
    eyebrow: "SEGURETAT INTERIOR · HIPNOSI A SUECA I VALÈNCIA",
    title:
      "AUTOESTIMA I CONFIANÇA AMB HIPNOSI: DESACTIVAR LA VEU AUTOCRÍTICA I SENTIR EL TEU VALOR",
    subtitle:
      "La vertadera seguretat personal no consistix a fingir que tot està sota control, sinó a sentir-te legítim/a tal com eres.",
    introText:
      "Dubtar constantment de les teues capacitats, sentir-te com un frau (síndrome de l'impostor), callar en reunions o ser incapaç de dir 'no'. Amb hipnosi treballem en el substrat emocional profund de la teua identitat: alliberem velles etiquetes limitants, reforcem la teua assertivitat i ancorem una sensació corporal sòlida de presència i serenitat.",
    trustBadges: [
      "Canvi profund de narrativa interna",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Sessions individuals d'1h · 70 € (al teu propi ritme)",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA HIPNOSI",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "COMENÇA A CONFIAR EN TU AMB TOTAL NATURALITAT",
    formSubtitle:
      "Emplena este formulari per a consultar els teus dubtes o demanar sessió. Et respondré personalment.",
  },

  focusPage: {
    ...servicesEs.focusPage,
    eyebrow: "RENDIMENT INTEL·LECTUAL I CLARESA · HIPNOSI A SUECA I VALÈNCIA",
    title: "CONCENTRACIÓ, FOCUS I ESTUDI AMB HIPNOSI: PREPARAR OPOSICIONS I REPTES AMB CALMA",
    subtitle:
      "Estudiar amb angoixa bloqueja la memòria. Entrena el teu cervell per assimilar coneixements amb claredat i rendir al màxim sota pressió.",
    introText:
      "Passar hores davant dels apunts sense retindre res, dispersar-te amb el mòbil, patir pel temps abans d'un examen o oposició i patir el temut 'bloqueig en blanc'. Amb hipnosi aplicada entrenem estats d'atenció focalitzada profunda, optimitzem la retenció mnèmica i t'ensenyem a gestionar la pressió perquè demostres tot el que has treballat.",
    trustBadges: [
      "Ideal per a opositors i estudiants universitaris",
      "Sueca (Centre Sanar) · A domicili a València · En línia",
      "Sessions individuals d'1h · 70 € (al teu propi ritme)",
    ],
    ctaPrimary: "RESERVAR SESSIÓ O CONSULTAR",
    ctaSecondary: "COM T'AJUDA LA HIPNOSI",
    pricingTitle: "PREUS CLARS I CONDICIONS TRANSPARENTS",
    priceNote: "Al teu propi ritme · Sense compromisos obligatoris",
    formEyebrow: "CONSULTA O RESERVA",
    formTitle: "ENTRENA LA TEUA MENT PER A RENDIR AL MÀXIM",
    formSubtitle:
      "Emplena este formulari per a consultar la teua situació o oposició. Et respondré personalment.",
  },
};

export const servicesEn: ServicesDictionary = {
  weightPage: {
    ...servicesEs.weightPage,
    eyebrow: "HEALTHY RELATIONSHIP WITH FOOD · HYPNOSIS IN SUECA & VALENCIA",
    title: "WEIGHT CONTROL WITH HYPNOSIS: CALMING EMOTIONAL HUNGER & RECONNECTING WITH YOUR BODY",
    subtitle:
      "Compulsive eating is not a lack of willpower; it is an automatic nervous system response to stress, boredom or emotional emptiness.",
    introText:
      "How many times have you started a strict diet promising yourself that this time would be different, only to end up late-night snacking accompanied by deep guilt? When food becomes an emotional anesthetic against daily exhaustion, forcing yourself not to eat only breeds more obsession. With hypnosis, we address the automatic root: disabling cravings for sugar and processed foods, restoring biological satiety signals, and helping you build a peaceful, lasting relationship with food and your body.",
    trustBadges: [
      "No restrictive diets or rebound effect",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "1-hour individual sessions · 70 € (at your own pace)",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW HYPNOSIS HELPS YOU",
    symptomsTitle: "COMMON PATTERNS IN EMOTIONAL EATING",
    symptomsSubtitle:
      "The issue is not knowing what to eat; it is your body reaching for food on autopilot.",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "TAKE THE FIRST STEP TOWARDS PEACEFUL EATING",
    formSubtitle:
      "Fill out this brief form to ask any questions or request your session. I will reply to you personally.",
  },

  nervousHabitsPage: {
    ...servicesEs.nervousHabitsPage,
    eyebrow: "DISABLE AUTOMATIC HABITS · HYPNOSIS IN SUECA & VALENCIA",
    title: "STOP NAIL BITING & OVERCOME NERVOUS HABITS WITH HYPNOSIS",
    subtitle:
      "Nail biting and compulsive gestures are not 'bad manners': they are automatic release valves for subconscious tension.",
    introText:
      "Reaching for your nails while driving, biting cuticles in front of your computer screen, clenching your jaw, or picking at skin without realizing it. You have tried bitter nail polishes, bandages and New Year's resolutions, but the moment your conscious attention wanders, the body repeats the gesture. With hypnosis, we do not rely on exhausting self-restraint: we teach your nervous system to release tension physiologically and retrain the motor reflex so your hands remain calm.",
    trustBadges: [
      "Effective where willpower has failed",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "1-hour individual sessions · 70 € (at your own pace)",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW HYPNOSIS HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "FREE YOURSELF FROM THE HABIT AND RECLAIM YOUR HANDS",
    formSubtitle:
      "Fill out this form to inquire about your case or book a session. I will reply to you personally.",
  },

  sportsPage: {
    ...servicesEs.sportsPage,
    eyebrow: "FOCUS, PERFORMANCE & FLOW · HYPNOSIS IN SUECA & VALENCIA",
    title: "SPORTS HYPNOSIS: PERFORMANCE, CONSISTENCY & MENTAL TOUGHNESS",
    subtitle:
      "In sports, the body only reaches where the mind permits. Train your inner dialogue and compete in flow state.",
    introText:
      "You train hard, follow physical conditioning, and master the technique. Yet, when race day or competition pressure arrives, nervousness tightens your muscles and your body does not respond with its usual fluidity. Or perhaps you struggle with consistency to lace up your running shoes after an injury or hiatus. With sports hypnosis, we align your subconscious with your physical goals: motor imagery precision, fatigue management, and unshakeable confidence.",
    trustBadges: [
      "Used by competitive and recreational athletes",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "1-hour individual sessions · 70 € (at your own pace)",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW HYPNOSIS HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "BOOST YOUR ATHLETIC PERFORMANCE & MENTAL FOCUS",
    formSubtitle:
      "Fill out this form to discuss your sports goals or book a session. I will reply to you personally.",
  },

  fearsPage: {
    ...servicesEs.fearsPage,
    eyebrow: "RECLAIM YOUR FREEDOM · HYPNOSIS IN SUECA & VALENCIA",
    title: "OVERCOMING FEARS & PHOBIAS WITH HYPNOSIS: TURNING OFF THE PANIC ALARM",
    subtitle:
      "You know rationally there is no actual threat, but your body reacts as if survival were at stake.",
    introText:
      "Fear of flying, motorway driving phobia, fear of needles, claustrophobia or debilitating stage fright before speaking. When a fear becomes a phobia, logic is powerless: the amygdala triggers racing heartbeats, dizziness, and a desperate urge to flee. With hypnosis, we conduct deep, gentle desensitization in a state of absolute bodily safety, decoupling the trigger from panic so you reclaim ease and freedom of movement.",
    trustBadges: [
      "Gentle process, zero traumatic exposure",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "1-hour individual sessions · 70 € (at your own pace)",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW HYPNOSIS HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "RESTORE YOUR PEACE OF MIND AND FREEDOM",
    formSubtitle:
      "Fill out this form to inquire about your situation or book a session. I will reply to you personally.",
  },

  confidencePage: {
    ...servicesEs.confidencePage,
    eyebrow: "INNER SECURITY · HYPNOSIS IN SUECA & VALENCIA",
    title: "SELF-ESTEEM & CONFIDENCE WITH HYPNOSIS: SILENCING THE INNER CRITIC",
    subtitle:
      "Genuine confidence is not about pretending everything is under control, but feeling grounded and legitimate as you are.",
    introText:
      "Constantly doubting your abilities, feeling like an impostor waiting to be exposed, staying silent in meetings or struggling to say 'no' to others for fear of letting them down. Confidence is not rebuilt through empty mirror affirmations: it changes by transforming the automatic internal dialogue learned in the past. With hypnosis, we release old limiting beliefs and anchor somatic sensations of presence, dignity, and calm assertiveness.",
    trustBadges: [
      "Deep shift in internal narrative",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "1-hour individual sessions · 70 € (at your own pace)",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW HYPNOSIS HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "START TRUSTING YOURSELF NATURALLY",
    formSubtitle:
      "Fill out this form to ask any questions or arrange a session. I will reply to you personally.",
  },

  focusPage: {
    ...servicesEs.focusPage,
    eyebrow: "INTELLECTUAL PERFORMANCE & CLARITY · HYPNOSIS IN SUECA & VALENCIA",
    title: "CONCENTRATION, FOCUS & STUDY WITH HYPNOSIS: PREPARING EXAMS CALMLY",
    subtitle:
      "Studying under anxiety blocks memory retrieval. Train your mind to absorb knowledge with clarity and perform at your best.",
    introText:
      "Staring at the same page without retaining anything, getting distracted by your phone every ten minutes, feeling panic as exam dates approach, and dreading going blank during the test. Concentration is not about suffering longer hours at your desk; it depends on your neurobiological state while studying. With hypnosis, we train alpha-wave deep focus, enhance retention, and teach you to stay composed under test pressure.",
    trustBadges: [
      "Ideal for competitive exams & university students",
      "Sueca (Centro Sanar) · Home visits in Valencia · Online",
      "1-hour individual sessions · 70 € (at your own pace)",
    ],
    ctaPrimary: "BOOK A SESSION OR INQUIRE",
    ctaSecondary: "HOW HYPNOSIS HELPS YOU",
    pricingTitle: "CLEAR PRICING & HONEST CONDITIONS",
    priceNote: "At your own pace · No mandatory commitments",
    formEyebrow: "INQUIRY OR BOOKING",
    formTitle: "TRAIN YOUR MIND TO PERFORM AT ITS PEAK",
    formSubtitle:
      "Fill out this form to inquire about your studies or book a session. I will reply to you personally.",
  },
};
