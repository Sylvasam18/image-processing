const sharp = require('sharp');

const newImage = async function (name: string, width: number, height: number) {
  try {
    await sharp('src/assets/full/fjord.jpg')
      .resize(height, width)
      .toFile(`src/assets/thumbs/${name}.png`);
  } catch (error) {
    console.log(error);
  }
};

export default newImage;
