import { useMutation } from "@apollo/client"
import { useState } from "react"
import { loader } from "graphql.macro"

// Queries
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomer = () => {

    const [addUser, {data}] = useMutation(mutationCreateAccount)

    const [values, setValues] = useState({
        account: {
            name: '',
            username: '',
            password: ''
        }
    })

    const save = () => {
        const {account} = values
        addUser({
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