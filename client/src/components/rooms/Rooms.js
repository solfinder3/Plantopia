import React, {useState, useEffect} from 'react';
import axios from "axios";
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm'
import Room from  './Room';
import '../../styles/Room.css';
import  {Header} from '../../styles/SharedElements'


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
    }
  }
  // if(!props.rooms) return null
  return (
    <>
    <div className = "toprow">
      <button onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? <div className='closeForm'>⍇</div>: <div className = 'openForm'>＋</div>}</button>
      {toggleForm ? <RoomForm addRoom={props.addRoom} toggle={setToggleForm} /> : ''}
     <div>
     <Header>Your Rooms</Header>
     </div>
      <div>Number of Rooms: {props.rooms.length}</div>
    </div>
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