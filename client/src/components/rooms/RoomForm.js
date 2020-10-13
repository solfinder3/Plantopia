import React, {useState, useEffect} from 'react';
import axios from "axios";
import {AuthConsumer} from '../../providers/AuthProvider'

const RoomForm = (props) => {
  const [roomName, setRoomName] = useState("");
  const [sunAmount, setSunAmount] = useState("");

  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  }

  const handleSunAmountChange = (e) => {
    setSunAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addRoom({name: roomName, sun_amount: sunAmount, user_id: props.user.id})
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          label="Room Name"
          placeholder="Room Name"
          name="roomName"
          required
          onChange={handleRoomNameChange}
          value={roomName}
        />
        <input
          label="Room's Sun Amount"
          placeholder="Sun Amount"
          name="sunAmount"
          required
          onChange={handleSunAmountChange}
          value={sunAmount}
        />
        <input type="submit"/>
      </form>
    </>
  )
}

const ConnectedRoomForm = (props) => (
  <AuthConsumer>
    { value => <RoomForm {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedRoomForm;