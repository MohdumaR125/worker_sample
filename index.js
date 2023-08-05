import express from "express";
import {Worker} from "node:worker_threads"

const app = express();
const port = 3000;
const worker = new Worker('./worker.js');

app.get('/', (req, res) => {
    worker.postMessage("test data")
    worker.on("message", () => res.send('task done'))
    worker.close
})

app.listen(port, () => {
    console.log("Server is running on : ", port);
})