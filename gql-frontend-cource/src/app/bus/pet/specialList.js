// Core
import React from "react";

//Hooks
import { useQueryAllAvailablePets } from './hooks/useQueryAllAvailablePets'

export const SpecialList = () => {
    const { getAllAvailablePets, loading, error, pets } = useQueryAllAvailablePets()

    const loaderJSX =  loading && (
        <p>
            loading...
        </p>
    )

    const errorJSX = error && (
        <p>
            We have a problem: {error.message}
        </p>
    )

    const petJSX = pets && pets.map(({id, name, weight})=> (
        <p key={id}>
            <span>Name: {name}</span>
            <br />
            <span>Weight: {weight}</span>
        </p>
    ))

    return (
        <>
        <div style={{
            position: 'absolute',
            right: '50%',
            top: '10%'
        }}>
            <button onClick={getAllAvailablePets}>
                Download
            </button>
            {loaderJSX}
            {errorJSX}
            {petJSX}
        </div>

        </>
    )
}