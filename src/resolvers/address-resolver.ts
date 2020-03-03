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
        valid: (root: any): any => {
            console.log(`VALID: ${root}`);
            const validIpAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]).){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;

            const validHostnameRegex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]).)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/;

            if (validHostnameRegex.test(root.name) || validIpAddressRegex.test(root.name)) {
                return 'true';
            }
            return 'false';
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
