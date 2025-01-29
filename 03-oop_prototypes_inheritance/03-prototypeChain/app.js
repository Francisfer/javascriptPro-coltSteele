"use strict";
/* --------------------------------- The Prototype Chain --------------------------------- */

/* 

--> Let's start simple with two object literals.

  -> The prototype (__proto__) of an object is the Object. The same which has method like Object.groupBy or Object.keys.

  -> So if do the evaluations below, we can conclude that the prototype (__proto__) of an object is the same as the prototype property of Object.

*/

const parent = {
  color: "purple",
  sing() {
    console.log("la la la");
  },
};

const child = {
  num: 2,
};

console.log(parent.__proto__);
console.log(child.__proto__);
console.log(Object.prototype);

console.log(Object.prototype === parent.__proto__); // true
console.log(Object.prototype === child.__proto__); // true
console.log(parent.__proto__ === child.__proto__); // true

/* 

--> This we already understood, whenever we create an object literal is the same as creating it with the "new" keyword.

const a = new Object({
  color: "purple",
  sing() {
    console.log("la la la");
  },
});


--> However, what we want is to link the parent and child object.

  -> Say that we want the child to have access to the same functionality of the parent.

  -> In other words, we want the parent to be the prototype (__proto__) of child.

*/

// Here he sets the prototype chain like this, but this is unusual.

const grandParent = {
  greet() {
    console.log("Hello from grandparent");
  },
};

const parent1 = {
  color: "purple",
  sing() {
    console.log("la la la");
  },
  __proto__: grandParent,
};

const child1 = {
  num: 2,
  __proto__: parent1,
};

// child.greet(); This only works in the browser.
