import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from './components/Dashboard'
import LandingPage from './components/LandingPage'
import Survey from './components/Survey'
import PlatformAccess from './components/PlatformAccess'

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <div className="card card-nav-tabs card-plain">
        <div className="card-header card-header-info">
          <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <ul className="nav justify-content-end nav-tabs">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="material-icons">battery_charging_full</i>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/survey">
                      <i className="material-icons">insert_emoticon</i>
                      Agent
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/dashboard">
                      <i className="material-icons">dashboard</i>
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/survey" component={Survey} />
        <Route path="/sale" component={PlatformAccess} />
      </div>
    </Router>
    );
  }
}

export default App;