import React, {useState} from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import { Link } from 'react-router-dom';

const Plant = (props) => (
  <div className='plantall'>
    <div className='plantsmap'>
      <Link to={{pathname:`/rooms/${props.room_id}/plants/${props.id}`, state: {room_id: props.room_id}}}>{<div className='plantstextlink'> {props.name} </div>}</Link>
        <li>{props.species}</li>
        <li>{props.colors}</li>
    </div>
    </div>
    )
 


export default Plant;