/* eslint-disable @typescript-eslint/no-explicit-any */
import RDAPService from '../services/rdap-service';
import { RDAPResponse } from '../typeDefs/types/rdap-type';
import { IResolvers } from 'graphql-tools';

const rdapResolvers: IResolvers = {
    RDAP: {
        response: async (parent: any, args: any, context: any): Promise<RDAPResponse> => {
            const svc = new RDAPService();
            const { address } = context;
            return svc.rdap(address).catch(e => {
                throw e;
            });
        },
    },
};

export { rdapResolvers };
