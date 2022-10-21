// Core
import { useQuery  } from '@apollo/client';
import { loader } from 'graphql.macro';

// Queries
const queryAvailablePets = loader('./gql/queryAvailablePets.graphql');

/* console.log(queryAvailablePets); */

/* export const useQueryAvailablePets = gql `
query availablePets {
    availablePets
}
` */
export const useQueryAvailablePets = () => {

  return useQuery(queryAvailablePets);
};
