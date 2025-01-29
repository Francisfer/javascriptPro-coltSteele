"use strict";
/* --------------------------------- "this" in Classes --------------------------------- */

/* 

--> In classes, the only difference to remember is related with static methods. As they point to the class itself and not to the particular instances created with that class.


--> Otherwise, the value of "this" in the constructor or in any method, is going to refer to the particular instances created with the class.

*/

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  static getSomething() {
    console.log(`"this" is: ${this}`);
  }
  dance(style = "Tango") {
    console.log(`Meow, I am ${this.firstName} and i like to ${style}`);
    console.log(`"this" is: `, this);
  }
}

const cat = new Cat("CAT");

Cat.getSomething(); // "this" is: class Cat

cat.dance(); // "this" is: Cat {firstName: 'CAT'}

// After he talks about the fact that, when isolating a method coming from a class, the "this" points to undefined and not the window object. Again, the body of a class runs in strict mode.

// As we extract the function, it will be just a regular call, it should point to the window object in sloppy mode, but since it comes from a class it acts like the strict mode restrictions.

const method = cat.dance;

method();
// Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')

// It is trying to read firstName on "this", which is undefined. Reading something on undefined results in an error.
