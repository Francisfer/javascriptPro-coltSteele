"use strict";

/* --------------------------------- Closures --------------------------------- */

/* 

--> One of the benefits of closures is that they allow us to create what are, basically, private variables.

  -> As we know, we should not pollute the global namespace unnecessarily.

  -> Also, like this, we cannot access count directly.

  -> Besides that, by using closures we can return objects with functionality towards a variable that does not exist in the global scope.

  -> Notice the post increment, like that, the first value of count when we call increment is going to be zero.

    -> Because it first reads and returns the value and only after increments it.

    -> If we wanted to increment to one at the first call, we would pre increment.

*/

function createCounter() {
  let count = 0;

  return {
    increment() {
      return count++;
    },
    decrement() {
      return count--;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 4

// We could do the same using an iife, since we only want to make one counter.

// const counterIIFE = (function () {
//   let count = 0;

//   return {
//     increment() {
//       return count++;
//     },
//     decrement() {
//       return count--;
//     },
//     getCount() {
//       return count;
//     },
//   };
// })

// Like this, the counter is ready to go. The format does not let me save it and this would be rare because we might need another counter.

// counterIIFE.increment();
// console.log(counterIIFE.getCount());
