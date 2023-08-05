import {tWorker} from  "node:worker-thread"

const worker = new Worker("worker.js")

const str = "hello world"

worker.on("message",(data)=>{
if(data==="done"){
worker.terminate();
}
})
worker.postMessage(str)