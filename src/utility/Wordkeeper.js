class Wordkeeper {
  constructor(){
    this.words = "These are the words".split(" ");
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
}

export default Wordkeeper;
