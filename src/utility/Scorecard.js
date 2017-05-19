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
  }
}

export default Scorecard;
