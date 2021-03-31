import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const props = {
  data: true,
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/dashboard' component={Dashboard} {...props} />
      </Switch>
    </Router>
  );
}

export default App;
