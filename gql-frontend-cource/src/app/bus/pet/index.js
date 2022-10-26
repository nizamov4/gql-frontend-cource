// Core
import React from 'react';

// Components
import { List } from './list';
import { SpecialList } from './specialList'
import { Customer } from './customer'
import { Profile } from './profile'

export const Pet = () => {
  return (
    <>
      <Profile/>
      <h1>Pet</h1>
      {/* <Counter /> */}
      <List/>
      <SpecialList/>
      <Customer/>
    </>
  )
};