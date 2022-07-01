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
    <AuthWrapper>
      <Router>
        {/* Switch renders the first child */}
        <Switch>
          {/* dashboard */}
          <PrivateRoute path='/' exact={true}>
            <Dashboard></Dashboard>
          </PrivateRoute>

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
    </AuthWrapper>
  );
}

export default App;
