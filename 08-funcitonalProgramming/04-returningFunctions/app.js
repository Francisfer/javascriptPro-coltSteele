"use strict";

/* --------------------------------- Returning Functions --------------------------------- */

/* 

--> Higher order functions also allow us to return other functions as values from an existing function.

  -> Like this, we can define higher order function as functions that receive another function as an argument, return a function or does both.

  -> However, the term higher order function is more used to describe functions that return another function.

*/

// This is a higher order function although it does not return any function yet, but receives a function as an argument.

function doTwice(fn) {
  fn();
  fn();
}

doTwice(function () {
  console.log("Hello There!"); // Hello There! - logged twice
});

// Example of a higher order function that returns another function.
// This is kind of a factory function. It creates a closure for factor.

function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

double(10); // 20
triple(10); // 30

console.log(double.prototype); // [[Scopes]]: Scopes[3] 0: Closure (multiplyBy) {factor: 2}
