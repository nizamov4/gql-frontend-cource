// Core
import React from 'react';

// Hooks
import { useCheck } from './hooks/useCheck';

export const Zxc = () => {
  const { checkIn, pet, errors, error } = useCheck();

  const petJSX = pet && (
    <>
      <p>Id: { pet.id }</p>
      <p>Name: { pet.name }</p>
    </>
  );

  const errorsJSX = errors && (
    <p>
      We have a problem: {errors.message}
    </p>
  );

  const errorJSX = error && (
    <p>
      We have another problem: {error}
    </p>
  );

  return (
    <>
      <h1 style={{position: 'absolute', left: '20%', top: '10%'}}>Checkin</h1>
      <button onClick={() => checkIn('C-1')}>CheckIn</button>
      {petJSX}
      {errorsJSX}
      {errorJSX}
    </>
  )
};
