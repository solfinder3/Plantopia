import React, { useState, useEffect } from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';
import Plant from './Plant'

const Plants = (props) => {
  const [toggleForm, setToggleForm] = useState(false)


  useEffect(() => {
    props.getPlants(props.room_id)
  }, [])

  const listPlants = () => {
    if (props.plants.length !== 0) {
      return (
        <ul>
          { props.plants.map( p =>
            <Plant {...p} />
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
    <button onClick={() => setToggleForm(!toggleForm)}>{ toggleForm ? 'Exit' : 'Open Form' }</button>
      {
        toggleForm ? 
        <PlantForm addPlant={props.addPlant} room_id={props.room_id} />
        :
        <></>
      }
      {listPlants()}
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