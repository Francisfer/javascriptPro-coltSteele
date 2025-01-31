"use strict";

/* --------------------------------- Generator Functions --------------------------------- */

/* 

--> These functions can pause their executions and then resume their execution.

  -> They allow us to produce a sequence of values on demand.

  -> We use the function keyword followed by * and, within the function body we use the keyword yield instead of return.


--> In the example we want the next even after ten, but not like in a loop, where we get them all at once.

  -> It allows us to get them evens every time we call next().

*/

// This is a generator that returns an infinite series of even numbers. But it doesn't return them all at once.

console.log(" --------------- Infinite generator function --------------- ");

function* evens(n) {
  while (true) {
    yield n;
    n += 2;
  }
}

evens(10); // evens {<suspended>} // generator object

const evenGen = evens(10);

console.log(evenGen.next()); // {value: 10, done: false}
console.log(evenGen.next()); // {value: 12, done: false}
console.log(evenGen.next()); // {value: 14, done: false}
console.log(evenGen.next()); // {value: 16, done: false}
console.log(evenGen.next()); // {value: 18, done: false}
console.log(evenGen.next()); // {value: 20, done: false}
console.log(evenGen.next()); // {value: 22, done: false}

console.log(" --------------- Finite generator function --------------- ");

function* myCats() {
  yield "Blue";
  yield "Kitty";
  yield "Cream";
  yield "Credence";
}

const catGenerator = myCats();
console.log(catGenerator.next()); // {value: 'Blue', done: false}
console.log(catGenerator.next()); // {value: 'Kitty', done: false}
console.log(catGenerator.next()); // {value: 'Cream', done: false}
console.log(catGenerator.next()); // {value: 'Credence', done: false}
console.log(catGenerator.next()); // {value: undefined, done: true} -> we exhausted this generator.

console.log(" --------------- Fibonacci generator function --------------- ");

function* fibonacci() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci();

console.log(fibGen.next().value); // 0
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5

// for (let i = 0; i < 20; i++) {
//   console.log(fibGen.next().value);
// }

let arr = [];

let a = 0;
let b = 1;

for (let i = 0; i < 20; i++) {
  arr.push(a);
  [a, b] = [b, a + b];
}
console.log(arr);
