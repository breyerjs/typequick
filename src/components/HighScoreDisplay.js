import React, { Component } from 'react';
import '../css/App.css';

// For this exact one see: https://codepen.io/seoh/pen/PPZYQy

class HighScoreDisplay extends Component {
  render() {
    return (
      <div>
        <div className="highscore">
          High Score: {this.props.scorecard.displayHighScore()}
        </div>
        <div className="games-played">
          Games Played: {this.props.scorecard.numGamesPlayed}
        </div>
      </div>
    );
  }
}

export default HighScoreDisplay;
