import React, {useState} from 'react';
import { RoomConsumer } from '../../providers/RoomProvider';

const Room = () => {
  <RoomConsumer>
    <h1>{}</h1>
    <h2>{}</h2>
  </RoomConsumer>
}

export default Room;