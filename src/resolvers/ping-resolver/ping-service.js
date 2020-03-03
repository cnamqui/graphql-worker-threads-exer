/* eslint-disable @typescript-eslint/no-var-requires */
const { workerData, parentPort } = require('worker_threads');
const tcpp = require('tcp-ping');

const t = { parentPort, workerData };
tcpp.ping({ address: workerData }, function(err, data) {
    if (err) {
        console.log(`An Error has occured: ${err}`);
        console.log(err);
    } else {
        parentPort.postMessage(data);
    }
});
