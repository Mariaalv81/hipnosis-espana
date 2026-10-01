import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const IMAGES_DIR = path.resolve("src/assets/images");

async function optimizePhotos() {
  console.log("Optimizing images in:", IMAGES_DIR);

  const photoConfigs = [
    {
      baseName: "maria-cabo",
      source: "maria-cabo.jpg",
      maxWidth: 1600,
    },
    {
      baseName: "oficina",
      source: "oficina.jpg",
      maxWidth: 1600,
    },
    {
      baseName: "sesion_maria_cabo",
      source: "sesion_maria_cabo.jpg",
      maxWidth: 1600,
    },
    {
      baseName: "sobre-mi-maria-cabo",
      source: "sobre-mi-maria-cabo.jpg",
      maxWidth: 1400,
    },
    {
      baseName: "proceso",
      source: "proceso.jpg",
      maxWidth: 1800,
    },
    {
      baseName: "hero-attached",
      source: "hero-attached.jpg",
      maxWidth: 1600,
    },
    {
      baseName: "hero-room",
      source: "hero-room.jpg",
      maxWidth: 1600,
    },
    {
      baseName: "texture-linen",
      source: "texture-linen.jpg",
      maxWidth: 1200,
    },
  ];

  for (const config of photoConfigs) {
    const srcPath = path.join(IMAGES_DIR, config.source);
    if (!fs.existsSync(srcPath)) continue;

    console.log(`\nProcessing photo: ${config.baseName}...`);
    const inputBuffer = fs.readFileSync(srcPath);

    // 1. Generate real JPEG
    let jpegPipeline = sharp(inputBuffer);
    if (config.maxWidth) {
      jpegPipeline = jpegPipeline.resize({ width: config.maxWidth, withoutEnlargement: true });
    }
    const jpegBuffer = await jpegPipeline
      .jpeg({ quality: 82, mozjpeg: true, progressive: true })
      .toBuffer();
    const jpgDest = path.join(IMAGES_DIR, `${config.baseName}.jpg`);
    fs.writeFileSync(jpgDest, jpegBuffer);
    console.log(`  -> ${config.baseName}.jpg: ${(jpegBuffer.length / 1024).toFixed(1)} KB`);

    // 2. Generate real WebP
    let webpPipeline = sharp(inputBuffer);
    if (config.maxWidth) {
      webpPipeline = webpPipeline.resize({ width: config.maxWidth, withoutEnlargement: true });
    }
    const webpBuffer = await webpPipeline.webp({ quality: 80, effort: 5 }).toBuffer();
    const webpDest = path.join(IMAGES_DIR, `${config.baseName}.webp`);
    fs.writeFileSync(webpDest, webpBuffer);
    console.log(`  -> ${config.baseName}.webp: ${(webpBuffer.length / 1024).toFixed(1)} KB`);

    // 3. Generate real AVIF
    let avifPipeline = sharp(inputBuffer);
    if (config.maxWidth) {
      avifPipeline = avifPipeline.resize({ width: config.maxWidth, withoutEnlargement: true });
    }
    const avifBuffer = await avifPipeline.avif({ quality: 78, effort: 5 }).toBuffer();
    const avifDest = path.join(IMAGES_DIR, `${config.baseName}.avif`);
    fs.writeFileSync(avifDest, avifBuffer);
    console.log(`  -> ${config.baseName}.avif: ${(avifBuffer.length / 1024).toFixed(1)} KB`);
  }

  // Optimize logos
  const logoFiles = [
    "mc-blanco-web.png",
    "mc-negro-web.png",
    "mc_blanco_transparente.png",
    "mc_negro_transparente.png",
  ];

  for (const logo of logoFiles) {
    const srcPath = path.join(IMAGES_DIR, logo);
    if (!fs.existsSync(srcPath)) continue;

    const inputBuffer = fs.readFileSync(srcPath);
    const optimized = await sharp(inputBuffer).png({ compressionLevel: 9, effort: 8 }).toBuffer();

    if (optimized.length < inputBuffer.length) {
      fs.writeFileSync(srcPath, optimized);
      console.log(
        `\nOptimized logo ${logo}: ${(inputBuffer.length / 1024).toFixed(1)} KB -> ${(optimized.length / 1024).toFixed(1)} KB`,
      );
    } else {
      console.log(
        `\nLogo ${logo} is already optimal (${(inputBuffer.length / 1024).toFixed(1)} KB)`,
      );
    }
  }

  console.log("\nImage optimization complete!");
}

optimizePhotos().catch(console.error);
