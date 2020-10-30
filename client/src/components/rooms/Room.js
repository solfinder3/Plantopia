import React, {useState} from 'react';
import { RoomConsumer } from '../../providers/RoomProvider';
import { Link } from 'react-router-dom';

const Room = (props) => {
  return (
    <Link className = "link roomcard" to={`/rooms/${props.id}`}>
      <p>Room- {props.name}</p>
      <p>Sun- {props.sun_amount}</p>
    </Link>
    )
  }


const ConnectedRoom = (props) => (
  <RoomConsumer>
    {
      value => (
        <Room 
          {...props}
          {...value}
        />
      )
    }
  </RoomConsumer>
)

export default ConnectedRoom;