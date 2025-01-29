"use strict";
/* --------------------------------- bind() with timers --------------------------------- */

/* 

--> Another common situation where bind() is needed is when working with callbacks for settimeout or set interval.


--> In this example we have a class that acts like a timed printer.

  -> It receives the count (number that we want to print), and the increment of count at each print.

  -> If we instantiate Counter and call start(), we get undefined for this.count and an error for increment amount (not defined.)

    -> This happens because, when we call something that lives on the window object (browser api), like those two timers, and use "this" in the body of the timer function, "this" will point to the window.

      -> Technically, we are doing window.settimeout()

    -> Since count and increment amount are defined inside the class, of course they will not be in the window object.

  -> That is why, if we use the vscode autocomplete, it always write settimeout and setinterval with an arrow function. 

    -> It would work with an arrow function because it would inherit the context ("this") from the surrounding environment. In this case, the counter instance object itself.



--> The third solution is exactly the same as we did with the add event listener. 

  -> We had the method written in the instance object and, when we used it as the callback of addEventListener, we needed to bind the context.

  -> The only difference is that we where listening for the click of the button on the top level code, not inside of any class.

    -> For that, we needed to bind "this" to the object, here we just need to bind(this) because "this" is the object itself.

*/

class Counter {
  constructor(count = 0, incrementAmount = 1) {
    this.count = count;
    this.incrementAmount = incrementAmount;
  }
  // start() {
  //   setInterval(function() {
  //     console.log(this.count); // undefined

  //     console.log(this); // window object

  //     this.count += this.incrementAmount; // incrementAmount not defined
  //   }, 1000);
  // }

  // This would work.

  // start() {
  //   setInterval(function() {
  //     console.log(this.count);

  //     console.log(this);

  //     this.count += this.incrementAmount;
  //   }, 1000);
  // }

  // SOLUTION 1. Wrap the callback in () and use bind in place, does not look very good.

  start() {
    setInterval(this.incrementAndPrint.bind(this), 1000);
  }

  // SOLUTION 2. Export functionality.
  incrementAndPrint() {
    console.log(this.count);

    console.log(this);

    this.count += this.incrementAmount;
  }
}

const counter = new Counter();

// counter.start();
