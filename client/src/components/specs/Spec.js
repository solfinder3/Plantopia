import React, {useState, useEffect} from react;
import { SpecsConsumer } from '../../providers/SpecsProvider';

const Specs = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    props.getSpecs(props.plant_id, props.id)
  }, [])

  const editView = () => {
    return (
      <>
        <SpecsForm
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

const ConnectedSpecs = (props) => (
  <SpecsConsumer>
    {
      value => (
        <Specs
          {...props}
          {...value}
        />
      )
    }
  </SpecsConsumer>
)

export default ConnectedSpecs;