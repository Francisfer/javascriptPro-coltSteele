"use strict";

/* --------------------------------- First Class Functions --------------------------------- */

/* 

--> One of the concepts that we need to understand if we want to get somewhere with functional programming is first class functions.

  -> In javascript, functions are first class objects or first class citizens.

  -> This just means that they can be treated like any other value.

  -> So we can store functions into variables, pass a function as an argument or if we return functions from other functions.

  -> This is the foundation of functional programming.

*/

// Functions if variables we already saw, here are functions in an array (not a good approach):

const functions = [
  function (person) {
    console.log(`Hello there ${person}!`);
  },
  function (person) {
    console.log(`I hate you ${person}!`);
  },
];
functions[0]("Joe"); // Hello there Joe!

functions[1]("Mary"); // I hate you Mary!

// Functions as arguments, the callback from the methods are just functions passed in as arguments.

[1, 2, 3].map((nr) => nr * 3); // [3, 6, 9]

// Functions expect functions as parameters (same as functions that are called with functions as arguments):

function greet(person) {
  console.log(`Hello there ${person}!`);
}

function hate(person) {
  console.log(`I hate you ${person}!`);
}

function callWithBlue(fn) {
  fn("Blue");
}

callWithBlue(greet); // Hello there Blue!

callWithBlue(hate); // I hate you Blue!

callWithBlue((color) => console.log(`${color} is the best color!`));
