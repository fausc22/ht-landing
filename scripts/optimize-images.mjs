import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const publicDir = path.join(root, "public");

async function compressJpeg(inputPath, { maxWidth = 1800, maxBytes = 150_000, startQuality = 82 } = {}) {
  const abs = path.isAbsolute(inputPath) ? inputPath : path.join(publicDir, inputPath);
  let quality = startQuality;
  let buffer;

  while (quality >= 55) {
    buffer = await sharp(abs)
      .rotate()
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    if (buffer.length <= maxBytes) break;
    quality -= 4;
  }

  await fs.writeFile(abs, buffer);
  const stats = await fs.stat(abs);
  console.log(`✓ ${path.relative(root, abs)} → ${(stats.size / 1024).toFixed(1)} KB (q${quality})`);
  return abs;
}

async function pngToJpeg(inputRel, outputRel, { maxWidth = 1800, maxBytes = 200_000 } = {}) {
  const input = path.join(publicDir, inputRel);
  const output = path.join(publicDir, outputRel);
  let quality = 82;
  let buffer;

  while (quality >= 55) {
    buffer = await sharp(input)
      .rotate()
      .resize({ width: maxWidth, withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    if (buffer.length <= maxBytes) break;
    quality -= 4;
  }

  await fs.writeFile(output, buffer);
  await fs.unlink(input);
  console.log(`✓ ${inputRel} → ${outputRel} (${(buffer.length / 1024).toFixed(1)} KB, q${quality})`);
}

async function makeOg(sourceRel, destRel) {
  const input = path.join(publicDir, sourceRel);
  const output = path.join(publicDir, destRel);
  await fs.mkdir(path.dirname(output), { recursive: true });

  let quality = 80;
  let buffer;
  while (quality >= 55) {
    buffer = await sharp(input)
      .rotate()
      .resize(1200, 630, { fit: "cover", position: "centre" })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    if (buffer.length <= 280_000) break;
    quality -= 4;
  }

  await fs.writeFile(output, buffer);
  console.log(`✓ OG ${destRel} → ${(buffer.length / 1024).toFixed(1)} KB (q${quality})`);
}

const heroes = [
  "images/home/hero-01.jpg",
  "images/home/hero-02.jpg",
  "images/home/hero-03.jpg",
  "images/home/hero-04.jpg",
];

const alfalfaGallery = [
  "images/alfalfa/compactacion-megafardo.jpg",
  "images/alfalfa/detalle-alfalfa-compactada.jpg",
  "images/alfalfa/megafardos-almacenados.jpg",
  "images/alfalfa/planta-compactacion.jpg",
  "images/alfalfa/rollos-almacenados.jpg",
  "images/alfalfa/stock-megafardos.jpg",
];

const ogMap = [
  ["images/cta/home.jpg", "images/og/og-home.jpg"],
  ["images/cta/company.jpg", "images/og/og-empresa.jpg"],
  ["images/cta/solutions.jpg", "images/og/og-soluciones.jpg"],
  ["images/cta/processing.jpg", "images/og/og-procesamiento.jpg"],
  ["images/cta/alfalfa.jpg", "images/og/og-alfalfa.jpg"],
  ["images/cta/international.jpg", "images/og/og-internacional.jpg"],
  ["images/og-default.jpg", "images/og/og-contacto.jpg"],
];

console.log("--- Hero ---");
for (const file of heroes) await compressJpeg(file, { maxBytes: 150_000 });

console.log("--- Alfalfa megafardos PNG → JPG ---");
await pngToJpeg("images/alfalfa-megafardos.png", "images/alfalfa-megafardos.jpg", { maxBytes: 200_000 });

console.log("--- Alfalfa gallery ---");
for (const file of alfalfaGallery) await compressJpeg(file, { maxBytes: 150_000, maxWidth: 1600 });

console.log("--- OG images ---");
for (const [src, dest] of ogMap) await makeOg(src, dest);

// Keep og-default in sync with home OG as a safe fallback
await fs.copyFile(path.join(publicDir, "images/og/og-home.jpg"), path.join(publicDir, "images/og-default.jpg"));
console.log("✓ images/og-default.jpg synced from og-home");

console.log("Done.");
