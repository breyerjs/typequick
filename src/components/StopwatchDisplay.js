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
      <div className="watchface">
        {formattedSeconds(this.props.secondsElapsed)}
      </div>
    );
  }
}

export default StopwatchDisplay;
