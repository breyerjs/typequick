import React, { Component } from 'react';
import '../css/App.css';

class RecentScore extends Component {
  render() {
    return(
      <div className="recent-score">
        {this.getScoreText()}
      </div>
    );
  }
  getScoreText(){
    if (this.props.scorecard.getMostRecentScore() !== null
        && this.props.finished){
      return "Score: " + this.props.scorecard.getMostRecentScore() + " wpm";
    }
    return "";
  }
}

export default RecentScore;
