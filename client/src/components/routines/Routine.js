import React, {useState, useEffect}  from 'react';
import { RoutineConsumer } from '../../providers/RoutineProvider';
import RoutineForm from './RoutineForm';

const Routine = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect (() => {
    props.getRoutines(props.plant_id, props.id)
  }, [props.routine])

  const editView = () => {
    return (
      <>
        <RoutineForm 
        {...props}
        toggleEdit={setToggleEdit}
        />
      </>
    )
  }

  if (!props.routines) return null
  return (
    <>
     
      <ul>
        <li>
        {toggleEdit ? editView() :
        <>
          Time: {props.time}
          <br />
          Action: {props.action}
          <br />
          Sunday: {props.sunday ? 'true' : 'false'}
          <br />
          Monday: {props.monday ? 'true' : 'false'}
          <br />
          Tuesday: {props.tuesday ? 'true' : 'false'}
          <br />
          Wednesday: {props.wednesday ? 'true' : 'false'}
          <br />
          Thursday: {props.thursday ? 'true' : 'false'}
          <br />
          Friday: {props.friday ? 'true' : 'false'}
          <br />
          Saturday: {props.saturday ? 'true' : 'false'}
          <br />
        </>
        }
          <button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close Form' : 'Edit'}</button>
          <button onClick={() => props.deleteRoutine(props.plant_id, props.id)}>Delete</button>
        </li>
      </ul>
    </>
  )
}

const ConnectedRoutinePage = (props) => (
  <RoutineConsumer>
    {
      value => (
        <Routine 
          {...props}
          {...value}
        />
      )
    }
  </RoutineConsumer>
)

export default ConnectedRoutinePage;