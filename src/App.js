import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* Switch renders the first child */}
      <Switch>
        {/* dashboard */}
        <Route path='/' exact={true}>
          <Dashboard></Dashboard>
        </Route>

        {/* login */}
        <Route path='/login'>
          <Login />
        </Route>

        {/* error */}
        <Route path='/error'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
