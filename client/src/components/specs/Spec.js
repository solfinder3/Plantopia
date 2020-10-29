import React, {useState, useEffect} from 'react';
import { SpecConsumer } from '../../providers/SpecProvider';
import SpecForm from './SpecForm';

import { Specs, Button } from '../../styles/PlantPageElements';

// import { Button } from '../../styles/SharedElements'

const Spec = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    props.getSpec(props.plant_id, props.id)
  }, [])

  const editView = () => {
    return (
      <>
        <SpecForm
          {...props}
          toggleEdit={setToggleEdit} 
          updateSpec={props.updateSpec}
        />
      </>
    )
  }

  if (!props.specs) return null
  return (
    <>
      <ul>
          {toggleEdit ? editView() :
            <>
              <Specs>
                Water Amount: {props.water} ||
                Ferilizer: {props.ferilizer}
              </Specs>
              <Specs>
                Sunlight: {props.sunlight } ||
                Termperature: {props.temperature}
              </Specs>
              <Specs>
                Humidity: {props.humidity} ||
                Soil: {props.soil} ||
                Size: {props.fullsize}
              </Specs>
              <Specs>
                Date Planted: {props.planting} ||
                Annual: {props.annual}
              </Specs>
              <Specs>
                Preannual: {props.perannual} ||
                Plant Growth: {props.plantgrowth}
              </Specs>
              <Specs>
                Re-Pot: {props.repot} ||
                Indoor: {props.indoor ? "✓" : "✗"} ||
                Outdoor: {props.outdoor ? "✓" : "✗"}
              </Specs>
            </>
          }
          <Button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close' : 'Edit'}</Button>
          <Button onClick={() => props.deleteSpec(props.plant_id, props.id)}>Delete</Button>
      </ul>
    </>
  )
}

const ConnectedSpecsPage = (props) => (
  <SpecConsumer>
    {
      value => (
        <Spec
          {...props}
          {...value}
        />
      )
    }
  </SpecConsumer>
)

export default ConnectedSpecsPage;