const sharp = require('sharp');
const path = require('path');

const inputFile = process.argv[2];
const outputFile = process.argv[3];
const width = parseInt(process.argv[4], 10);
const height = parseInt(process.argv[5], 10);

if (!inputFile || !outputFile || !width || !height) {
  console.error('Usage: node scripts/crop-image.js <input> <output> <width> <height>');
  process.exit(1);
}

const inputPath = path.resolve(inputFile);
const outputPath = path.resolve(outputFile);

sharp(inputPath)
  .resize(width, height, {
    fit: 'cover',
    position: 'center'
  })
  .toFile(outputPath)
  .then(() => {
    console.log(`Image cropped and saved to ${outputPath}`);
  })
  .catch(err => {
    console.error('Error cropping image:', err);
  });
