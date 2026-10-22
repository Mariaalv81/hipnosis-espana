export interface QrServiceCard {
  title: string;
  badge: string;
  description: string;
  points: string[];
  linkTo: string;
  linkText: string;
  ctaMotive: string;
}

export interface QrTestimonial {
  quote: string;
  author: string;
  detail: string;
}

export interface QrPageData {
  seoTitle: string;
  seoDescription: string;
  pill: string;
  title: string;
  subtitle: string;
  intro: string;
  trustCredentials: string[];

  // Fast track buttons
  whatsappCta: string;
  whatsappPrefilled: string;
  valuationCta: string;
  valuationSubtext: string;

  // Services section
  servicesEyebrow: string;
  servicesTitle: string;
  servicesSubtitle: string;
  services: QrServiceCard[];

  // Professional block
  proEyebrow: string;
  proTitle: string;
  proSubtitle: string;
  proText: string;
  proHighlights: string[];
  proCta: string;
  proWhatsAppCta: string;
  proWhatsAppPrefilled: string;

  // Philosophy / How it works
  howEyebrow: string;
  howTitle: string;
  howSubtitle: string;
  howPoints: {
    title: string;
    text: string;
  }[];

  // Testimonials
  testimonialsEyebrow: string;
  testimonialsTitle: string;
  testimonials: QrTestimonial[];

  // Form section
  formEyebrow: string;
  formTitle: string;
  formSubtitle: string;
  formLabels: {
    name: string;
    phone: string;
    email: string;
    reason: string;
    modality: string;
    message: string;
    submit: string;
    submitting: string;
    consent: string;
  };
  formReasonOptions: string[];
  formModalityOptions: string[];
  formSuccessTitle: string;
  formSuccessText: string;
  formMailtoFallback: string;

  // Locations / Modalities box
  locationTitle: string;
  locations: {
    title: string;
    text: string;
  }[];

  // Final CTA Banner
  finalTitle: string;
  finalText: string;
  finalPrimaryCta: string;
}

export const qrContentEs: QrPageData = {
  seoTitle: "María A. Cabo · Hipnosis y Desarrollo Personal | Tarjeta de Visita",
  seoDescription:
    "Portal de bienvenida para contactos de tarjeta de visita. Especialista en Hipnosis Ericksoniana en Sueca, Valencia y online. Solicita tu valoración gratuita de 15 min o habla conmigo por WhatsApp.",
  pill: "TARJETA DE VISITA DIGITAL · BIENVENIDA/O",
  title: "MARÍA A. CABO",
  subtitle: "Especialista en Hipnosis Ericksoniana y Desarrollo Personal",
  intro:
    "Si estás aquí es porque nos hemos conocido en persona o tienes mi tarjeta en tus manos. He diseñado esta página para que tengas en un vistazo directo qué problemas resuelvo, cómo trabajamos y las formas más directas de consultarme sin compromiso.",
  trustCredentials: [
    "Psicoterapia integrada con hipnosis",
    "Formada en el Instituto Erickson Madrid",
    "Despacho presencial en Sueca (Centro Sanar)",
    "A domicilio en Valencia ciudad y formato Online",
  ],

  whatsappCta: "Abrir conversación en WhatsApp",
  whatsappPrefilled:
    "Hola María, he escaneado el código QR de tu tarjeta de visita y me gustaría consultarte...",
  valuationCta: "Pedir llamada de valoración (15 min)",
  valuationSubtext: "Gratuita y sin compromiso · Por teléfono o videollamada",

  servicesEyebrow: "¿QUÉ DESEAS CAMBIAR?",
  servicesTitle: "ÁREAS DE ACOMPAÑAMIENTO CON HIPNOSIS",
  servicesSubtitle:
    "La hipnosis clínica ericksoniana actúa directamente sobre los hábitos, automatismos y respuestas reflejas del sistema nervioso:",
  services: [
    {
      title: "Dejar de Fumar",
      badge: "Programa Intensivo de 3 Sesiones",
      description:
        "Desactiva el impulso automático de fumar sin pasar por semanas de lucha, ansiedad ni sustitutos químicos.",
      points: [
        "Elimina la asociación mental del cigarrillo con el café, el estrés o las comidas.",
        "Refuerza la determinación y protege contra las recaídas.",
        "Incluye entrevista previa de 15 minutos sin compromiso.",
      ],
      linkTo: "/dejar-de-fumar",
      linkText: "Ver detalles del programa antitabaco",
      ctaMotive: "Dejar de Fumar",
    },
    {
      title: "Ansiedad y Estrés Cotidiano",
      badge: "Sesiones Individuales",
      description:
        "Enseña a tu cuerpo y a tu mente a desactivar la respuesta física de alarma y el miedo anticipatorio.",
      points: [
        "Ataques de pánico, presión en el pecho y pensamientos en bucle.",
        "Miedos concretos (conducir, hablar en público, fobias).",
        "Herramientas somáticas de autorregulación que te llevas contigo.",
      ],
      linkTo: "/ansiedad",
      linkText: "Conocer abordaje de la ansiedad",
      ctaMotive: "Ansiedad y Estrés",
    },
    {
      title: "Insomnio y Descanso Profundo",
      badge: "Sesiones Individuales",
      description:
        "Apaga la rumiación nocturna y recupera el sueño continuo, natural y reparador sin recurrir a fármacos.",
      points: [
        "Desconecta la tensión mental al acostarte para conciliar el sueño con calma.",
        "Reduce los despertares a medianoche y la sensación de cansancio al despertar.",
        "Reentrena el ritmo biológico parasimpático del descanso.",
      ],
      linkTo: "/insomnio",
      linkText: "Leer sobre insomnio y descanso",
      ctaMotive: "Insomnio y Descanso",
    },
    {
      title: "Hábitos, Autoestima y Rendimiento",
      badge: "Procesos Personalizados",
      description:
        "Intervención focalizada sobre automatismos inconscientes que boicotean tu bienestar diario.",
      points: [
        "Control de peso: calmar el hambre emocional y el picoteo inconsciente.",
        "Hábitos nerviosos: dejar de morderse las uñas (onicofagia), bruxismo diurno o tics.",
        "Autoestima, asertividad y concentración en oposiciones o deporte.",
      ],
      linkTo: "/ambitos",
      linkText: "Explorar todos los ámbitos",
      ctaMotive: "Hábitos y Desarrollo Personal",
    },
  ],

  proEyebrow: "RED DE SALUD Y BIENESTAR",
  proTitle: "¿ERES PROFESIONAL DE LA SALUD O CENTRO DE BIENESTAR?",
  proSubtitle:
    "Colaboración interdisciplinar con nutricionistas, fisioterapeutas, osteópatas, odontólogos y médicos.",
  proText:
    "En consulta, con frecuencia el mayor obstáculo no es tu pauta clínica, sino los bloqueos automáticos del paciente: la ansiedad que sabotea una dieta, la tensión muscular refleja que frena la fisioterapia o el consumo de tabaco que compromete cirugías odontológicas. Colaboro como palanca complementaria con cero intrusismo en tu criterio técnico.",
  proHighlights: [
    "Atención en mi despacho de Sueca, formato online o in situ en vuestro propio centro.",
    "Protocolo ágil de derivación con feedback ético bajo consentimiento del paciente.",
    "Charlas divulgativas y talleres para usuarios de vuestro centro (ansiedad, descanso).",
  ],
  proCta: "Conocer protocolo de colaboración",
  proWhatsAppCta: "Consultar colaboración por WhatsApp",
  proWhatsAppPrefilled:
    "Hola María, soy profesional de la salud / tengo un centro y me gustaría comentar una posible colaboración tras ver tu tarjeta...",

  howEyebrow: "RIGOR Y NATURALIDAD",
  howTitle: "¿CÓMO ES UNA SESIÓN CONMIGO?",
  howSubtitle:
    "La hipnosis ericksoniana no tiene nada que ver con el espectáculo televisivo ni con la pérdida de control:",
  howPoints: [
    {
      title: "Control y lucidez total en todo momento",
      text: "Nadie pierde la conciencia ni se duerme. Escuchas mi voz, recuerdas todo lo sucedido, puedes hablar y decides en todo momento qué recursos adoptar. Es un trabajo en equipo.",
    },
    {
      title: "Metodología basada en evidencia",
      text: "Formada en el Instituto Erickson Madrid. Aprovechamos la neuroplasticidad del cerebro para actualizar respuestas reflejas automáticas de forma segura, respetuosa y eficaz.",
    },
    {
      title: "Procesos acotados a objetivos medibles",
      text: "No creo en procesos interminables ni en dependencias. Cada sesión de 60 minutos se orienta a un avance observable desde la primera semana.",
    },
  ],

  testimonialsEyebrow: "CASOS REALES",
  testimonialsTitle: "LO QUE DICEN QUIENES HAN DADO EL PASO",
  testimonials: [
    {
      quote:
        "Llevaba más de 15 años fumando paquete y medio al día. Había probado parches y pastillas sin éxito. Con las tres sesiones sentí un clic mental increíble: el cigarrillo simplemente dejó de tener sentido para mí. Llevo más de un año libre y con una energía totalmente renovada.",
      author: "Carlos M.",
      detail: "Exfumador · Programa Antitabaco",
    },
    {
      quote:
        "Mi ansiedad se manifestaba en una presión constante en el pecho y noches en vela dándole vueltas a todo. María me enseñó a calmar el cuerpo cuando empieza la alarma. Volver a dormir 7 horas seguidas ha sido recuperar mi vida.",
      author: "Laura V.",
      detail: "Ansiedad cotidiana e insomnio · Sesiones individuales",
    },
    {
      quote:
        "Como nutricionista, derivo a pacientes que sufren de hambre emocional severa o atracones nocturnos por estrés. El cambio en su adherencia al tratamiento es notable desde las primeras sesiones de hipnosis.",
      author: "Elena R.",
      detail: "Dietista-Nutricionista colaboradora",
    },
  ],

  formEyebrow: "CONTACTO DIRECTO",
  formTitle: "ENVÍAME TU CONSULTA",
  formSubtitle:
    "Si prefieres dejarme un mensaje escrito con calma, completa este breve formulario. Te responderé personalmente en menos de 24 horas laborables.",
  formLabels: {
    name: "Nombre y apellidos",
    phone: "Teléfono de contacto",
    email: "Correo electrónico",
    reason: "¿Qué te gustaría trabajar o consultar?",
    modality: "Modalidad de tu preferencia",
    message: "Cuéntame brevemente tu situación o duda",
    submit: "Enviar consulta",
    submitting: "Enviando consulta...",
    consent: "He leído y acepto la política de privacidad.",
  },
  formReasonOptions: [
    "Dejar de fumar (Programa antitabaco)",
    "Ansiedad, estrés o miedos",
    "Insomnio o dificultad para descansar",
    "Control de peso o hambre emocional",
    "Hábitos nerviosos (uñas, tics, bruxismo)",
    "Autoestima, asertividad o foco",
    "Colaboración profesional / Centro de salud",
    "Otra consulta",
  ],
  formModalityOptions: [
    "Presencial en Sueca (Centro Sanar)",
    "A domicilio en Valencia ciudad",
    "Online por videoconferencia",
    "Me es indiferente / Por concretar",
  ],
  formSuccessTitle: "¡Mensaje recibido con éxito!",
  formSuccessText:
    "Muchas gracias por escribir. He recibido tus datos y te responderé en menos de 24 horas laborables.",
  formMailtoFallback:
    "Si tienes problemas técnicos al enviar, puedes escribirme directamente por email a: maria.a.cabo@gmail.com",

  locationTitle: "DÓNDE ATENDERTE",
  locations: [
    {
      title: "Despacho en Sueca (Valencia)",
      text: "Gabinete privado dentro del Centro Sanar (C/ Cullera 17). Espacio tranquilo, accesible y confidencial, muy bien comunicado desde Cullera, Alzira, Algemesí, Sollana y la comarca.",
    },
    {
      title: "A domicilio en Valencia ciudad",
      text: "Para tu máxima comodidad e intimidad, realizo sesiones individuales en domicilios particulares de Valencia capital.",
    },
    {
      title: "Formato Online por Videollamada",
      text: "La hipnosis ericksoniana funciona con la misma eficacia por videoconferencia en la tranquilidad de tu propia casa, requiriendo únicamente una conexión estable y un lugar cómodo.",
    },
  ],

  finalTitle: "¿HABLAMOS SOBRE TU CASO?",
  finalText:
    "La llamada previa de 15 minutos es completamente gratuita, sin compromiso de contratación y te permitirá resolver cualquier duda antes de dar el paso.",
  finalPrimaryCta: "Solicitar llamada previa (15 min)",
};

export const qrContentVa: QrPageData = {
  ...qrContentEs,
  seoTitle: "María A. Cabo · Hipnosi i Desenvolupament Personal | Targeta de Visita",
  seoDescription:
    "Portal de benvinguda per a contactes de targeta de visita. Especialista en Hipnosi Ericksoniana a Sueca, València i online. Sol·licita la teua valoració gratuïta de 15 min o parla amb mi per WhatsApp.",
  pill: "TARGETA DE VISITA DIGITAL · BENVINGUDA/T",
  title: "MARÍA A. CABO",
  subtitle: "Especialista en Hipnosi Ericksoniana i Desenvolupament Personal",
  intro:
    "Si estàs ací és perquè ens hem conegut en persona o tens la meua targeta en les teues mans. He dissenyat este espai perquè conegues en una ullada directa quins problemes treballe, com funciona el mètode i les formes més àgils de consultar-me sense compromís.",
  trustCredentials: [
    "Psicoteràpia integrada amb hipnosi",
    "Formada en l'Institut Erickson Madrid",
    "Despatx presencial a Sueca (Centre Sanar)",
    "A domicili a València ciutat i format Online",
  ],

  whatsappCta: "Obrir conversa en WhatsApp",
  whatsappPrefilled:
    "Hola María, he escanejat el codi QR de la teua targeta de visita i m'agradaria consultar-te...",
  valuationCta: "Demanar telefonada de valoració (15 min)",
  valuationSubtext: "Gratuïta i sense compromís · Per telèfon o videotrucada",

  servicesEyebrow: "QUÈ VOLS CANVIAR?",
  servicesTitle: "ÀREES D'ACOMPANYAMENT AMB HIPNOSI",
  servicesSubtitle:
    "La hipnosi clínica ericksoniana actua directament sobre els hàbits, automatismes i respostes reflexes del sistema nerviós:",
  services: [
    {
      title: "Deixar de Fumar",
      badge: "Programa Intensiu de 3 Sessions",
      description:
        "Desactiva l'impuls automàtic de fumar sense passar per setmanes d'angoixa, lluita ni pegats químics.",
      points: [
        "Elimina l'associació mental del cigarret amb el café, l'estrés o els àpats.",
        "Reforça la determinació i protegix contra les recaigudes.",
        "Inclou entrevista prèvia de 15 minuts sense compromís.",
      ],
      linkTo: "/dejar-de-fumar",
      linkText: "Veure detalls del programa antitabac",
      ctaMotive: "Deixar de Fumar",
    },
    {
      title: "Ansietat i Estrés Quotidià",
      badge: "Sessions Individuals",
      description:
        "Ensenya al teu cos i a la teua ment a desactivar la resposta física d'alarma i la por anticipatòria.",
      points: [
        "Atacs de pànic, opressió en el pit i pensaments en bucle.",
        "Pors concretes (conduir, parlar en públic, fòbies).",
        "Eines somàtiques d'autoregulació per al teu dia a dia.",
      ],
      linkTo: "/ansiedad",
      linkText: "Conéixer abordatge de l'ansietat",
      ctaMotive: "Ansietat i Estrés",
    },
    {
      title: "Insomni i Descans Profund",
      badge: "Sessions Individuals",
      description:
        "Apaga la rumiació nocturna i recupera el son continu, natural i reparador sense recórrer a fàrmacs.",
      points: [
        "Desconnecta la tensió mental en gitar-te per a agafar el son amb calma.",
        "Reduïx els desvetllaments a mitjanit i el cansament matinal.",
        "Reentrena el ritme biològic parasimpàtic del descans.",
      ],
      linkTo: "/insomnio",
      linkText: "Llegir sobre insomni i descans",
      ctaMotive: "Insomni i Descans",
    },
    {
      title: "Hàbits, Autoestima i Rendiment",
      badge: "Processos Personalitzats",
      description:
        "Intervenció focalitzada sobre automatismes inconscients que boicotegen el teu benestar diari.",
      points: [
        "Control de pes: calmar la fam emocional i el picoteig inconscient.",
        "Hàbits nerviosos: deixar de mossegar-se les ungles (onicofàgia), bruxisme diürn o tics.",
        "Autoestima, assertivitat i concentració en oposicions o esport.",
      ],
      linkTo: "/ambitos",
      linkText: "Explorar tots els àmbits",
      ctaMotive: "Hàbits i Desenvolupament Personal",
    },
  ],

  proEyebrow: "XARXA DE SALUT I BENESTAR",
  proTitle: "ERES PROFESSIONAL DE LA SALUT O CENTRE DE BENESTAR?",
  proSubtitle:
    "Col·laboració interdisciplinària amb nutricionistes, fisioterapeutes, osteòpates, odontòlegs i metges.",
  proText:
    "En consulta, sovint el major obstacle no és la teua pauta tècnica, sinó els bloquejos automàtics del pacient: l'angoixa que saboteja la dieta, la tensió muscular sostinguda o el consum de tabac. Col·labore com a palanca facilitadora amb zero intrusisme en el teu criteri professional.",
  proHighlights: [
    "Atenció en el meu despatx de Sueca, format online o in situ en el vostre propi centre.",
    "Protocol àgil de derivació amb feedback ètic sota consentiment del pacient.",
    "Xarrades divulgatives i tallers per a usuaris del vostre centre (ansietat, descans).",
  ],
  proCta: "Conéixer protocol de col·laboració",
  proWhatsAppCta: "Consultar col·laboració per WhatsApp",
  proWhatsAppPrefilled:
    "Hola María, soc professional de la salut / tinc un centre i m'agradaria comentar una possible col·laboració després de veure la teua targeta...",

  howEyebrow: "RIGOR I NATURALITAT",
  howTitle: "COM ÉS UNA SESSIÓ AMB MI?",
  howSubtitle:
    "La hipnosi ericksoniana no té res a veure amb l'espectacle ni amb la pèrdua de control:",
  howPoints: [
    {
      title: "Control i lucidesa total en tot moment",
      text: "Ningú perd la consciència ni es dorm. Sents la meua veu, recordes tot el procés, pots parlar i decidixes en tot moment quins recursos adoptar. És un treball en equip.",
    },
    {
      title: "Metodologia basada en l'evidència",
      text: "Formada en l'Institut Erickson Madrid. Aprofitem la neuroplasticitat per a actualitzar patrons reflexes de forma respectuosa i segura.",
    },
    {
      title: "Processos acotats a objectius mesurables",
      text: "No crec en processos interminables. Cada sessió de 60 minuts s'orienta a un avanç observable des de la primera setmana.",
    },
  ],

  testimonialsEyebrow: "CASOS REALS",
  testimonialsTitle: "EL QUE DIUEN QUI HA FET EL PAS",
  testimonials: [
    {
      quote:
        "Portava més de 15 anys fumant paquet i mig al dia. Amb les tres sessions vaig sentir un clic mental increïble: el cigarret simplement va deixar de tindre sentit. Porte més d'un any lliure i amb una energia renovada.",
      author: "Carlos M.",
      detail: "Exfumador · Programa Antitabac",
    },
    {
      quote:
        "La meua ansietat es manifestava en opressió al pit i nits en blanc. María em va ensenyar a calmar el cos quan comença l'alarma. Tornar a dormir 7 hores seguides ha sigut recuperar la meua vida.",
      author: "Laura V.",
      detail: "Ansietat quotidiana i insomni · Sessions individuals",
    },
    {
      quote:
        "Com a nutricionista, derive a pacients que patixen fam emocional o afartaments per estrés. El canvi en l'adherència al tractament és notable des de les primeres sessions d'hipnosi.",
      author: "Elena R.",
      detail: "Dietista-Nutricionista col·laboradora",
    },
  ],

  formEyebrow: "CONTACTE DIRECTE",
  formTitle: "ENVIA'M LA TEUA CONSULTA",
  formSubtitle:
    "Si preferixes deixar-me un missatge per escrit amb calma, emplena este breu formulari. Et respondré personalment en menys de 24 hores laborables.",
  formLabels: {
    name: "Nom i cognoms",
    phone: "Telèfon de contacte",
    email: "Correu electrònic",
    reason: "Què t'agradaria treballar o consultar?",
    modality: "Modalitat de la teua preferència",
    message: "Conta'm breument la teua situació o dubte",
    submit: "Enviar consulta",
    submitting: "Enviant consulta...",
    consent: "He llegit i accepte la política de privacitat.",
  },
  formReasonOptions: [
    "Deixar de fumar (Programa antitabac)",
    "Ansietat, estrés o pors",
    "Insomni o dificultat per a descansar",
    "Control de pes o fam emocional",
    "Hàbits nerviosos (ungles, tics, bruxisme)",
    "Autoestima, assertivitat o focus",
    "Col·laboració professional / Centre de salut",
    "Altra consulta",
  ],
  formModalityOptions: [
    "Presencial a Sueca (Centre Sanar)",
    "A domicili a València ciutat",
    "Online per videotrucada",
    "M'és indiferent / Per concretar",
  ],
  formSuccessTitle: "¡Missatge rebut correctament!",
  formSuccessText:
    "Moltes gràcies per escriure. He rebut les teues dades i et respondré en menys de 24 hores laborables.",
  formMailtoFallback:
    "Si tens problemes tècnics en enviar, pots escriure'm directament per email a: maria.a.cabo@gmail.com",

  locationTitle: "ON ATENDRE'T",
  locations: [
    {
      title: "Despatx a Sueca (València)",
      text: "Gabinete privat dins del Centre Sanar (C/ Cullera 17). Espai tranquil, accessible i confidencial, molt ben comunicat des de Cullera, Alzira, Algemesí, Sollana i la comarca.",
    },
    {
      title: "A domicili a València ciutat",
      text: "Per a la teua màxima comoditat i intimitat, realitze sessions individuals en domicilis particulars de València ciutat.",
    },
    {
      title: "Format Online per Videotrucada",
      text: "La hipnosi funciona amb la mateixa eficàcia per videoconferència en la tranquil·litat de ta casa, necessitant únicament una connexió estable i un lloc còmode.",
    },
  ],

  finalTitle: "PARLEM SOBRE EL TEU CAS?",
  finalText:
    "La telefonada prèvia de 15 minuts és completament gratuïta, sense compromís de contractació i et permetrà resoldre qualsevol dubte abans de fer el pas.",
  finalPrimaryCta: "Sol·licitar telefonada prèvia (15 min)",
};

export const qrContentEn: QrPageData = {
  ...qrContentEs,
  seoTitle: "María A. Cabo · Hypnosis & Personal Development | Business Card",
  seoDescription:
    "Welcome portal for business card contacts. Certified Ericksonian Hypnosis practitioner in Sueca, Valencia and online. Book your free 15-minute consultation or message me directly on WhatsApp.",
  pill: "DIGITAL BUSINESS CARD · WELCOME",
  title: "MARÍA A. CABO",
  subtitle: "Specialist in Ericksonian Hypnosis & Personal Development",
  intro:
    "If you are here, it's because we met in person or you have my business card in your hands. I created this page to give you a clear, direct overview of the challenges I help resolve, how my approach works, and the fastest ways to reach out with zero pressure.",
  trustCredentials: [
    "Psychotherapy integrated with hypnosis",
    "Trained at the Instituto Erickson Madrid",
    "Private practice in Sueca (Centro Sanar)",
    "Home visits in Valencia city & Online via video call",
  ],

  whatsappCta: "Open chat on WhatsApp",
  whatsappPrefilled:
    "Hello María, I scanned the QR code on your business card and would like to ask you about...",
  valuationCta: "Request 15-minute consultation",
  valuationSubtext: "Free & confidential · Via phone or video call",

  servicesEyebrow: "WHAT WOULD YOU LIKE TO CHANGE?",
  servicesTitle: "HYPNOSIS PRACTICE AREAS",
  servicesSubtitle:
    "Clinical Ericksonian hypnosis works directly on automatic habits, unconscious triggers and nervous system responses:",
  services: [
    {
      title: "Quit Smoking",
      badge: "Structured 3-Session Programme",
      description:
        "Deactivate the unconscious impulse to smoke without weeks of suffering, severe cravings or chemical substitutes.",
      points: [
        "Unlinks smoking triggers from coffee, social habits, meals or stress.",
        "Strengthens calm determination and protects against relapse.",
        "Includes a free 15-minute preliminary assessment call.",
      ],
      linkTo: "/dejar-de-fumar",
      linkText: "View smoking cessation programme",
      ctaMotive: "Quit Smoking",
    },
    {
      title: "Anxiety & Everyday Stress",
      badge: "Individual Sessions",
      description:
        "Train your body and mind to deactivate physical alarm reactions, hyperarousal and anticipatory fear.",
      points: [
        "Panic sensations, chest tightness and obsessive mental loops.",
        "Specific fears (driving, public speaking, phobias).",
        "Practical somatic regulation tools you take home with you.",
      ],
      linkTo: "/ansiedad",
      linkText: "Explore anxiety approach",
      ctaMotive: "Anxiety and Stress",
    },
    {
      title: "Insomnia & Deep Rest",
      badge: "Individual Sessions",
      description:
        "Silence late-night overthinking and restore deep, continuous, restorative sleep without medication.",
      points: [
        "Unplugs mental tension at bedtime so you fall asleep naturally.",
        "Reduces midnight awakenings and eliminates morning grogginess.",
        "Retrains your body's parasympathetic restorative rest cycle.",
      ],
      linkTo: "/insomnio",
      linkText: "Read about sleep and insomnia",
      ctaMotive: "Insomnia and Rest",
    },
    {
      title: "Habits, Confidence & Performance",
      badge: "Tailored Processes",
      description:
        "Targeted intervention on subconscious automatisms that compromise your daily well-being.",
      points: [
        "Weight management: calms emotional eating and unconscious snacking.",
        "Nervous habits: nail-biting, daytime jaw clenching (bruxism) or tics.",
        "Self-esteem, healthy boundary setting, exam focus and sports performance.",
      ],
      linkTo: "/ambitos",
      linkText: "Explore all practice areas",
      ctaMotive: "Habits and Performance",
    },
  ],

  proEyebrow: "HEALTHCARE & WELLNESS NETWORK",
  proTitle: "ARE YOU A HEALTHCARE OR WELLNESS PRACTITIONER?",
  proSubtitle:
    "Interdisciplinary collaboration with nutritionists, physiotherapists, osteopaths, dentists and doctors.",
  proText:
    "In clinical practice, the primary obstacle is often not your technical prescription, but the client's automatic responses: emotional eating that sabotages nutritional plans, chronic muscle guarding that delays rehabilitation, or smoking that compromises dental surgeries. Hypnosis acts as a complementary catalyst with zero encroachment on your professional authority.",
  proHighlights: [
    "In-person at my Sueca office, online or on-site at your clinic facilities.",
    "Streamlined referral protocol with ethical feedback under client consent.",
    "Workshops and talks for your client community (anxiety, sleep management).",
  ],
  proCta: "View partnership protocol",
  proWhatsAppCta: "Discuss partnership on WhatsApp",
  proWhatsAppPrefilled:
    "Hello María, I am a health/wellness practitioner and would like to discuss a potential collaboration after seeing your business card...",

  howEyebrow: "SCIENTIFIC RIGOUR & EASE",
  howTitle: "WHAT IS A SESSION LIKE WITH ME?",
  howSubtitle:
    "Ericksonian hypnosis has nothing in common with stage hypnosis or loss of personal control:",
  howPoints: [
    {
      title: "Full lucidity and complete control throughout",
      text: "You never lose consciousness or fall asleep. You hear my voice, remember everything that happens, can speak, and decide at every step which resources to integrate. It is collaborative teamwork.",
    },
    {
      title: "Evidence-based methodology",
      text: "Trained at the Instituto Erickson Madrid. We leverage neuroplasticity to update automatic conditioned responses safely, respectfully, and effectively.",
    },
    {
      title: "Processes bounded to measurable goals",
      text: "I do not believe in open-ended or dependent processes. Each 60-minute session is structured around tangible progress observable from the first week.",
    },
  ],

  testimonialsEyebrow: "REAL OUTCOMES",
  testimonialsTitle: "WHAT PEOPLE SAY AFTER TAKING THE STEP",
  testimonials: [
    {
      quote:
        "I had been smoking 30 cigarettes a day for over 15 years. I had tried patches and pills without success. With the three sessions I felt an incredible mental shift: cigarettes simply lost all relevance. I have been free for over a year with renewed energy.",
      author: "Carlos M.",
      detail: "Former smoker · Quit Smoking Programme",
    },
    {
      quote:
        "My anxiety manifested as constant chest pressure and sleepless nights spinning thoughts. María taught me how to calm my nervous system as soon as alarm starts. Sleeping 7 hours straight again has given me my life back.",
      author: "Laura V.",
      detail: "Everyday anxiety & insomnia · Individual sessions",
    },
    {
      quote:
        "As a nutritionist, I refer patients who struggle with severe emotional eating or midnight snacking under stress. Their adherence to dietary guidance improves noticeably from the very first hypnosis sessions.",
      author: "Elena R.",
      detail: "Partner Dietitian-Nutritionist",
    },
  ],

  formEyebrow: "DIRECT CONTACT",
  formTitle: "SEND ME YOUR INQUIRY",
  formSubtitle:
    "If you prefer to leave a written message calmly, fill out this brief form. I will respond personally within 24 business hours.",
  formLabels: {
    name: "Full name",
    phone: "Phone number",
    email: "Email address",
    reason: "What would you like to address or explore?",
    modality: "Preferred session format",
    message: "Tell me briefly about your situation or question",
    submit: "Send inquiry",
    submitting: "Sending inquiry...",
    consent: "I have read and accept the privacy policy.",
  },
  formReasonOptions: [
    "Quit smoking (Smoking cessation programme)",
    "Anxiety, stress or specific fears",
    "Insomnia or difficulty resting",
    "Weight management or emotional eating",
    "Nervous habits (nail biting, tics, jaw clenching)",
    "Self-esteem, assertiveness or mental focus",
    "Professional partnership / Health clinic",
    "Other inquiry",
  ],
  formModalityOptions: [
    "In-person in Sueca (Centro Sanar)",
    "Home visit in Valencia city",
    "Online via video call",
    "No preference / To be decided",
  ],
  formSuccessTitle: "Inquiry received successfully!",
  formSuccessText:
    "Thank you for reaching out. I have received your details and will get back to you within 24 business hours.",
  formMailtoFallback:
    "If you encounter technical issues submitting, you can write directly via email to: maria.a.cabo@gmail.com",

  locationTitle: "WHERE SESSIONS TAKE PLACE",
  locations: [
    {
      title: "Consulting Room in Sueca (Valencia)",
      text: "Private, welcoming space inside Centro Sanar (C/ Cullera 17). Accessible, serene and confidential, easily reachable from Cullera, Alzira, Algemesí, Sollana and surrounding areas.",
    },
    {
      title: "Home Visits in Valencia City",
      text: "For maximum convenience and privacy, individual sessions are available at private residences within Valencia city.",
    },
    {
      title: "Online via Video Call",
      text: "Ericksonian hypnosis works with identical efficacy over secure video call from the comfort of your own home, requiring only a stable connection and a comfortable space.",
    },
  ],

  finalTitle: "SHALL WE TALK ABOUT YOUR SITUATION?",
  finalText:
    "The 15-minute preliminary assessment call is completely free, carries zero obligation, and allows you to resolve any questions before deciding to begin.",
  finalPrimaryCta: "Request free 15-minute call",
};
