import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Survey from './components/Survey'

class App extends Component {
  render() {
    return (
      <Router>
      <div>  
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/survey" component={Survey} />
      </div>
    </Router>
    );
  }
}

export default App;