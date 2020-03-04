import HTTPServiceBase from './common/http-service-base';
import config from 'config';
import { GeoIPResponse } from '../typeDefs/types/geoip-type';

export default class GeoIpService extends HTTPServiceBase {
    constructor() {
        const baseUri = config.get<string>('geoIpApiUri');
        super(baseUri);
    }

    geoip(address: string): Promise<GeoIPResponse> {
        return this.post('/geoip/', { address }).then(result => {
            console.log(result);
            return result;
        });
    }
}
