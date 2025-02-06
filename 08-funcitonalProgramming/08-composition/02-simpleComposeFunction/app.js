"use strict";

/* --------------------------------- Composition --------------------------------- */

/* 

--> Let's write a very simple compose function.

  -> It expects two functions, returns a new function that calls the first function with a value and passes the result to the second function.

  -> We can think of it as the mathematical expression f(g(x))
*/

function compose(fn1, fn2) {
  return function (value) {
    return fn1(fn2(value));
  };
}

// So if we have these two functions,

function repeatTwice(str) {
  return str.repeat(2);
}

function upperCase(str) {
  return str.toUpperCase();
}

console.log(repeatTwice("lol")); // lollol
console.log(upperCase("lol")); // LOL

// We can use the compose function to do both tasks in one go. Remember that is returns a function which calls fn2 with an argument, and the result is used to call fn1.

const UpperCaseAndRepeat = compose(repeatTwice, upperCase);

UpperCaseAndRepeat("Francisco"); // 'FRANCISCOFRANCISCO'

// If we have another two functions, we use the same functionality by composing together.

// Always pay attention to the formula, although we call compose with square and double, we are actually doubling first and then square.

const square = (a) => a * a;

const double = (a) => a * 2;

const doubleAndSquare = compose(square, double);

doubleAndSquare(2);
