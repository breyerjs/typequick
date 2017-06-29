import React, { Component } from 'react';
import BodyLayout from './components/BodyLayout.js';
import './css/App.css';
import Logo from './images/logo.png';

class App extends Component {
  render() {
    return (
      <div>
        <div className="logo-space">
          <img src={Logo} alt={"logo"} />
        </div>
        <div className="body-layout">
          <BodyLayout />
        </div>
        <div className="ad-goes-here">
          ad
        </div>
      </div>
    );
  }
}

export default App;
