const https = require('https');
const fs = require('fs');
const path = require('path');

const images = [
  {
    url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7',
    filename: 'hero-pool.jpg',
    directory: 'public'
  },
  {
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
    filename: 'pool-facility.jpg',
    directory: 'public'
  },
  {
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
    filename: 'instructor-1.jpg',
    directory: 'public'
  },
  {
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
    filename: 'instructor-2.jpg',
    directory: 'public'
  },
  {
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
    filename: 'instructor-3.jpg',
    directory: 'public'
  }
];

// Create gallery directory
const galleryDir = path.join(__dirname, '../public/gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Add gallery images
for (let i = 1; i <= 8; i++) {
  images.push({
    url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
    filename: `gallery-${i}.jpg`,
    directory: 'public/gallery'
  });
}

function downloadImage(url, filename, directory) {
  const dir = path.join(__dirname, '..', directory);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const file = fs.createWriteStream(path.join(dir, filename));
  https.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filename);
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
}

// Download all images
images.forEach(img => {
  downloadImage(img.url, img.filename, img.directory);
}); 