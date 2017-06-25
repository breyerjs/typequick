import React, { Component } from 'react';
import '../css/App.css';

const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

// see https://www.npmjs.com/package/timer-stopwatch
// For this exact one see: https://codepen.io/seoh/pen/PPZYQy

class StopwatchDisplay extends Component {
  render() {
    return (
        <span>{formattedSeconds(this.props.secondsElapsed)}</span>
    );
  }
}

export default StopwatchDisplay;
