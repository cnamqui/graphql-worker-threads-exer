/* eslint-disable @typescript-eslint/no-explicit-any */
import { request, RequestOptions } from 'http';
import { URL } from 'url';
export default class HTTPServiceBase {
    hostname: string;
    port: string;
    constructor(protected baseUri: string) {
        const { port, hostname } = new URL(baseUri);
        this.hostname = hostname;
        this.port = port;
    }

    private performRequest(options: RequestOptions, data?: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const _options = Object.assign(
                {
                    host: this.hostname,
                    port: this.port,
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
                options,
            );
            console.log('REQUEST START');
            console.log(_options);
            const req = request(_options, function(response) {
                const { statusCode } = response;
                console.log(`status code: ${statusCode}`);
                if (!statusCode || statusCode >= 300) {
                    reject(new Error(response.statusMessage));
                }
                const chunks: any[] = [];
                response.on('data', chunk => {
                    chunks.push(chunk);
                });
                response.on('end', () => {
                    const result = Buffer.concat(chunks).toString();
                    try {
                        resolve(JSON.parse(result));
                    } catch (e) {
                        reject(result);
                    }
                });
            });
            if (data) {
                const jsonData = JSON.stringify(data);
                console.log(jsonData);
                req.write(jsonData);
            }
            req.end();
        });
    }

    protected get(uri: string): Promise<any> {
        return this.performRequest({
            path: uri,
            method: 'GET',
        });
    }
    protected post(uri: string, data: any): Promise<any> {
        return this.performRequest(
            {
                path: uri,
                method: 'POST',
            },
            data,
        );
    }
}
