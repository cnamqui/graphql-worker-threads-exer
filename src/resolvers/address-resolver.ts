/* eslint-disable @typescript-eslint/no-explicit-any */

const addressResolvers = {
    Query: {
        checkAddress: (parent: any, args: any): { name: any } => {
            const { address } = args;
            return { name: address };
        },
        checkAddresses: (parent: any, args: any): [any] => {
            const { addresses } = args;
            const res = addresses.map((a: string) => ({ name: a }));
            return res;
        },
    },
    Address: {
        name: (root: any): any => {
            return root.name;
        },
        ping: (root: any, args: any, context: any): any => {
            context.address = root.name;
            return {};
        },
        geoip: (root: any, args: any, context: any): any => {
            context.address = root.name;
            return {};
        },
        rdap: (root: any, args: any, context: any): any => {
            context.address = root.name;
            return {};
        },
    },
};

export { addressResolvers };
