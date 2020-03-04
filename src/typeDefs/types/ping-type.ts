import { gql } from 'apollo-server-express';

export const typeDef = gql`
    type PingResults {
        seq: Int
        time: Float
    }

    type PingResponse {
        address: String
        port: Int
        attempts: Int
        avg: Float
        max: Float
        min: Float
        results: [PingResults]
    }

    type Ping {
        response: PingResponse
    }
    extend type Query {
        ping(address: String!): String
    }
`;

export interface PingResults {
    seq: number;
    time: number;
}

export interface PingResponse {
    address: string;
    port: number;
    attempts: number;
    avg: number;
    max: number;
    min: number;
    results: [PingResults];
}

export interface Ping {
    response: PingResponse;
}
