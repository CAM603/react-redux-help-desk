import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/DashBoard';

function App() {

  return (
    <div className="App">
      <Route exact path="/" render={props => <Home {...props}/>}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
    </div>
  );
}

export default App;
