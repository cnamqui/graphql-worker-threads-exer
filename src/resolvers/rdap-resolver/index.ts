/* eslint-disable @typescript-eslint/no-explicit-any */

import ResolverBase from '../common/resolverBase';

const rdapResolver = new ResolverBase<any>('./src/resolvers/rdap-resolver/rdap-service.js');

const rdapResolvers = {
    RDAP: {
        response: async (parent: any, args: any, context: any): Promise<any> => {
            const { address } = context;
            const result = await rdapResolver.resolve(address);
            if (result.error) {
                throw result.error;
            }
            return result;
        },
    },
};

export { rdapResolvers };
