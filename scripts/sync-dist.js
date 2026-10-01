import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

const publicSitemap = path.resolve("public/sitemap.xml");
const publicRobots = path.resolve("public/robots.txt");

if (fs.existsSync(publicSitemap)) {
  fs.copyFileSync(publicSitemap, path.join(distDir, "sitemap.xml"));
}

if (fs.existsSync(publicRobots)) {
  fs.copyFileSync(publicRobots, path.join(distDir, "robots.txt"));
}

// Also verify .vercel/output/static if present
const vercelStaticDir = path.resolve(".vercel/output/static");
if (fs.existsSync(vercelStaticDir)) {
  if (fs.existsSync(publicSitemap)) {
    fs.copyFileSync(publicSitemap, path.join(vercelStaticDir, "sitemap.xml"));
  }
  if (fs.existsSync(publicRobots)) {
    fs.copyFileSync(publicRobots, path.join(vercelStaticDir, "robots.txt"));
  }
}

console.log("Confirmed dist/sitemap.xml and dist/robots.txt exist.");
