import React, {useState} from 'react';
import { PlantConsumer } from '../../providers/PlantProvider';
import { Link } from 'react-router-dom';

const Plant = (props) => (

    <ul>
      <li>
      <Link to={{pathname:`/rooms/${props.room_id}/plants/${props.id}`, state: {room_id: props.room_id}}}>{props.name}</Link>
      <br />
      {props.species}
      <br />
      {props.colors}
      <br />
      </li>
    </ul>
    )
 


export default Plant;