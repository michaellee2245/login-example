import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/home/:id' component={Home}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
