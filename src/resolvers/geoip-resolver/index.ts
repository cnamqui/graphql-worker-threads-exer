// const ping = require('ping');
import ResolverBase from '../common/resolverBase'

const geoipResovler = new ResolverBase('./src/resolvers/geoip-resolver/geoip-service.js')

const geoipResolvers = {
    GeoIP: {
        response: async (parent: any, args: any, context: any, info: any) => {
            const { address } = context;
            const result = await geoipResovler.resolve(address);
            return result;
        }
    }
};

export {
    geoipResolvers,
}


