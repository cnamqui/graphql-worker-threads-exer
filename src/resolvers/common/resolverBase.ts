import { Worker } from 'worker_threads';

class ResolverBase<T> {
 
    constructor(public fileName:string){

    }
    resolve(workerData: any) { 
        return new Promise<T>((resolve, reject) => {
            const worker = new Worker(this.fileName, { workerData });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            })
        })
    }
}

export default ResolverBase;