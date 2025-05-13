const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(__dirname, '../public/gallery');
const OPTIMIZED_DIR = path.join(__dirname, '../public/gallery/optimized');
const PUBLIC_DIR = path.join(__dirname, '../public');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, options) {
  try {
    await sharp(inputPath)
      .resize(options.width, options.height, {
        fit: options.fit || 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: options.quality || 80,
        progressive: true
      })
      .toFile(outputPath);
    
    console.log(`Optimized ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${path.basename(inputPath)}:`, error);
  }
}

async function optimizeGallery() {
  const files = fs.readdirSync(GALLERY_DIR);
  
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(GALLERY_DIR, file);
      const outputPath = path.join(OPTIMIZED_DIR, file);
      await optimizeImage(inputPath, outputPath, {
        width: 800,
        height: 800,
        quality: 80
      });
    }
  }
}

async function optimizeHero() {
  const heroImage = 'hero-pool.jpg';
  const inputPath = path.join(PUBLIC_DIR, heroImage);
  const outputPath = path.join(PUBLIC_DIR, 'optimized', heroImage);

  // Create optimized directory if it doesn't exist
  if (!fs.existsSync(path.join(PUBLIC_DIR, 'optimized'))) {
    fs.mkdirSync(path.join(PUBLIC_DIR, 'optimized'), { recursive: true });
  }

  await optimizeImage(inputPath, outputPath, {
    width: 1920,
    height: 1080,
    fit: 'cover',
    quality: 85
  });
}

async function optimizeAll() {
  await optimizeGallery();
  await optimizeHero();
  console.log('All images optimization complete!');
}

optimizeAll(); 