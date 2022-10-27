//Core
import { useMutation } from "@apollo/client"

// Hooks
import { useForm } from '../useForm'

import { loader } from "graphql.macro"

const mutationLogIn = loader('./gql/mutationLogIn.graphql')

export const useCustomerAuth = () => {
    const [_logIn, {data}] = useMutation(mutationLogIn)

    const { form, handleChange } = useForm({
        username: '',
        password: ''
    })
    const logIn = () => {
        _logIn({
            variables: form
        })
    }


    return {
        logIn,
        handleChange,
        authCustomer: data && data.logIn
    }
}