import firstGoblin from "../img/first-goblin.png";
import secondGoblin from "../img/second-goblin.png";
import thirdGoblin from "../img/third-goblin.png";

export default class MovingImg {
  constructor() {
    this.element = document.createElement("img");
    this.element.classList.add("movImg");
    this.element.src = firstGoblin;
    this.isVisible = false;
  }

  showImg(cell) {
    cell.append(this.element);
    this.isVisible = true;
  }

  hide() {
    this.element.closest(".cell").innerHTML = "";
    this.isVisible = false;
  }

  nextSeriesImg(numberSeries = 0) {
    const images = {
      0: firstGoblin,
      1: secondGoblin,
      2: thirdGoblin,
    };
    this.element.src = images[numberSeries] || firstGoblin;
  }
}
