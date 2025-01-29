"use strict";
/* --------------------------------- The "new" Keyword --------------------------------- */

/* 

--> The new keyword is very important in javascript. We use it all the time.

  -> Without it, we cannot create instances of a class for example.
  
  -> We can also use the "new" keyword when we want to create a new array or a new object.


--> The "new" keyword does four things, no matter the context in which is applied.

  -> 1. Creates a new empty object.

  -> 2. Sets the "this" keyword to be that object.

  -> 3. Returns the object (which is "this").

  -> 4. Creates a link to the object's prototype.


--> Before classes, to implement OOP, we needed to write constructor functions.

  -> The point of this constructor function is to generate objects. It helps us to define a pattern for the objects.

  -> Then, we call this function to instantiate new objects.


--> If we just call this function, we get undefined because we are not returning nothing from it.

  -> If we try to log "this", it is like a regular function and points to the window object.

  -> This is what the "new" keyword resolves in the first three steps.


--> If we store the returned object into a variable, we can create as many objects as we want.

*/

// This is a factory that describes the shape of a dog object.
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

// Dog("ss", "dog"); // Uncaught TypeError: Cannot set properties of undefined (setting 'name')

const wyatt = new Dog("Wyatt", "Golden");
const elton = new Dog("Elton", "Mutt");

console.log(wyatt, elton); // Two Dog objects, similar to instances.
