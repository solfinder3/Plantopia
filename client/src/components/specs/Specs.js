import React, { useState, useEffect } from 'react';
import { SpecConsumer } from '../../providers/SpecsProvider';
import ConnectedSpecs from './Spec';
import SpecForm from './SpecForm';

const Secs = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    props.getSpecs(props.sec_id)
  }, [])

  const listSpecs = () => {
    if (props.specs.length !== 0) {
      return (
        <ul>
          { props.specs.map(s =>
            <Secs {...s} />
          )}
        </ul>
      )
    } else {
      return (<h1>No Specs</h1>)
    }
  }

  return (
    <>
      <button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? 'Exit' : 'Open Form'}</button>
      {
        toggleForm ?
          <SpecForm addSpec={props.addSpec} spec_id={props.spec_id} toggleForm={setToggleForm} />
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