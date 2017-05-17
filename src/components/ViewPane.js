import React, { Component } from 'react';
import '../css/App.css';

class ViewPane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: 0
    };
  }
  render(){
    return(
      <div className="view-pane">
        <div className="view-pane-words">
          {this.props.wordList.map( (word, index) => {
            if(index === this.props.currentWord){
              return (
                <span key={index} className="currentWord"> {word + " "} </span>
              );
            }
            else{
              return(
                <span key={index}>{word + " "}</span>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default ViewPane;
