//Core
import { ApolloClient, InMemoryCache, HttpLink, split  } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { WebSocketLink } from '@apollo/client/link/ws'
import { createClient } from 'graphql-ws';

const root = 'https://funded-pet-library.moonhighway.com/'

//GraphQl server
const cache = new InMemoryCache();

//Web-Socket
const wsLink = new GraphQLWsLink(createClient({

    url: 'wss://funded-pet-library.moonhighway.com/subscriptions',
    connectionParams: {
        authToken: async () => {
            setContext ((_, {headers}) => {
                const token = localStorage.getItem('token', )
                return {
                    headers: {
                        ...headers,
                        authorization: token ? `Bearer ${token}`:'',
                    }
                }
            })
        }
    },
}));

  //httpLink
  const httpLink = new HttpLink({
    uri: 'http://https://funded-pet-library.moonhighway.com/graphql'
  });

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value


  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
  );


//Auth передаю токен



export const client = new ApolloClient({
    cache: cache,
    link: splitLink
});