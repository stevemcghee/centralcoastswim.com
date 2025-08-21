const sharp = require('sharp');
const path = require('path');

const inputFile = process.argv[2];

if (!inputFile) {
  console.error('Usage: node scripts/get-image-metadata.js <input>');
  process.exit(1);
}

const inputPath = path.resolve(inputFile);

sharp(inputPath)
  .metadata()
  .then(metadata => {
    console.log(metadata);
  })
  .catch(err => {
    console.error('Error getting image metadata:', err);
  });
