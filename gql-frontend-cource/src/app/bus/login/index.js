import React from "react";

/* import { useCustomer } from "./hooks/useCustomer"; */

export const Login = () => {
    /* const {values, handleChange, save, createdAccount} = useCustomer()

    const customerJSX = createdAccount && (
        <p>
            We already created customer with name: {createdAccount.name}
        </p>
    ) */

    return (
        <>
        <h1 style={{position: 'absolute', left: '25%', top: '0%'}}>
            Login
            <br />
                <input type="text" placeholder="name" name="name" /* onChange={handleChange} *//>
                <br />
                <input type="text" placeholder="username" name="username" /* onChange={handleChange} *//>
                <br />
                <input type="password" placeholder="password" name="password" /* onChange={handleChange} *//>
                <br />
                <button type="submit" /* onClick={save} */>Save
                </button>
        </h1>
        </>
    )
}