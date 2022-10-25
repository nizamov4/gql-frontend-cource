import { useMutation } from "@apollo/client"
import { useState } from "react"
import { loader } from "graphql.macro"

// Queries
const mutationLogin = loader('./gql/mutationLogin.graphql');

export const useCustomer = () => {

    const [loginUser, {data}] = useMutation(mutationLogin)

    const [values, setValues] = useState({
        account: {
            name: '',
            username: '',
            password: ''
        }
    })

    const save = () => {
        const {account} = values
        loginUser({
            variables: {
                account
            }
        })
    }

    const handleChange = (e) => {
        e.persist()
        setValues((prevValues) => ({
            account: {
                ...prevValues.account,
            [e.target.name]: e.target.value,
            }

        }))
    }

    return {
        values,
        handleChange,
        save,
        createdAccount: data && data.createAccount
    }
}