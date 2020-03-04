import { gql } from 'apollo-server-express';

export const typeDef = gql`
    type Address {
        name: String
        valid: String
        ping: Ping
        rdap: RDAP
        geoip: GeoIP
    }

    extend type Query {
        checkAddress(address: String!): Address
        checkAddresses(addresses: [String]!): [Address]
    }
`;

export default interface Address {
    name: string;
    valid: string;
}
