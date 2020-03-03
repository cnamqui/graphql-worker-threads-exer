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
