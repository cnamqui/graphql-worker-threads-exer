/* eslint-disable @typescript-eslint/no-explicit-any */

import ResolverBase from '../common/resolverBase';

const geoipResovler = new ResolverBase('./src/resolvers/geoip-resolver/geoip-service.js');

const geoipResolvers = {
    GeoIP: {
        response: async (parent: any, args: any, context: any): Promise<any> => {
            const { address } = context;
            try {
                const result = await geoipResovler.resolve(address);
                return result;
            } catch (e) {
                console.log(`An error has occured:\n ${e}`);
                throw e;
            }
        },
    },
};

export { geoipResolvers };
