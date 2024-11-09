import React from 'react';
import Evenement from './Evenement';

const Expert = ({ expert }) => (
  <li>
    <h3>{expert.nom_complet}</h3>
    <Evenement evenements={expert.événements} />
  </li>
);

export default Expert;
