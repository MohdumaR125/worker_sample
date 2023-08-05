import express from 'express';
import {Worker, workerData} from "node:worker_threads"

const app = express();
const port = 3000;

// Worker thread initialization
const worker =new Worker("./worker.js",{ workerData: {
  wData : "Hello from worker.",
}})
// const worker2 =new Worker("./worker2.js")


// Define a route for the root URL
app.get('/', (req, res) => {
  console.log("From index.js file");
  res.send('Light task completed test');
});

app.get('/heavy', (req, res) => {
  worker.postMessage("message")

  setTimeout(() => {
    worker.close()
  }, 6000)
 
  // Worker event listener
  worker.postMessage("close")
  worker.on("message",()=>{
    res.send(`Heavy task Completed-${123}`)
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
