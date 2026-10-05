export interface PastLifeReason {
  tag: string;
  title: string;
  text: string;
}

export interface PastLifeStep {
  num: string;
  badge: string;
  title: string;
  desc: string;
}

export interface PastLifeLocation {
  name: string;
  area: string;
  desc: string;
}

export interface PastLifeFaq {
  q: string;
  a: string;
}

export interface PastLivesData {
  seoTitle: string;
  seoDescription: string;

  eyebrow: string;
  title: string;
  subtitle: string;
  introText: string;
  trustBadges: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  ctaCalendar: string;

  reasonsEyebrow: string;
  reasonsTitle: string;
  reasonsSubtitle: string;
  reasons: PastLifeReason[];

  akashicEyebrow: string;
  akashicTitle: string;
  akashicSubtitle: string;
  akashicPillars: {
    title: string;
    description: string;
  }[];
  realityVsFantasyTitle: string;
  realityVsFantasyText: string[];

  journeyEyebrow: string;
  journeyTitle: string;
  journeySubtitle: string;
  journeySteps: PastLifeStep[];

  locationsTitle: string;
  locationsIntro: string;
  locations: PastLifeLocation[];

  pricingTitle: string;
  price: string;
  priceUnit: string;
  pricingFeatures: string[];

  formEyebrow: string;
  formTitle: string;
  formSubtitle: string;
  formFields: {
    name: string;
    email: string;
    phone: string;
    modality: string;
    modalityOptions: string[];
    focus: string;
    focusPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    consent: string;
    submit: string;
    submitting: string;
    success: string;
    fallbackMailto: string;
  };

  faqEyebrow: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: PastLifeFaq[];

  bridgeTitle: string;
  bridgeSubtitle: string;
  bridgeText: string;
  bridgeCta: string;

  disclaimerText: string;
}

export const pastLivesEs: PastLivesData = {
  seoTitle:
    "Hipnosis para Vidas Pasadas y Registros Akáshicos en Valencia y Online · Regresión Consciente | María A. Cabo",
  seoDescription:
    "Regresión a vidas pasadas y acceso a Registros Akáshicos con hipnosis consciente en Sueca, Valencia y online. Descubre el origen de bloqueos, relaciones kármicas y memorias del alma.",

  eyebrow: "REGRESIÓN CONSCIENTE · REGISTROS AKÁSHICOS · VALENCIA Y ONLINE",
  title: "HIPNOSIS PARA VIDAS PASADAS Y ACCESO A REGISTROS AKÁSHICOS",
  subtitle:
    "Un viaje consciente, sereno y transformador para explorar las memorias profundas de tu alma, sanar bloqueos de raíz y comprender tu propósito vital.",
  introText:
    "¿Alguna vez has sentido una conexión magnética con una época histórica, un país o una persona sin motivo racional? ¿O un bloqueo recurrente que no proviene de ninguna vivencia de esta vida? La hipnosis para vidas pasadas y el acceso a los Registros Akáshicos te permiten ingresar en un estado de calma lúcida y atención expandida. Guiada paso a paso por María A. Cabo, no pierdes en ningún momento el control: observas, comprendes y traes al presente la sabiduría que tu conciencia necesita para avanzar con ligereza.",
  trustBadges: [
    "Experiencia 100% consciente y segura",
    "Sueca (Centro Sanar) · A domicilio en Valencia · Online",
    "Sesión de 90 min de experiencia e integración guiada",
  ],
  ctaPrimary: "SOLICITAR SESIÓN O CONSULTAR",
  ctaSecondary: "CÓMO FUNCIONA EL VIAJE",
  ctaCalendar: "Reservar en calendario",

  reasonsEyebrow: "LLAMADAS DEL ALMA",
  reasonsTitle: "¿QUÉ TE IMPULSA A EXPLORAR UNA VIDA PASADA?",
  reasonsSubtitle:
    "La regresión no es una evasión del presente, sino una poderosa herramienta de autoconocimiento para liberar lo que te limita hoy.",
  reasons: [
    {
      tag: "Bloqueos y miedos",
      title: "Patrones y fobias sin causa en esta vida",
      text: "Miedos irracionales al agua, al fuego, a las alturas, a la escasez o al compromiso, o una sensación crónica de culpa y alerta que la mente lógica no logra justificar con vivencias de tu infancia.",
    },
    {
      tag: "Vínculos profundos",
      title: "Relaciones kármicas y almas compañeras",
      text: "Encuentros con personas donde surge un reconocimiento instantáneo ('siento que te conozco desde siempre'), o relaciones intensas y complejas que requieren sanar acuerdos y dinámicas pendientes del pasado.",
    },
    {
      tag: "Afinidades innatas",
      title: "Fascinación por culturas y dones espontáneos",
      text: "Atracción visceral hacia civilizaciones antiguas, idiomas, tierras lejanas o habilidades creativas y espirituales que emergen de forma natural sin haberlas aprendido formalmente en el presente.",
    },
    {
      tag: "Evolución y sentido",
      title: "Comprensión del propósito y misión del alma",
      text: "Preguntas existenciales profundas: ¿por qué he elegido esta familia y estas circunstancias?, ¿qué lección viene a experimentar mi alma?, ¿hacia dónde dirigir mi camino con plenitud?",
    },
  ],

  akashicEyebrow: "MEMORIA UNIVERSAL Y CONCIENCIA",
  akashicTitle: "¿CÓMO VER VIDAS PASADAS Y QUÉ SON LOS REGISTROS AKÁSHICOS?",
  akashicSubtitle:
    "El puente entre la neurofisiología de la hipnosis y las dimensiones profundas de la conciencia.",
  akashicPillars: [
    {
      title: "¿Cómo ver vidas pasadas a través de la hipnosis?",
      description:
        "No necesitas poderes especiales ni 'forzar' la visión. En la hipnosis consciente inducimos un estado de relajación física profunda (frecuencia cerebral theta) donde el filtro del juicio crítico se atenúa. En ese estado, la percepción se abre: las memorias se revelan como imágenes vivas, sensaciones somáticas, certezas intuitivas espontáneas o una narrativa interior envolvente que fluye con total nitidez.",
    },
    {
      title: "¿Qué son los Registros Akáshicos y cómo accedemos a ellos?",
      description:
        "El Akasha (palabra sánscrita que designa el éter o espacio primordial) es el campo cuántico de memoria universal donde queda grabada la huella de toda experiencia, pensamiento y aprendizaje del alma a lo largo de sus encarnaciones. Con hipnosis regresiva accedemos a ese 'archivo del alma' o espacio entre vidas, permitiéndote recibir respuestas directas, perspectiva de tus guías y una visión panorámica de tu evolución.",
    },
  ],
  realityVsFantasyTitle: "¿ES REAL O ES IMAGINACIÓN DE LA MENTE?",
  realityVsFantasyText: [
    "Esta es la pregunta más honesta y frecuente de quienes se acercan por primera vez a una regresión. ¿Estoy recordando una vida previa real o mi mente inconsciente está tejiendo una historia simbólica?",
    "En mi acompañamiento trabajamos desde el respeto absoluto por tu vivencia. Ya sea que lo interpretes desde la reencarnación literal, la memoria epigenética transgeneracional heredada en tu ADN, o los arquetipos del inconsciente colectivo descritos por Carl Jung, el valor es exactamente el mismo: la catarsis emocional, la revelación del patrón oculto y la liberación de la carga en tu vida diaria son 100% reales e indiscutibles.",
    "El alma habla en el lenguaje de la experiencia sentida. Lo relevante no es validar fechas históricas en un archivo, sino la profunda sanación, comprensión y ligereza que experimentas al abrir los ojos.",
  ],

  journeyEyebrow: "EL RECORRIDO DE LA SESIÓN",
  journeyTitle: "¿CÓMO ES UNA SESIÓN DE REGRESIÓN PASO A PASO?",
  journeySubtitle:
    "Un protocolo seguro, respetuoso y estructurado donde siempre mantienes el control y la lucidez.",
  journeySteps: [
    {
      num: "01",
      badge: "Claridad previa",
      title: "ENTREVISTA Y FOCO DE EXPLORACIÓN",
      desc: "Conversamos con calma sobre tu momento presente: qué inquietud, bloqueo, relación o curiosidad del alma deseas explorar. Definimos una intención clara y protegida para tu sesión.",
    },
    {
      num: "02",
      badge: "Tránsito seguro",
      title: "INDUCCIÓN Y RELAJACIÓN CONSCIENTE",
      desc: "A través de respiración y sugestiones suaves, te guío hacia un estado de gran serenidad física y mente despejada. Tu cuerpo descansa plácidamente mientras tu conciencia permanece despierta y atenta a mi voz.",
    },
    {
      num: "03",
      badge: "Inmersión viva",
      title: "CRUCE DEL UMBRAL Y VIDA PASADA",
      desc: "Cruzamos el portal temporal hacia la vida más relevante para tu presente. Exploramos quién eres, tu entorno, eventos clave, relaciones significativas y la transición pacífica al final de esa existencia.",
    },
    {
      num: "04",
      badge: "Plano Akáshico",
      title: "ESPACIO ENTRE VIDAS Y REGISTROS AKÁSHICOS",
      desc: "Elevamos la perspectiva al plano del alma. Observamos esa vida desde la sabiduría superior: ¿cuál fue la gran lección?, ¿qué votos o lealtades es momento de disolver?, ¿qué dones traes contigo?",
    },
    {
      num: "05",
      badge: "Anclaje",
      title: "REGRESO SUAVE E INTEGRACIÓN EN EL PRESENTE",
      desc: "Regresas al aquí y al ahora con una profunda sensación de paz, arraigo corporal y ligereza. Dedicamos un tiempo valioso a conversar y asentar las comprensiones para aplicarlas a tu vida cotidiana.",
    },
  ],

  locationsTitle: "DÓNDE REALIZAMOS LA REGRESIÓN",
  locationsIntro:
    "Puedes vivir esta experiencia en persona o desde la intimidad de tu hogar con total garantía de conexión:",
  locations: [
    {
      name: "Despacho en Sueca (Centro Sanar)",
      area: "Ribera Baixa (Valencia)",
      desc: "Un entorno tranquilo, cálido e independiente en Sueca, diseñado para una inmersión profunda sin interrupciones. Fácil acceso desde Cullera, Alzira, Algemesí, Carcaixent y alrededores.",
    },
    {
      name: "A domicilio en Valencia ciudad",
      area: "Valencia capital y área metropolitana",
      desc: "La máxima comodidad de vivir la regresión en tu propio santuario hogareño, ahorrando desplazamientos posteriores y permitiéndote descansar de inmediato al finalizar.",
    },
    {
      name: "Sesión Online en directo",
      area: "Cualquier lugar del mundo",
      desc: "Por videoconferencia individual en alta calidad. Con unos auriculares cómodos y un lugar donde tumbarte tranquilo/a, la eficacia, profundidad y conexión son idénticas a la sesión presencial.",
    },
  ],

  pricingTitle: "TARIFA CLARA Y CONDICIONES TRANSPARENTES",
  price: "100 €",
  priceUnit: "por sesión completa (90 minutos)",
  pricingFeatures: [
    "Sesión individual y personalizada de 90 minutos.",
    "Entrevista previa para acotar la intención y resolver cualquier duda.",
    "Viaje completo de regresión a vida pasada y acceso a Registros Akáshicos.",
    "Espacio dedicado de integración consciente y pautas para tu día a día.",
    "Grabación de audio de la sesión (opcional) para que puedas repasarla.",
    "Sueca (Centro Sanar), a domicilio en Valencia ciudad o formato online.",
  ],

  formEyebrow: "SOLICITAR CITA O CONSULTA",
  formTitle: "INICIA TU VIAJE DE REGRESIÓN",
  formSubtitle:
    "Rellena este breve formulario para consultar disponibilidad o resolver cualquier duda previa. Te responderé personalmente con total cercanía.",
  formFields: {
    name: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono (WhatsApp)",
    modality: "Modalidad de sesión preferida",
    modalityOptions: [
      "Despacho en Sueca (Centro Sanar)",
      "A domicilio en Valencia ciudad",
      "Sesión Online (Videollamada en directo)",
      "Aún no lo tengo claro / Prefiero consultarlo",
    ],
    focus: "¿Qué te gustaría explorar o comprender en tu sesión? (Opcional)",
    focusPlaceholder:
      "Ej. Un miedo sin explicación, una relación con mi pareja, mi propósito de vida, curiosidad espiritual...",
    message: "¿Alguna duda o detalle que quieras comentar? (Opcional)",
    messagePlaceholder: "Escribe aquí cualquier pregunta que tengas...",
    consent: "He leído y acepto la política de privacidad.",
    submit: "Solicitar sesión / Enviar consulta",
    submitting: "Enviando mensaje...",
    success:
      "Gracias por tu mensaje. Lo he recibido correctamente y me pondré en contacto contigo muy pronto para coordinar tu sesión.",
    fallbackMailto: "Enviar directamente por correo electrónico",
  },

  faqEyebrow: "DUDAS HABITUALES",
  faqTitle: "PREGUNTAS FRECUENTES SOBRE VIDAS PASADAS Y REGISTROS AKÁSHICOS",
  faqSubtitle:
    "Todo lo que necesitas saber para acercarte a la experiencia con serenidad y confianza.",
  faqs: [
    {
      q: "¿Voy a perder el control o puedo quedarme 'atrapado/a' en una vida anterior?",
      a: "Rotundamente no. La hipnosis regresiva no es un coma ni un trance televisivo; es un estado de relajación consciente. Escuchas mi voz en todo momento, puedes hablar, abrir los ojos o moverte si lo necesitas. Nunca pierdes el control ni puedes quedarte atrapado/a en ningún plano; el regreso es tan natural como despertarse de un sueño lúcido.",
    },
    {
      q: "¿Qué sucede si mi mente es muy analítica y creo que no voy a poder ver nada?",
      a: "Es una preocupación muy habitual. 'Ver' no siempre significa ver una película en alta definición con los ojos cerrados: para muchas personas la experiencia llega como impresiones corporales, certezas espontáneas del corazón o conceptos que se revelan con claridad. Te guío con un ritmo suave para que el pensamiento analítico descanse y la intuición tome el protagonismo con total naturalidad.",
    },
    {
      q: "¿Qué diferencia hay entre una lectura de Registros Akáshicos y una sesión de hipnosis regresiva?",
      a: "En una lectura tradicional de registros, otra persona canaliza la información y te la cuenta. En la hipnosis regresiva, TÚ eres quien vive la experiencia en primera persona: tú sientes el cuerpo de esa vida, ves los paisajes, escuchas los mensajes y experimentas la emoción de la liberación. Vivirlo por ti mismo/a tiene un poder transformador infinitamente superior a que te lo cuenten.",
    },
    {
      q: "¿Es necesario tener creencias religiosas o creer en la reencarnación?",
      a: "No, en absoluto. Muchas personas escépticas o pragmáticas realizan regresiones y obtienen enormes beneficios. La mente profunda utiliza los símbolos, recuerdos o metáforas necesarias para sanar el presente. No necesitas adoptar ningún dogma; solo tener curiosidad y apertura a tu propia experiencia interior.",
    },
    {
      q: "¿Se puede realizar una sesión de vidas pasadas online con la misma efectividad?",
      a: "Totalmente. El estado de hipnosis depende de la atención focalizada y de la voz del guía, no de la presencia física. Muchas personas incluso prefieren el formato online porque se encuentran en su cama o sillón favorito, en su ambiente íntimo y seguro, pudiendo descansar plácidamente tras finalizar la sesión.",
    },
    {
      q: "¿Se pueden revivir experiencias traumáticas y pasar un mal rato?",
      a: "La sesión siempre está protegida. Tu inconsciente nunca te muestra nada para lo que no estés preparado/a. Si una escena contiene dolor o conflicto, te guío para observarla 'desde fuera' (disociación protectora), como si miraras una pantalla, comprendiendo la lección sin revivir el sufrimiento físico o emocional.",
    },
  ],

  bridgeTitle: "CONOCE EL ENFOQUE PROFESIONAL DE MARÍA A. CABO",
  bridgeSubtitle: "Rigor técnico, empatía y respeto escrupuloso por tu proceso personal.",
  bridgeText:
    "María A. Cabo cuenta con formación rigurosa en hipnosis y psicoterapia ericksoniana en el Instituto Erickson Madrid. Este marco profesional garantiza que cada viaje de regresión y exploración de la conciencia se sostenga sobre bases éticas sólidas, un cuidado impecable del bienestar emocional y técnicas depuradas de integración práctica en tu vida actual.",
  bridgeCta: "Conocer más sobre María A. Cabo y su trayectoria",

  disclaimerText:
    "Aviso de transparencia y rigor: La hipnosis para vidas pasadas y el acceso a Registros Akáshicos se enmarcan en el ámbito del autoconocimiento, la exploración de la conciencia y el desarrollo personal y espiritual. No constituyen un servicio sanitario ni sustituyen la evaluación, diagnóstico o tratamiento médico, psiquiátrico o psicológico clínico cuando estos sean precisos.",
};

export const pastLivesVa: PastLivesData = {
  ...pastLivesEs,
  seoTitle:
    "Hipnosi per a Vides Passades i Registres Akàshics a València i Online · Regressió Conscient | María A. Cabo",
  seoDescription:
    "Regressió a vides passades i accés a Registres Akàshics amb hipnosi conscient a Sueca, València i online. Descobrix l'origen de bloquejos, relacions kàrmiques i memòries de l'ànima.",

  eyebrow: "REGRESSIÓ CONSCIENT · REGISTRES AKÀSHICS · VALÈNCIA I ONLINE",
  title: "HIPNOSI PER A VIDES PASSADES I ACCÉS A REGISTRES AKÀSHICS",
  subtitle:
    "Un viatge conscient, seré i transformador per a explorar les memòries profundes de la teua ànima, sanar bloquejos d'arrel i comprendre el teu propòsit vital.",
  introText:
    "Has sentit alguna vegada una connexió magnètica amb una època històrica, un país o una persona sense motiu racional? O un bloqueig recurrent que no prové de cap vivència d'esta vida? La hipnosi per a vides passades i l'accés als Registres Akàshics et permeten ingressar en un estat de calma lúcida i atenció expandida. Guiada pas a pas per María A. Cabo, no perds en cap moment el control: observes, comprens i portes al present la saviesa que la teua consciència necessita per a avançar amb lleugeresa.",
  trustBadges: [
    "Experiència 100% conscient i segura",
    "Sueca (Centre Sanar) · A domicili a València · Online",
    "Sessió de 90 min d'experiència i integració guiada",
  ],
  ctaPrimary: "SOL·LICITAR SESSIÓ O CONSULTAR",
  ctaSecondary: "COM FUNCIONA EL VIATGE",
  ctaCalendar: "Reservar en calendari",

  reasonsEyebrow: "CRIDES DE L'ÀNIMA",
  reasonsTitle: "QUÈ T'IMPULSA A EXPLORAR UNA VIDA PASSADA?",
  reasonsSubtitle:
    "La regressió no és una evasió del present, sinó una poderosa eina d'autoconeixement per a alliberar el que et limita hui.",
  reasons: [
    {
      tag: "Bloquejos i pors",
      title: "Patrons i fòbies sense causa en esta vida",
      text: "Pors irracionals a l'aigua, al foc, a les altures o al compromís, o una sensació crònica de culpa i alerta que la ment lògica no aconseguix justificar amb vivències de la infància.",
    },
    {
      tag: "Vincles profunds",
      title: "Relacions kàrmiques i ànimes companyes",
      text: "Trobades amb persones on sorgix un reconeixement instantani ('sent que et conec des de sempre'), o relacions intenses i complexes que requerixen sanar dinàmiques pendents del passat.",
    },
    {
      tag: "Afinitats innates",
      title: "Fascinació per cultures i dons espontanis",
      text: "Atracció visceral cap a civilitzacions antigues, idiomes, terres llunyanes o habilitats creatives i espirituals que emergixen de manera natural sense haver-les aprés formalment en el present.",
    },
    {
      tag: "Evolució i sentit",
      title: "Comprensió del propòsit i missió de l'ànima",
      text: "Preguntes existencials profundes: per què he triat esta família i estes circumstàncies?, quina lliçó ve a experimentar la meua ànima?, cap a on dirigir el meu camí amb plenitud?",
    },
  ],

  akashicEyebrow: "MEMÒRIA UNIVERSAL I CONSCIÈNCIA",
  akashicTitle: "COM VEURE VIDES PASSADES I QUÈ SÓN ELS REGISTRES AKÀSHICS?",
  akashicSubtitle:
    "El pont entre la neurofisiologia de la hipnosi i les dimensions profundes de la consciència.",
  akashicPillars: [
    {
      title: "Com veure vides passades a través de la hipnosi?",
      description:
        "No necessites poders especials ni forçar la visió. En la hipnosi conscient induïm un estat de relaxació física profunda (freqüència cerebral theta) on el filtre del judici crític s'atenua. En eixe estat, la percepció s'obri: les memòries es revelen com a imatges vives, sensacions somàtiques, certeses intuïtives espontànies o una narrativa interior envoltant que fluïx amb total nitidesa.",
    },
    {
      title: "Què són els Registres Akàshics i com accedim a ells?",
      description:
        "L'Akasha (terme sànscrit que designa l'èter o espai primordial) és el camp quàntic de memòria universal on queda gravada l'empremta de tota experiència, pensament i aprenentatge de l'ànima. Amb hipnosi regressiva accedim a eixe 'arxiu de l'ànima' o espai entre vides, permetent-te rebre respostes directes, perspectiva dels teus guies i una visió panoràmica de la teua evolució.",
    },
  ],
  realityVsFantasyTitle: "ÉS REAL O ÉS IMAGINACIÓ DE LA MENT?",
  realityVsFantasyText: [
    "Esta és la pregunta més honesta i freqüent dels qui s'acosten per primera vegada a una regressió. Estic recordant una vida prèvia real o la meua ment inconscient està teixint una història simbòlica?",
    "En el meu acompanyament treballem des del respecte absolut per la teua vivència. Ja siga que ho interpretes des de la reencarnació literal, la memòria epigenètica transgeneracional heretada en el teu ADN, o els arquetips de l'inconscient col·lectiu descrits per Carl Jung, el valor és exactament el mateix: la catarsi emocional, la revelació del patró ocult i l'alliberament de la càrrega en la teua vida diària són 100% reals.",
    "L'ànima parla en el llenguatge de l'experiència sentida. El rellevant no és validar dates històriques en un arxiu, sinó la profunda sanació, comprensió i lleugeresa que experimentes en obrir els ulls.",
  ],

  journeyEyebrow: "EL RECORREGUT DE LA SESSIÓ",
  journeyTitle: "COM ÉS UNA SESSIÓ DE REGRESSIÓ PAS A PAS?",
  journeySubtitle:
    "Un protocol segur, respectuós i estructurat on sempre mantens el control i la lucidesa.",
  journeySteps: [
    {
      num: "01",
      badge: "Claredat prèvia",
      title: "ENTREVISTA I FOCUS D'EXPLORACIÓ",
      desc: "Conversem amb calma sobre el teu moment present: quina inquietud, bloqueig, relació o curiositat de l'ànima desitges explorar. Definim una intenció clara i protegida per a la teua sessió.",
    },
    {
      num: "02",
      badge: "Trànsit segur",
      title: "INDUCCIÓ I RELAXACIÓ CONSCIENT",
      desc: "A través de respiració i suggestió suau, et guie cap a un estat de gran serenitat física i ment buidada. El teu cos descansa plàcidament mentre la teua consciència roman desperta i atenta a la meua veu.",
    },
    {
      num: "03",
      badge: "Immersió viva",
      title: "ENCREUAMENT DEL LLINDAR I VIDA PASSADA",
      desc: "Creuem el portal temporal cap a la vida més rellevant per al teu present. Explorem qui eres, el teu entorn, esdeveniments clau, relacions significatives i la transició pacífica al final d'eixa existència.",
    },
    {
      num: "04",
      badge: "Plànol Akàshic",
      title: "ESPAI ENTRE VIDES I REGISTRES AKÀSHICS",
      desc: "Elevem la perspectiva al plànol de l'ànima. Observem eixa vida des de la saviesa superior: quina va ser la gran lliçó?, quins vots o lleialtats és moment de dissoldre?, quins dons portes amb tu?",
    },
    {
      num: "05",
      badge: "Arrelament",
      title: "RETORN SUAU I INTEGRACIÓ EN EL PRESENT",
      desc: "Tornes a l'ací i l'ara amb una profunda sensació de pau, arrelament corporal i lleugeresa. Dediquem un temps valuós a conversar i assentar les comprensions per a aplicar-les a la teua vida quotidiana.",
    },
  ],

  locationsTitle: "ON REALITZEM LA REGRESSIÓ",
  locationsIntro:
    "Pots viure esta experiència en persona o des de la intimitat de la teua llar amb total garantia de connexió:",
  locations: [
    {
      name: "Despatx a Sueca (Centre Sanar)",
      area: "Ribera Baixa (València)",
      desc: "Un entorn tranquil, càlid i independent a Sueca, dissenyat per a una immersió profunda sense interrupcions. Fàcil accés des de Cullera, Alzira, Algemesí, Carcaixent i voltants.",
    },
    {
      name: "A domicili a València ciutat",
      area: "València capital i àrea metropolitana",
      desc: "La màxima comoditat de viure la regressió en el teu propi santuari domèstic, estalviant desplaçaments posteriors i permetent-te descansar immediatament en finalitzar.",
    },
    {
      name: "Sessió Online en directe",
      area: "Qualsevol lloc del món",
      desc: "Per videoconferència individual en alta qualitat. Amb uns auriculars còmodes i un lloc on tombar-te tranquil/a, l'eficàcia, profunditat i connexió són idèntiques a la sessió presencial.",
    },
  ],

  pricingTitle: "TARIFA CLARA I CONDICIONS TRANSPARENTS",
  price: "100 €",
  priceUnit: "per sessió completa (90 minuts)",
  pricingFeatures: [
    "Sessió individual i personalitzada de 90 minuts.",
    "Entrevista prèvia per a acotar la intenció i resoldre qualsevol dubte.",
    "Viatge complet de regressió a vida passada i accés a Registres Akàshics.",
    "Espai dedicat d'integració conscient i pautes per al teu dia a dia.",
    "Gravació d'àudio de la sessió (opcional) per a poder repassar-la.",
    "Sueca (Centre Sanar), a domicili a València ciutat o format online.",
  ],

  formEyebrow: "SOL·LICITAR CITA O CONSULTA",
  formTitle: "INICIA EL TEU VIATGE DE REGRESSIÓ",
  formSubtitle:
    "Emplena este breu formulari per a consultar disponibilitat o resoldre qualsevol dubte previ. Et respondré personalment amb total proximitat.",
  formFields: {
    name: "Nom complet",
    email: "Correu electrònic",
    phone: "Telèfon (WhatsApp)",
    modality: "Modalitat de sessió preferida",
    modalityOptions: [
      "Despatx a Sueca (Centre Sanar)",
      "A domicili a València ciutat",
      "Sessió Online (Videotrucada en directe)",
      "Encara no ho tinc clar / Preferisc consultar-ho",
    ],
    focus: "Què t'agradaria explorar o comprendre en la teua sessió? (Opcional)",
    focusPlaceholder:
      "Ex. Una por sense explicació, una relació amb la meua parella, el meu propòsit de vida, curiositat espiritual...",
    message: "Algun dubte o detall que vulgues comentar? (Opcional)",
    messagePlaceholder: "Escriu ací qualsevol pregunta que tingues...",
    consent: "He llegit i accepte la política de privacitat.",
    submit: "Sol·licitar sessió / Enviar consulta",
    submitting: "Enviant missatge...",
    success:
      "Gràcies pel teu missatge. L'he rebut correctament i em posaré en contacte amb tu molt prompte per a coordinar la teua sessió.",
    fallbackMailto: "Enviar directament per correu electrònic",
  },

  faqEyebrow: "DUBTES HABITUALS",
  faqTitle: "PREGUNTES FREQÜENTS SOBRE VIDES PASSADES I REGISTRES AKÀSHICS",
  faqSubtitle:
    "Tot el que necessites saber per a acostar-te a l'experiència amb serenitat i confiança.",
  faqs: [
    {
      q: "Vaig a perdre el control o puc quedar-me 'atrapat/da' en una vida anterior?",
      a: "Rotundament no. La hipnosi regressiva no és un coma ni un trànsit televisiu; és un estat de relaxació conscient. Escoltes la meua veu en tot moment, pots parlar, obrir els ulls o moure't si ho necessites. Mai perds el control ni pots quedar-te atrapat/da en cap plànol; el retorn és tan natural com despertar-se d'un somni lúcid.",
    },
    {
      q: "Què succeïx si la meua ment és molt analítica i crec que no podré veure res?",
      a: "És una preocupació molt habitual. 'Veure' no sempre significa veure una pel·lícula en alta definició amb els ulls tancats: per a moltes persones l'experiència arriba com a impressions corporals, certeses espontànies del cor o conceptes que es revelen amb claredat. Et guie amb un ritme suau perquè el pensament analític descanse i la intuïció prenga el protagonisme.",
    },
    {
      q: "Quina diferència hi ha entre una lectura de Registres Akàshics i una sessió d'hipnosi regressiva?",
      a: "En una lectura tradicional de registres, una altra persona canalitza la informació i te la conta. En la hipnosi regressiva, TU eres qui viu l'experiència en primera persona: tu sents el cos d'eixa vida, veus els paisatges, escoltes els missatges i experimentes l'emoció de l'alliberament. Viure-ho per tu mateix/a té un poder transformador infinitament superior.",
    },
    {
      q: "És necessari tindre creences religioses o creure en la reencarnació?",
      a: "No, en absolut. Moltes persones escèptiques o pragmàtiques realitzen regressions i obtenen enormes beneficis. La ment profunda utilitza els símbols, records o metàfores necessàries per a sanar el present. No necessites adoptar cap dogma; només tindre curiositat i obertura a la teua pròpia experiència interior.",
    },
    {
      q: "Es pot realitzar una sessió de vides passades online amb la mateixa efectivitat?",
      a: "Totalment. L'estat d'hipnosi depén de l'atenció focalitzada i de la veu de la guia, no de la presència física. Moltes persones fins i tot preferixen el format online perquè es troben en el seu llit o butaca favorita, en el seu ambient íntim i segur, podent descansar plàcidament després de finalitzar.",
    },
    {
      q: "Es poden reviure experiències traumàtiques i passar una mala estona?",
      a: "La sessió sempre està protegida. El teu inconscient mai et mostra res per al que no estigues preparat/da. Si una escena conté dolor o conflicte, et guie per a observar-la 'des de fora' (dissociació protectora), com si mirares una pantalla, comprenent la lliçó sense reviure el sofriment físic o emocional.",
    },
  ],

  bridgeTitle: "CONEIX L'ENFOCAMENT PROFESSIONAL DE MARÍA A. CABO",
  bridgeSubtitle: "Rigor tècnic, empatia i respecte escrupolós pel teu procés personal.",
  bridgeText:
    "María A. Cabo compta amb formació rigorosa en hipnosi i psicoteràpia ericksoniana a l'Institut Erickson Madrid. Este marc professional garantix que cada viatge de regressió i exploració de la consciència se sostinga sobre bases ètiques sòlides, una cura impecable del benestar emocional i tècniques depurades d'integració pràctica en la teua vida actual.",
  bridgeCta: "Conéixer més sobre María A. Cabo i la seua trajectòria",

  disclaimerText:
    "Avís de transparència i rigor: La hipnosi per a vides passades i l'accés a Registres Akàshics s'emmarquen en l'àmbit de l'autoconeixement, l'exploració de la consciència i el desenvolupament personal i espiritual. No constituïxen un servici sanitari ni substituïxen l'avaluació, diagnòstic o tractament mèdic, psiquiàtric o psicològic clínic quan estos siguen precisos.",
};

export const pastLivesEn: PastLivesData = {
  ...pastLivesEs,
  seoTitle:
    "Past Life Regression Hypnosis & Akashic Records in Valencia & Online · Conscious Journey | María A. Cabo",
  seoDescription:
    "Conscious past life regression and Akashic Records hypnosis in Sueca, Valencia and online. Uncover the roots of subconscious blocks, karmic bonds and soul memories.",

  eyebrow: "CONSCIOUS REGRESSION · AKASHIC RECORDS · VALENCIA & ONLINE",
  title: "PAST LIFE REGRESSION HYPNOSIS & AKASHIC RECORDS ACCESS",
  subtitle:
    "A calm, conscious and transformative journey to explore your soul's deep memories, dissolve persistent blocks and gain profound spiritual clarity.",
  introText:
    "Have you ever experienced an unexplainable affinity with a historic era, culture, or person? Or an ongoing emotional block that has no root in your present life? Hypnosis for past life regression and Akashic Records access offers an expanded state of relaxed awareness. Guided by María A. Cabo, you remain fully conscious throughout the experience: observing, understanding and integrating the insights your soul needs to move forward with peace and purpose.",
  trustBadges: [
    "100% conscious, grounded and safe experience",
    "Sueca (Centro Sanar) · In-home in Valencia · Live Online",
    "90-min immersive experience with guided integration",
  ],
  ctaPrimary: "REQUEST A SESSION OR INQUIRE",
  ctaSecondary: "HOW THE JOURNEY WORKS",
  ctaCalendar: "Book via calendar",

  reasonsEyebrow: "CALLS OF THE SOUL",
  reasonsTitle: "WHAT PROMPTS A PAST LIFE REGRESSION?",
  reasonsSubtitle:
    "Regression is not an escape from reality, but a profound self-discovery tool to release limitations holding you back today.",
  reasons: [
    {
      tag: "Blocks & Fears",
      title: "Patterns and phobias without root in this life",
      text: "Unexplainable fears of water, heights, enclosed spaces or scarcity, or chronic feelings of guilt and alert that cannot be traced to childhood experiences.",
    },
    {
      tag: "Deep Connections",
      title: "Karmic relationships and soul companions",
      text: "Instant recognition with specific people ('I feel I have known you forever'), or intense, complex relationship dynamics that require healing past agreements.",
    },
    {
      tag: "Innate Affinities",
      title: "Fascination with eras, cultures & spontaneous gifts",
      text: "Visceral attraction to ancient civilizations, languages, distant lands, or creative and intuitive talents that emerge effortlessly without previous training.",
    },
    {
      tag: "Soul Evolution",
      title: "Understanding life purpose and soul lessons",
      text: "Deep existential questions: Why did I choose this family and circumstances? What lessons is my soul seeking to master? Where should I focus my path?",
    },
  ],

  akashicEyebrow: "UNIVERSAL MEMORY & CONSCIOUSNESS",
  akashicTitle: "HOW TO SEE PAST LIVES & WHAT ARE THE AKASHIC RECORDS?",
  akashicSubtitle:
    "The bridge between neurophysiological hypnosis and the deeper dimensions of human consciousness.",
  akashicPillars: [
    {
      title: "How does one perceive past lives during hypnosis?",
      description:
        "You don't need supernatural gifts or forced visualization. In conscious hypnosis, we guide you into a state of deep somatic relaxation (theta brainwave state) where analytical self-judgment quiets down. In this state, inner perception expands: memories unfold as vivid imagery, somatic feelings, spontaneous intuitive knowings, or an engaging narrative flowing with clarity.",
    },
    {
      title: "What are the Akashic Records and how do we access them?",
      description:
        "Akasha (a Sanskrit term designating the primordial ether or space) is the universal quantum field of consciousness where every soul experience, lesson, and emotional journey is preserved. Through regression hypnosis, we access this soul archive or life-between-lives space, allowing you to receive direct guidance, higher perspective, and a panoramic understanding of your evolutionary journey.",
    },
  ],
  realityVsFantasyTitle: "IS IT REAL OR FANTASY OF THE MIND?",
  realityVsFantasyText: [
    "This is the most common and honest question asked by those exploring regression for the first time: Am I recalling an actual past existence, or is my subconscious weaving a symbolic metaphor?",
    "In my sessions, we hold utmost reverence for your lived experience. Whether you interpret it through literal reincarnation, transgenerational epigenetic memory coded in DNA, or symbolic archetypes of the collective unconscious as articulated by Carl Jung, the outcome is identical: emotional catharsis, the revelation of hidden root patterns, and genuine liberation in your present daily life are 100% tangible.",
    "The soul speaks the language of felt experience. What matters is not historical trivia, but the profound healing, clarity, and lightness you experience when you open your eyes.",
  ],

  journeyEyebrow: "SESSION ROADMAP",
  journeyTitle: "WHAT DOES A REGRESSION SESSION LOOK LIKE?",
  journeySubtitle:
    "A structured, respectful protocol where you remain fully conscious, safe, and lucid at all times.",
  journeySteps: [
    {
      num: "01",
      badge: "Pre-session clarity",
      title: "INTERVIEW & INTENTION SETTING",
      desc: "We discuss your current life circumstances: what block, relationship, emotion or soul curiosity you wish to explore. We define a clear and protected intention for your journey.",
    },
    {
      num: "02",
      badge: "Safe transit",
      title: "INDUCTION & CONSCIOUS RELAXATION",
      desc: "Through gentle breathing and somatic pacing, I guide you into deep physical relaxation and a quieted mind. Your body rests completely while your conscious awareness stays present with my voice.",
    },
    {
      num: "03",
      badge: "Living immersion",
      title: "CROSSING THE THRESHOLD & PAST LIFE",
      desc: "We cross the temporal threshold into the lifetime most relevant to your current inquiry. We explore your identity, surroundings, key life turning points, significant bonds, and the peaceful passing at the end of that existence.",
    },
    {
      num: "04",
      badge: "Akashic realm",
      title: "LIFE-BETWEEN-LIVES & AKASHIC INSIGHTS",
      desc: "We elevate your vantage point to soul consciousness. We review that life with higher wisdom: what was the core lesson?, what vows or vows need releasing?, what strengths do you carry forward?",
    },
    {
      num: "05",
      badge: "Grounding",
      title: "GENTLE RETURN & PRESENT-DAY INTEGRATION",
      desc: "You return to the here and now feeling deeply centered, peaceful, and grounded. We dedicate valuable time to discuss, interpret, and ground your insights into tangible steps for your present life.",
    },
  ],

  locationsTitle: "WHERE SESSIONS TAKE PLACE",
  locationsIntro:
    "You can experience this journey in person or from the comfort of your home with full depth and security:",
  locations: [
    {
      name: "Sueca Office (Centro Sanar)",
      area: "Ribera Baixa (Valencia)",
      desc: "A calm, private and peaceful sanctuary in Sueca designed for deep, undisturbed inner immersion. Readily accessible from Cullera, Alzira, Algemesí, Carcaixent and surrounding towns.",
    },
    {
      name: "In-home visits in Valencia city",
      area: "Valencia capital & metropolitan area",
      desc: "The comfort of experiencing regression in the privacy of your own home, eliminating post-session driving and allowing you to rest peacefully right after.",
    },
    {
      name: "Live Online Sessions",
      area: "Worldwide via video conference",
      desc: "Conducted live over high-definition video call. With comfortable headphones and a quiet spot to recline, the depth, connection and safety are identical to in-person sessions.",
    },
  ],

  pricingTitle: "TRANSPARENT PRICING & CONDITIONS",
  price: "100 €",
  priceUnit: "per full session (90 minutes)",
  pricingFeatures: [
    "Individual and fully personalized 90-minute session.",
    "Preliminary interview to establish intention and address any questions.",
    "Full past life regression journey and Akashic Records exploration.",
    "Dedicated conscious integration and practical grounding recommendations.",
    "Optional audio recording of your session for personal review.",
    "Sueca office, in-home in Valencia city or live online format.",
  ],

  formEyebrow: "BOOK OR INQUIRE",
  formTitle: "BEGIN YOUR REGRESSION JOURNEY",
  formSubtitle:
    "Fill out this brief form to check available dates or ask any questions. I will reply personally with care and attentiveness.",
  formFields: {
    name: "Full name",
    email: "Email address",
    phone: "Phone / WhatsApp",
    modality: "Preferred session format",
    modalityOptions: [
      "Sueca Office (Centro Sanar)",
      "In-home in Valencia city",
      "Live Online Session (Video call)",
      "Not sure yet / I'd like to consult first",
    ],
    focus: "What would you like to explore or understand in your session? (Optional)",
    focusPlaceholder:
      "E.g., an unexplained fear, a bond with a loved one, my life purpose, spiritual curiosity...",
    message: "Any questions or notes you'd like to share? (Optional)",
    messagePlaceholder: "Write any questions or notes here...",
    consent: "I have read and accept the privacy policy.",
    submit: "Request session / Send inquiry",
    submitting: "Sending message...",
    success:
      "Thank you for your message. I have received it safely and will get in touch with you shortly to schedule your session.",
    fallbackMailto: "Send directly via email",
  },

  faqEyebrow: "COMMON QUESTIONS",
  faqTitle: "FREQUENTLY ASKED QUESTIONS ABOUT PAST LIVES & AKASHIC RECORDS",
  faqSubtitle:
    "Everything you need to know to approach this experience with confidence, peace of mind and curiosity.",
  faqs: [
    {
      q: "Will I lose control or could I get 'trapped' in a past lifetime?",
      a: "Absolutely not. Hypnosis is a state of relaxed conscious awareness, not unconsciousness or loss of volition. You hear my voice at all times, can speak, open your eyes or shift positions whenever you wish. You never lose control and you cannot get stuck; returning is as natural and effortless as waking from a lucid dream.",
    },
    {
      q: "What if I am very analytical and fear I won't be able to perceive anything?",
      a: "This is a very common concern. 'Seeing' doesn't mean viewing high-definition video with your eyes closed: for many people, regression unfolds as somatic feelings, spontaneous inner knowings, emotional shifts or concepts revealed with deep clarity. I guide you with patience so your analytical mind can rest while your intuition takes the lead naturally.",
    },
    {
      q: "How does this differ from an Akashic Records reading done by someone else?",
      a: "In a traditional reading, another person channels the information and tells you what they see. In regression hypnosis, YOU live the journey directly: you inhabit the experience, see the landscapes, hear the guidance and feel the emotional breakthrough. Experiencing it firsthand carries an infinitely deeper healing impact.",
    },
    {
      q: "Do I need to believe in reincarnation or spiritual dogmas?",
      a: "Not at all. Pragmatic and skeptical clients regularly experience significant breakthroughs. The deep mind uses whatever symbols, memories or archetypes are necessary to heal your present reality. You do not need to adopt any dogma; only an open and curious attitude toward your inner world.",
    },
    {
      q: "Can an online regression session be just as effective as in-person?",
      a: "Completely. Hypnosis relies on focused attention and the guide's vocal pacing, not physical touch. Many clients actually prefer online sessions because they are in the intimate comfort of their own home, able to rest peacefully the moment the session concludes.",
    },
    {
      q: "Could I re-experience traumatic events and feel overwhelmed?",
      a: "Your subconscious mind will never show you anything you are not ready to process. If a challenging memory arises, I guide you to observe it from an objective, detached perspective ('dissociation'), like watching a movie screen, extracting the wisdom and release without reliving distress.",
    },
  ],

  bridgeTitle: "LEARN ABOUT MARÍA A. CABO'S PROFESSIONAL BACKGROUND",
  bridgeSubtitle: "Grounded methodology, genuine empathy and deep respect for your journey.",
  bridgeText:
    "María A. Cabo is trained in Ericksonian hypnosis and psychotherapy at the Instituto Erickson Madrid. This solid background ensures that every regression journey and exploration of consciousness is held within strict ethical standards, emotional safety and practical integration into your everyday life.",
  bridgeCta: "Learn more about María A. Cabo and her qualifications",

  disclaimerText:
    "Transparency Notice: Past life regression and Akashic Records exploration are dedicated to self-discovery, expanded awareness and personal/spiritual development. They do not constitute healthcare services and do not replace medical, psychiatric or clinical psychological evaluation or treatment when needed.",
};
