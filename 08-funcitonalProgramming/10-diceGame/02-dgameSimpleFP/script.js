"use strict";

/* 

--> Now we are going to write a functional programming version of the dice game.


*/

const getRandomRoll = () => Math.floor(Math.random() * 6 + 1);
const checkWin = (roll) => roll === 6;

const rollDiceAndDisplayResult = (resultDisplay) => {
  const roll = getRandomRoll();
  console.log(resultDisplay);
  resultDisplay.textContent = `You rolled a ${roll}! ${
    roll === 6 ? "You Win!!!" : "Keep trying!"
  }`;
};

const createDiceGame = (rollBtnId, resultDisplayId) => {
  const rollBtn = document.getElementById(rollBtnId);
  const resultDisplay = document.getElementById(resultDisplayId);
  rollBtn.addEventListener(
    "click",
    rollDiceAndDisplayResult.bind(null, resultDisplay)
  );
};

createDiceGame("rollBtn", "result");
