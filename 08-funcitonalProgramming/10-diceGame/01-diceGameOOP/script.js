class DiceGame {
  constructor(rollBtnId, resultDisplayId, userName) {
    this.rollBtn = document.getElementById(rollBtnId);
    this.resultDisplay = document.getElementById(resultDisplayId);
    this.userName = userName;

    this.rollBtn.addEventListener("click", this.rollDice.bind(this));
  }

  getRandomRoll() {
    return Math.floor(Math.random() * 6 + 1);
  }

  checkWin(roll) {
    return roll === 6;
  }

  rollDice() {
    const roll = this.getRandomRoll();
    console.log(roll);

    if (this.checkWin(roll)) {
      this.resultDisplay.textContent = `You rolled a ${roll} ${this.userName}. You win!!!`;
    } else {
      this.resultDisplay.textContent = `You rolled a ${roll} ${this.userName}. Try again!`;
    }
  }
}

let newGame = new DiceGame("rollBtn", "result", "Francis");
