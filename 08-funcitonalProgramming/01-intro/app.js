"use strict";

/* --------------------------------- Functional Programming --------------------------------- */

/* 

--> This is a topic that a lot of people find intimidating.

  -> It is just another programming paradigm.

  -> It is all about concepts like immutability, writing pure functions, working with first class functions.

  -> One common definition is:

    -> Functional programming is the process of building software by composing pure functions, avoiding shared state, mutable data and side-effects.

    -> It is a declared way of writing code rather than imperative, and application state flows through pure functions.

  
  -> Functional programming helps us avoid things like looping, mutation and shared state, variable declarations and more.

    -> The benefits of functional programming are that it can give us a bit more predictability in our code.

    -> It is easier to test because we are writing a bunch of pure functions.

    -> It is easier to write concurrent code and sometimes easier to debug.



1. Imperative Programming:

  -> Is all about describing how a program operates using statements and code to manipulate a program's state.

  -> If we wanted to sum up the numbers between 1 and 5, most people would write like the example.

  -> The core concept here that we have a piece of state (sum variable) that we are mutating and updating from within a loop.

  -> Some people like to think about imperative programming as focused on describing how a program works and use code to update a piece of state.



2. Declarative Programming:

  -> A functional programming approach does not include a state that we are storing and updating.

  -> We can put the result into a variable, but there is nothing that we are mutating.

  -> In functional programming it is all about focusing on what needs to be solved using, often, mathematical expressions to describe the relationships between data without mutating state

*/

// Imperative Programming

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum); // 15

// Functional Programming

const someSum = Array.from({ length: 5 }, (_, i) => i + 1).reduce(
  (acc, current) => (acc += current),
  0
);

console.log(someSum); // 15

/* 

--> Another example where we have an array and we want to filter out a new array of even numbers.

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Imperative programming

let even = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) even.push(numbers[i]);
}
console.log(even); // [2, 4, 6, 8]

// Functional programming

const evenNumbers = numbers.filter((current) => current % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8]

/* 

--> Another example to find the maximum number in an array of numbers.

*/

const numbers1 = [1, 2, 3, 4, 55, 6, 7, 8, 9];

// Imperative programming

let max = numbers[0];

for (const number of numbers1) {
  if (number > max) max = number;
}

console.log(max);

// Functional programming

const maximum = Math.max(...numbers1);

console.log(maximum);

const anotherWay = numbers1.reduce(
  (acc, current) => (acc > current ? acc : current),
  numbers1[0]
);

console.log(anotherWay);
