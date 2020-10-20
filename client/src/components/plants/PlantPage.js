import React, { useEffect, useState }from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm'
import Routines from '../routines/Routines';
import Specs from '../specs/Specs'

const PlantPage = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect (() => {
    props.getPlant(props.location.state.room_id, props.match.params.id)
  }, [])

  const editView = () => {
    return (
      <>
        <PlantForm 
        {...props}
        toggleEdit={setToggleEdit}
        />
      </>
    )
  }

  if (!props.plant) return null
  return (
    <div>
      {toggleEdit ? editView() : 
      <>
      <img src={props.plant.image || '/images/plant.svg'} />
      <br />
        <p>{props.plant.name}</p>
        <p>{props.plant.species}</p>
        <p>{props.plant.colors}</p>
      </>
      }
      <button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close Form' : 'Edit'}</button>
      <button onClick={() => props.deletePlant(props.plant.room_id, props.plant.id)}>Delete</button>
      <div>
        <h1>routines</h1>
        <Routines plant_id={props.plant.id} />
        <Specs plant_id={props.plant.id} />
      </div>
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