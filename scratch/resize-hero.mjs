import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const originalImage = path.resolve(__dirname, '../src/assets/images/programs/Donate Image (1).webp');
const output400 = path.resolve(__dirname, '../src/assets/images/programs/Donate Image (1)-400w.webp');
const output800 = path.resolve(__dirname, '../src/assets/images/programs/Donate Image (1)-800w.webp');

async function resizeImages() {
  try {
    await sharp(originalImage)
      .resize({ width: 400 })
      .toFile(output400);
    console.log('Created 400w variant');

    await sharp(originalImage)
      .resize({ width: 800 })
      .toFile(output800);
    console.log('Created 800w variant');
  } catch (error) {
    console.error('Error resizing images:', error);
  }
}

resizeImages();
