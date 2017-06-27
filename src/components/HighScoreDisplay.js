import React, { Component } from 'react';
import '../css/App.css';
import HighScoreImage from '../images/Medal.png';

class HisghScoreDisplay extends Component {
  render() {
    return(
      <div className="stat-item">
        {"High Score"}
        <br />
        <img src={HighScoreImage} alt={"image"} />
        <br />
        {this.props.scorecard.getHighScore()}
      </div>
    );
  }
}

export default HisghScoreDisplay;
