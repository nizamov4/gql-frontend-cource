//Core
import { ApolloClient, InMemoryCache } from '@apollo/client';

//GraphQl server 
const cache = new InMemoryCache();
const uri = 'https://funded-pet-library.moonhighway.com/'

export const client = new ApolloClient({
    cache: cache,
    uri
});