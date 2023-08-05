import {parentPort} from "node:worker_threads"
import fs from "fs/promises"

parentPort.on("message", (data) => {
    let x = 0;
    for(let i =0; i<=100; i++){
        fs.writeFile('test.txt', data, 'utf-8', () => {
            try {
                console.log('Content successfully written to file!');
            } catch (error) {
                console.log(error);
            }
        })
    }
    parentPort.postMessage("task done");
})