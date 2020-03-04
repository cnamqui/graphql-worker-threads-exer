/* eslint-disable @typescript-eslint/no-explicit-any */

import PingService from '../../services/ping-service';
import { PingResponse } from '../../typeDefs/types/ping-type';

const pingResolvers = {
    Query: {
        ping: async (parent: any, args: any): Promise<PingResponse> => {
            const { address } = args;
            const svc = new PingService();
            return svc.ping(address).catch(e => {
                throw e;
            });
        },
    },
    Ping: {
        response: async (parent: any, args: any, context: any): Promise<PingResponse> => {
            const svc = new PingService();
            const { address } = context;
            return svc.ping(address).catch(e => {
                throw e;
            });
        },
    },
};

export { pingResolvers };
