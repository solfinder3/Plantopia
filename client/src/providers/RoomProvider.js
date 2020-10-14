import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const RoomContext = React.createContext();

export const RoomConsumer = RoomContext.Consumer;

const RoomProvider = ({children}) => {
  const [rooms, setRooms] = useState([])
  const [room, setRoom] = useState()

  const getRooms = () => {
    axios.get(`/api/rooms`)
    .then( res => {
      setRooms( res.data )
    })
    .catch(err => console.log(err))
  }

  const getRoom = (id) => {
    axios.get(`/api/rooms/${id}`)
    .then( res => {
      setRoom( res.data )
    })
    .catch(err => console.log(err))
  }

  const addRoom = (room) => {
    axios.post(`/api/rooms`, {room})
    .then( res => {
      setRooms([...rooms, res.data])
    })
    .catch(err => console.log(err))
  }

  const updateRoom = (id, room) => {
    axios.put(`/api/rooms/${id}`, {room})
    .then( res => {
      setRoom(res.data)
    //   const updatedRooms = rooms.map( r => {
    //     if (r.id === id) {
    //       return res.data
    //     }
    //     return r
    //   })
    //   setRooms(updatedRooms)
    })
    .catch(err => console.log(err))
  }

  const deleteRoom = (id) => {
    axios.delete(`/api/rooms/${id}`)
    .then( res => {
      setRooms(rooms.filter(r => r.id !== id))
      alert(res.data.message)
    })
    .catch(err => console.log(err))
  }



  return (
    <RoomContext.Provider value={{
      rooms: rooms,
      room: room,
      getRooms: getRooms,
      getRoom: getRoom,
      addRoom: addRoom,
      updateRoom: updateRoom,
      deleteRoom: deleteRoom
    }}>
      { children }
    </RoomContext.Provider>
  )

}

export default RoomProvider;