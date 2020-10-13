import React, {useState} from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';

const Plant = ({location}) => (
  <PlantConsumer>
    { value => (
    <ul>
      <li>{location.state.name}</li>
      <li>{location.state.type}</li>
      <li>{location.state.colors}</li>
    </ul>
    )}
  </PlantConsumer>
)

export default Plant;