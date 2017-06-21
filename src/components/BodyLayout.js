import React, { Component } from 'react';
import ViewPane from './ViewPane.js';
import TypePane from './TypePane.js';
import StopwatchDisplay from './StopwatchDisplay.js';
import Scorecard from '../utility/Scorecard.js';
import Wordkeeper from '../utility/Wordkeeper.js';
import HighScoreDisplay from './HighScoreDisplay.js';
import MessageBox from './MessageBox.js';
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
      countDownTime: 4,
      countingDown: false
    };
    this.timer = null;
  }
  render() {
    return (
      <div className="body-layout">
        <ViewPane
          wordkeeper={this.state.wordkeeper} />
        <TypePane
          wordkeeper={this.state.wordkeeper}
          started={this.state.started}
          finished={this.state.finished}
          countingDown={this.state.countingDown}
          countDownTime={this.state.countDownTime}
          wordCompletionFunction={this.handleWordCompletion.bind(this)}
          beginTypingFunction={this.beginTyping.bind(this)}
          resetGameFunction={this.resetGame.bind(this)}
          />
        <MessageBox
          countdown={this.state.countDownTime}
          countingDown={this.state.countingDown}
          started={this.state.started}
          finished={this.state.finished}
          mostRecentScore={this.state.scorecard.getMostRecentScore()}
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
    }
  }
  beginTyping(){
    var timeLeft = 4;
    var countdown = setInterval(function() {
      timeLeft--;
      if(timeLeft === 0) {
        this.setState({
          started: true,
          countDownTime: timeLeft,
          countingDown: false});
          clearInterval(countdown);
          this.startTimer();
      } else {
          this.setState({
            countDownTime: timeLeft,
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
      countDownTime: 4,
      countingDown: false
    });
    clearInterval(this.timer);
  }
}

export default BodyLayout;
