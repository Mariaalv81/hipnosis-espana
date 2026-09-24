import type { Lang } from "@/lib/i18n";

export type BlogBlock = {
  type: "lead" | "p" | "h2" | "quote" | "note";
  text: string;
};

export type BlogPostContent = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  blocks: BlogBlock[];
};

const es: BlogPostContent = {
  slug: "que-es-la-hipnosis",
  title: "¿Qué es realmente la hipnosis?",
  excerpt:
    "No es dormir, perder el control ni dejar la mente en blanco. Es una forma diferente de prestar atención.",
  date: "2026-09-10",
  blocks: [
    {
      type: "lead",
      text: "No es dormir, perder el control ni dejar la mente en blanco. Es una forma diferente de prestar atención.",
    },
    {
      type: "p",
      text: "Cuando escuchamos la palabra hipnosis, es fácil imaginar un péndulo, una persona dormida o alguien haciendo cosas que no haría normalmente. La realidad es bastante menos misteriosa y mucho más interesante.",
    },
    {
      type: "p",
      text: "La hipnosis es un estado de atención focalizada en el que podemos concentrarnos profundamente en una experiencia interna, como una imagen, una sensación o una idea, mientras los estímulos externos pasan a un segundo plano.",
    },
    { type: "h2", text: "Un estado más cotidiano de lo que parece" },
    {
      type: "p",
      text: "¿Alguna vez has estado tan inmerso en un libro que has dejado de escuchar lo que sucedía a tu alrededor? ¿O has conducido por una ruta conocida y, al llegar, te has dado cuenta de que apenas recuerdas algunos tramos?",
    },
    {
      type: "p",
      text: "No son exactamente lo mismo que una sesión de hipnosis, pero nos ayudan a entender que nuestra atención puede cambiar de forma natural. A veces estamos pendientes de todo lo que ocurre fuera; otras, nuestra mente se concentra intensamente en una experiencia.",
    },
    {
      type: "p",
      text: "Durante la hipnosis se utiliza esa capacidad de concentración de manera intencionada y guiada.",
    },
    { type: "h2", text: "¿Pierdes el control?" },
    {
      type: "p",
      text: "No. La hipnosis no consiste en que otra persona controle tu mente. Puedes escuchar, pensar, moverte y comunicar lo que necesitas. Tampoco estás obligado a aceptar sugerencias que no deseas.",
    },
    {
      type: "p",
      text: "La experiencia varía de una persona a otra. Algunas sienten una relajación profunda; otras se mantienen muy conscientes de todo lo que ocurre. No existe una única manera correcta de experimentar la hipnosis.",
    },
    { type: "h2", text: "¿Y para qué sirve?" },
    {
      type: "p",
      text: "La hipnosis puede utilizarse para explorar hábitos, trabajar con determinadas respuestas automáticas, practicar nuevas formas de afrontar situaciones o favorecer experiencias de calma y concentración.",
    },
    {
      type: "p",
      text: "También se estudia y utiliza en ámbitos sanitarios específicos, como el manejo del dolor, por profesionales cualificados. Su utilidad depende del objetivo, del contexto y de las características de cada persona.",
    },
    {
      type: "p",
      text: "En María Cabo la entendemos como una herramienta de acompañamiento para el desarrollo personal: un espacio para explorar recursos, ampliar perspectivas y favorecer cambios que tengan sentido para ti.",
    },
    {
      type: "quote",
      text: "La hipnosis no consiste en dejar de ser tú, sino en descubrir otras maneras de experimentar y responder.",
    },
    {
      type: "note",
      text: "Contenido divulgativo. La hipnosis no sustituye la atención médica o psicológica cuando esta es necesaria.",
    },
  ],
};

const esBrain: BlogPostContent = {
  slug: "que-ocurre-en-el-cerebro-durante-la-hipnosis",
  title: "¿Qué ocurre en el cerebro durante la hipnosis?",
  excerpt:
    "La ciencia ha observado cambios en la atención y la comunicación entre redes cerebrales, sin apagar la mente racional.",
  date: "2026-09-11",
  blocks: [
    {
      type: "lead",
      text: "La ciencia ha observado cambios en la atención y la comunicación entre redes cerebrales. Pero no existe un botón que apague la mente racional.",
    },
    {
      type: "p",
      text: "La hipnosis puede parecer una experiencia muy subjetiva: cerrar los ojos, escuchar una voz y concentrarse en imágenes o sensaciones. Sin embargo, la investigación científica lleva décadas estudiando qué sucede en el cerebro durante este estado.",
    },
    {
      type: "p",
      text: "Los estudios de neuroimagen muestran que la hipnosis se asocia con cambios en la actividad y la comunicación de distintas redes cerebrales. Estos cambios no son idénticos en todas las personas ni significan que una parte del cerebro se desconecte.",
    },
    { type: "h2", text: "La atención cambia de dirección" },
    {
      type: "p",
      text: "Nuestro cerebro recibe una enorme cantidad de información. Constantemente decide qué merece atención y qué puede quedar en segundo plano.",
    },
    {
      type: "p",
      text: "Durante la hipnosis, la atención puede concentrarse con mayor intensidad en una experiencia interna. Algunas investigaciones han observado modificaciones en redes relacionadas con la selección de estímulos relevantes, el pensamiento sobre uno mismo y el control de la atención.",
    },
    {
      type: "p",
      text: "Dicho de forma sencilla: el cerebro puede cambiar la manera en que distribuye sus recursos entre lo que ocurre fuera y lo que estamos experimentando por dentro.",
    },
    { type: "h2", text: "¿Por qué la imaginación puede sentirse tan real?" },
    {
      type: "p",
      text: "Imagina que muerdes un limón. Tal vez notes cómo salivas o cómo cambia la sensación en tu boca, aunque no haya ningún limón delante.",
    },
    {
      type: "p",
      text: "La imaginación puede activar procesos cerebrales y respuestas corporales relacionados con experiencias reales. Durante la hipnosis, las sugestiones y las imágenes mentales pueden adquirir una especial intensidad, lo que ayuda a explicar por qué algunas personas experimentan cambios en sus sensaciones, percepciones o respuestas emocionales.",
    },
    {
      type: "p",
      text: "Esto no significa que imaginar algo sea exactamente igual que vivirlo, ni que todas las sugestiones produzcan el mismo efecto.",
    },
    { type: "h2", text: "¿Se puede cambiar el cerebro?" },
    {
      type: "p",
      text: "El cerebro tiene capacidad de aprender y adaptarse a lo largo de la vida. A esta propiedad la llamamos neuroplasticidad.",
    },
    {
      type: "p",
      text: "La hipnosis puede facilitar experiencias de aprendizaje y ensayo mental que contribuyan a un proceso de cambio. Sin embargo, no es correcto afirmar que una sesión reprograma el cerebro o crea automáticamente nuevas conexiones permanentes.",
    },
    {
      type: "p",
      text: "Los cambios duraderos suelen necesitar práctica, repetición y experiencias que se integren en la vida cotidiana.",
    },
    {
      type: "quote",
      text: "La hipnosis no activa poderes ocultos del cerebro. Utiliza capacidades humanas reales, como la atención, la imaginación y el aprendizaje, de una manera particular.",
    },
    {
      type: "note",
      text: "La investigación sobre los mecanismos neuronales de la hipnosis continúa evolucionando. Este artículo ofrece una explicación divulgativa y no constituye asesoramiento sanitario.",
    },
  ],
};

const esHabit: BlogPostContent = {
  slug: "por-que-cuesta-cambiar-un-habito",
  title: "¿Por qué nos cuesta tanto cambiar un hábito?",
  excerpt: "Porque saber lo que queremos hacer y conseguir hacerlo no siempre son la misma cosa.",
  date: "2026-09-12",
  blocks: [
    {
      type: "lead",
      text: "Porque saber lo que queremos hacer y conseguir hacerlo no siempre son la misma cosa.",
    },
    {
      type: "p",
      text: "Sé que debería dejar de hacerlo, pero vuelvo a caer. Es una frase que aparece en muchos contextos: mirar el móvil sin parar, posponer una tarea, comer por aburrimiento o reaccionar de la misma manera ante una situación que nos incomoda.",
    },
    {
      type: "p",
      text: "A menudo interpretamos estas repeticiones como falta de voluntad. Sin embargo, los hábitos tienen mucho que ver con la manera en que nuestro cerebro aprende.",
    },
    { type: "h2", text: "El cerebro busca ahorrar esfuerzo" },
    {
      type: "p",
      text: "Cuando repetimos una conducta en un contexto parecido, el cerebro va aprendiendo una secuencia. Con el tiempo, esa respuesta puede necesitar cada vez menos deliberación consciente.",
    },
    {
      type: "p",
      text: "Es útil: no tenemos que pensar cada mañana cómo lavarnos los dientes o cómo atarnos los zapatos. El problema aparece cuando un automatismo que antes nos ayudaba deja de encajar con lo que queremos.",
    },
    {
      type: "p",
      text: "Un hábito puede seguir una secuencia sencilla: señal, conducta y consecuencia.",
    },
    {
      type: "p",
      text: "Por ejemplo, sentir estrés puede llevarnos a revisar el móvil. Durante unos minutos encontramos distracción o alivio. Esa consecuencia hace más probable que repitamos la conducta la próxima vez que aparezca el estrés.",
    },
    { type: "h2", text: "¿Por qué no basta con decidir cambiar?" },
    {
      type: "p",
      text: "Porque una decisión consciente puede competir con una respuesta que hemos practicado cientos de veces. Además, el cansancio, las emociones, el entorno y la facilidad de acceso a una conducta influyen en lo que hacemos.",
    },
    {
      type: "p",
      text: "Esto no significa que no tengamos capacidad de elección. Significa que cambiar suele requerir algo más que repetirnos mañana lo haré diferente.",
    },
    { type: "h2", text: "Crear una respuesta nueva" },
    {
      type: "p",
      text: "Una manera de trabajar un hábito es identificar qué lo activa, qué función cumple y qué alternativa podría responder mejor a esa necesidad.",
    },
    {
      type: "p",
      text: "No se trata únicamente de eliminar una conducta, sino de construir una respuesta que podamos practicar en situaciones reales. Cuanto más concreta, accesible y repetida sea, más oportunidades tendrá de consolidarse.",
    },
    {
      type: "p",
      text: "La hipnosis puede complementar este proceso ayudando a explorar los desencadenantes, ensayar mentalmente alternativas y reforzar objetivos personales. Pero el aprendizaje continúa fuera de la sesión.",
    },
    {
      type: "quote",
      text: "Cambiar un hábito no es una lucha contra nuestro cerebro. Es enseñarle, poco a poco, una forma diferente de responder.",
    },
  ],
};

const esHypnosisHabits: BlogPostContent = {
  slug: "hipnosis-y-cambio-de-habitos-como-puede-ayudar",
  title: "Hipnosis y cambio de hábitos: ¿cómo puede ayudar?",
  excerpt:
    "La hipnosis no borra un hábito. Puede ayudarnos a ensayar y fortalecer nuevas maneras de responder.",
  date: "2026-09-12",
  blocks: [
    {
      type: "lead",
      text: "La hipnosis no borra un hábito. Puede ayudarnos a ensayar y fortalecer nuevas maneras de responder.",
    },
    {
      type: "p",
      text: "Muchas personas llegan a la hipnosis buscando cambiar algo que llevan tiempo intentando modificar. A veces han comprendido perfectamente el problema, pero sienten que una parte de su comportamiento sigue funcionando en automático.",
    },
    {
      type: "p",
      text: "La hipnosis puede ofrecer un espacio de atención concentrada para explorar esos patrones y trabajar con nuevas posibilidades.",
    },
    { type: "h2", text: "Observar lo que ocurre antes del hábito" },
    {
      type: "p",
      text: "Un hábito no aparece de la nada. Suele estar relacionado con situaciones, emociones, sensaciones o pensamientos que lo desencadenan.",
    },
    {
      type: "p",
      text: "Durante el trabajo con hipnosis se pueden explorar esas asociaciones y prestar atención a lo que sucede antes de la conducta. Comprender su función ayuda a plantear alternativas más ajustadas a la persona.",
    },
    { type: "h2", text: "Ensayar una respuesta diferente" },
    {
      type: "p",
      text: "Imagina que quieres reaccionar con más calma cuando aparece una situación que normalmente te genera tensión. Durante una sesión puedes visualizar ese momento, conectar con recursos personales y ensayar mentalmente otra manera de responder.",
    },
    {
      type: "p",
      text: "El ensayo mental no sustituye la experiencia real, pero puede formar parte del aprendizaje. La hipnosis puede facilitar que esa práctica sea más absorbente y significativa.",
    },
    { type: "h2", text: "Las sugestiones y el cambio" },
    {
      type: "p",
      text: "Las sugestiones son propuestas que invitan a experimentar una sensación, una perspectiva o una respuesta diferente. Pueden utilizarse para reforzar objetivos, conectar con recursos o imaginar nuevas posibilidades.",
    },
    {
      type: "p",
      text: "No funcionan como órdenes mágicas. Su efecto depende de la persona, del contexto, de sus expectativas y de la manera en que se integran en un proceso de cambio.",
    },
    { type: "h2", text: "Lo importante sucede también fuera de la sesión" },
    {
      type: "p",
      text: "Los hábitos se construyen en la vida cotidiana, por lo que los cambios duraderos suelen necesitar práctica. La hipnosis puede acompañar ese proceso, pero no reemplaza las acciones concretas, la repetición ni el apoyo profesional adecuado cuando sea necesario.",
    },
    {
      type: "p",
      text: "La evidencia sobre hipnosis y hábitos es variable según el objetivo. No existe una garantía de resultados ni un número de sesiones válido para todo el mundo.",
    },
    {
      type: "quote",
      text: "La idea no es forzar a la mente a cambiar, sino crear experiencias que faciliten nuevas formas de aprender y actuar.",
    },
    {
      type: "note",
      text: "En María Cabo ofrecemos acompañamiento para el desarrollo personal. No realizamos diagnóstico ni tratamiento de trastornos médicos o psicológicos.",
    },
  ],
};

const esHypnosisSession: BlogPostContent = {
  slug: "como-es-una-sesion-de-hipnosis",
  title: "¿Cómo es una sesión de hipnosis?",
  excerpt:
    "Una sesión es un espacio de colaboración, no una experiencia en la que otra persona toma el control.",
  date: "2026-09-12",
  blocks: [
    {
      type: "lead",
      text: "Una sesión es un espacio de colaboración, no una experiencia en la que otra persona toma el control.",
    },
    {
      type: "p",
      text: "Si nunca has probado la hipnosis, es normal preguntarte qué sucede exactamente. ¿Tendré que cerrar los ojos? ¿Me quedaré dormido? ¿Recordaré lo que ha pasado?",
    },
    {
      type: "p",
      text: "Aunque cada profesional tiene su manera de trabajar, una sesión suele seguir un proceso sencillo.",
    },
    { type: "h2", text: "Primero, una conversación" },
    {
      type: "p",
      text: "Antes de comenzar, hablamos sobre lo que te gustaría explorar, tus objetivos y las circunstancias que rodean aquello que quieres trabajar.",
    },
    {
      type: "p",
      text: "Esta conversación permite adaptar el acompañamiento a tu experiencia y resolver cualquier duda. No se trata de aplicar el mismo ejercicio a todas las personas.",
    },
    { type: "h2", text: "Después, la experiencia de hipnosis" },
    {
      type: "p",
      text: "El profesional puede guiarte mediante la voz, ejercicios de atención, imágenes mentales, metáforas o sugestiones. Puedes estar sentado cómodamente y, si lo deseas, cerrar los ojos.",
    },
    {
      type: "p",
      text: "Algunas personas sienten una relajación profunda; otras experimentan mayor concentración sin sentirse especialmente relajadas. Ambas experiencias pueden ser compatibles con la hipnosis.",
    },
    {
      type: "p",
      text: "Puedes escuchar, moverte, hablar y comunicar lo que necesites. No pierdes tu voluntad ni estás obligado a seguir una sugerencia.",
    },
    { type: "h2", text: "¿Recordaré lo que ha ocurrido?" },
    {
      type: "p",
      text: "Habitualmente, las personas recuerdan la sesión o buena parte de ella. La experiencia puede variar, pero la hipnosis no implica necesariamente amnesia ni pérdida de conciencia.",
    },
    {
      type: "p",
      text: "Al terminar, dedicamos un tiempo a comentar cómo ha sido la experiencia y qué aprendizajes o acciones pueden resultar útiles.",
    },
    { type: "h2", text: "¿Cuántas sesiones necesito?" },
    {
      type: "p",
      text: "Depende del objetivo, de la persona y del contexto. No existe un número universal ni sería responsable prometer un resultado concreto antes de conocer cada situación.",
    },
    {
      type: "p",
      text: "En María Cabo trabajamos desde un enfoque de desarrollo personal, con respeto por el ritmo individual y sin promesas de cambios milagrosos.",
    },
    {
      type: "quote",
      text: "La hipnosis es una experiencia en la que participas activamente. El proceso se construye contigo, no sobre ti.",
    },
    {
      type: "note",
      text: "La hipnosis no sustituye la atención médica, psicológica o psiquiátrica cuando esta es necesaria.",
    },
  ],
};

const va: BlogPostContent = {
  slug: "que-es-la-hipnosis",
  title: "Què és realment la hipnosi?",
  excerpt:
    "No és dormir, perdre el control ni deixar la ment en blanc. És una forma diferent de parar atenció.",
  date: "2026-09-10",
  blocks: [
    {
      type: "lead",
      text: "No és dormir, perdre el control ni deixar la ment en blanc. És una forma diferent de parar atenció.",
    },
    {
      type: "p",
      text: "Quan escoltem la paraula hipnosi, és fàcil imaginar un pèndol, una persona adormida o algú fent coses que no faria normalment. La realitat és bastant menys misteriosa i molt més interessant.",
    },
    {
      type: "p",
      text: "La hipnosi és un estat d'atenció focalitzada en què podem concentrar-nos profundament en una experiència interna, com una imatge, una sensació o una idea, mentre els estímuls externs passen a un segon pla.",
    },
    { type: "h2", text: "Un estat més quotidià del que sembla" },
    {
      type: "p",
      text: "Alguna vegada has estat tan immers en un llibre que has deixat d'escoltar el que passava al teu voltant? O has conduït per una ruta coneguda i, en arribar, t'has adonat que a penes recordes alguns trams?",
    },
    {
      type: "p",
      text: "No són exactament el mateix que una sessió d'hipnosi, però ens ajuden a entendre que la nostra atenció pot canviar de forma natural. De vegades estem pendents de tot el que ocorre fora; altres, la ment es concentra intensament en una experiència.",
    },
    {
      type: "p",
      text: "Durant la hipnosi s'utilitza eixa capacitat de concentració de manera intencionada i guiada.",
    },
    { type: "h2", text: "Perds el control?" },
    {
      type: "p",
      text: "No. La hipnosi no consistix en què una altra persona controle la teua ment. Pots escoltar, pensar, moure't i comunicar el que necessites. Tampoc estàs obligat a acceptar suggeriments que no desitges.",
    },
    {
      type: "p",
      text: "L'experiència varia d'una persona a una altra. Algunes senten una relaxació profunda; altres es mantenen molt conscients de tot el que ocorre. No existix una única manera correcta d'experimentar la hipnosi.",
    },
    { type: "h2", text: "I per a què servix?" },
    {
      type: "p",
      text: "La hipnosi pot utilitzar-se per a explorar hàbits, treballar amb determinades respostes automàtiques, practicar noves formes d'afrontar situacions o afavorir experiències de calma i concentració.",
    },
    {
      type: "p",
      text: "També s'estudia i s'utilitza en àmbits sanitaris específics, com el maneig del dolor, per part de professionals qualificats. La seua utilitat depén de l'objectiu, del context i de les característiques de cada persona.",
    },
    {
      type: "p",
      text: "En María Cabo l'entenem com una ferramenta d'acompanyament per al desenvolupament personal: un espai per a explorar recursos, ampliar perspectives i afavorir canvis que tinguen sentit per a tu.",
    },
    {
      type: "quote",
      text: "La hipnosi no consistix a deixar de ser tu, sinó a descobrir altres maneres d'experimentar i respondre.",
    },
    {
      type: "note",
      text: "Contingut divulgatiu. La hipnosi no substituïx l'atenció mèdica o psicològica quan esta és necessària.",
    },
  ],
};

const en: BlogPostContent = {
  slug: "que-es-la-hipnosis",
  title: "What is hypnosis, really?",
  excerpt:
    "It is not sleeping, losing control or emptying your mind. It is a different way of paying attention.",
  date: "2026-09-10",
  blocks: [
    {
      type: "lead",
      text: "It is not sleeping, losing control or emptying your mind. It is a different way of paying attention.",
    },
    {
      type: "p",
      text: "When we hear the word hypnosis, it's easy to picture a pendulum, someone asleep, or a person doing things they would never normally do. Reality is far less mysterious — and much more interesting.",
    },
    {
      type: "p",
      text: "Hypnosis is a state of focused attention in which we can concentrate deeply on an inner experience — an image, a sensation or an idea — while external stimuli fade into the background.",
    },
    { type: "h2", text: "More everyday than it seems" },
    {
      type: "p",
      text: "Have you ever been so absorbed in a book that you stopped hearing what was happening around you? Or driven a familiar route and realised, on arrival, that you barely remember parts of the journey?",
    },
    {
      type: "p",
      text: "These are not exactly the same as a hypnosis session, but they help us understand that our attention can shift naturally. Sometimes we track everything happening outside; other times, the mind concentrates intensely on a single experience.",
    },
    {
      type: "p",
      text: "During hypnosis, that capacity for concentration is used intentionally and with guidance.",
    },
    { type: "h2", text: "Do you lose control?" },
    {
      type: "p",
      text: "No. Hypnosis does not mean someone else controls your mind. You can listen, think, move and say whatever you need. You are never obliged to accept suggestions you don't want.",
    },
    {
      type: "p",
      text: "The experience varies from person to person. Some feel deep relaxation; others stay very aware of everything that happens. There is no single right way to experience hypnosis.",
    },
    { type: "h2", text: "And what is it for?" },
    {
      type: "p",
      text: "Hypnosis can be used to explore habits, work with certain automatic responses, practise new ways of facing situations, or encourage experiences of calm and concentration.",
    },
    {
      type: "p",
      text: "It is also studied and used in specific healthcare settings, such as pain management, by qualified professionals. Its usefulness depends on the goal, the context and each person's characteristics.",
    },
    {
      type: "p",
      text: "At María Cabo we understand it as a support tool for personal development: a space to explore resources, widen perspectives and encourage changes that make sense to you.",
    },
    {
      type: "quote",
      text: "Hypnosis is not about stopping being yourself, but about discovering other ways of experiencing and responding.",
    },
    {
      type: "note",
      text: "Informative content. Hypnosis does not replace medical or psychological care when that is needed.",
    },
  ],
};

const postsByLang: Record<Lang, BlogPostContent[]> = {
  es: [esHypnosisSession, esHypnosisHabits, esHabit, esBrain, es],
  va: [va],
  en: [en],
};

export function getBlogPost(slug: string, lang: Lang): BlogPostContent | undefined {
  return (
    postsByLang[lang].find((post) => post.slug === slug) ??
    postsByLang.es.find((post) => post.slug === slug)
  );
}
