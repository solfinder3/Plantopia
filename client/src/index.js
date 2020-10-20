import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {initMiddleware} from 'devise-axios';

import AuthProvider from './providers/AuthProvider';
import RoomProvider from './providers/RoomProvider';
import PlantProvider from './providers/PlantProvider';
import RoutineProvider from './providers/RoutineProvider';
import SpecProvider from './providers/SpecProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RoomProvider>
        <PlantProvider>
          <SpecProvider>
            <RoutineProvider>
              <BrowserRouter>
              <App />
              </BrowserRouter>
            </RoutineProvider>
          </SpecProvider>
        </PlantProvider>
      </RoomProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
