export default class Board {
  constructor(size = 4) {
    this.size = size;
    this.element = document.createElement("div");
    this.element.classList.add("board");
    this.ArrayCells = [];
    this.numberCells = this.size ** 2;
  }

  createBoard() {
    this.element.innerHTML = "";

    for (let i = 0; i < this.numberCells; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style["aspect-ratio"] = "1/1";
      cell.dataset["id"] = i;
      this.ArrayCells.push(cell);
      this.element.append(cell);
    }

    this.element.style["grid-template-columns"] =
      `repeat(${this.size}, minmax(100px, 120px))`;
  }

  getRandomCell() {
    const index = Math.floor(Math.random() * this.numberCells);
    return this.ArrayCells[index];
  }

  opacityBoard() {
    this.element.style["opacity"] = 0;
  }
}
