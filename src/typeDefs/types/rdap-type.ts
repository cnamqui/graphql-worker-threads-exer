import { gql } from 'apollo-server-express';

export const typeDef = gql`
    type RDAPResponse {
        rdapConformance: [String]
        handle: String
        startAddress: String
        endAddress: String
        ipVersion: String
        name: String
        type: String
        parentHandle: String
        port43: String
        status: [String]
        objectClassName: String
        arin_originas0_originautnums: [Int]
    }

    type RDAP {
        response: RDAPResponse
    }
`;

export interface RDAPResponse {
    rdapConformance: [string];
    handle: string;
    startAddress: string;
    endAddress: string;
    ipVersion: string;
    name: string;
    type: string;
    parentHandle: string;
    port43: string;
    status: [string];
    objectClassName: string;
    arin_originas0_originautnums: [number];
}

export interface RDAP {
    response: RDAPResponse;
}
