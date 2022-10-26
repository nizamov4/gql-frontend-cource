import { useQuery } from "@apollo/client"
import { loader } from "graphql.macro"

const queryAllCustomers = loader('./gql/useQueryAllCustomers.graphql')

//Queries
export const useQueryAllCustomers = () => {

    const { loading, error, data } = useQuery(queryAllCustomers);

    return { loading, error, pets: data && data.allCustomers }
}