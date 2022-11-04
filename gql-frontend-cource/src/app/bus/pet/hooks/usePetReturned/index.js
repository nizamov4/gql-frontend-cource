//Core 
import { useSubscription } from "@apollo/client"
import { loader } from "graphql.macro"

const subscriptionPetReturned = loader('./gql/petReturned.graphql')

export const usePetReturned = () => {
    const { loading, error, data } = useSubscription(subscriptionPetReturned);

    const pet = data ? data.petReturned.pet : null

    return { loading, error, pet }

}