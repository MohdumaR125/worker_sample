import {parentPort} from "node:worker_threads"
import fs from "fs";
parentPort.on("message",(data)=>{
fs.writeFileSync("text.txt", data);
parentPort.postMessage("File Created");
})
