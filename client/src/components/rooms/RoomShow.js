import React, {useEffect, useState} from 'react'
import { RoomConsumer } from '../../providers/RoomProvider';
import RoomForm from './RoomForm';
import Plants from '../plants/Plants';
import plantsstyled from '../../styles/PlantsStyles'
import '../../styles/Plants.css';

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
      <div className = 'plantall'>
      <div className='showroom'>
        {toggleEdit ? editView() : 
        <>
          <p>{props.room.name}</p>
          <p>{props.room.sun_amount}</p>
        </>
        }
        <button onClick={() => setToggleEdit(!toggleEdit)}>{toggleEdit ? 'Close Room' : 'Edit Room'}</button>
        <button onClick={() => props.deleteRoom(props.room.id)}>Delete</button>
        </div>
          <h1>Your Plants</h1>
        <div className='plantsstyles'>
          <plants><Plants room_id={props.room.id} /></plants>
      </div>
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