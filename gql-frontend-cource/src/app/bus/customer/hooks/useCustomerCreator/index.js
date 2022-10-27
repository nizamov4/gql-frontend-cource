import { useMutation } from "@apollo/client"
// Hooks
import { useForm } from '../useForm'

import { loader } from "graphql.macro"

// Queries

const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomerCreator = () => {
  const [addUser, {data}] = useMutation(mutationCreateAccount)
  const {form, handleChange} = useForm({
    name: '',
    username: '',
    password: ''
  });

  const _save = () => {

    addUser({
        variables: {
            account: form
        }
    })
}

  return {
    handleChange,
    _save,
    createdAccount: data && data.createAccount
  }
};
