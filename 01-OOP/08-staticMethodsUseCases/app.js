"use strict";

/* --------------------------------- Static Methods --------------------------------- */

/* 

1.

--> One of the most common use cases is to use a class to group together related functionality.

  -> We have several examples of this, like the Math object, which has a bunch of methods to work with numbers.

  -> These methods could just exist on their own, but like this, they are grouped together in a useful object.

  -> So, one common pattern is to use static methods to accomplish that.

  -> We are never going to instantiate this class ever, so we don't use a constructor, we just want the methods grouped in class.

  -> Another use case would be to create a class to group functionality related with API functionality (get and post requests ).

*/

class Mathematics {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static divide(a, b) {
    return a / b;
  }
}

/* 

2. 

--> Another common use case is to create factory methods.

  -> We often use a static method to help in the creation of a new instance of a class.

  -> Say that we have the basic Cat class below.

    -> We have a basic instance methods and every created cat will have a name and a breed.

    -> However, if we are building an app to help running a shelter, we will have stray cats right?

    -> For this, we may want to add functionality to register them because we don't know the name neither the breed.

    -> What most animal shelters do is to pick a random name and assign the breed to mixed or unknown.


  -> We could write those functions separately, which would be done in functional programming for example.

  -> However, it would make sense to group them together with the Cat class because they are related to cats and with the creation of a new cat.
  
  -> They don't have nothing to do with a particular instance of a cat, they are solely concerned with making a new cat for which we don't know information.

  -> Hence the name factory function. 


*/

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static registerStray() {
    const names = ["Muffin", "Biscuit", "Sleepy", "Dodo", "Princess"];
    const name = choice(names);
    return new Cat(name, "unknown");
  }

  meow() {
    return `${this.name} says meow!`;
  }
}

const blue = new Cat("blue", "scottish fold");

// We could write the functions outside the class, in a different module for example.

function choice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// function registerStray() {
//   const names = ["Muffin", "Biscuit", "Sleepy", "Dodo", "Princess"];
//   const name = choice(names);
//   return new Cat(name, "unknown");
// }
