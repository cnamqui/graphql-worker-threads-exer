/* eslint-disable @typescript-eslint/no-explicit-any */

import ResolverBase from '../common/resolverBase';

const pingResolver = new ResolverBase('./src/resolvers/ping-resolver/ping-service.js');

const pingResolvers = {
    Query: {
        ping: async (parent: any, args: any): Promise<any> => {
            const { address } = args;
            const result = await pingResolver.resolve(address);
            return result;
        },
    },
    Ping: {
        response: async (parent: any, args: any, context: any): Promise<any> => {
            const { address } = context;
            const result = await pingResolver.resolve(address);
            return result;
        },
    },
};

export { pingResolvers };
