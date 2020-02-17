class GameBoard {
  constructor(boardSize) {
    this.boardSize = boardSize ** 2;
    this.prevIndex = 0;
    this.itemIndex = 0;
  }

  drawBoard() {
    const board = document.getElementsByClassName('board')[0];
    for (let i = 0; i < this.boardSize; i += 1) {
      const itemBoard = document.createElement('div');
      itemBoard.className = 'field';
      itemBoard.id = `field${i}`;
      board.appendChild(itemBoard);
    }
    this.randomImg();
  }

  randomImg() {
    setInterval(() => {
      do {
        this.itemIndex = Math.floor(Math.random() * this.boardSize);
      } while (this.itemIndex === this.prevIndex);

      if (this.prevIndex >= 0) {
        const prevItemField = document.getElementById(`field${this.prevIndex}`);
        prevItemField.innerHTML = '';
      }
      const itemField = document.getElementById(`field${this.itemIndex}`);
      itemField.innerHTML = '<img src = "./goblin.png">';
      this.prevIndex = this.itemIndex;
    }, 1000);
  }
}

const gamesBoard = new GameBoard(4);
gamesBoard.drawBoard();
