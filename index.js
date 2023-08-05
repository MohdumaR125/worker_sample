import express from 'express';
import {Worker} from "node:worker_threads"

const app = express();
const port = 3000;
const worker =new Worker("./worker.js")


// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('light task');
});
app.get('/heavy', (req, res) => {
  
   worker.on("message",(message)=>{
       res.send(message)
    worker.terminate()
   })
   worker.postMessage("This text is from index.js to worker.js")
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
