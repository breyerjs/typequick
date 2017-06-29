import React, { Component } from 'react';
import '../css/App.css';
import AvgScoreImage from '../images/Average.png';

class AverageScoreDisplay extends Component {
  render() {
    return(
      <div className="stat-item">
        {"Average Score"}
        <br />
        <img src={AvgScoreImage} alt={"avgscoreimage"} />
        <br />
        {this.props.scorecard.getAverageScore()}
      </div>
    );
  }
}

export default AverageScoreDisplay;
