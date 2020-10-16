import React, { useEffect, useState }from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm'

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
        <p>{props.plant.name}</p>
        <p>{props.plant.species}</p>
        <p>{props.plant.colors}</p>
        {/* <p>{props.plant.image}</p> */}
      </>
      }
      <button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close Form' : 'Edit'}</button>
      <button onClick={() => props.deletePlant(props.plant.room_id, props.plant.id)}>Delete</button>
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