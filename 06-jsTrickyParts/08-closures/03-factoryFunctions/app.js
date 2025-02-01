"use strict";

/* --------------------------------- Factory functions --------------------------------- */

/* 

--> Another use case where closures are common is the creation of factory functions.

  -> Remember that this is a closure because a functions parameters are like variables inside of a function.

*/

function createExponentFunction(exponent) {
  return function (value) {
    return value ** exponent;
  };
}

const square = createExponentFunction(2);
const cube = createExponentFunction(3);

console.log(square(2)); // 4
console.log(square(3)); // 9
console.log(square(4)); // 16
console.log(square(5)); // 25

console.log(cube(2)); // 8

// Another example:

function uniqueIdGenerator(prefix) {
  let id = 0;
  return function () {
    ++id;
    return `${prefix}${id}`;
  };
}

const userIdGenerator = uniqueIdGenerator("user-");

console.log(userIdGenerator()); // user-1
console.log(userIdGenerator()); // user-2
console.log(userIdGenerator()); // user-3
console.log(userIdGenerator()); // user-4

// We can create new ones for different things:

const bookIdGenerator = uniqueIdGenerator("book-");

console.log(bookIdGenerator()); // book-1
