import express from 'express';
import { Worker } from 'worker_threads';

const app = express();
const port = 3000;
const worker = new Worker('./worker.js');

// Define a route for the root URL

app.get('/', (req, res) => {
  worker.postMessage(`Hamara naam Palash hai hihihihihi`);

  worker.on('message', (message) => {
    console.log('Worker task completed:', message);
    worker.terminate();
  });

  worker.on('exit', () => {
    console.log('Worker exited');
  });

  res.send("<h1 style='text-align:center;'>All read/write opearation is completed<h1>");
  res.end();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});