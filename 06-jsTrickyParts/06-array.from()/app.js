"use strict";

/* --------------------------------- Array.from() --------------------------------- */

/* 

--> This method is useful in a lot of situations and it does much more than converting a string to an array.

  -> It helps us to generate new arrays from array like structures. 
*/

const arrayLike = {
  0: "Hello",
  1: "World",
  2: "!",
  length: 3, // 👈 This makes it array-like
};

console.log(arrayLike);
// { 0: 'Hello', 1: 'World', 2: '!', length: 3 }
