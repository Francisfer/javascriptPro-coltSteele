"use strict";

/* --------------------------------- Public Fields --------------------------------- */

/* 

--> A new class related syntax are class fields. 

--> We already did something related with class fields when we talked about static properties and methods.

  -> In this example, the static property is updated at each instance created.

--> Static properties are useful when we have stuff that pertains to the actual class itself (not to instances).

--> Class fields don't have to be static to the class.

  -> We can create what is called public instance fields.

  -> We could initialize these properties in the constructor with default values, it would be the same thing, however, like this:

    -> We can clean up the constructor, if we have the default values we don't need to clutter the constructor.

    -> Another reason for declaring public instance fields is to provide a clear vision of what the class is all about.

      -> Instead of initializing some properties in the constructor and others as public fields, everything is at the top of the code in an easy to find and easy to understand place.

      -> It provides a sense of consistency across the classes if we can see a full list of the properties at the top.


  -> Public is in the sense that we can access them outside the class.
*/

class Cat {
  // Static class field
  static numOfCats = 0;

  // Public instance fields
  numLegs = 4;
  hasTail = true;

  constructor(name) {
    this.name = name;
    Cat.numOfCats += 1;
  }
}

const cat = new Cat("Felix");
console.log(Cat.numOfCats); // 1

const cat2 = new Cat("Felix");
console.log(Cat.numOfCats); // 2

/* --------------------------------- Private Fields and Methods --------------------------------- */

/* 

--> Private instance class fields provide a way to maintain encapsulation and not allow external access from other developers or other parts of the code base.

--> Private methods are the same thing.


*/

class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }
  getRadius() {
    return this.#radius;
  }
  #privateMethod() {
    console.log("PRIVATE METHOD CALLED");
  }

  // Way to go around:
  publicMethod() {
    return this.#privateMethod();
  }
}

const circle = new Circle(4);
console.log(circle.getRadius()); // 4

circle.publicMethod(); // PRIVATE METHOD CALLED
