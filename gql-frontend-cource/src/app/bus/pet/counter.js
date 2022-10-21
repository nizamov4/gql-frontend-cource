// Core
import React from 'react';

import { useQuery } from '@apollo/client';


// Hooks
import { useQueryAvailablePets } from './hooks/useQueryAvailablePets';

export const Counter = () => {
  const { loading, error, data } = useQueryAvailablePets();

  console.log(data);

  return (
    <p>Counter</p>
  )
};
