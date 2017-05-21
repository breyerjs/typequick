class Wordkeeper {
  constructor(){
    this.words = this.getText();
    this.currentWord = 0;
    this.isLastWord = false;
    this.isFinished = false;
    this.currentWordString = this.words[this.currentWord];
  }
  nextWord(){
    this.currentWord = this.currentWord+1;
    if(this.currentWord === this.words.length - 1){
      this.isLastWord = true;
    }
    else if (this.currentWord === this.words.length){
      this.isFinished = true;
    }
    this.currentWordString = this.words[this.currentWord];
    return this;
  }
  newGame(){
    this.words = this.getText();
    this.currentWord = 0;
    this.isLastWord = false;
    this.isFinished = false;
    this.currentWordString = this.words[this.currentWord];
    return this;
  }
  getText(){
    return "These are the words".split(" ");
  }
}

export default Wordkeeper;
