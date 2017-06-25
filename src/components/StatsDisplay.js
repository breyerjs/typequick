import React, { Component } from 'react';
import StopwatchDisplay from './StopwatchDisplay.js';
import '../css/App.css';

class StatsDisplay extends Component {
  render() {
    return (
      <div className="stats-display">
        <span className="highscore">
          High Score: {this.props.scorecard.displayHighScore()}
        </span>
        <span className="watchface">
        <StopwatchDisplay
          secondsElapsed={this.props.secondsElapsed}
        />
        </span>
        <span className="average-score">
          Average Score: {this.props.scorecard.getAverageScore()}
        </span>
      </div>
    );
  }
}

export default StatsDisplay;
