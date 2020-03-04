/* eslint-disable @typescript-eslint/no-explicit-any */

import { Worker } from 'worker_threads';

class ResolverBase<T> {
    constructor(public fileName: string) {}
    resolve(workerData: any): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            const dt = new Date();
            console.log(`New Worker created: ${dt}`);
            const worker = new Worker(this.fileName, { workerData });
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', code => {
                if (code !== 0) {
                    console.log(`filename: ${this.fileName}`);
                    reject(new Error(`Worker stopped with exit code ${code}`));
                }
            });
        });
    }
}

export default ResolverBase;
