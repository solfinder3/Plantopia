import React, {useState, useEffect}  from 'react';
import { RoutineConsumer } from '../../providers/RoutineProvider';
import RoutineForm from './RoutineForm';

import { RoutineWrap, Routines, ButtonWrap, Button } from '../../styles/PlantPageElements'

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
        
        {toggleEdit ? editView() :
          <RoutineWrap>
          <Routines>Time: {props.routine_time}</Routines>
          <Routines>
            Action: {props.action} -
            Sunday: {props.sunday ? 'true' : 'false'}
          </Routines>
          <Routines>
            Monday: {props.monday ? 'true' : 'false'} -
            Tuesday: {props.tuesday ? 'true' : 'false'}
          </Routines>
          <Routines>
            Wednesday: {props.wednesday ? 'true' : 'false'} -
            Thursday: {props.thursday ? 'true' : 'false'} 
          </Routines>
          <Routines>
          Friday: {props.friday ? 'true' : 'false'} -
          Saturday: {props.saturday ? 'true' : 'false'}
          </Routines>
          </RoutineWrap>
        }
          {/* <ButtonWrap> */}
            <Button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close' : 'Edit'}</Button>
            <Button onClick={() => props.deleteRoutine(props.plant_id, props.id)}>Delete</Button>
          {/* </ButtonWrap> */}
    
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