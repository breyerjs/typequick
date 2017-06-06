import React, { Component } from 'react';
import ViewPane from './ViewPane.js';
import TypePane from './TypePane.js';
import StopwatchDisplay from './StopwatchDisplay.js';
import Scorecard from '../utility/Scorecard.js';
import Wordkeeper from '../utility/Wordkeeper.js';
import HighScoreDisplay from './HighScoreDisplay.js';
import '../css/App.css';

class BodyLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordkeeper: new Wordkeeper(),
      scorecard: new Scorecard(),
      started: false,
      finished: false,
      secondsElapsed: 0,
      startCountdown: 3,
      countingDown: false
    };
    this.timer = null;
  }
  render() {
    return (
      <div className="body-layout">
        <div className="start-countdown">
          {this.state.startCountdown}
        </div>
        <ViewPane
          wordkeeper={this.state.wordkeeper} />
        <TypePane
          wordkeeper={this.state.wordkeeper}
          wordCompletionFunction={this.handleWordCompletion.bind(this)}
          beginTypingFunction={this.beginTyping.bind(this)}
          resetGameFunction={this.resetGame.bind(this)}
          countingDown={this.state.countingDown}
          started={this.state.started}
          />
        <StopwatchDisplay
          secondsElapsed={this.state.secondsElapsed}
        />
        <HighScoreDisplay
          scorecard={this.state.scorecard}
        />
      </div>
    );
  }
  handleWordCompletion(){
    this.setState({wordkeeper: this.state.wordkeeper.nextWord()});
    if (this.state.wordkeeper.isFinished){
      this.setState({
        finished: true,
        scorecard: this.state.scorecard.addNewScore(this.state.secondsElapsed, this.state.wordkeeper.words.length)});
      clearInterval(this.timer);
      this.resetGame();
    }
  }
  beginTyping(){
    var timeLeft = 3;
    var countdown = setInterval(function() {
      timeLeft--;
      if(timeLeft === 0) {
        this.setState({
          started: true,
          startCountdown: timeLeft,
          countingDown: false});
          clearInterval(countdown);
          this.startTimer();
      } else {
          this.setState({
            startCountdown: timeLeft,
            countingDown: true});
      }
    }.bind(this), 1000);
  }
  startTimer(){
    clearInterval(this.timer);
    this.timer = setInterval( () =>
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1,
      })
    , 1000);
  }
  resetGame(){
    this.setState({
      started: false,
      finished: false,
      secondsElapsed: 0,
      wordkeeper: this.state.wordkeeper.newGame(),
      startCountdown: 3,
      countingDown: false
    });
    clearInterval(this.timer);
  }
}

export default BodyLayout;
