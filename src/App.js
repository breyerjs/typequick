import React, { Component } from 'react';
import Header from './components/Header.js';
import BodyLayout from './components/BodyLayout.js';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BodyLayout />
      </div>
    );
  }
}

export default App;
