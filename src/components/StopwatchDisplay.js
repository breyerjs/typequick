import React, { Component } from 'react';
import '../css/App.css';
import TimeImage from '../images/Clock.png';


const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)

// see https://www.npmjs.com/package/timer-stopwatch
// For this exact one see: https://codepen.io/seoh/pen/PPZYQy

class StopwatchDisplay extends Component {
  render() {
    return (
      <div>
        {"Time"}
        <br />
        <img src={TimeImage} alt={"image"} />
        <br />
        <span>{formattedSeconds(this.props.secondsElapsed)}</span>
      </div>
    );
  }
}

export default StopwatchDisplay;
