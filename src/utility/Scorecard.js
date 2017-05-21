class Scorecard {
  constructor(){
    this.highScore = null;
    this.numGamesPlayed = 0;
  }
  addNewScore(time){
    if (time > this.highScore){
      this.highScore = time;
    }
    this.numGamesPlayed++;
    return this;
  }
  displayHighScore(){
    if (this.highScore === null){
      return "None";
    }
    return(
      Math.floor(this.highScore / 60) +
        ':' +
      ('0' + this.highScore % 60).slice(-2)
    );
  }
}

export default Scorecard;
