import React from 'react';
import expertsData from '../expertsData';
import Expert from './Expert';

const Experts1 = () => (
  <ul>
    {expertsData.map(expert => (
      <Expert key={expert.id} expert={expert} />
    ))}
  </ul>
);

export default Experts1;
