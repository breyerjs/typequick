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
            onKeyDown={this.preventFormEnter}
            onChange={this.handleChange.bind(this)}
            onKeyUp={this.validateAnswer.bind(this)}
          />
        </FormGroup>
      </form>
    );
  }
  handleChange(textbox){
    if(! this.props.started){
      this.props.beginTypingFunction();
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
  preventFormEnter(e){
    if (e.keyCode === 13){
      e.preventDefault();
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
