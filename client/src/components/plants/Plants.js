import React, { useState, useEffect } from 'react';
import { PlantsConsumer } from '../../providers/PlantsProvider';


const Plants = (props) => {

  useEffect(() => {
    props.getPlants()
  }, [])

  const listPlants = () => {
    if (props.plants.length !== 0) {
      return (
        <ul>
          { props.plants.map(p =>
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
    </>
  )
}

const ConnectedPlants = (props) => (
  <PlantsConsumer>
    {
      value => (
        <Plants
          {...props}
          {...value}
        />
      )
    }
  </PlantsConsumer>
)

export default ConnectedPlants;