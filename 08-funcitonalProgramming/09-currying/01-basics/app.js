"use strict";

/* --------------------------------- Currying --------------------------------- */

/* 

--> The final functional programming concept is currying.

  -> Currying is a more advanced topic.

  -> The idea of currying is having a function that takes one argument at a time and returns a new function expecting the next argument. And that function can return a function that expects the next argument.

  -> This means that a curried function can be called wit any number of arguments.

    -> If we call it with fewer arguments that it takes, it returns a "smaller" partial, which we can then call with the remaining arguments.

    -> If we had a function that takes a, b, c as arguments - f(a,b,c) 

    -> The curried version of this function would be callable like this: f(a)(b)(c)

    -> This is like three different functions chained together.


--> That is the idea of currying, to take a function that receives three arguments and turn it into a function that takes one argument, but itself, that function will call a function that takes one argument and call another function that takes one argument.

  -> The core concept is just evaluating functions that have multiple arguments and decomposing them into a sequence of functions that take a single argument.

  -> So, instead of taking all arguments at once, we are going to write a function that takes the first one and returns a new function.

  -> This returned function takes the second argument, which returns another function that takes the third argument.

  -> So on and so forth until all arguments are completed.

*/

function add(a, b, c) {
  return a + b + c;
}

// curried version:

function addCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// We can't call it like this:

// addCurried(1, 2, 3);

console.log(addCurried(1));
//  ƒ (b) {
//  return function (c) {
//    return a + b + c;
//  };
// }

console.log(addCurried(1)(2));

// ƒ (c) {
//   return a + b + c;
// }

console.log(addCurried(1)(2)(3)); // 6
