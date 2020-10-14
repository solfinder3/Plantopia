import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/shared/Navbar';
import Home from './components/shared/Home';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';

import Rooms from './components/rooms/Rooms';
import Plants from './components/plants/Plants';
import RoomShow from './components/rooms/RoomShow';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/rooms/:id' component={RoomShow} />
          <Route exact path='/plants' component={Plants} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)
export default App;