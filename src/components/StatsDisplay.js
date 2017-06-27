import React, { Component } from 'react';
import StopwatchDisplay from './StopwatchDisplay.js';
import HighScoreDisplay from './HighScoreDisplay.js';
import AverageScoreDisplay from './AverageScoreDisplay.js';
import '../css/App.css';

class StatsDisplay extends Component {
  render() {
    return (
      <div className="stats-display">
        <span className="highscore">
          <HighScoreDisplay
            scorecard={this.props.scorecard}
          />
        </span>
        <span className="watchface">
          <StopwatchDisplay
            secondsElapsed={this.props.secondsElapsed}
          />
        </span>
        <span className="average-score">
          <AverageScoreDisplay
            scorecard={this.props.scorecard}
          />
        </span>
      </div>
    );
  }
}

export default StatsDisplay;
