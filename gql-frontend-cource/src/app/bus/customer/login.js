import React from "react";

//Hooks
import { useCustomerAuth } from './hooks/useCustomerAuth'


export const Login = () => {
    const { handleChange, logIn } = useCustomerAuth()

    return (
        <>
        <h1>
            Login
        </h1>
        <ul>
                <input type="text" placeholder="username" name="username" onChange={handleChange}/>
                <br />
                <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                <br />
                <button type="submit" onClick={logIn}>Login
                </button>
        </ul>
        </>
    )
}