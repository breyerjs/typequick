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
    };
    this.incrementer = null;
  }
  render() {
    return (
      <div className="body-layout">
        <ViewPane
          wordkeeper={this.state.wordkeeper} />
        <TypePane
          wordkeeper={this.state.wordkeeper}
          wordCompletionFunction={this.handleWordCompletion.bind(this)}
          beginTypingFunction={this.beginTyping.bind(this)}
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
        scorecard: this.state.scorecard.addNewScore(this.state.secondsElapsed)});
      console.log(this.state.scorecard.displayHighScore());
      clearInterval(this.incrementer);
      this.resetGame();
    }
  }
  beginTyping(){
    this.setState({started: true});
    this.incrementer = setInterval( () =>
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
      wordkeeper: this.state.wordkeeper.newGame()
    });
  }
}

export default BodyLayout;
