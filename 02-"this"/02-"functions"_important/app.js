"use strict";
/* --------------------------------- javascript "functions" --------------------------------- */

/* 

--> To help us understand what happens with the "this" keyword, what the "this" keyword is equal to in given situations we need to know more about how javascript functions work.


  -> In a way, javascript doesn't have true functions.
  
  
    -> EVERYTHING is called on some object, just like a method (a function inside of an object).

  
  -> To be more precise, when we write a method on an object and then call it, we are calling the method on an object.

    -> It is a method on the fluffy object.


  -> See the example.

*/

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  dance(style = "Tango") {
    return `Meow, I am ${this.firstName} and I like to ${style}`;
  }
}

// Now we create an instance from the class, which is just an object.

const fluffy = new Cat("Fluffy");

console.log(fluffy); // Cat {firstName: 'Fluffy'} - just an object

// When we call the method, we are calling it ON the object.

console.log(fluffy.dance()); // Meow, I am Fluffy and I like to Tango

/* --------------------------------- "functions" --------------------------------- */

/* 

--> Even if we declare a function in the global scope, so not in an object and not in a class:

  -> When we call it, it is still called on an object.

  -> When we call a function on nothing, we are actually calling it on the global object.

  -> What the global object is depends on several things:

    -> Running javascript on the browser -> The global object is the Window object.

    -> Running javascript on nodejs -> There is a global object called global.



--> So, when we call the function on it's own, we are really calling it on the window object.

  -> That is why "this", in this context, points to the window object.

  -> If we take a look on the window object, we can see that, along with everything else, it has our function.


*/

function greet() {
  console.log("Hello there!");
}

// When don't call it as a method, we call it as a function.

greet(); // Hello there!

// This is the same as:

window.greet(); // // Hello there!

console.log(this); // Window {window: Window, self: Window, location: Location, …}
