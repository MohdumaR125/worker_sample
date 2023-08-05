import {parentport} from "node:worker-thread"
import {writeFileSync} from "node:fs"

parentport.on("message",(data)=>{
const work=writeFileSync("./workerFile.txt",data)
parentport.postMessage("done")
})