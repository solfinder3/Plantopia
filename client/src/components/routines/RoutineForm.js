import React, {useState, useEffect} from 'react';

import { Form, Button, FormInput, InputDiv, CheckInput } from '../../styles/SmallFormElements'

const RoutineForm = (props) => {
  const [Time, setTime] = useState('')
  const [action, setAction] = useState('')
  const [sunday, setSunday] = useState(false)
  const [monday, setMonday] = useState(false)
  const [tuesday, setTuesday] = useState(false)
  const [wednesday, setWednesday] = useState(false)
  const [thursday, setThursday] = useState(false)
  const [friday, setFriday] = useState(false)
  const [saturday, setSaturday] = useState(false)

  useEffect (() => {
    if (props.id) {
      setTime(props.routine_time)
      setAction(props.action)
      setSunday(props.sunday)
      setMonday(props.monday)
      setTuesday(props.tuesday)
      setWednesday(props.wednesday)
      setThursday(props.thursday)
      setFriday(props.friday)
      setSaturday(props.saturday)
    }
  }, [])

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleActionChange = (e) => {
    setAction(e.target.value);
  }

  const handleSundayChange = (e) => {
    setSunday(!sunday);
  }

  const handleMondayChange = (e) => {
    setMonday(!monday);
  }

  const handleTuesdayChange = (e) => {
    setTuesday(!tuesday);
  }

  const handleWednesdayChange = (e) => {
    setWednesday(!wednesday)
  }

  const handleThursdayChange = (e) => {
    setThursday(!thursday);
  }

  const handleFridayChange = (e) => {
    setFriday(!friday);
  }

  const handleSaturdayChange = (e) => {
    setSaturday(!saturday);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.routines) {
     props.updateRoutine(props.plant_id, props.id, {routine_time: Time, action, sunday, monday, tuesday, wednesday, thursday, friday, saturday})
     props.toggleEdit()
    } else {
      props.addRoutine(props.plant_id, {routine_time: Time, action, sunday, monday, tuesday, wednesday, thursday, friday, saturday})
      props.toggleForm()
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <InputDiv>
          Time-
          <FormInput 
            type='time'
            name='Time'
            label='Time'
            placeholder='Time'
            required
            value={Time}
            onChange={handleTimeChange}
          />
        </InputDiv>
        <InputDiv>
          Action-
          <FormInput 
            name='action'
            label='Action'
            placeholder='Action'
            required       
            value={action}
            onChange={handleActionChange}
          />
        </InputDiv>
        <InputDiv>
          Sunday-
          <CheckInput 
            type='checkbox'
            name='sunday'
            value={sunday}
            onChange={handleSundayChange}
            checked={sunday}
          />
        </InputDiv>
        <InputDiv>
          Monday-
          <CheckInput 
            type='checkbox'
            name='monday'
            value={monday}
            onChange={handleMondayChange}
            checked={monday}
          />
        </InputDiv>
        <InputDiv>
          Tuesday-
          <CheckInput 
            type='checkbox'
            name='tuesday'
            value={tuesday}
            onChange={handleTuesdayChange}
            checked={tuesday}
          />
        </InputDiv>
        <InputDiv>
          Wednesday-
          <CheckInput 
            type='checkbox'
            name='wednesday'
            value={wednesday}
            onChange={handleWednesdayChange}
            checked={wednesday}
          />
        </InputDiv>
        <InputDiv>
          Thursday-
          <CheckInput 
            type='checkbox'
            name='thursday'
            value={thursday}
            onChange={handleThursdayChange}
            checked={thursday}
          />
        </InputDiv>
        <InputDiv>
          Friday-
          <CheckInput 
            type='checkbox'
            name='friday'
            value={friday}
            onChange={handleFridayChange}
            checked={friday}   
          />
        </InputDiv>
        <InputDiv>
          Saturday-
          <CheckInput 
            type='checkbox'
            name='saturday'
            value={saturday}
            onChange={handleSaturdayChange}   
            checked={saturday}
          />
        </InputDiv>
        <Button type='submit'>submit</Button>
      </Form>
    </>
  )

}

export default RoutineForm;