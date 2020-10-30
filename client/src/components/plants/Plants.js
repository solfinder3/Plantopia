import React, { useState, useEffect } from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm';
import Plant from './Plant'
import plantsstyled from '../../styles/PlantsStyles'
import '../../styles/Plants.css';

const Plants = (props) => {
  const [toggleForm, setToggleForm] = useState(false)


  useEffect(() => {
    props.getPlants(props.room_id)
  }, [])

  const listPlants = () => {
    if (props.plants.length !== 0) {
      return (
        <div>
          { props.plants.map( p =>
            <Plant {...p} />
          )}
        </div>
      )
    } else {
    }
  }
  // if(!props.rooms) return null
  return (
    <>
    <div className='plantpicture'>
      <button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? <div className='plantsExit'>Exit</div> : <div className='plantsPicture'>Add Plant</div>}</button>
    </div>
      {
        toggleForm ? 
        <PlantForm addPlant={ props.addPlant} room_id={props.room_id} toggleForm={setToggleForm} />
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