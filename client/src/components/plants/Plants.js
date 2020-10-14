import React, { useState, useEffect } from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';


const Plants = (props) => {

  useEffect(() => {
    props.getPlants()
  }, [])

  const listPlants = () => {
    if (props.plants.length !== 0) {
      return (
        <ul>
          { props.plants.map( p =>
            <li>
              {p.name}
            </li>
          )}
        </ul>
      )
    } else {
      return (<h1>No Plants</h1>)
    }
  }
  // if(!props.rooms) return null
  return (
    <>
      {listPlants()}
      <PlantForm addPlant={props.addPlant} />
    </>
  )
}

const ConnectedPlants = (props) => (
  <PlantConsumer>
    {
      value => (
        <Plants
          {...props}
          {...value}
        />
      )
    }
  </PlantConsumer>
)

export default ConnectedPlants;