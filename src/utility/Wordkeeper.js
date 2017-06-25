import Passages from '../data/passages.json';

class Wordkeeper {
  constructor(){
    this.words = this.getNewText();
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
    this.words = this.getNewText();
    this.currentWord = 0;
    this.isLastWord = false;
    this.isFinished = false;
    this.currentWordString = this.words[this.currentWord];
    return this;
  }
  getNewText(){
    var newText = null;
    while (newText === null || JSON.stringify(newText.quote.split(" ")) === JSON.stringify(this.words)){
      newText = Passages.quotes[Math.floor(Math.random()*Passages.quotes.length)];
    }
    this.author = newText.author;
    return newText.quote.split(" ");
  }
}

export default Wordkeeper;
