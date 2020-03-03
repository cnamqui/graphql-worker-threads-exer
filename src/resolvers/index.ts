import { pingResolvers } from './ping-resolver';
import { addressResolvers } from './address-resolver';
import { geoipResolvers } from './geoip-resolver';
import { rdapResolvers } from './rdap-resolver';

const resolvers = [pingResolvers, addressResolvers, geoipResolvers, rdapResolvers];

export { resolvers };
