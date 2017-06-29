class Scorecard {
  constructor(){
    this.highScore = null;
    this.numGamesPlayed = 0;
    this.allScores = [];
  }
  addNewScore(timeInSeconds, numWords){
    const timeInMins = timeInSeconds / 60;
    const currentWordsPerMin = Math.floor(numWords / timeInMins);
    this.allScores.push(currentWordsPerMin);

    if (currentWordsPerMin > this.highScore || this.highScore === null){
      this.highScore = currentWordsPerMin;
    }
    this.numGamesPlayed++;
    return this;
  }
  getHighScore(){
    if (this.highScore === null){
      return "None";
    }
    return this.highScore + " wpm";
  }
  getMostRecentScore(){
    if (this.allScores.length === 0) return null;
    return this.allScores[this.allScores.length - 1];
  }
  getAverageScore(){
    if (this.numGamesPlayed === 0) return "None";
    const sum = this.allScores.reduce((total, num) => {return total + num;});
    return (sum / this.numGamesPlayed) + " wpm";
  }
}

export default Scorecard;
