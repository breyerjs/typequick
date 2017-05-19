import React, { Component } from 'react';
import ViewPane from './ViewPane.js';
import TypePane from './TypePane.js';
import StopwatchDisplay from './StopwatchDisplay.js';
import Scorecard from '../utility/Scorecard.js';
import Wordkeeper from '../utility/Wordkeeper.js';
import '../css/App.css';

class BodyLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordkeeper: new Wordkeeper(),
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
      </div>
    );
  }
  handleWordCompletion(){
    this.setState({wordkeeper: this.state.wordkeeper.nextWord()});
    if (this.state.wordkeeper.isFinished){
      this.setState({finished: true})
      clearInterval(this.incrementer);
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
}

export default BodyLayout;
