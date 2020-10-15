import React from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';

const PlantPage = () => {

  return (
    <div>
      <p>plant page</p>
    </div>
  )
}

const ConnectedPlantPage = (props) => (
  <PlantConsumer>
    {
      value => (
        <PlantPage 
          {...props}
          {...value}
        />
      )
    }
  </PlantConsumer>
)

export default ConnectedPlantPage;