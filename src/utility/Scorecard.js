class Scorecard {
  constructor(){
    this.highScore = null;
    this.numGamesPlayed = 0;
    this.allScores = [];
  }
  addNewScore(timeInSeconds, numWords){
    const timeInMins = timeInSeconds / 60;
    const currentWordsPerMin = numWords / timeInMins;
    this.allScores.push(currentWordsPerMin);

    if (currentWordsPerMin < this.highScore || this.highScore === null){
      this.highScore = currentWordsPerMin;
    }
    this.numGamesPlayed++;
    return this;
  }
  displayHighScore(){
    if (this.highScore === null){
      return "None";
    }
    return Math.floor(this.highScore) + " wpm";
  }
}

export default Scorecard;
