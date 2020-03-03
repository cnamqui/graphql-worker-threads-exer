

const addressResolvers = {
    Query: {
        checkAddress: (parent: any, args: any, context: any, info: any) => {
            const { address } = args; 
            return { name: address };
        },
        checkAddresses: (parent: any, args: any, context: any, info: any) => {
            const { addresses } = args; 
            const res = addresses.map((a: String) => ({ name: a })); 
            return res;
        },
    },
    Address: {
        name: (root: any, args: any, context: any) => { 
            return root.name
        },
        ping: (root: any, args: any, context: any) => { 
            context.address = root.name;
            return {}; 
        },
        geoip: (root: any, args: any, context: any) => { 
            context.address = root.name;
            return {}; 
        },
        rdap: (root: any, args: any, context: any) => { 
            context.address = root.name;
            return {}; 
        }
    }
};

export {
    addressResolvers,
}
