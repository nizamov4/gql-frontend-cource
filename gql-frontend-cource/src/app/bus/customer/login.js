import React from "react";

//Hooks
import { useCustomerAuth } from './hooks/useCustomerAuth'


export const Login = () => {
    const { handleChange, logIn, authCustomer } = useCustomerAuth()

    const authCustomerJSX = authCustomer && (
        <>
        <p>Autorized Customer: {authCustomer.customer.name}</p>
        </>
    )

    return (
        <>
        <h1>
        ㅤLogin
        </h1>
        <ul>
                <input type="text" placeholder="username" name="username" onChange={handleChange}/>
                <br />
                <br />
                <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                <br />
                <br />
                <button type="submit" onClick={logIn}>Login
                </button>
        </ul>
        {authCustomerJSX}
        </>
    )
}