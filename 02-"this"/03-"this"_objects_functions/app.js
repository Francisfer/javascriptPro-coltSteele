"use strict";
/* --------------------------------- Object and Function Contexts --------------------------------- */

/* 

--> The value of the keyword "this" is determined when our code runs.

  -> It is dynamically evaluated to some value and that value depends on how we call the function.

  -> If we have a function that we declare in the global scope:

    -> It is like we have window.function(), so "this" points to the global object in sloppy mode.

    -> If we are in strict mode, "this", inside of a function, will point to undefined.


  -> If we declare a function method in an object, "this" will point to the object because we call it like this: object.method().

    -> However, if we store the reference of that method into a variable and call it:

      -> In sloppy mode "this" will point to the window object.

      -> In strict mode "this" will be undefined.



--> As a general rule of thumb, assuming that we are in sloppy mode, we can say that the value of "this" will be equal to whatever is on the left side of the dot. window.method() - object.method.


  -> But remember, in strict mode things change, it is like the value of "this" is evaluated to undefined when called on the global scope inside of a function.

*/

// Function declared in the global scope.

function whatIsThis() {
  console.log("The value of this is:", this);
}

whatIsThis();

// In sloppy mode: The value of this is: Window {…} same as window.whatIsThis()

// In strict mode: The value of this is: undefined

// ---------------- Object example: ---------------- //

const object = {
  name: "Johnny Cash",
  age: 44,
  whatIsThis,
};

object.whatIsThis(); // The value of this is: {name: 'Johnny Cash', age: 44, whatIsThis: ƒ}

// The value f this is the object which is calling the method.

// But if we store the reference in a variable and call it, it is no longer a method call, but a regular function call.

// The value of "this" depends if we are in strict mode or sloppy mode, just like the previous example.

const whatIsReference = object.whatIsThis;

whatIsReference();

// Sloppy: The value of this is: Window {window: …}

// Strict: The value of this is: undefined

// SUMMARY: The value of the "this" keyword is first determined by the mode in which we are writing code, second, it depends on the context.

// As a method in an object, "this" will point to the object, as a regular function in the global scope, "this" depends on the strict or sloppy mode.
