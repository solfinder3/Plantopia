import React, {useState, useEffect} from 'react';
import axios from "axios";
import {AuthConsumer} from '../../providers/AuthProvider'

import { Wrapper, Form, Button, FormInput } from '../../styles/RoomForm'



const RoomForm = (props) => {
  const [roomName, setRoomName] = useState("");
  const [sunAmount, setSunAmount] = useState("");

  useEffect(() => {
    if (props.room) {
      setRoomName(props.room.name)
      setSunAmount(props.room.sun_amount)
    }
  }, [])

  const handleRoomNameChange = (e) => {
    setRoomName(e.target.value);
  }

  const handleSunAmountChange = (e) => {
    setSunAmount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.room) {
      props.updateRoom(props.room.id, {name: roomName, sun_amount: sunAmount, user_id: props.user.id})
      props.toggleEdit()
    } else {
      props.addRoom({name: roomName, sun_amount: sunAmount, user_id: props.user.id})
      props.toggle()
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Room Name"
          placeholder="Room Name"
          name="roomName"
          required
          onChange={handleRoomNameChange}
          value={roomName}
        />
        <FormInput
          label="Room's Sun Amount"
          placeholder="Sun Amount"
          name="sunAmount"
          required
          onChange={handleSunAmountChange}
          value={sunAmount}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Wrapper>
  )
}

const ConnectedRoomForm = (props) => (
  <AuthConsumer>
    { value => <RoomForm {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedRoomForm;