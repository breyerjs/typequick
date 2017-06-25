import React, { Component } from 'react';
import '../css/App.css';

class HighScoreDisplay extends Component {
  render() {
    return (
      <div>
        <span className="highscore">
          High Score: {this.props.scorecard.displayHighScore()}
        </span>
        <span className="average-score">
          Average Score: {this.props.scorecard.getAverageScore()}
        </span>
      </div>
    );
  }
}

export default HighScoreDisplay;
