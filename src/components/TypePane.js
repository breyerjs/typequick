import React, { Component } from 'react';
import '../css/App.css';
import {FormGroup, FormControl} from 'react-bootstrap';

class TypePane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div>
      <form>
        <FormGroup>
          <FormControl
            autoFocus
            className="type-pane"
            type="text"
            value={this.state.value}
            placeholder={this.getPlaceHolderText()}
            onKeyDown={this.handleKeyDowns.bind(this)}
            onInput={this.handleChange.bind(this)}
          />
        </FormGroup>
      </form>
      <div className="esc-to-skip">esc to skip this passage</div>
      </div>
    );
  }
  handleChange(textbox){
    if( ! this.props.started
        && ! this.props.countingDown){
      return;
    }
    else if (this.props.countingDown){
      return;
    }
    // this controls behavior that prevents users from moving
    // beyond a space when they have a typo.
    else if (
      ! this.checkCorrectness()
      && this.state.value.includes(" ")
      && textbox.target.value.length >= this.state.value.length) {
      return;
    }
    // using a callback here prevents a race condition when checking the answer
    this.setState({value: textbox.target.value}, () => {
      if (this.wordFinishedCorrectly()){
        this.setState({value: ""});
        this.props.wordCompletionFunction();
      }else{
        this.reportCorectness()
      }
    });

  }
  handleKeyDowns(e){
    // Weird bug in react events seems to require preventing default separately.
    if (e.keyCode === 13 || e.keyCode === 27){
      e.preventDefault();
    }
    if (e.keyCode === 13 && ! this.props.started && ! this.props.countingDown){
      this.props.beginTypingFunction();
    }
    if (e.keyCode === 27 && ! this.props.countingDown){
      this.setState({value: ""});
      this.props.resetGameFunction();
    }
    if (e.keyCode === 13 && this.props.finished){
      this.setState({value: ""});
      this.props.resetGameFunction();
    }
  }
  wordFinishedCorrectly(){
    // Normally, end a 'word' when user adds the space
    if (! this.props.wordkeeper.isLastWord){
      return this.state.value === this.props.wordkeeper.words[this.props.wordkeeper.currentWord] + " ";
    }
    // On the last word, end when the user finishes the word.
    else{
      return this.state.value === this.props.wordkeeper.words[this.props.wordkeeper.currentWord];
    }
  }
  reportCorectness(){
    this.props.reportCorrectnessFunction(this.checkCorrectness());
  }
  checkCorrectness(){
    return (this.props.wordkeeper.currentWordString.startsWith(this.state.value)
    || this.state.value === "");
  }
  getPlaceHolderText(){
    if(this.props.countingDown){
      return this.props.countDownTime;
    }
    else if (! this.props.started){
      return "Press Enter to Start";
    }
    else if (this.props.finished){
      return "Press Enter to Restart"
    }
    else{
      return "Type the Passage"
    }
  }
}

export default TypePane;
