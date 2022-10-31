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
const uri = `https://${root}`
const link = new HttpLink ({uri})

//Web-Socket
/* const wsLink = new GraphQLWsLink({
    uri: `ws://${root}subscriptions`,
    options: {
        reconnect: true
    }
}) */

/* const wsLink = new GraphQLWsLink(
    new SubscriptionClient(`ws://${root}subscriptions`, {
        options: {
            reconnect: true
        }
    })
) */

const wsLink = new GraphQLWsLink(
    new SubscriptionClient(`ws://${root}subscriptions`, {
        options: {
            reconnect: true
        }
    })
);

/* const wsLink  = new GraphQLWsLink (createClient({
    new SubscriptionClient(`ws://${root}subscriptions`,
    options: {
        reconnect: true
    },
  })); */


/* const wsLink = new GraphQLWsLink({
    uri: `ws://${root}subscriptions`,
    options: {
        reconnect: true
    },
}) */

//Auth передаю токен
const authLink = setContext ((_, {headers}) => {
    const token = localStorage.getItem('token', )

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}`:'',
        }
    }
})

const wrappedHttpLink = authLink.concat(link)


const Link = split.apply(({query})=> {
    const definition = getMainDefinition(query)
    return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
    )
}, wsLink, wrappedHttpLink)



export const client = new ApolloClient({
    cache: cache,
    Link
});