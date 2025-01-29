"use strict";
/* --------------------------------- "this" --------------------------------- */

/* 

--> This is a topic that confuses a lot of people when learning javascript.


--> We've seen the "this" keyword in classes and objects.


--> Let's start with a simple object example.

*/

const person = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    return "LA LA LA";
  },
};

/* 

--> At this point, nothing involves the "this" keyword.

  -> 1. We can call the method on the person object.

  -> 2. We can reference the method and store it into a variable. It is just a variable pointing to the function.


--> Just to be clear, we are not incorporating the "this" keyword yet.

  -> We can call the function directly, like we did in 1.

  -> And we can store it into a variable and execute it from there.


--> Either way, we are running the function and javascript doesn't care.

*/

// 1. Calling the method on the person object:

console.log(person.sing()); // LA LA LA

// 2. Reference the method and store it into a variable:

const someoneSinging = person.sing;

console.log(someoneSinging()); // LA LA LA

/* --------------------------------- "this" coming along --------------------------------- */

/* 

--> Now, instead of just returning LA LA LA, let's use "this" so that we can see what happens.

  -> 1. We are referencing "this" inside of the function so, when we call it inside of an object, it refers to the person1 object itself.

  -> 2. However, if we do what we did before, to store the function into a variable and call it:

    -> We get an error in strict mode because "this" is undefined in strict. 
    
      -> Uncaught TypeError: Cannot read properties of undefined (reading 'name')


    -> In sloppy mode we get:   is singing LA LA LA 
    
      -> Because "this" points to the window object in sloppy mode.


--> Go to the next lecture to see why all of this happens.


*/

const person1 = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    return `${this.name} ${this}is singing LA LA LA`;
  },
};

// 1. Calling the function with the object.

console.log(person1.sing()); // Conan is singing LA LA LA

// 2. Reference the method and store it into a variable:

const someoneElseSinging = person1.sing;

console.log(someoneElseSinging()); // Uncaught TypeError: Cannot read properties of undefined (reading 'name')

/* --------------------------------- "this" with classes --------------------------------- */

/* 

--> As we saw previously, if we run the code in strict mode we get an error when trying to access "this" after exporting the function into a variable.

  -> This behavior happens because "this", when called outside of the object, points to undefined.


--> If we run the code in sloppy mode we just get an empty space in the string because "this" points to the window object in sloppy mode.


--> In classes, it does not matter if we run the code in strict mode or sloppy mode because the body of the class is executed in strict mode.

  -> So, if we do the same thing, saving the reference of the method into a variable and call it, we get an error. No matter if in sloppy or strict.

*/

class Cat {
  constructor(firstName) {
    this.firstName = firstName;
  }
  dance(style = "Tango") {
    return `Meow, I am ${this.firstName} and i like to ${style}`;
  }
}

// If we create a new instance of cat everything is ok:
const fluffy = new Cat("Fluffy");

console.log(fluffy.dance("Salsa")); // Meow, I am Fluffy and i like to Salsa

// If we store the reference of the method into a variable, we get an error.

const dance = fluffy.dance;

console.log(dance()); // Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')
