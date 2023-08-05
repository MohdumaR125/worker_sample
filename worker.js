import { parentPort } from "node:worker_threads"
import fs from "fs"

parentPort.on("message", (data) => {
    try {
        fs.writeFileSync('./test.txt', data);
        parentPort.postMessage("file written successfully")
      } catch (err) {
        console.error(err);
      }
})