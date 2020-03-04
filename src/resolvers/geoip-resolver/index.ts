/* eslint-disable @typescript-eslint/no-explicit-any */
import GeoIpService from '../../services/geoip-service';
import { GeoIPResponse } from '../../typeDefs/types/geoip-type';

const geoipResolvers = {
    GeoIP: {
        response: async (parent: any, args: any, context: any): Promise<GeoIPResponse> => {
            const svc = new GeoIpService();
            const { address } = context;
            return svc.geoip(address).catch(e => {
                throw e;
            });
        },
    },
};

export { geoipResolvers };
