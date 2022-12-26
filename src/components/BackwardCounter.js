import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from '../hooks/useCounter';

const BackwardCounter = () => {
  const counter = useCounter('backward')

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
