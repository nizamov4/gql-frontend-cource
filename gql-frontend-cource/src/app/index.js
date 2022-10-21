import React from 'react';
import { ApolloProvider } from '@apollo/client';

// Components
import { Pet } from './bus/pet';

// Other
import { client } from './init/client';

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>App</h1>
      <Pet />
    </ApolloProvider>
  )
};