import { useQuery } from "@apollo/client"
import { loader } from "graphql.macro"

const queryAllCustomers = loader('./gql/useQueryAllCustomers.graphql')

//Queries
export const useQueryAllCustomers = () => {

    /* const { loading, error, data } =  */;

    return useQuery(queryAllCustomers)/* { loading, error, pets: data && data.allCustomers } */
}