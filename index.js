import express from 'express';
import {Worker} from "node:worker_threads"

const app = express();
const port = 3000;
const worker =new Worker("./worker.js")
// const worker2 =new Worker("./worker2.js")


// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Light task completed');
});
app.get('/heavy', (req, res) => {
    

    worker.postMessage("heavyTask-30")
    // worker.close()
 
   worker.on("heavyTask-30",()=>{
       res.send(`Heavy task Completed-${123}`)

   })
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
