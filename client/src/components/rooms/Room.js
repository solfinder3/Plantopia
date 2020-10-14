import React, {useState} from 'react';
import { RoomConsumer } from '../../providers/RoomProvider';
import { Link } from 'react-router-dom';

const Room = (props) => {
  return (
    <div style={{border:'1px solid black'}}>
      <Link to={`/rooms/${props.id}`}>{props.name}</Link>
      <p>{props.sun_amount}</p>
    </div>
    )
}

export default Room;