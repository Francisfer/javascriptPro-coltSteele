"use strict";

/* --------------------------------- Scopes --------------------------------- */

/* 

--> Var is function scoped, meaning that:

  -> If we define it in the global scope, it is going to create a property in the global object, which, in the browser is the window object.

  -> Since it is function scoped, if we define a var variable inside a code block, we can access it from the global scope.

  -> However, if we define a var variable inside the function, it will not be accessible from outside of the function body.

*/

var color = "red";
console.log(window.color); // red

// So, since it is defined in the global scope, we can access it from inside a function.

function blah() {
  console.log(color); // red
}
blah();

// If we define it inside of a code block, we still get access to it from the global scope.

if (true) {
  console.log(color); // red
  var size = "big";
}

console.log(size); // big

// If we define a var variable in a function we cannot access it from the global scope.

function scopedVar() {
  var animal = "pig";
  console.log(animal);
}

// console.log(animal); // app.js:42 Uncaught ReferenceError: animal is not defined

// We only get access if we call the function.

scopedVar(); // pig

// An example with a for loop with var:

for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log("After the loop is out of execution", i); // it exists globally.
