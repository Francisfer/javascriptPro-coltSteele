"use strict";

/* 

--> Now we are going to include some of the fancier functional programming features that we've talked about.

  -> This is a complete overkill. To see the benefits of functional programming, things like currying, composition and partial application make sense in large applications where we can reuse and share functionality.

  -> This is just a tiny demo.

  -> We are going to keep a lot of the code, we export the message to its own function.

  -> We create a partial application function, which accepts a function and a set of fixed arguments (the arguments that we want to bake in).

    -> From that function we return another function which accepts the remaining arguments and calls the fn with the baked arguments and the remaining arguments.


  -> Next we add a compose function, remember that we use reduce right so that the logic is to execute the last function first.


*/

// New partial

const partial = function (fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
  };
};

// New compose function - since we don't give an initial value for the acc, it defaults to the last function in the array, and the current defaults to the second to last function in the array.

const compose = function (...fns) {
  return fns.reduceRight((lastFn, secondToLastFn) => {
    return function (...args) {
      return lastFn(secondToLastFn(...args));
    };
  });
};

const getRandomRoll = () => Math.floor(Math.random() * 6 + 1);
const checkWin = (roll) => roll === 6;

const displayResult = (element, message) => {
  element.innerText = message;
};

// New, message to its own function.
const createMessage = (roll) => {
  return checkWin(roll)
    ? `You rolled a ${roll}! You Win!!!`
    : `You rolled a ${roll}! Keep Trying!`;
};

const createDiceGame = (rollBtnId, resultDisplayId) => {
  const rollBtn = document.getElementById(rollBtnId);

  // Baking in the element on display result, now it just needs the message, which is passed in through the chain below.
  const showResult = partial(
    displayResult,
    document.getElementById(resultDisplayId)
  );

  // getRandomRoll passes the roll to create message, which passes the message to show result.
  const playGame = compose(getRandomRoll, createMessage, showResult);

  // Now all we need to do is to pass playGame as the callback
  rollBtn.addEventListener("click", playGame);
};

createDiceGame("rollBtn", "result");
