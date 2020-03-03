
import { gql } from 'apollo-server-express';



export const typeDef = gql` 
 

  type GeoIPResponse{ 
    country: String,
    region: String,
    eu: String,
    timezone: String,
    city: String,
    ll: [Float],
    metro: Int,
    area: Int
  }

  type GeoIP {
    response: GeoIPResponse
  } 
`; 