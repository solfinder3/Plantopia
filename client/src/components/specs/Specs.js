import React, { useState, useEffect } from 'react';
import { SpecConsumer } from '../../providers/SpecProvider';
import Spec from './Spec';
import SpecForm from './SpecForm';

const Specs = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    props.getSpecs(props.plant_id)
  })

  const listSpecs = () => {
    if (props.specs.length !== 0) {
      return (
        <ul>
          { props.specs.map( s =>
            <Spec {...s} />
          )}
        </ul>
      )
    } else {
      return (<h1>No Specs</h1>)
    }
  }

  return (
    <>
      <button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? 'Exit' : 'Add plant specs'}</button>
      {
        toggleForm ?
          <SpecForm addSpec={props.addSpec} plant_id={props.plant_id} toggleForm={setToggleForm} />
          :
          <></>
      }
      {listSpecs()}
    </>
  )
}

const ConnectedSpecs = (props) => (
  <SpecConsumer>
    {
      value => (
        <Specs
          {...props}
          {...value}
        />
      )
    }
  </SpecConsumer>
)

export default ConnectedSpecs;