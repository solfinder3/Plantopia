import React, {useState, useEffect} from 'react';
import { SpecConsumer } from '../../providers/SpecProvider';
import SpecForm from './SpecForm';

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
        <li>
          {toggleEdit ? editView() :
            <>
              <p>Water Amount: {props.water}</p>
              <p>Ferilizer: {props.ferilizer}</p>
              <p>Sunlight: {props.sunlight }</p>
              <p>Termperature: {props.temperature}</p>
              <p>Humidity: {props.humidity}</p>
              <p>Soil: {props.soil}</p>
              <p>Size: {props.fullsize}</p>
              <p>Date Planted: {props.planting}</p>
              <p>Annual: {props.annual}</p>
              <p>Preannual: {props.perannual}</p>
              <p>Plant Growth: {props.plantgrowth}</p>
              <p>Re-Pot: {props.repot}</p>
              <p>Indoor: {props.indoor ? "✓" : "✗"}</p>
              <p>Outdoor: {props.outdoor ? "✓" : "✗"}</p>
              <p>Buggers: {props.pests}</p>
          
            </>
          }
          <button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close Specs' : 'Edit'}</button>
          <button onClick={() => props.deleteSpec(props.plant_id, props.id)}>Delete</button>
        </li>
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