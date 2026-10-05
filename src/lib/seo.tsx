import { siteSettings } from "@/content/site-settings";

export const SITE_URL = "https://mariacabo.com";
export const SITE_NAME = "María A. Cabo";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function makeSeo({
  title,
  description,
  path = "/",
  type = "website",
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
}) {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:locale", content: "es_ES" },
      { property: "og:image", content: imageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: title },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: title },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/**
 * Reusable JSON-LD schema injector component
 */
export function JsonLd({
  schema,
}: {
  schema: Record<string, unknown> | Record<string, unknown>[];
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/**
 * LocalBusiness / ProfessionalService schema for María A. Cabo in Sueca
 */
export function makeLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "María A. Cabo · Hipnosis y Hipnoterapia en Valencia y Sueca",
    alternateName: ["María A. Cabo", "María Cabo", "María A. Cabo Hipnoterapia", "Hipnosis María A. Cabo"],
    url: SITE_URL,
    logo: `${SITE_URL}/favicon-192x192.png`,
    image: DEFAULT_OG_IMAGE,
    description:
      "Acompañamiento con hipnosis e hipnoterapia para el desarrollo personal en Sueca y Valencia (consulta en Centro Sanar, a domicilio en Valencia ciudad y online) con María A. Cabo. Formada en el Instituto Erickson Madrid en hipnosis y psicoterapia ericksoniana.",
    sameAs: [siteSettings.instagramUrl],
    founder: {
      "@type": "Person",
      name: "María A. Cabo",
      alternateName: "María Cabo",
      jobTitle: "Especialista en Hipnosis, Hipnoterapia y Psicoterapia Ericksoniana",
      url: `${SITE_URL}/sobre-mi`,
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Instituto Erickson Madrid",
        url: "https://institutoericksonmadrid.com",
      },
    },
    knowsAbout: [
      "Hipnosis",
      "Hipnoterapia",
      "Hipnoterapia en Valencia",
      "Hipnoterapeuta",
      "Hipnosis ericksoniana",
      "Psicoterapia ericksoniana",
      "Instituto Erickson Madrid",
      "Hipnosis en Valencia",
      "Hipnosis a domicilio en Valencia",
      "Dejar de fumar con hipnosis",
      "Hipnosis para la ansiedad",
      "Cambio de hábitos",
      "Gestión del estrés",
      "Desarrollo personal",
      "Atención focalizada y concentración",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Hipnosis y Desarrollo Personal",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sesión individual de hipnosis (Sueca, a domicilio en Valencia u online)",
            description:
              "Sesión presencial de 1 hora en despacho en Sueca, a domicilio en casas de particulares en Valencia ciudad, o en formato online para cambio de hábitos, calma y foco.",
          },
          price: "70",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hipnosis para la ansiedad y regulación corporal",
            description:
              "Acompañamiento natural con hipnosis para calmar la ansiedad, desactivar la alerta somática y enseñar al cuerpo a recuperar la serenidad en Sueca, Valencia y Ribera Baixa.",
          },
          price: "70",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Programa para dejar de fumar con hipnosis",
            description:
              "Programa estructurado de tres sesiones de hipnosis (en Sueca o a domicilio en Valencia) con entrevista previa de 20 minutos sin compromiso.",
          },
          price: "300",
          priceCurrency: "EUR",
        },
      ],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Centro Sanar",
      addressLocality: "Sueca",
      addressRegion: "Valencia",
      postalCode: "46410",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.2025,
      longitude: -0.3113,
    },
    email: "maria.a.cabo@gmail.com",
    priceRange: "70€ - 300€",
    areaServed: [
      { "@type": "City", name: "Valencia" },
      { "@type": "City", name: "Sueca" },
      { "@type": "City", name: "Cullera" },
      { "@type": "City", name: "Gandia" },
      { "@type": "City", name: "Alzira" },
      { "@type": "AdministrativeArea", name: "Valencia" },
      { "@type": "AdministrativeArea", name: "Comunidad Valenciana" },
    ],
    knowsLanguage: ["es", "ca", "en"],
  };
}

/**
 * FAQPage schema for Google rich snippets
 */
export function makeFaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/**
 * Article schema for blog posts
 */
export function makeArticleSchema({
  title,
  excerpt,
  date,
  slug,
}: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    datePublished: date,
    dateModified: date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
    image: DEFAULT_OG_IMAGE,
    author: {
      "@type": "Person",
      name: "María A. Cabo",
      url: `${SITE_URL}/sobre-mi`,
      sameAs: [siteSettings.instagramUrl],
    },
    publisher: {
      "@type": "Organization",
      name: "María A. Cabo",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/favicon-192x192.png`,
      },
    },
  };
}

/**
 * Service schema for smoking program and sessions
 */
export function makeServiceSchema({
  name,
  description,
  price,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  price: string;
  path: string;
  areaServed?: Array<{ "@type": string; name: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "María A. Cabo",
    },
    areaServed: areaServed || [
      { "@type": "City", name: "Sueca" },
      { "@type": "City", name: "Valencia" },
      { "@type": "AdministrativeArea", name: "Ribera Baixa" },
    ],
    offers: {
      "@type": "Offer",
      price: price.replace(/[^0-9]/g, ""),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
    },
  };
}

/**
 * Person schema for María A. Cabo (SEO / Knowledge Graph / E-E-A-T)
 */
export function makePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/sobre-mi#maria-cabo`,
    name: "María A. Cabo",
    alternateName: "María Cabo",
    jobTitle: "Facilitadora de Hipnosis, Hipnoterapia y Psicoterapia Ericksoniana",
    description:
      "Facilitadora de hipnosis e hipnoterapia aplicada al desarrollo personal y profesional. Se ha formado en el Instituto Erickson Madrid en hipnosis y psicoterapia ericksoniana.",
    url: `${SITE_URL}/sobre-mi`,
    image: `${SITE_URL}/sobre-mi-maria-cabo.jpg`,
    sameAs: [siteSettings.instagramUrl],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Instituto Erickson Madrid",
      url: "https://institutoericksonmadrid.com",
    },
    knowsAbout: [
      "Hipnosis",
      "Hipnoterapia",
      "Psicoterapia ericksoniana",
      "Hipnosis ericksoniana",
      "Instituto Erickson Madrid",
      "Desarrollo personal",
      "Gestión de la ansiedad",
      "Dejar de fumar con hipnosis",
      "Cambio de hábitos",
    ],
    worksFor: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "María A. Cabo · Hipnosis y Hipnoterapia",
      url: SITE_URL,
    },
  };
}
