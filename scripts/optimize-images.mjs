import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import { join, extname } from "node:path";

const QUALITY = 80;

const tasks = [
  { input: "public/images/places/raw", output: "public/images/places" },
  { input: "public/images/scenes/raw", output: "public/images/scenes" },
];

async function processDir(inputDir, outputDir) {
  let files;
  try {
    files = await readdir(inputDir);
  } catch {
    return 0;
  }

  const images = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));
  if (images.length === 0) return 0;

  await mkdir(outputDir, { recursive: true });

  for (const file of images) {
    const name = file.replace(extname(file), "");
    const inputPath = join(inputDir, file);
    const outputPath = join(outputDir, `${name}.webp`);

    await sharp(inputPath)
      .resize(1400, undefined, { withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outputPath);

    const meta = await sharp(outputPath).metadata();
    console.log(`  ${name}.webp  ${meta.width}x${meta.height}`);
  }

  return images.length;
}

async function main() {
  let total = 0;
  for (const { input, output } of tasks) {
    const count = await processDir(input, output);
    total += count;
  }
  console.log(`\nDone. ${total} images converted to webp (original size preserved, quality ${QUALITY}).`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
