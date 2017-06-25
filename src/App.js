import React, { Component } from 'react';
import BodyLayout from './components/BodyLayout.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="head-space">
          Icon goes here
        </div>
        <span className="body-layout">
          <BodyLayout />
        </span>
        <span className="ad-goes-here">
          ad
        </span>
      </div>
    );
  }
}

export default App;
