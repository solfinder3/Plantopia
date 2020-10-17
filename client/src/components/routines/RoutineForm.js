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
    if (props.id) {
      setTime(props.time)
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
     props.updateRoutine(props.plant_id, props.id, {time, action, sunday, monday, tuesday, wednesday, thursday, friday, saturday})
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
          value={sunday}
          onChange={handleSundayChange}
          checked={sunday}
        
        />
        <label>Monday</label>
        <input 
          type='checkbox'
          name='monday'
          value={monday}
          onChange={handleMondayChange}
          checked={monday}
         
        />
        <label>Tuesday</label>
        <input 
          type='checkbox'
          name='tuesday'
          value={tuesday}
          onChange={handleTuesdayChange}
          checked={tuesday}
       
        />
        <label>Wednesday</label>
        <input 
          type='checkbox'
          name='wednesday'
          value={wednesday}
          onChange={handleWednesdayChange}
          checked={wednesday}
         
        />
        <label>Thursday</label>
        <input 
          type='checkbox'
          name='thursday'
          value={thursday}
          onChange={handleThursdayChange}
          checked={thursday}
       
        />
        <label>Friday</label>
        <input 
          type='checkbox'
          name='friday'
          value={friday}
          onChange={handleFridayChange}
          checked={friday}
       
        />
        <label>Saturday</label>
        <input 
          type='checkbox'
          name='saturday'
          value={saturday}
          onChange={handleSaturdayChange}   
          checked={saturday}
         
        />
        <button type='submit'>submit</button>
      </form>
    </>
  )

}

export default RoutineForm;