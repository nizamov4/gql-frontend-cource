import React from "react";

//hooks
import { useQueryAvailablePets } from './hooks/useQueryAvailablePets'

export const Counter = () => {
    const { loading, error, data } = useQueryAvailablePets();


    console.log(data);
    return (
        <h1>Counter</h1>
    )
}