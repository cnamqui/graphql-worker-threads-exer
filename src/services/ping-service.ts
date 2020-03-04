import HTTPServiceBase from './common/http-service-base';
import config from 'config';
import { PingResponse } from '../typeDefs/types/ping-type';

export default class PingService extends HTTPServiceBase {
    constructor() {
        const baseUri = config.get<string>('pingApiUri');
        super(baseUri);
    }

    ping(address: string): Promise<PingResponse> {
        return this.post('/ping/', { address }).then(result => {
            console.log(result);
            return result;
        });
    }
}
