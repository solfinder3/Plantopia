import React, {useState, useEffect} from 'react';
import { SpecConsumer } from '../../providers/SpecProvider';
import SpecForm from './SpecForm';

const Spec = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    props.getSpecs(props.plant_id, props.id)
  }, [])

  const editView = () => {
    return (
      <>
        <SpecForm
          {...props}
          toggleEdit={setToggleEdit}
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