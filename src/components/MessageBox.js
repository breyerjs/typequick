import React, { Component } from 'react';
import '../css/App.css';

class MessageBox extends Component {
  render() {
    return(
      <div className="message-box">
        {this.getMessageText()}
      </div>
    );
  }
  getMessageText(){
    if (this.props.started && ! this.props.countingDown && ! this.props.finished){
      return"Esc to skip";
    }
    else if (this.props.started && ! this.props.countingDown && this.props.finished){
      return "Speed: " + this.props.mostRecentScore + "wpm. Enter to start a new game";
    }
  }
}

export default MessageBox;
