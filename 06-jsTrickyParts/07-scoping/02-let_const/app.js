"use strict";

/* --------------------------------- let and const --------------------------------- */

/* 

--> As we know, declaring something with var can become problematic because they create properties on the global object (window in browsers).

  -> Also, since they are not block scoped, they can lead to problematic errors since they are available on the global scope, even if we declare them inside a block.



--> As far as the scope for variables declared with const and let:

  -> When declared in the global scope they do not create properties in the global object (window in browsers).

  -> They are block scope, meaning that if we declare them inside of a code block, they are not accessible from the outer scope.

    -> A block is everything with {} that is not an object.

*/

let origin = "Germany";
console.log(window.origin); // http://127.0.0.1:8080 - remember that we overwrote this window prop with var.

function blah() {
  const color = "red";
  let animal = "pig";
  console.log(color, animal); // Only available on the function scope.
}

// console.log(color, animal); // app.js:30 Uncaught ReferenceError: color is not defined

if (true) {
  const name = "Joe";
  let school = "Something";
  // Only available on the block scope.
}
