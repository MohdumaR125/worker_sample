import express from 'express';
import { Worker } from "node:worker_threads"

const app = express();
const port = 3000;
const worker = new Worker("./worker.js")


// Define a route for the root URL
app.get('/', (req, res) => {
  worker.postMessage("Create file for Himanshu")

  worker.on("message", (x) => {
    console.log(x)
    res.send("Task completed")
  })
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
