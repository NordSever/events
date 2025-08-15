export default class Score {
  constructor(missMax = 5, seriesEnabled = false) {
    this.element = document.createElement("div");
    this.seriesEnabled = seriesEnabled;
    this.numberSeries = 0;
    this.score = 0;

    this.missNumber = 0;
    this.missMax = missMax;

    this.displayScore();
  }

  increment() {
    if (this.seriesEnabled === true) {
      if (this.numberSeries === 3) {
        this.numberSeries = 0;
      }

      this.numberSeries++;
      this.score += this.numberSeries;
    } else {
      this.score++;
    }

    this.displayScore();
  }

  miss() {
    this.missNumber++;
    this.numberSeries = 0;

    this.displayScore();
  }

  displayScore() {
    this.element.textContent = `Очки: ${this.score}, Промахи: ${this.missNumber} / ${this.missMax}`;
  }
}
