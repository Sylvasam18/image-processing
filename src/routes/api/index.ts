import express from 'express';
const sharp = require('sharp');
const http = require('http');
const fs = require('fs');

const routes = express.Router();

routes.get('/', (req, res) => {
      const name = req.query.name as unknown as string;
      const height = req.query.height as unknown as string;
      const width = req.query.width as unknown as string;

  const newImage = (async function () {
    
    try {
      await sharp('src/assets/full/fjord.jpg')
        .resize(parseInt(height), parseInt(width))
        .toFile(`src/assets/thumbs/${name}.png`);
    } catch (error) {
      console.log(error);
    }
  })();
  fs.readFile(
    `src\\assets\\thumbs\\${name}.png`,
    function (err: unknown, data: unknown) {
      res.writeHead(200, { 'Content-Type': 'image/png' });
      res.write(data);
      return res.end();
    },
  );
});

export default routes;
