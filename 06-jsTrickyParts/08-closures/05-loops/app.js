"use strict";

/* --------------------------------- Loops --------------------------------- */

/* 

--> So far, we have been talking about closures as functions inside of functions that have access to the outer functions variables.


--> But what if we are working with loops or code blocks that are not necessarily functions?  


--> Let's start with settimeout().

  -> We already know that it takes a callback and, as a second parameter the number of milliseconds.

  -> Next, we create a loop that sets five different timeouts, which print times up, all staggered by a second.



*/

// With var it wouldn't work because it is not block scoped, so everything is global, the loop wouldn't create its own scope.

// What matters is that, with let, i is block scoped and, settimeout, which is a function, has access to the i variable from its outer scope.

// That is why it is able to update it each time that is called. Don't forget that this is a loop, so the settimeout is called, goes to the callstack, finishes the first iteration, pops out, gets called again and still has access to the current value of i.

// for (let i = 1; i < 6; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

/* --------------------------------- Exercises from lectures --------------------------------- */

/* 

Guessing Game Exercise
Write a function called `guessingGame` which returns a function that allows you

to guess a random whole number between 0 and 99. Every time you create a new

game, it should select a *new* random number, and keep it secret from the

player.



Once the game has started, you can guess the number. The game should tell you

whether your guess is too high, too low, or correct.



After a correct guess, the game ends.



  let game = guessingGame();
  game(50); // "50 is too low!"
  game(90); // "90 is too high!"
  game(70); // "You win! You found 70 in 3 guesses."
  game(70); // "The game is over, you already won!"

*/

function guessingGame(min = 0, max = 99) {
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  let guesses = 0;
  let playing = true;
  return function (guess) {
    if (playing) {
      if (guess < randomNum) {
        guesses += 1;
        return `${guess} is too low!`;
      }

      if (guess > randomNum) {
        guesses += 1;
        return `${guess} is too high!`;
      }

      if (guess === randomNum) {
        guesses += 1;
        playing = false;
        return `You win! You found ${randomNum} in ${guesses} ${
          guesses > 1 ? "guesses" : "guess"
        }.`;
      }
    } else return "The game is over, you already won!";
  };
}

let game = guessingGame();
