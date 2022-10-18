//Core
import React from "react";
import { ApolloProvider } from '@apollo/react-hooks'

//Components
import {Pet} from './bus/pet'

//Other
import { client } from './init/client'


export const App = () => {


    return (
        <ApolloProvider client={client}>
            <h1><Pet/></h1>
        </ApolloProvider>
    )

};