import React, {useState, useEffect} from 'react';
import axios from "axios";
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm'
import Room from  './Room';
import '../../styles/Room.css';


const Rooms = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    props.getRooms()
  }, [])

  const listRooms = () => {
    if (props.rooms.length !== 0) {
      return (
        <div className = "roomcont">
            { props.rooms.map( r =>
          <Room {...r} />
              )}
        </div>
      )
    } else {
      return ( <h1>No Rooms</h1> )
    }
  }
  // if(!props.rooms) return null
  return (
    <>
    <div className = "toprow">
    <div>button</div>
        <div>Your rooms</div>
  <div>number of rooms: {props.rooms.length}</div>
    </div>
    <button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? 'closeForm' : 'openForm'}</button>
      {toggleForm ? <RoomForm addRoom={props.addRoom} toggle={setToggleForm} /> : ''}
      {listRooms()}
    </>
  )
}

const ConnectedRooms = (props) => (
  <RoomConsumer>
    {
      value => (
        <Rooms 
          {...props}
          {...value}
        />
      )
    }
  </RoomConsumer>
)

export default ConnectedRooms;