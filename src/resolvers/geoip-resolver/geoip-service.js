const { workerData, parentPort } = require('worker_threads');
var geoip = require('geoip-lite');

const dns = require('dns')



const t = { parentPort, workerData }; 
dns.lookup(workerData, function (err, result) { 
    const geo = geoip.lookup(result); 
    parentPort.postMessage(geo);
})
 
