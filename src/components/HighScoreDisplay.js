import React, { Component } from 'react';
import '../css/App.css';

// For this exact one see: https://codepen.io/seoh/pen/PPZYQy

class HighScoreDisplay extends Component {
  render() {
    return (
      <div className="highscore">
        High Score: {this.props.scorecard.displayHighScore()}
        <br />
        Games Played: {this.props.scorecard.numGamesPlayed}
      </div>
    );
  }
}

export default HighScoreDisplay;
