// Core
import React from 'react';

// Hooks
import { useQueryAllCustomers } from './hooks/useQueryAllCustomers';

export const Customer = () => {
    const { loading, error, data} = useQueryAllCustomers();
    console.log('pets', data);

    if (loading) {
        return  <p>Loading...</p>
      }
      if (error) {
        return (
          <p>
            We have a problem: {error.message}
          </p>
        )
      }

    /* const petJSX = pets && pets.map(({username, name, dateCreated})=> (
        <p key={username}>

            <span>Name: {name}</span>
            <br />
            <span>dateCreated: {dateCreated}</span>
        </p>
    ))
    console.log('petJSX', petJSX); */


    return (
        <>
        <h2 style={{position: 'absolute', left: '35%', top: '25%'}}>
        AllCustomers:
        </h2>
        { data }
        {/* {petJSX}
        {loaderJSX}
        {errorJSX} */}
        </>

    )
  };