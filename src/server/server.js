import express from 'express';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express();
const port = process.env.PORT || 8080;

server.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/public/index.html'));
});

server.use(express.static(path.join(__dirname,'../../dist/public')));

server.listen(port, () => {
  console.log('Server started at http://localhost:' + port);
});