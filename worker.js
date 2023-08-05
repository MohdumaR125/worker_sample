import {parentPort, workerData} from "worker_threads"

parentPort.on("message", () => {
    const x="heavyTask-30".split("-")[1];
    let xNumber = Number(x);
    console.log(xNumber, "from worker",workerData.wData);

    parentPort.postMessage("message")
})

parentPort.on("close", () => {
    console.log("Closed message from node worker")
})