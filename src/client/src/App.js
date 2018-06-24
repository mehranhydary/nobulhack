import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Particles from 'react-particles-js';


import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Survey from './components/Survey'


class App extends Component {
  render() {
    return (

      <Router>
      <div style={{zIndex: -2}}>
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/survey">Agent</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/dashboard">Dashboard</a>
        </li>
      </ul>
      <span style={{zIndex: 0, position: "absolute", width: "100%"}}>
      <Particles />
      </span>

        <hr />
  
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/survey" component={Survey} />
      </div>
    </Router>
    );
  }
}
export default App;
