import React, { Component } from 'react';
import Header from './components/Header.js';
import BodyLayout from './components/BodyLayout.js';
import './css/App.css';

var words = "These are the words".split(" ");

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BodyLayout words={words} />
      </div>
    );
  }
}

export default App;
