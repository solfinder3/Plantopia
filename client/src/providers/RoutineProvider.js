import React, {useState} from 'react';
import axios from 'axios';

export const RoutineContext = React.createContext();

export const RoutineConsumer = RoutineContext.Consumer;

const RoutineProvider = ({children}) => {
  const [routine, setRoutine] = useState()
  const [routines, setRoutines] = useState([])

  const getRoutines = (plant_id) => {
    axios.get(`/api/plants/${plant_id}/routines`)
    .then( res => {
      setRoutines( res.data )
    })
    .catch(err => console.log(err))
  }

  const getRoutine = (plant_id, id) => {
    axios.get(`/api/plants/${plant_id}/routines/${id}`)
    .then( res => {
      setRoutine( res.data )
    })
    .catch(err => console.log(err))
  }

  const addRoutine = (plant_id, routine) => {
    axios.post(`/api/plants/${plant_id}/routines`, {routine})
    .then( res => {
      setRoutines([...routines, res.data])
    })
    .catch(err => console.log(err))
  }

  const updateRoutine = (plant_id, id, routine) => {
    axios.put(`/api/plants/${plant_id}/routines/${id}`, {routine})
    .then( res => {
      setRoutine( res.data )
    })
    .catch(err => console.log(err))
  }

  const deleteRoutine = (plant_id, id, room_id) => {
    axios.delete(`/api/plants/${plant_id}/routines/${id}`)
    .then( res => {
      setRoutines(routines.filter(r => r.id !== id))
      window.location.href=`/rooms/${room_id}/plants/${id}`
    })
    .catch(err => console.log(err))
  }

    return (
      <RoutineContext.Provider value={{
        routines: routines,
        routine: routine,
        getRoutines: getRoutines,
        getRoutine: getRoutine,
        addRoutine: addRoutine,
        updateRoutine: updateRoutine,
        deleteRoutine: deleteRoutine
      }}>
        { children }
      </RoutineContext.Provider>
  )
}

export default RoutineProvider;

