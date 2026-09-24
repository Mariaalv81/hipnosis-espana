import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const images = ['src/assets/images/hero-room.jpg', 'src/assets/images/texture-linen.jpg'];

async function convert() {
  for (const img of images) {
    const inPath = path.resolve(img);
    if (!fs.existsSync(inPath)) {
      console.log('missing', inPath);
      continue;
    }
    const buf = fs.readFileSync(inPath);
    const base = path.basename(img, path.extname(img));
    try {
      await sharp(buf).avif({ quality: 60 }).toFile(path.resolve(path.dirname(inPath), base + '.avif'));
      console.log('wrote', base + '.avif');
    } catch (e) { console.error('avif fail', e); }
    try {
      await sharp(buf).webp({ quality: 75 }).toFile(path.resolve(path.dirname(inPath), base + '.webp'));
      console.log('wrote', base + '.webp');
    } catch (e) { console.error('webp fail', e); }
  }
}

convert().catch(console.error);
