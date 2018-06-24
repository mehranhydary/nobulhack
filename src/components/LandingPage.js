import React, { Component } from 'react';
import torontoVid from "./public/DowntownToronto.mp4";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Particles from 'react-particles-js';


import Dashboard from './Dashboard'
import Survey from './Survey'

const LandingPage = () => (
<div>
    <span style={{zIndex: 0, position: "absolute", width: "100%"}}>
      <Particles />
    </span>
    <div style={{
      width: '100%',
      height: '',
      overflow: 'hidden',
      zIndex: -4,
    }}>

      <video autoPlay="true" loop="true"
        style={{
          objectFit:'cover',
          width: '100%',
          height: '100%',
          zIndex: -4,
          position: "absolute",
        }}
        muted={true}
        src={torontoVid}
      />
    </div>

    <div style={{
      background: "#000000", 
      height: "100%", 
      position: "absolute", 
      opacity: 0.70, 
      zIndex: -2, 
      width: "100%"}}>
    </div>
    
    <div className ='container' style={{zIndex: 2, paddingTop: 300+"px"}}>
      <h2 style={{
        zIndex: 3, 
        color: "white", 
        fontWeight: "bold",
        fontSize: 150+"px"}}>
        FLOW
      </h2>
      <h3 style = {{color: 'white', fontWeight: 'bold'}}>Maximize your insights into the real estate market</h3>
      <div>
      <a href="/survey">
      <button
        type="button"
        className="btn btn-info">
        Analysts
      </button>
      </a>
      
      <a href="/dashboard">
      <button 
        type="button"
        className="btn btn-warning">
        Platforms
      </button>
      </a>
      </div>
    </div>
    
</div>
  );

  export default LandingPage