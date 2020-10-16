import React, {useState, useEffect} from 'react';

const RoutineForm = (props) => {
  const [time, setTime] = useState(0)
  const [action, setAction] = useState('')
  const [sunday, setSunday] = useState(false)
  const [monday, setMonday] = useState(false)
  const [tuesday, setTuesday] = useState(false)
  const [wednesday, setWednesday] = useState(false)
  const [thursday, setThursday] = useState(false)
  const [friday, setFriday] = useState(false)
  const [saturday, setSaturday] = useState(false)

  useEffect (() => {
    if (props.routine) {
      setTime(props.routine.time)
      setAction(props.routine.action)
      setSunday(props.routine.sunday)
      setMonday(props.routine.monday)
      setTuesday(props.routine.tuesday)
      setWednesday(props.routine.wednesday)
      setThursday(props.routine.thursday)
      setFriday(props.routine.friday)
      setSaturday(props.routine.saturday)
    }
  }, [])

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  }

  const handleActionChange = (e) => {
    setAction(e.target.value);
  }

  const handleSundayChange = (e) => {
    setSunday(e.target.value);
  }

  const handleMondayChange = (e) => {
    setMonday(e.target.value);
  }

  const handleTuesdayChange = (e) => {
    setTuesday(e.target.value);
  }

  const handleWednesdayChange = (e) => {
    setWednesday(e.target.value)
  }

  const handleThursdayChange = (e) => {
    setThursday(e.target.value);
  }

  const handleFridayChange = (e) => {
    setFriday(e.target.value);
  }

  const handleSaturdayChange = (e) => {
    setSaturday(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.routine) {
     props.updateRoutine(props.routines.plant_id, props.routines.id, {time, action, sunday, monday, tuesday, wednesday, thursday, friday, saturday})
     props.toggleEdit()
    } else {
      props.addRoutine(props.plant_id, {time, action, sunday, monday, tuesday, wednesday, thursday, friday, saturday})
      props.toggleForm()
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='time'
          label='Time'
          placeholder='Time'
          required
          value={time}
          onChange={handleTimeChange}
        />
        <input 
          name='action'
          label='Action'
          placeholder='Action'
          required       
          value={action}
          onChange={handleActionChange}
          />
        <label>Sunday</label>
        <input 
          type='checkbox'
          name='sunday'
          value={!sunday}
          onChange={handleSundayChange}
        
        />
        <label>Monday</label>
        <input 
          type='checkbox'
          name='monday'
          value={!monday}
          onChange={handleMondayChange}
         
        />
        <label>Tuesday</label>
        <input 
          type='checkbox'
          name='tuesday'
          value={!tuesday}
          onChange={handleTuesdayChange}
       
        />
        <label>Wednesday</label>
        <input 
          type='checkbox'
          name='wednesday'
          value={!wednesday}
          onChange={handleWednesdayChange}
         
        />
        <label>Thursday</label>
        <input 
          type='checkbox'
          name='thursday'
          value={!thursday}
          onChange={handleThursdayChange}
       
        />
        <label>Friday</label>
        <input 
          type='checkbox'
          name='friday'
          value={!friday}
          onChange={handleFridayChange}
       
        />
        <label>Saturday</label>
        <input 
          type='checkbox'
          name='saturday'
          value={!saturday}
          onChange={handleSaturdayChange}   
         
        />
        <button type='submit'>submit</button>
      </form>
    </>
  )

}

export default RoutineForm;