import {parentPort} from "node:worker_threads"

parentPort.on("heavyTask-30",(data)=>{
    const x="heavyTask-30".split("-")[1];
    let xNumber = Number(x);
    console.log(data)
    for(let i=0;i<300;i++){
       
        xNumber++;
    }
    parentPort.postMessage("xNumber")
})

parentPort.on("close", () => {
    console.log("Closed message from node worker")
})