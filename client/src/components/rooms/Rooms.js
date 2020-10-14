import React, {useState, useEffect} from 'react';
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm'
import Room from  './Room';

const Rooms = (props) => {
  const [toggleForm, setToggleForm] = useState(false)

  useEffect(() => {
    props.getRooms()
  }, [])

  const listRooms = () => {
    if (props.rooms.length !== 0) {
      return (
        <ul>
            { props.rooms.map( r =>
          <Room {...r} />
              )}
        </ul>
      )
    } else {
      return ( <h1>No Rooms</h1> )
    }
  }
  // if(!props.rooms) return null
  return (
    <>
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