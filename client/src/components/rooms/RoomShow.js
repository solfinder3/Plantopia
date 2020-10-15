import React, {useEffect, useState} from 'react'
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm';

const RoomShow = (props) => {
  const [toggleEdit, setToggleEdit] = useState(false)

  useEffect(() => {
    props.getRoom(props.match.params.id)
  }, [])

  const editView = () => {
    
    return (
      <>
        <RoomForm
        {...props}
        toggleEdit={setToggleEdit}
        />
      </>
    )
  }


  if (!props.room) return null
    return (
      <div>
        {toggleEdit ? editView() : 
        <>
          <p>{props.room.name}</p>
          <p>{props.room.sun_amount}</p>
        </>
        }
        <button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close Form' : 'Edit'}</button>
        <button onClick={() => props.deleteRoom(props.room.id)}>Delete</button>
      </div>
    )
}

const ConnectedRoomShow = (props) => (
  <RoomConsumer>
    {
      value => (
        <RoomShow 
          {...props}
          {...value}
        />
      )
    }
  </RoomConsumer>
)

export default ConnectedRoomShow;