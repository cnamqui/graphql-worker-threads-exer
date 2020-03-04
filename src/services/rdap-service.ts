import HTTPServiceBase from './common/http-service-base';
import config from 'config';
import { RDAPResponse } from '../typeDefs/types/rdap-type';

export default class RDAPService extends HTTPServiceBase {
    constructor() {
        const baseUri = config.get<string>('rdapApiUri');
        super(baseUri);
    }

    rdap(address: string): Promise<RDAPResponse> {
        return this.post('/rdap/', { address }).then(result => {
            console.log(result);
            return result;
        });
    }
}
