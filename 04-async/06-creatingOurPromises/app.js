"use strict";
/* --------------------------------- Creating promises --------------------------------- */

/* 

--> We can also create our own promise objects.

  -> We've been working with fetch, which is native to the browser and automatically returns a promise to use.

  -> But sometimes we may want to create our own promises. Like take some code that uses callbacks and promisify it.

  -> Turning the code into something that we can await or use .then() on.

  -> The syntax might be a bit hard to understand.



--> We use the "new" keyword along with Promise to make a promise.

  -> The part that takes a bit to get used to is that Promise(function) accepts a single function as an argument.

    -> This function itself accepts two functions as arguments, one called resolve and another called reject.

      -> new Promise(function(resolve(), reject()))

    -> When we execute resolve, the promise will resolve with that given value.

    -> When we execute reject, the promise will reject with that given value.


--> To demonstrate this, we can build a waiting function with settimeout, but settimeout is callback based.

  -> The objective is just to pause the code.

*/

function wait(duration) {
  const promise = new Promise(function (resolve, _) {
    setTimeout(function () {
      resolve();
    }, duration);
  });
  return promise;
}

async function demo() {
  console.log("Hi");
  await wait(2000);
  console.log("there!");
}
demo();
