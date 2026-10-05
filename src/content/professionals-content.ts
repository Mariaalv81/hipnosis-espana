export interface ProfessionalSynergy {
  area: string;
  specialties: string;
  description: string;
  benefit: string;
}

export interface ProfessionalStep {
  num: string;
  title: string;
  text: string;
}

export interface ProfessionalFaq {
  q: string;
  a: string;
}

export interface ProfessionalsData {
  seoTitle: string;
  seoDescription: string;
  eyebrow: string;
  title: string;
  manifesto: string;
  heroText: string;
  ctaPrimary: string;
  ctaSecondary: string;

  synergyEyebrow: string;
  synergyTitle: string;
  synergyIntro: string;
  synergies: ProfessionalSynergy[];

  scopeEyebrow: string;
  scopeTitle: string;
  scopeIntro: string;
  whatIWorkTitle: string;
  whatIWork: string[];
  whatIDoNotWorkTitle: string;
  whatIDoNotWork: string[];
  ethicalNote: string;

  sessionEyebrow: string;
  sessionTitle: string;
  sessionIntro: string;
  sessionPoints: {
    title: string;
    text: string;
  }[];

  referralEyebrow: string;
  referralTitle: string;
  referralIntro: string;
  referralSteps: ProfessionalStep[];

  confidentialityTitle: string;
  confidentialityText: string;

  aboutEyebrow: string;
  aboutTitle: string;
  aboutText: string[];
  aboutLocation: string;

  formEyebrow: string;
  formTitle: string;
  formSubtitle: string;
  formFields: {
    name: string;
    specialty: string;
    center: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successText: string;
    mailtoFallback: string;
  };
  formSpecialtyOptions: string[];

  faqEyebrow: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: ProfessionalFaq[];
}

export const professionalsEs: ProfessionalsData = {
  seoTitle: "Colaboraciones Profesionales · Hipnosis como Herramienta Complementaria | María A. Cabo",
  seoDescription:
    "Colaboración interdisciplinar con nutricionistas, fisioterapeutas, osteópatas y centros de salud en Valencia y Ribera Baixa. Hipnosis para potenciar la adherencia y respuesta de tus clientes.",
  eyebrow: "HIPNOSIS COMO HERRAMIENTA COMPLEMENTARIA",
  title: "COLABORACIÓN CON PROFESIONALES DE LA SALUD Y EL BIENESTAR",
  manifesto:
    "“Colaboro con profesionales y centros de bienestar de la Comunidad Valenciana cuando consideran que alguno de sus clientes puede beneficiarse de trabajar determinados hábitos, miedos, bloqueos o patrones de comportamiento.”",
  heroText:
    "En tu práctica clínica o de bienestar, sabes que con frecuencia el mayor obstáculo para el éxito del tratamiento no es tu prescripción técnica, sino la respuesta automática e involuntaria del cliente: la ansiedad que sabotea la dieta, la tensión muscular sostenida que perpetúa el dolor, o el miedo que frena la rehabilitación. La hipnosis aplicada actúa como una palanca facilitadora: allana los bloqueos conductuales para que tus tratamientos alcancen su máximo impacto.",
  ctaPrimary: "PROPONER UNA COLABORACIÓN",
  ctaSecondary: "CÓMO FUNCIONA UNA DERIVACIÓN",

  synergyEyebrow: "SINERGIA INTERDISCIPLINAR",
  synergyTitle: "¿CÓMO POTENCIA LA HIPNOSIS LA RESPUESTA A TUS TRATAMIENTOS?",
  synergyIntro:
    "Áreas donde la intervención sobre los automatismos subconscientes complementa de forma natural la labor de otros profesionales:",
  synergies: [
    {
      area: "Nutrición y Dietética",
      specialties: "Nutricionistas, Dietistas y Endocrinos",
      description:
        "Planes nutricionales impecables que se ven boicoteados por picoteo inconsciente, hambre emocional, atracones nocturnos por estrés o una relación de culpa con la báscula.",
      benefit:
        "La hipnosis desvincula la comida de la anestesia emocional y restablece la saciedad biológica, permitiendo que el paciente siga tus pautas con serenidad y sin sensación de lucha interna.",
    },
    {
      area: "Fisioterapia y Osteopatía",
      specialties: "Fisioterapeutas, Osteópatas y Readaptadores",
      description:
        "Tratamientos manuales donde el paciente mantiene una hipertonía muscular refleja por estrés crónico, bruxismo diurno o un miedo paralizante a volver a lesionarse (kinesiofobia).",
      benefit:
        "Desactiva la hiperactivación simpática somática, reduce la guardia neuromuscular involuntaria y devuelve la confianza en la movilidad del cuerpo para acelerar la recuperación física.",
    },
    {
      area: "Medicina Natural e Integrativa",
      specialties: "Terapeutas Integrativos, Naturópatas y Acupuntores",
      description:
        "Personas con fatiga crónica, desórdenes digestivos funcionales o insomnio pertinaz donde la sobrecarga de cortisol y la rumiación mental impiden la respuesta a las terapias naturales.",
      benefit:
        "Estimula la respuesta parasimpática de autorregulación y descanso profundo, creando el entorno neurovegetativo propicio para que los tratamientos biológicos surtan efecto.",
    },
    {
      area: "Odontología y Salud Bucal",
      specialties: "Odontólogos y Especialistas en ATM",
      description:
        "Pacientes con bruxismo diurno severo por tensión inconsciente o personas con fobia incapacitante a las intervenciones dentales y a las agujas que retrasan tratamientos necesarios.",
      benefit:
        "Desprograma el hábito automático de apretar la mandíbula y desensibiliza el miedo al sillón dental para que acudan a tu consulta relajados y cooperativos.",
    },
  ],

  scopeEyebrow: "MARCO DE TRABAJO CLARO",
  scopeTitle: "LÍMITES ÉTICOS Y ALCANCE DE LA INTERVENCIÓN",
  scopeIntro:
    "La colaboración interdisciplinar solo funciona cuando los límites de competencia son nítidos y respetados:",
  whatIWorkTitle: "QUÉ TRABAJO CON HIPNOSIS",
  whatIWork: [
    "Automatismos y hábitos involuntarios que boicotean el tratamiento (picoteo, tabaco, tics, apretar mandíbula).",
    "Desactivación de la respuesta física de alarma, hipervigilancia y estrés crónico sostenido.",
    "Desensibilización suave y progresiva de miedos específicos, fobias y conductas de evitación.",
    "Refuerzo de la adherencia a pautas de vida saludable, constancia y cambio de diálogo interno.",
    "Visualización motora y somática de recuperación funcional, calma corporal y bienestar.",
  ],
  whatIDoNotWorkTitle: "QUÉ NO TRABAJO (CERO INTRUSISMO)",
  whatIDoNotWork: [
    "No realizo psicoterapia clínica, psicoanálisis ni atención psiquiátrica reglada.",
    "No realizo diagnósticos médicos ni psicológicos de ningún tipo.",
    "No intervengo en trastornos de la conducta alimentaria (TCA) graves sin derivación y seguimiento médico.",
    "No prescribo, modifico ni opino sobre pautas farmacológicas ni tratamientos médicos o sanitarios.",
    "No diseño dietas ni programas de entrenamiento físico (estricto respeto a vuestro criterio profesional).",
  ],
  ethicalNote:
    "Mi enfoque parte estrictamente del desarrollo personal y el cambio de patrones automáticos. Tú lideras y supervisas el tratamiento de tu especialidad; la hipnosis actúa como una herramienta facilitadora que optimiza la receptividad y el compromiso del cliente.",

  sessionEyebrow: "MÉTODO DE TRABAJO",
  sessionTitle: "¿CÓMO ES UNA SESIÓN CON MARÍA A. CABO?",
  sessionIntro:
    "Rigor, naturalidad y desmitificación absoluta de los tópicos televisivos sobre la hipnosis:",
  sessionPoints: [
    {
      title: "Atención focalizada y neuroplasticidad",
      text: "La hipnosis es un estado natural de concentración profunda y relajación somática. Aprovecha la capacidad plástica del sistema nervioso para actualizar asociaciones y respuestas reflejas.",
    },
    {
      title: "Control y lucidez total del cliente",
      text: "Nadie pierde la voluntad ni se duerme. El cliente escucha mi voz en todo momento, recuerda la sesión, puede hablar, moverse e interrumpir el proceso cuando lo desee. Es un trabajo colaborativo.",
    },
    {
      title: "Objetivos observables y procesos acotados",
      text: "No creo en procesos interminables ni en dependencias. Cada sesión de 60 minutos se diseña en torno a un objetivo concreto pactado con la persona, evaluando avances desde el primer día.",
    },
    {
      title: "Modalidades flexibles y atención en vuestro propio centro",
      text: "Atención en despacho independiente dentro de Centro Sanar en Sueca (Ribera Baixa), a domicilio en Valencia ciudad o por videoconferencia. Además, si para tus pacientes es más cómodo por cuestiones de accesibilidad, limitaciones de movilidad o continuidad asistencial, puedo desplazarme directamente a vuestras instalaciones o clínica para realizar las sesiones in situ.",
    },
  ],

  referralEyebrow: "COORDINACIÓN FÁCIL",
  referralTitle: "¿CÓMO FUNCIONA UNA DERIVACIÓN?",
  referralIntro:
    "Un protocolo ágil, transparente y sin burocracia para que recomendar la hipnosis sea cómodo y seguro:",
  referralSteps: [
    {
      num: "01",
      title: "Detección en tu consulta",
      text: "Identificas que un patrón automático (ansiedad por la comida, estrés muscular, miedo, falta de adherencia) está dificultando la evolución de tu cliente.",
    },
    {
      num: "02",
      title: "Presentación sin compromiso",
      text: "Le propones la opción como herramienta complementaria. El cliente puede realizar una breve consulta previa informativa de 15 minutos conmigo sin coste para valorar si encaja.",
    },
    {
      num: "03",
      title: "Intervención focalizada",
      text: "Trabajamos el objetivo conductual acordado en sesiones individuales de 1 hora (70 €), con pautas prácticas de autohipnosis y descanso somático entre sesiones.",
    },
    {
      num: "04",
      title: "Comunicación y feedback ético",
      text: "Siempre con el consentimiento explícito del cliente, podemos coordinarnos brevemente sobre los cambios de hábitos observados para que puedas ajustar tu tratamiento.",
    },
    {
      num: "05",
      title: "Retorno con mayor adherencia",
      text: "El cliente prosigue tu tratamiento con la mente despejada, libre de autosabotajes y sumamente agradecido por haberle ofrecido un abordaje completo e integrador.",
    },
  ],

  confidentialityTitle: "CONFIDENCIALIDAD Y RIGOR DEONTOLÓGICO",
  confidentialityText:
    "El respeto a la intimidad del paciente y la lealtad profesional son sagrados. Cumplo rigurosamente con la normativa de protección de datos (RGPD) y el secreto profesional. Toda comunicación interdisciplinar se realiza únicamente bajo autorización expresa del cliente y con el único fin de favorecer su bienestar integral.",

  aboutEyebrow: "PERFIL PROFESIONAL",
  aboutTitle: "MARÍA A. CABO",
  aboutText: [
    "Trabajo desde una convicción sencilla pero profunda: la inmensa mayoría de las personas saben exactamente lo que deberían hacer, pero su cuerpo y su mente inconsciente siguen respondiendo con automatismos construidos durante años.",
    "Me he formado en el Instituto Erickson Madrid en hipnosis y psicoterapia ericksoniana, una metodología rigurosa, no invasiva y basada en la evidencia que activa los recursos y aprendizajes de la propia persona.",
    "Utilizo la hipnosis y la hipnoterapia como una vía complementaria, rápida y estructurada para intervenir sobre esa parte automática de la experiencia. Colaboro con profesionales de la salud y el bienestar de Valencia y la Ribera Baixa porque creo firmemente en el poder multiplicador de un equipo multidisciplinar que suma fuerzas en beneficio del paciente.",
  ],
  aboutLocation:
    "Despacho en Sueca (Centro Sanar) · Desplazamiento a vuestro propio centro o clínica · Sesiones a domicilio en Valencia ciudad · Formato Online",

  formEyebrow: "INICIAR CONTACTO",
  formTitle: "CONVERSEMOS SOBRE UNA COLABORACIÓN",
  formSubtitle:
    "Rellena este breve formulario o escríbeme para conocernos, resolver dudas sobre cómo encajaría en tu centro o planificar un café o llamada informativa de 15 minutos.",
  formFields: {
    name: "Nombre y apellidos",
    specialty: "Disciplina o especialidad",
    center: "Centro, clínica o ciudad",
    email: "Correo electrónico profesional",
    phone: "Teléfono de contacto",
    message: "¿Qué tipo de situaciones observas en tus clientes o cómo te gustaría colaborar?",
    submit: "Enviar propuesta de colaboración",
    submitting: "Enviando mensaje...",
    successTitle: "Mensaje recibido correctamente",
    successText:
      "Muchas gracias por tu interés en colaborar. He recibido tu mensaje y me pondré en contacto contigo personalmente en breve.",
    mailtoFallback:
      "Si tienes problemas con el formulario, puedes escribirme directamente por email:",
  },
  formSpecialtyOptions: [
    "Nutrición y Dietética",
    "Fisioterapia y Osteopatía",
    "Medicina Natural e Integrativa",
    "Odontología / Cirugía Bucal",
    "Psicología / Psiquiatría",
    "Entrenamiento y Rendimiento",
    "Centro de Bienestar / Clínica Multidisciplinar",
    "Otra disciplina",
  ],

  faqEyebrow: "DUDAS COMUNES DE PROFESIONALES",
  faqTitle: "PREGUNTAS FRECUENTES SOBRE LA COLABORACIÓN",
  faqSubtitle: "Aspectos prácticos sobre cómo articular las derivaciones y el trabajo conjunto:",
  faqs: [
    {
      q: "¿Cómo beneficia esta colaboración a mi consulta o clínica?",
      a: "Tus pacientes consiguen mejores resultados porque eliminan los frenos inconscientes que boicotean tus pautas. Esto se traduce en mayor adherencia, menos abandonos, mejores testimonios y mayor prestigio para tu centro por ofrecer una visión holística y resolutiva.",
    },
    {
      q: "¿Hay algún tipo de compromiso o exclusividad?",
      a: "No, en absoluto. Es una relación de confianza flexible y libre. Recomiendas o derivas únicamente cuando tú consideres que un cliente específico puede beneficiarse de destrabar un patrón automático con hipnosis.",
    },
    {
      q: "¿Cómo se gestiona el feedback entre nosotros sin sobrecargarnos de tiempo?",
      a: "Con una comunicación sumamente ágil y pragmática. Previa autorización del cliente, puedo enviarte una nota breve de síntesis o tener una llamada de 5 minutos para que sepas qué recursos se han anclado y cómo puedes reforzarlos en tus revisiones.",
    },
    {
      q: "¿Dónde atiendo a los clientes derivados de tu centro?",
      a: "En mi despacho presencial de Centro Sanar en Sueca (con conexión directa desde Cullera, Alzira, Algemesí, Sollana y la comarca), a domicilio en Valencia ciudad para su máxima comodidad, o en formato online por videollamada para cualquier ubicación.",
    },
    {
      q: "¿Puedes desplazarte a atender a los pacientes directamente en nuestra clínica o centro?",
      a: "Sí, por supuesto. Si para determinados pacientes es más cómodo por accesibilidad física, problemas de movilidad reducida o por la tranquilidad de ser atendidos en un entorno clínico que ya conocen, puedo desplazarme a vuestras instalaciones en los días u horarios que acordemos para realizar las sesiones de hipnosis in situ.",
    },
  ],
};

export const professionalsVa: ProfessionalsData = {
  ...professionalsEs,
  seoTitle: "Col·laboracions Professionals · Hipnosi com a Eina Complementària | María A. Cabo",
  seoDescription:
    "Col·laboració interdisciplinària amb nutricionistes, fisioterapeutes, osteòpates i centres de salut a València i Ribera Baixa. Hipnosi per a potenciar l'adherència i resposta dels teus clients.",
  eyebrow: "HIPNOSI COM A EINA COMPLEMENTÀRIA",
  title: "COL·LABORACIÓ AMB PROFESSIONALS DE LA SALUT I EL BENESTAR",
  manifesto:
    "“Col·labore amb professionals i centres de benestar de la Comunitat Valenciana quan consideren que algun dels seus clients pot beneficiar-se de treballar determinats hàbits, pors, bloquejos o patrons de comportament.”",
  heroText:
    "En la teua pràctica clínica o de benestar, saps que sovint el major obstacle per a l'èxit del tractament no és la teua prescripció tècnica, sinó la resposta automàtica i involuntària del client: l'angoixa que saboteja la dieta, la tensió muscular sostinguda o la por que frena la recuperació. La hipnosi aplicada actua com una palanca facilitadora: aplana els bloquejos conductuals perquè els teus tractaments aconseguisquen el màxim impacte.",
  ctaPrimary: "PROPONDRE UNA COL·LABORACIÓ",
  ctaSecondary: "COM FUNCIONA UNA DERIVACIÓ",

  synergyEyebrow: "SINERGIA INTERDISCIPLINÀRIA",
  synergyTitle: "COM POTENCIA LA HIPNOSI LA RESPOSTA ALS TEUS TRACTAMENTS?",
  synergyIntro:
    "Àrees on la intervenció sobre els automatismes subconscients complementa de manera natural la tasca d'altres professionals:",

  scopeEyebrow: "MARC DE TREBALL CLAR",
  scopeTitle: "LÍMITS ÈTICS I ABAST DE LA INTERVENCIÓ",
  scopeIntro:
    "La col·laboració interdisciplinària només funciona quan els límits de competència són nítids i respectats:",
  whatIWorkTitle: "QUÈ TREBALLE AMB HIPNOSI",
  whatIDoNotWorkTitle: "QUÈ NO TREBALLE (ZERO INTRUSISME)",

  sessionEyebrow: "MÈTODE DE TREBALL",
  sessionTitle: "COM ÉS UNA SESSIÓ AMB MARÍA A. CABO?",
  sessionIntro:
    "Rigor, naturalitat i desmitificació absoluta dels tòpics televisius sobre la hipnosi:",

  referralEyebrow: "COORDINACIÓ FÀCIL",
  referralTitle: "COM FUNCIONA UNA DERIVACIÓ?",
  referralIntro:
    "Un protocol àgil, transparent i sense burocràcia perquè recomanar la hipnosi siga còmode i segur:",

  confidentialityTitle: "CONFIDENCIALITAT I RIGOR DEONTOLÒGIC",
  confidentialityText:
    "El respecte a la intimitat del pacient i la lleialtat professional són sagrats. Complisc rigorosament amb la normativa de protecció de dades (RGPD) i el secret professional. Tota comunicació interdisciplinària es realitza únicament sota autorització expressa del client i per a afavorir el seu benestar integral.",

  aboutEyebrow: "PERFIL PROFESSIONAL",
  aboutTitle: "MARÍA A. CABO",
  aboutText: [
    "Treballe des d'una convicció senzilla però profunda: la immensa majoria de les persones saben exactament el que haurien de fer, però el seu cos i la seua ment inconscient continuen responent amb automatismes construïts durant anys.",
    "M'he format en l'Institut Erickson Madrid en hipnosi i psicoteràpia ericksoniana, una metodologia rigorosa, no invasiva i basada en l'evidència que activa els recursos i aprenentatges de la pròpia persona.",
    "Utilitze la hipnosi i la hipnoteràpia com una via complementària, ràpida i estructurada per a intervindre sobre eixa part automàtica de l'experiència. Col·labore amb professionals de la salut i el benestar de València i la Ribera Baixa perquè crec fermament en el poder multiplicador d'un equip multidisciplinari que suma forces en benefici del pacient.",
  ],

  formEyebrow: "INICIAR CONTACTE",
  formTitle: "PARLEM D'UNA COL·LABORACIÓ",
  formSubtitle:
    "Emplena este breu formulari o escriu-me per a conéixer-nos, resoldre dubtes sobre com encaixaria en el teu centre o planificar un café o telefonada informativa de 15 minuts.",

  faqEyebrow: "DUBTES COMUNS DE PROFESSIONALS",
  faqTitle: "PREGUNTES FREQÜENTS SOBRE LA COL·LABORACIÓ",
};

export const professionalsEn: ProfessionalsData = {
  ...professionalsEs,
  seoTitle: "Professional Partnerships · Hypnosis as a Complementary Tool | María A. Cabo",
  seoDescription:
    "Interdisciplinary collaboration with nutritionists, physiotherapists, osteopaths and wellness clinics in Valencia and Ribera Baixa. Enhancing client adherence and clinical outcomes.",
  eyebrow: "HYPNOSIS AS A COMPLEMENTARY TOOL",
  title: "PARTNERING WITH HEALTHCARE & WELLNESS PROFESSIONALS",
  manifesto:
    "“I collaborate with health and wellness practitioners across the Valencian Community when they consider that their clients could benefit from addressing subconscious habits, fears, tension or behavioral blocks.”",
  heroText:
    "In your clinical or wellness practice, you frequently encounter cases where the biggest hurdle is not technical expertise, but the client's automatic responses: emotional eating sabotaging a nutritional plan, chronic somatic tension perpetuating pain, or fear delaying rehabilitation. Hypnosis acts as a behavioral catalyst: resolving subconscious friction so that your treatments achieve their full potential.",
  ctaPrimary: "PROPOSE A PARTNERSHIP",
  ctaSecondary: "HOW REFERRALS WORK",

  synergyEyebrow: "INTERDISCIPLINARY SYNERGY",
  synergyTitle: "HOW DOES HYPNOSIS COMPLEMENT YOUR PRACTICE?",
  synergyIntro:
    "Key areas where addressing subconscious automatisms naturally reinforces the work of healthcare and wellness practitioners:",

  scopeEyebrow: "CLEAR BOUNDARIES",
  scopeTitle: "ETHICAL BOUNDARIES & SCOPE OF PRACTICE",
  scopeIntro:
    "Effective interdisciplinary collaboration relies on clear, respected professional boundaries:",
  whatIWorkTitle: "WHAT I ADDRESS WITH HYPNOSIS",
  whatIDoNotWorkTitle: "WHAT I DO NOT ADDRESS (ZERO ENCROACHMENT)",

  sessionEyebrow: "SESSION METHODOLOGY",
  sessionTitle: "WHAT IS A HYPNOSIS SESSION LIKE WITH MARÍA A. CABO?",
  sessionIntro: "Grounded, scientific and completely stripped of stage-hypnosis myths:",

  referralEyebrow: "SMOOTH COORDINATION",
  referralTitle: "HOW DO REFERRALS WORK?",
  referralIntro:
    "A straightforward, transparent process designed to make client referrals effortless and secure:",

  confidentialityTitle: "CONFIDENTIALITY & ETHICAL RIGOR",
  confidentialityText:
    "Client privacy and interdisciplinary loyalty are paramount. I strictly adhere to European data protection standards (GDPR) and professional confidentiality. Any case discussion occurs exclusively with explicit client consent and for the sole purpose of supporting their comprehensive care.",

  aboutEyebrow: "PROFESSIONAL BACKGROUND",
  aboutTitle: "MARÍA A. CABO",
  aboutText: [
    "My work is grounded in a simple yet profound premise: most people know intellectually what they need to do, but their nervous system and subconscious mind continue reacting with automatic habits formed over years.",
    "I trained at the Instituto Erickson Madrid in hypnosis and Ericksonian psychotherapy, a rigorous, non-invasive and evidence-based approach that activates the client's own internal resources and adaptive patterns.",
    "I utilize hypnosis and hypnotherapy as a structured complementary tool to address automatic responses. I collaborate with healthcare and wellness practitioners across Valencia and Ribera Baixa, firmly believing in the synergistic value of an interdisciplinary network that enhances client outcomes.",
  ],

  formEyebrow: "START THE CONVERSATION",
  formTitle: "LET'S DISCUSS A COLLABORATION",
  formSubtitle:
    "Fill out this brief form or message me directly to explore how we can complement your clinic's offerings or schedule an informal 15-minute call.",

  faqEyebrow: "PRACTITIONER FAQS",
  faqTitle: "FREQUENTLY ASKED QUESTIONS ABOUT COLLABORATION",
};
