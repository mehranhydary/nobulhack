import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Nobul Hack</h1>
        </header>
        <h1 className="App-intro">
          This application was created by Samuel Lai, Ivan Lee, Reggie Yoboua, Mairaj Hydary, and Mehran Hydary
        </h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;