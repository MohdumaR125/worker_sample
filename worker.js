import { parentPort } from 'node:worker_threads';
import fs from 'fs';

parentPort.on('message', (data) => {
  fs.writeFileSync('./output.txt', data);
  
  parentPort.postMessage('Completed');
});
