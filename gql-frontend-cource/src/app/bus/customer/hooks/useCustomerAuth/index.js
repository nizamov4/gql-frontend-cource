//Core
import { useMutation } from "@apollo/client"
import { loader } from "graphql.macro"
import { useState } from "react"


// Hooks
import { useForm } from '../useForm'

const mutationLogIn = loader('./gql/mutationLogIn.graphql')

export const useCustomerAuth = () => {
    const [_logIn, {data}] = useMutation(mutationLogIn)

    const { form, handleChange } = useForm({
        username: '',
        password: ''
    })

    const [isAuth, setIsAuth] = useState(false)

    const authCustomer = data && data.logIn
    const token = authCustomer && authCustomer.token
    if (token) {
        localStorage.setItem('token', token )
    }

    const logIn = () => {
        _logIn({
            variables: form
        })
    }


    return {
        logIn,
        handleChange,
        authCustomer
    }
}