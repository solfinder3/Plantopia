import React from 'react';
import { RoutineConsumer } from '../../providers/RoutineProvider';

const Routine = (props) => (
    <>
      <ul>
        <li>
          Time: {props.time}
          <br />
          Action: {props.action}
          <br />
          {props.sunday ? 'Sunday: true' : 'Sunday: false'}
          <br />
          {props.monday ? 'Monday: true' : 'Monday: false'}
          <br />
          {props.tuesday ? 'Tuesday: true' : 'Tuesday: false'}
          <br />
          {props.wednesday ? 'Wednesday: true' : 'Wednesday: false'}
          <br />
          {props.thursday ? 'Thursday: true' : 'Thursday: false'}
          <br />
          {props.friday ? 'Friday: true' : 'Friday: false'}
          <br />
          {props.saturday ? 'Saturday: true' : 'Saturday: false'}
        </li>
      </ul>
    </>
)

export default Routine;