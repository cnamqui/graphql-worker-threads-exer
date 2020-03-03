const { workerData, parentPort } = require('worker_threads');
const whois = require('whois-rdap'); 
const dns = require('dns') 
const t = { parentPort, workerData }; 
console.log(`RDAP - workerData ${workerData}`)
dns.lookup(workerData, function (err, result) {  
     const w = new whois()
     w.check(result)
    .then(rdap =>{  
        parentPort.postMessage(rdap.rdap);
    }).catch(e =>{
        console.log(`ERROR in RDAP`);
        console.log(e);
        parentPort.postMessage(e)
    });
})
 
