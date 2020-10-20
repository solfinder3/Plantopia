import React, {useState} from 'react';
import axios from 'axios';

export const SpecsContext = React.createContext();

export const SpecConsumer = SpecContext.Consumer;

const SpecProvider = ({children}) => {
  const [spec, setSpec] = useState()
  const [specs, setSpecs] = useState([])

  const getSpecs = (room_id) => {
    axios.get(`/api/plants/${plant_id}/specs`)
    .then( res => {
      setRoutines( res.data )
    })
    .catch(err => console.log(err))
  }

  const getSpec = (plant_id, id) => {
    axios.get(`/api/plants/${plant_id}/specs/${id}`)
    .then( res => {
      setSpec( res.data )
    })
    .catch(err => console.log(err))
  }

  const addSpec = (plant_id, spec) => {
    axios.post(`/api/plants/${plant_id}/specs`, {spec})
    .then( res => {
      setSpecs([...specs, res.data])
    })
    .catch(err => console.log(err))
  }

  const updateSpec = (plant_id, id, spec) => {
    axios.put(`/api/plants/${plant_id}/specs/${id}`, {spec})
    .then( res => {
      setSpec( res.data )
    })
    .catch(err => console.log(err))
  }

  const deleteSpec = (plant_id, id) => {
    axios.delete(`/api/plants/${plant_id}/specs/${id}`)
    .then( res => {
      setSpecs(specs.filter(r => r.id !== id))

    })
    .catch(err => console.log(err))
  }

    return (
      <SpecContext.Provider value={{
        specs: specs,
        spec: spec,
        getSpecs: getSpecs,
        getSpec: getSpec,
        addSpec: addSpec,
        updateSpec: updateSpec,
        deleteSpec: deleteSpec
      }}>
        { children }
      </SpecContext.Provider>
  )
}

export default SpecProvider;









