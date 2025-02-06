"use strict";

/* --------------------------------- Currying --------------------------------- */

/* 

--> In the previous lecture we've seen a very simple version of currying where the curried function always had to be called with three arguments > a, b and c.


--> The fancier version of currying is a technique where we can take a function that expects three arguments and:

  -> Create a curried version of that function that can be called with any number of arguments.

  -> If we call it with all of the arguments that it wants, it returns the correct value (a + b + c).

  -> If we only provide one argument (a), it will partially apply that argument. Returning a new function that expects b and c.

  -> If we provide two arguments (a, b), it partially applies those two arguments. Returning a function that expects c.


--> To write such a function is tricky and we should use a library.

  -> Notice how we read the length of the arguments of add.
*/

function add(a, b, c) {
  return a + b + c;
}

// First curried version:

function addCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Second curried version - We want to call this function with add (a function that takes three args), and return a curried version of add.

function curry(fn) {
  return function curried(...args) {
    // 1. If the number of arguments that have been passed into the curried function are >= to the arguments that the original function wants.

    // If true, we call add. He uses apply to preserve the context (useless in this case because we don't use context in add(), however it does not hurt and must be a good habit because methods).
    if (args.length >= fn.length) {
      return add.apply(this, args); // We don't destructure because we are using apply, not call.
    } else {
      // Here we return the partial application. We return a function that receives an arbitrary number of args and concatenate them with the ones that where provided previously.
      return function (...args2) {
        return curried.apply(this, args.concat(args2)); // recursion - recursively accumulate args.
      };
    }
  };
}

const curriedAdd = curry(add);

// If we pass three:

console.log(curriedAdd(1, 2, 3)); // 6

console.log(curriedAdd(1)); // A function with the first argument baked in.

console.log(curriedAdd(1, 2)); // A function with the first two arguments baked in.

// So this is possible:

const addTwoNumbersToTen = curriedAdd(10);
console.log(addTwoNumbersToTen(5, 5)); // 20

const addOneNumberToHundred = curriedAdd(50, 50);

console.log(addOneNumberToHundred(1)); // 101
