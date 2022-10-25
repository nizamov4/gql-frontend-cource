import React from "react";
import { Login } from '../login'

import { useCustomer } from "./hooks/useCustomer";

export const Customer = () => {
    const {values, handleChange, save, createdAccount} = useCustomer()

    const customerJSX = createdAccount && (
        <p>
            We already created customer with name: {createdAccount.name}
        </p>
    )

    return (
        <>
        <h1>
            REGISTRATION
            <br />
                <input type="text" placeholder="name" name="name" onChange={handleChange}/>
                <br />
                <input type="text" placeholder="username" name="username" onChange={handleChange}/>
                <br />
                <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                <br />
                <button type="submit" onClick={save}>Save
                </button>
        </h1>
                {customerJSX}
                <Login/>
        </>
    )
}