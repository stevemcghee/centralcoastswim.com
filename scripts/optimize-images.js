const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GALLERY_DIR = path.join(__dirname, '../public/gallery');
const OPTIMIZED_DIR = path.join(__dirname, '../public/gallery/optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
}

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(800, 800, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({
        quality: 80,
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
      await optimizeImage(inputPath, outputPath);
    }
  }
}

optimizeGallery().then(() => {
  console.log('Gallery optimization complete!');
}); 