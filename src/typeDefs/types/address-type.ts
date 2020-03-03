
import { gql } from 'apollo-server-express';


export const typeDef = gql`
  type Address {
    name: String
    ping: Ping
    rdap: RDAP
    geoip: GeoIP
  }  

  extend type Query {
    checkAddress (address:String!): Address 
    checkAddresses (addresses:[String]!): [Address] 
  }
`;