"use strict";

/* --------------------------------- Composition --------------------------------- */

/* 

--> The next building block of functional programming is called composition.

  -> Function composition is the idea of combining multiple functions together, in order to build a more complex function.

  -> Function composition is a mechanism of combining multiple functions to build a more complicated one.

  -> Essentially, we can build a pipeline where one function's returned value is passed to the second function, so on and so forth.

  -> We can chain things together in a really usable way where the result of each function is passed to the next function in the chain.

  -> In math, this can be expressed as f(g(x)).

*/

// A very simple example:

const add = (a, b) => a + b;

const square = (a) => a ** 2;

add(10, square(5)); // 35

square(add(5, 5)); // 100

// We can take it a bit further and create another function:

const addAndSquare = (a, b) => square(add(a, b));

console.log(addAndSquare(5, 5)); // 100

/* --------------------------------- Important --------------------------------- */

/* 

--> When composing functions, if often best not to use direct methods like str.toLowerCase().

  -> Instead, we can create independent functions with a minimal number of parameters.

  -> This might seem kind of absurd, to have a function named lowerCaseString that returns a string to lower case, however, this makes it easier to compose them together.

  -> By making each of these named functions sort of wrapped around a method, we can compose them easily.

*/

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function joinWithDash(arr) {
  return arr.join("-");
}

// They are easier to compose like this, however, next we will learn another way of composing them in a better way, while doing the same things behind the scenes.

console.log(joinWithDash(splitWords(lowerCaseString("My Favorite Function!")))); // my-favorite-function!
