import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './Dashboard'
import Survey from './Survey'

const LandingPage = () => (
    <div>
      <h2>LandingPage</h2>
      <ul>
          <li>
            <Link to="/">LandingPage</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/survey">Survey</Link>
          </li>
        </ul>
    </div>
  
  );

  export default LandingPage