import Board from "./board";
import MovingImg from "./moving-img";
import Score from "./score";

export default class Game {
  constructor(missMax = 5, seriesEnabled = false) {
    this.missMax = missMax;
    this.seriesEnabled = seriesEnabled;

    this.board = new Board();
    this.score = new Score(this.missMax, this.seriesEnabled);
    this.goblinsImg = new MovingImg();

    this.duration = 1000;

    this.interval = null;
    this.currentCell = null;
    this.flagOfClick = null;
  }

  init() {
    let container = document.getElementById("container");
    this.board.createBoard();

    container.append(this.score.element, this.board.element);

    this.click();
    this.start();
  }

  click() {
    this.board.element.addEventListener("click", (eve) => {
      if (eve.target === this.goblinsImg.element) {
        this.flagOfClick = true;
        this.score.increment();
        this.goblinsImg.nextSeriesImg(this.score.numberSeries);
        this.goblinsImg.hide();
      } else if (this.goblinsImg.isVisible) {
        this.flagOfClick = true;
        this.score.miss();
        this.goblinsImg.nextSeriesImg(this.score.numberSeries);
        this.goblinsImg.hide();
      }
    });
  }

  start() {
    this.interval = setInterval(() => {
      let newCell;

      do {
        newCell = this.board.getRandomCell();
      } while (this.currentCell === newCell);

      this.currentCell = newCell;

      this.goblinsImg.showImg(this.currentCell);

      if (this.flagOfClick === false) {
        this.score.miss();
        this.goblinsImg.nextSeriesImg(this.score.numberSeries);
      }

      if (this.score.missNumber >= this.score.missMax) {
        this.end();
      }

      this.flagOfClick = false;
    }, this.duration);
  }

  end() {
    clearInterval(this.interval);
    this.goblinsImg.hide();
    setTimeout(() => alert(`Игра окончена. Очки: ${this.score.score}`), 0);
  }
}
