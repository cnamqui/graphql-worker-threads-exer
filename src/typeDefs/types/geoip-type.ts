import { gql } from 'apollo-server-express';

export const typeDef = gql`
    type GeoIPResponse {
        country: String
        region: String
        eu: String
        timezone: String
        city: String
        ll: [Float]
        metro: Int
        area: Int
    }

    type GeoIP {
        response: GeoIPResponse
    }
`;

export interface GeoIP {
    response: GeoIPResponse;
}
export interface GeoIPResponse {
    country: string;
    region: string;
    eu: string;
    timezone: string;
    city: string;
    ll: [number];
    metro: number;
    area: number;
}
