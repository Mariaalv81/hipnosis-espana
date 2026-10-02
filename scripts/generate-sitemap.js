import fs from "fs";
import path from "path";

const SITE_URL = "https://mariacabo.com";

const staticRoutes = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "/ansiedad", changefreq: "weekly", priority: "0.9" },
  { path: "/dejar-de-fumar", changefreq: "monthly", priority: "0.9" },
  { path: "/control-de-peso", changefreq: "monthly", priority: "0.9" },
  { path: "/habitos-nerviosos", changefreq: "monthly", priority: "0.9" },
  { path: "/deporte-y-motivacion", changefreq: "monthly", priority: "0.9" },
  { path: "/miedos-y-fobias", changefreq: "monthly", priority: "0.9" },
  { path: "/autoestima-y-confianza", changefreq: "monthly", priority: "0.9" },
  { path: "/concentracion-y-foco", changefreq: "monthly", priority: "0.9" },
  { path: "/sesiones", changefreq: "monthly", priority: "0.9" },
  { path: "/reservar", changefreq: "monthly", priority: "0.9" },
  { path: "/como-funciona", changefreq: "monthly", priority: "0.8" },
  { path: "/ambitos", changefreq: "monthly", priority: "0.8" },
  { path: "/empresas", changefreq: "monthly", priority: "0.8" },
  { path: "/sobre-mi", changefreq: "monthly", priority: "0.8" },
  { path: "/eventos", changefreq: "weekly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/contacto", changefreq: "monthly", priority: "0.7" },
  { path: "/empresas/contacto", changefreq: "monthly", priority: "0.7" },
  { path: "/faq", changefreq: "monthly", priority: "0.6" },
  { path: "/legal", changefreq: "yearly", priority: "0.3" },
  { path: "/politica-de-cookies", changefreq: "yearly", priority: "0.3" },
];

function getBlogSlugs() {
  const filePath = path.resolve("src/content/blog-posts.ts");
  if (!fs.existsSync(filePath)) return [];
  const content = fs.readFileSync(filePath, "utf8");
  const matches = [...content.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  return [...new Set(matches)];
}

function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];
  const blogSlugs = getBlogSlugs();

  const urls = [
    ...staticRoutes.map(
      (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
    ),
    ...blogSlugs.map(
      (slug) => `  <url>
    <loc>${SITE_URL}/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

  const outPath = path.resolve("public/sitemap.xml");
  fs.writeFileSync(outPath, xml, "utf8");
  console.log(`Generated public/sitemap.xml with ${urls.length} URLs.`);

  const distDir = path.resolve("dist");
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }
  fs.writeFileSync(path.join(distDir, "sitemap.xml"), xml, "utf8");
  const robotsPath = path.resolve("public/robots.txt");
  if (fs.existsSync(robotsPath)) {
    fs.copyFileSync(robotsPath, path.join(distDir, "robots.txt"));
  }
  console.log(`Synced sitemap.xml and robots.txt to dist/.`);
}

generateSitemap();
