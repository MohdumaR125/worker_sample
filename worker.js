import {parentPort} from "node:worker_threads"

parentPort.on("message",(data)=>{
    let x=0;
    console.log(data)
    for(let i=0;i<3000000000;i++){
       
        x++;
    }
    parentPort.postMessage("done")
})
// parentPort.on("close"()=>{
//     console.log("closed")
// })