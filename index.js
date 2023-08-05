import express from 'express';
import { Worker } from 'node:worker_threads';

const app = express();
const port = 3000;
const worker = new Worker('./worker.js');

app.get('/', (req, res) => {
  res.send('Initial Task');
});

app.get('/worker', (req, res) => {
  worker.postMessage('My name is Satyabrat Jha');

  worker.on('message', (x) => {
    res.send(`Worker Task: ${x}`);
    worker.terminate();
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
