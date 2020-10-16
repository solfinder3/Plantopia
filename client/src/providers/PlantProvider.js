import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const PlantContext = React.createContext();

export const PlantConsumer = PlantContext.Consumer;

const PlantProvider = ({children}) => {
  const [plants, setPlants] = useState([])
  const [plant, setPlant] = useState()

  const getPlants = (room_id) => {
    axios.get(`/api/rooms/${room_id}/plants`)
    .then( res => {
      setPlants( res.data )
    })
    .catch(err => console.log(err))
  }

  const getPlant = (room_id, id) => {
    axios.get(`/api/rooms/${room_id}/plants/${id}`)
    .then( res => {
      setPlant( res.data )
    })
    .catch(err => console.log(err))
  }

  const addPlant = (room_id, plant) => {
    axios.post(`/api/rooms/${room_id}/plants`, {plant})
    .then( res => {
      setPlants([...plants, res.data ])
    })
    .catch(err => console.log(err))
  }

  const updatePlant = (room_id, id, plant) => {
    axios.put(`/api/rooms/${room_id}/plants/${id}`, {plant})
    .then( res => {
      setPlant( res.data )
    })
    .catch(err => console.log(err))
  }

  const deletePlant = (room_id, id) => {
    axios.delete(`/api/rooms/${room_id}/plants/${id}`)
    .then( res => {
      setPlants(plants.filter(p => p.id !== id))
      window.location.href=`/rooms/${room_id}`
    })
    .catch(err => console.log(err))
  }

  return (
    <PlantContext.Provider value={{
      plants: plants,
      plant: plant,
      getPlants: getPlants,
      getPlant: getPlant,
      addPlant: addPlant,
      updatePlant: updatePlant,
      deletePlant: deletePlant
    }}>
      { children }
    </PlantContext.Provider>
  )

}

export default PlantProvider;