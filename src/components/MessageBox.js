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
    if (! this.props.started && ! this.props.countingDown){
      return "Enter to begin game";
    }
    else if (this.props.countingDown){
      return this.props.countdown;
    }
    else if (this.props.started && ! this.props.countingDown){
      return"Esc to skip";
    }
    else{
      return "Enter to start a new game";
    }
  }
}

export default MessageBox;
