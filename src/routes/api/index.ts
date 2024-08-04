import express from 'express';
import newImage from '../../resizer';
const sharp = require('sharp');
const http = require('http');
const fs = require('fs');

const routes = express.Router();

routes.get('/', (req, res) => {
  const name = req.query.name as unknown as string;
  const height = parseInt(req.query.height as unknown as string);
  const width = parseInt(req.query.width as unknown as string);
  newImage(name, width, height);
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
