import React, { useEffect, useState }from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import PlantForm from './PlantForm'
import Routines from '../routines/Routines';
import Specs from '../specs/Specs'

import { Button } from '../../styles/SharedElements';

import { PlantWrap, PlantInfo, InfoWrap, Info, Image, ButtonWrap, InfoTitle } from '../../styles/PlantPageElements';

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
    <PlantWrap>
        <Image src={props.plant.image || '/images/plant.svg'} />
      <PlantInfo>
        {toggleEdit ? editView() : 
        <>
              <ButtonWrap>
                <Button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close Form' : 'Edit'}</Button>
                <Button onClick={() => props.deletePlant(props.plant.room_id, props.plant.id)}>Delete</Button>
              </ButtonWrap>
            <InfoTitle>{props.plant.name}</InfoTitle>
            <Info>{props.plant.species}</Info>
            {/* <Info>{props.plant.colors}</Info> */}
          </>
        }

        <Info>Specs</Info>
        <Specs plant_id={props.plant.id} />
        <Info>Routines</Info>
        <Routines plant_id={props.plant.id} />
      </PlantInfo>
    
    </PlantWrap>
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