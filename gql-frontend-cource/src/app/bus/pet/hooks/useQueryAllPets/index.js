//Core
import { useQuery } from "@apollo/client"
import { loader } from "graphql.macro"

const queryAllPets = loader('./gql/useQueryAllPets.graphql')

//Queries
export const useQueryAllPets = () => {

    const { loading, error, data } = useQuery(queryAllPets);

    const pets = data ? data.allPets : null

    return { loading, error, pets }
}