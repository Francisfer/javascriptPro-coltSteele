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

/* 

Bank Account Exercise
Write a function called createAccount that accepts two arguments:

A string for a PIN code

A number for an initial deposit amount

The function should return an object with four methods (make sure to name these methods exactly as specified below, including uppercase and lowercase letters):

1. checkBalance method (it should  take one parameter, the PIN):

• If the provided PIN is invalid, return the string:
"Invalid PIN."

• If the correct PIN is provided, return the current balance as a number value directly.

2. deposit method (it should take two parameters, the PIN and the deposit amount):

• If the provided PIN is invalid, return the string:
"Invalid PIN."

• If the correct PIN is provided, increment the account balance by the specified deposit amount and return the string:



Here is the same line in text format, so you can easily copy it and adapt it to your code:

"Successfully deposited $<amount>. Current balance: $<new balance>."
Note: Replace <amount> with the actual amount and <new balance> with the new balance after the transaction (do not include the angle brackets < and > around the values in the actual string output).

3. withdraw method (it should take two parameters, the PIN and the withdrawal amount):

• If the provided PIN is invalid, return the string:
"Invalid PIN."

• If the correct PIN is provided, but the withdrawal amount exceeds the current balance, return the string:



Here is the same line in text format, so you can easily copy it and adapt it to your code:

"Withdrawal amount exceeds account balance. Transaction cancelled."
• If the correct PIN is provided and the withdrawal amount does not exceed the current balance (i.e., there are enough funds on the balance), decrement the account balance by the withdrawal amount and return the string:



Here is the same line in text format, so you can easily copy it and adapt it to your code:

"Successfully withdrew $<amount>. Current balance: $<new balance>."
Note: Replace <amount> with the actual amount and <new balance> with the new balance after the transaction (do not include the angle brackets < and > around the values in the actual string output).

4. changePin method (it should take two parameters, the old PIN and the new PIN):

• If the old PIN is invalid, return the string:
"Invalid PIN."

• If the correct old PIN is provided, change the PIN to the new PIN and return the string:
"PIN successfully changed!"

Important note: Ensure the returned string values match the exact structure shown in the examples below for all scenarios, including the exact content, uppercase and lowercase letters, punctuation, and spacing.

Examples:

let account = createAccount("1234", 100);
 
console.log(account.checkBalance("oops")); 
// "Invalid PIN."
 
console.log(account.checkBalance("1234")); 
// 100
 
console.log(account.deposit("1234", 250)); 
// "Successfully deposited $250. Current balance: $350."
 
console.log(account.withdraw("1234", 300)); 
// "Successfully withdrew $300. Current balance: $50."
 
console.log(account.withdraw("1234", 100)); 
// "Withdrawal amount exceeds account balance. Transaction cancelled."
 
console.log(account.changePin("1234", "5678")); 
// "PIN successfully changed!"
Further instructions:

Define the createAccount function as specified.

Ensure the methods (checkBalance, deposit, withdraw, changePin) handle both valid and invalid PIN scenarios correctly.

Follow the example usage to match the expected output format precisely.

Test your function thoroughly to ensure all scenarios are covered precisely according to the instructions above.
*/

function createAccount(str, nr) {
  let pin = str;
  let currentBalance = nr;

  const isPinValid = (code) => code === pin;

  return {
    checkBalance(code) {
      return isPinValid(code) ? currentBalance : "Invalid PIN.";
    },

    deposit(code, depositAmount) {
      if (!isPinValid(code)) return "Invalid PIN.";

      currentBalance += depositAmount;
      return `Successfully deposited ${depositAmount}. Current balance: $${currentBalance}.`;
    },

    withdraw(code, withdrawalAmount) {
      if (!isPinValid(code)) return "Invalid PIN.";

      if (withdrawalAmount > currentBalance)
        return `Withdrawal amount exceeds account balance. Transaction cancelled.`;

      currentBalance -= withdrawalAmount;
      return `Successfully withdrew ${withdrawalAmount}. Current balance: $${currentBalance}.`;
    },

    changePin(oldCode, newCode) {
      if (!isPinValid(oldCode)) return "Invalid PIN.";

      pin = newCode;
      return "PIN successfully changed!";
    },
  };
}

let account = createAccount("1234", 100);

console.log(account.checkBalance("oops"));
// "Invalid PIN."

console.log(account.checkBalance("1234"));
// 100

console.log(account.deposit("1234", 250));
// "Successfully deposited $250. Current balance: $350."

console.log(account.withdraw("1234", 300));
// "Successfully withdrew $300. Current balance: $50."

console.log(account.withdraw("1234", 100));
// "Withdrawal amount exceeds account balance. Transaction cancelled."

console.log(account.changePin("1234", "5678"));
// "PIN successfully changed!"

console.log(" ------------- Last one ------------- ");

function specialAdd(parameters) {
  if (!parameters) return 0;
  let args = parameters;

  return function inner(num) {
    if (!num) return args;
    args += num;
    return inner;
  };
}

function solution(number) {
  if (number <= 3) return 0;

  const numbersArr = Array.from({ length: number }, (_, i) => i + 1);

  const sum3 = numbersArr
    .filter((current) => current * 3 < number)
    .map((current) => current * 3);

  const sum5 = numbersArr
    .filter((current) => current * 5 < number)
    .map((current) => current * 5);

  const final = Array.from(new Set([...sum3, ...sum5])).reduce(
    (acc, current) => (acc += current)
  );

  return final;
}

solution(20);
