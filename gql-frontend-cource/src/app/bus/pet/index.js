// Core
import React from 'react';

// Components
import { List } from './list';
import { SpecialList } from './specialList'
import { Customer } from './customer'
import { Profile } from './profile'
import { Zxc } from './zxc'
import { PetReturned } from './petReturned'

export const Pet = () => {
  return (
    <>
    <PetReturned/>
      {/* <Profile/> */}
      <Zxc />
      {/* <Counter /> */}
      {/* <List/>
      <SpecialList/>
      <Customer/> */}
    </>
  )
};