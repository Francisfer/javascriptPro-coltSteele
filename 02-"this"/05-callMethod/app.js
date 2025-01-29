"use strict";
/* --------------------------------- call() --------------------------------- */

/* 

--> One of the methods that allows us to set or manipulate the value of "this" is call().

  -> We can use call() to explicitly tell javascript to call some function on a particular object.


--> This first example does not make much sense because he is using instances created with the class

  -> So, they already have the method with "this" pointing to the instance objects created.

  -> He uses bind() 

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

const blue = new Cat("Blue");

// It works:
blue.dance(); // Meow, I am Blue and i like to Tango / "this" points to the blue object.

// Isolating the method.

const blueDance = blue.dance;

// blueDance(); Error

// But if we call the blueDance on the blue object, "this" points to blue again.
blueDance.call(blue);

// If we make a new cat object, it would work the same. Of course it already has the method because of inheritance, but the point is made.

const yellow = new Cat("Yellow");

// Call the blueDance method on the yellow object with the argument Salsa (we can pass arguments with call() as the second parameter).

// Now, "this" points to the yellow object.

blueDance.call(yellow, "Salsa"); // Meow, I am Yellow and i like to Salsa

/* --------------------------------- call() with objects --------------------------------- */

/* 

--> Here things make more sense because there is no inheritance involved.

  -> So, we have two objects and we want the second to have the sing() functionality.

  -> We could just copy and paste the same code but that is not good.

  -> What we can do is to extract the method and use call() to call that method on any object that we want. 


--> Bind is a method much useful to do the same thing.

*/

const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("'this' is: ", this);
    console.log(`${this.name} sings LA LA LA`);
  },
};

const lisa = {
  name: "Lisa",
  city: "Los Angeles",
};

const sing = conan.sing;

// Execute the sing() method from the conan object with the context of Lisa.
sing.call(lisa); // Lisa sings LA LA LA

// We didn't even had to store it into a variable.
conan.sing.call(lisa); // Lisa sings LA LA LA
