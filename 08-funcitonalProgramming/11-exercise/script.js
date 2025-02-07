"use strict";

function flip(fn) {
  return function (...args) {
    return fn(...args.toReversed());
  };
}

function subtract(a, b) {
  return a - b;
}

subtract(5, 4);

const flippedSubtract = flip(subtract);
console.log(flippedSubtract(3, 10));
