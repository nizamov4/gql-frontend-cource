//Core
import { ApolloClient, InMemoryCache, HttpLink  } from '@apollo/client';

//GraphQl server 
const cache = new InMemoryCache();
const uri = 'https://funded-pet-library.moonhighway.com/'
const link = new HttpLink ({uri})

export const client = new ApolloClient({
    cache: cache,
    link
});