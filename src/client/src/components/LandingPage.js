import React, { Component } from 'react';
import torontoVid from "./public/DowntownToronto.mp4";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Dashboard from './Dashboard'
import Survey from './Survey'

const LandingPage = () => (
<div>
    <div style={{
      width: '100%',
      height: '',
      overflow: 'hidden',
      zIndex: -4,
    }}>

      <video autoplay="true" loop="true"
        style={{
          objectFit:'cover',
          width: '100%',
          height: '100%',
          zIndex: -4,
          position: "absolute",
        }}
        src={torontoVid}
      />
    </div>

    <div style={{
      background: "#000000", 
      height: "100%", 
      position: "absolute", 
      opacity: 0.60, 
      zIndex: -2, 
      width: "100%"}}>
    </div>
    
    <div className ='container' style={{zIndex: 2, paddingTop: 400+"px"}}>
      <h2 style={{
        zIndex: 3, 
        color: "white", 
        fontWeight: "bold",
        fontSize: 150+"px"}}>
        WAVE
      </h2>
      
      <div>
      <a href="/survey">
      <button
        type="button"
        class="btn btn-info"
        href="/survey">
        Analysts
      </button>
      </a>
      
      <a href="/dashboard">
      <button 
        type="button"
        class="btn btn-warning"
        href="/dashboard">
        Platforms
      </button>
      </a>
      </div>
    </div>
    

</div>
  );

  export default LandingPage