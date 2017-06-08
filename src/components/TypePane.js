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
      <form>
        <FormGroup>
          <FormControl
            autoFocus
            className="type-pane"
            type="text"
            value={this.state.value}
            placeholder="type type type"
            onKeyDown={this.handleKeyDowns.bind(this)}
            onChange={this.handleChange.bind(this)}
            onKeyUp={this.validateAnswer.bind(this)}
          />
        </FormGroup>
      </form>
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
    this.setState({value: textbox.target.value});
  }
  validateAnswer(){
    // Normally, end a 'word' when user adds the space
    if (this.valueCorrect() && ! this.props.wordkeeper.isLastWord){
      this.setState({value: ""});
      this.props.wordCompletionFunction();
    }
    // On the last word, end when the user finishes the word.
    else if (this.valueCorrect() && this.props.wordkeeper.isLastWord){
          this.setState({value: ""});
          this.props.wordCompletionFunction();
    }
  }
  handleKeyDowns(e){
    // Weird bug in react events seems to require preventing default separately.
    if (e.keyCode === 13 || e.keyCode === 27){
      e.preventDefault();
    }
    if (e.keyCode === 13 && ! this.props.started && ! this.props.countingDown){
      this.props.beginTypingFunction();
    }
    if (e.keyCode === 27){
      this.setState({value: ""});
      this.props.resetGameFunction();
    }
    if (e.keyCode === 13 && this.props.finished){
      this.setState({value: ""});
      this.props.resetGameFunction();
    }
  }
  valueCorrect(){
    if (! this.props.wordkeeper.isLastWord){
      return this.state.value === this.props.wordkeeper.words[this.props.wordkeeper.currentWord] + " ";
    }
    else{
      return this.state.value === this.props.wordkeeper.words[this.props.wordkeeper.currentWord];
    }
  }
}

export default TypePane;
