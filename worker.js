import {parentPort} from "worker_threads"
import fs from "fs"

parentPort.on("message",(parentData)=>{
 
  console.log("INSIDE WORKER THREAD")
  fs.appendFileSync('mynewfile1.txt', parentData, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

  parentPort.postMessage("Read Write Completed");
})