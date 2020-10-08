import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const RoomContext = React.createContext();

export const RoomConsumer = RoomContext.Consumer;

const RoomProvider = () => {
  const [rooms, setRooms] = useState()
  const [room, setRoom] = useState()

  const getRooms = () => {
    axios.get()
  }

}

export default RoomProvider;