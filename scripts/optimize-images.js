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
    // Check if input file exists
    if (!fs.existsSync(inputPath)) {
      console.log(`Input file not found: ${inputPath}, skipping...`);
      return;
    }

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
    // Don't throw the error, just log it and continue
  }
}

async function optimizeGallery() {
  // Check if gallery directory exists
  if (!fs.existsSync(GALLERY_DIR)) {
    console.log(`Gallery directory not found: ${GALLERY_DIR}, skipping gallery optimization...`);
    return;
  }

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
  try {
    await optimizeGallery();
    await optimizeHero();
    console.log('All images optimization complete!');
  } catch (error) {
    console.error('Error during image optimization:', error);
    // Exit with 0 to not fail the build if images can't be optimized
    process.exit(0);
  }
}

optimizeAll(); 