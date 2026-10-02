import { siteSettings } from "@/content/site-settings";

export const SITE_URL = "https://mariacabo.com";
export const SITE_NAME = "María Cabo";
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
 * LocalBusiness / ProfessionalService schema for María Cabo in Sueca
 */
export function makeLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#organization`,
    name: "María Cabo · Hipnosis en Valencia y Sueca",
    alternateName: "María Cabo",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon-192x192.png`,
    image: DEFAULT_OG_IMAGE,
    description:
      "Acompañamiento con hipnosis para el desarrollo personal en Sueca y Valencia (consulta presencial en Centro Sanar, sesiones a domicilio en casas de particulares en Valencia ciudad y formato online): cambio de hábitos, dejar de fumar, calma, foco y confianza.",
    sameAs: [siteSettings.instagramUrl],
    knowsAbout: [
      "Hipnosis",
      "Hipnosis en Valencia",
      "Hipnosis a domicilio en Valencia",
      "Dejar de fumar",
      "Dejar de fumar en Valencia",
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
          price: "60",
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
    priceRange: "60€ - 300€",
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
      name: "María Cabo",
      url: `${SITE_URL}/sobre-mi`,
      sameAs: [siteSettings.instagramUrl],
    },
    publisher: {
      "@type": "Organization",
      name: "María Cabo",
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
}: {
  name: string;
  description: string;
  price: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "María Cabo",
    },
    areaServed: {
      "@type": "City",
      name: "Sueca",
    },
    offers: {
      "@type": "Offer",
      price: price.replace(/[^0-9]/g, ""),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(path),
    },
  };
}
