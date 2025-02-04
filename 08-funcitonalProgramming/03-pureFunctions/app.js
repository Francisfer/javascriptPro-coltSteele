"use strict";

/* --------------------------------- Writing Pure Functions --------------------------------- */

/* 

--> Another concept that we need to understand is pure functions.

  -> Pure functions are fundamental to functional programming.

  -> They allow us to write predictable and simple code.

  -> The concept of pure functions is that they are deterministic for a given input.

    -> A pure function needs to always return the same value for that input, same input gets the same output.

    -> The function should not depend on any mutable state.
    
      -> So, regardless of the application state, regardless of what's happening outside of the function, a pure function's output should solely depend on its input arguments.

    -> Also, pure functions should be side effect free. No mutating external data and no modifying any state.

    -> Side effects may include:

      -> I/O (writing to the console, modifying a mutable object, reassigning a variable, updating something from a different scope).

*/

// Impure function:

let value = 2;

function squareAndUpdateValue(number) {
  // Mutating state
  value = number ** 2;
  return value;
}

squareAndUpdateValue(3);
console.log(value); // 9

// Pure version

function squareNumber(number) {
  return number ** 2;
}

console.log(squareNumber(3)); // 9

// Another example. A function that adds elements to an array.

// Impure version.

const colors = ["red", "green"];

function addToArray(arr, ...value) {
  return arr.push(...value); // Remember that the returned value is the length of the new array (returned by push)
}

addToArray(colors, "blue", 2, null); // ['red', 'green', 'blue', 2, null]

// Pure version, we do not modify the array, we return a copy of it.

function addToArrayPure(arr, ...value) {
  return [...arr, ...value];
}

// Includes the modifications to state that we did previously.
addToArrayPure(colors, "blue", 2, null); // ['red', 'green', 'blue', 2, null, 'blue', 2, null]
