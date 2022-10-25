// Core
import React, { useState } from 'react';


// Hooks
import { useQueryAllCustomers } from './hooks/useQueryAllCustomers';

export const Customer = () => {


  const { loading, error, pets} = useQueryAllCustomers();



  const [value, setValue] = useState([useQueryAllCustomers()])



  const result = value && value.map(key => {
    return key.pets
  })


    /* if (loading) {
        return  <p>Loading...</p>
      }
      if (error) {
        return (
          <p>
            We have a problem: {error.message}
          </p>
        )
      } */

      /* const petJSX = pets && pets.map(key => {
        return key.name
      })
      console.log(petJSX); */

   /*  const petJSX = pets && pets.map(({ username, name, dateCreated})=> (
        <p key={username}>

            <span>name: {name}</span>
            <br />
            <span>dateCreated: {dateCreated}</span>
        </p>
    ))
    console.log(petJSX); */


    return (
        <>
        <h2 style={{position: 'absolute', left: '35%', top: '25%'}}>
        AllCustomers:
        </h2>
        {result}
        </>

    )
  };