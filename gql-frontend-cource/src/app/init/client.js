//Core
import { ApolloClient, InMemoryCache, HttpLink  } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

//GraphQl server
const cache = new InMemoryCache();
const uri = 'https://funded-pet-library.moonhighway.com/'
const link = new HttpLink ({uri})

//Auth
const authLink = setContext ((_, {headers}) => {
    const token = localStorage.getItem('token', )

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}`:'',
        }
    }
})

export const client = new ApolloClient({
    cache: cache,
    link: authLink.concat(link)
});