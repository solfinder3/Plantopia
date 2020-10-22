import React, {useState, useEffect} from 'react';
import { RoutineConsumer } from '../../providers/RoutineProvider';
import Routine from './Routine';
import RoutineForm from './RoutineForm';

const Routines = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    props.getRoutines(props.plant_id)
  }, [])

  const listRoutines = () => {
    if (props.routines.length !== 0) {
      return (
        <ul>
          { props.routines.map( r =>
            <Routine {...r} />
          )}
        </ul>
      )
    } else {
      return (<h1>No Routines</h1>)
    }
  } 

  return (
    <>
    <button onClick={() => setToggleForm(!toggleForm)}>{ toggleForm ? 'Exit' : 'Open Form' }</button>
      {
        toggleForm ? 
        <RoutineForm addRoutine={props.addRoutine} plant_id={props.plant_id} toggleForm={setToggleForm} />
        :
        <></>
      }
      {listRoutines()}
    </>
  )
}

const ConnectedRoutines = (props) => (
  <RoutineConsumer>
    {
      value => (
        <Routines 
          {...props}
          {...value}
        />
      )
    }
  </RoutineConsumer>
)

export default ConnectedRoutines;