"use strict";
/* --------------------------------- Arrow functions --------------------------------- */

/* 

--> When it comes to the "this" keyword, arrow functions are distinct from regular functions.


--> Arrow functions don't make their own context ("this"), they don't get a new value for the keyword.

  -> In other words, we will not get a new value for the "this" keyword if we use an arrow function.

  -> They inherit the context from the surrounding environment.

*/

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  superGreet() {
    console.log(`#1: I am ${this.firstName}`);

    // Does not work - "this" points to window
    setTimeout(function () {
      console.log(this); // window {}

      console.log(`#2: I am ${this.firstName}`); // I am undefined
    }, 1000);

    setTimeout(() => {
      console.log(`#3: I am ${this.firstName}`); // I am Kitty
    }, 1000);
  }
}

const cat = new Cat("Kitty");

// cat.superGreet();

// If we write it in the global scope, the surrounding environment is the window object.

setTimeout(() => {
  console.log(`#3: I am: `, this); // I am: window {}
}, 4000);

class Timer {
  constructor() {
    this.tick = 0;
    this.timerId = null;
  }

  start() {
    this.timerId = setInterval(() => {
      console.log(this.tick++);
      if (this.tick > 4) this.stop();
    }, 1000);
  }

  stop() {
    clearInterval(this.timerId);
    console.log("Timer stopped");
  }
}
const timer = new Timer();
// timer.start();
