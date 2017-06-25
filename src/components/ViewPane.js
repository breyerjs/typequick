import React, { Component } from 'react';
import '../css/App.css';

class ViewPane extends Component {

  render(){
    return(
      <div className="view-pane">
        <div className="view-pane-words">
          {this.renderWords()}
        </div>
        <div className="view-pane-author">{this.props.wordkeeper.author}</div>
      </div>
    );
  }
  renderWords(){
    var beforeCurrentWordText = "";
    var currentWordText = "";
    var afterCurrentWordText = "";

    beforeCurrentWordText = <span key={0}>{this.props.wordkeeper.words.slice(0, this.props.wordkeeper.currentWord).join(" ")}</span>;

    currentWordText = this.props.wordkeeper.isFinished ?
      "" :
      this.renderCurrentWord();


    afterCurrentWordText = <span key={2}> {this.props.wordkeeper.words.slice(this.props.wordkeeper.currentWord+1).join(" ").trim()}</span>;

    return [beforeCurrentWordText, currentWordText, afterCurrentWordText];
  }

  renderCurrentWord(){
    if(this.props.correctSoFar){
      return(<span key={1} className="current-word-correct"> {this.props.wordkeeper.words[this.props.wordkeeper.currentWord] + " "}</span>);
    }
    else{
      return(<span key={1} className="current-word-incorrect"> {this.props.wordkeeper.words[this.props.wordkeeper.currentWord] + " "}</span>);    }
  }
}

export default ViewPane;
