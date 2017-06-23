import React, { Component } from 'react';
import '../css/App.css';

// For this exact one see: https://codepen.io/seoh/pen/PPZYQy

class HighScoreDisplay extends Component {
  render() {
    return (
      <div>
        <span className="highscore">
          High Score: {this.props.scorecard.displayHighScore()}
        </span>
        <span className="games-played">
          Games Played: {this.props.scorecard.numGamesPlayed}
        </span>
      </div>
    );
  }
}

export default HighScoreDisplay;
