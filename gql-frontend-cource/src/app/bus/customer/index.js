import React from "react";

import { useCustomerCreator } from "./hooks/useCustomerCreator";

export const Customer = () => {
    const { handleChange, save, createdAccount} = useCustomerCreator()

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

        </>
    )
}