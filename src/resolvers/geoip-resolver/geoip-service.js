/* eslint-disable @typescript-eslint/no-var-requires */
const { workerData, parentPort } = require('worker_threads');
const geoip = require('geoip-lite');

const dns = require('dns');

dns.lookup(workerData, function(err, result) {
    const geo = geoip.lookup(result);
    parentPort.postMessage(geo);
});
