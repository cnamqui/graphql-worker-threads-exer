// const ping = require('ping');
import ResolverBase from '../common/resolverBase'

const rdapResolver = new ResolverBase('./src/resolvers/rdap-resolver/rdap-service.js')

const rdapResolvers = {
    RDAP: {
        response: async (parent: any, args: any, context: any, info: any) => {
            const { address } = context;
            const result = await rdapResolver.resolve(address);
            return result;
        }
    }
};

export {
    rdapResolvers,
}


