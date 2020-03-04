/* eslint-disable @typescript-eslint/no-var-requires */
const { workerData, parentPort } = require('worker_threads');
const whois = require('whois-rdap');
const dns = require('dns');
console.log(`RDAP - workerData ${workerData}`);
dns.lookup(workerData, function(err, result) {
    const w = new whois();
    w.check(result)
        .then(rdap => {
            parentPort.postMessage(rdap.rdap);
        })
        .catch(e => {
            console.log(`ERROR in RDAP`);
            //console.log(e);
            parentPort.postMessage({ error: { msg: 'an error has occured in the RDAP worker thread' } });
        });
});
