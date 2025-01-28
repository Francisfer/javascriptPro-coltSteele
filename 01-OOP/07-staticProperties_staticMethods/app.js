"use strict";

/* --------------------------------- Static Properties --------------------------------- */

/* 

--> Static properties are individual pieces of data that are on the class, not on the instances created with it.

  -> We can say that static properties are tied to the class itself.


--> In other languages they are called class attributes or class properties.


--> On the constructor we write the instance properties like we've done so far.

  -> As for static properties, we use the "static" keyword. Making it available only on the class itself.

  -> In other words, species is tied to the class itself.

  -> We only use static properties for constants, things that are common across every instance created with the class, like every cat is the same species.

  -> If we were creating a mathematical class, the number of pi could be a static property.



--> It is the same as the Array or Object properties and methods. Array.length or Array.map(). These are static properties and methods tied to the Array constructor.

*/

class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static species = "felix catus";
}

const blue = new Cat("blue", "scottish fold");

console.log(blue); // Cat {name: 'blue', breed: 'scottish fold'} - No species

console.log(Cat.species); // felix catus

/* --------------------------------- Static Methods --------------------------------- */

/* 

--> A static method is called on the class itself, just like static properties.

  -> In other languages, static methods are called class methods since it does have access to the class itself.

  -> Hence "this" refers to the class itself.

--> Notice below one of the reasons why the "name" is a reserved keyword in javascript.

--> Also, if we use the "this" keyword in a static method or property, "this" points to the class itself.


*/

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  static species = "dogus canideus";

  static au() {
    console.log(this); // The class itself.
    // return `The ${this.name} dog says AU AU AU!!!`; "this" is Dog when using name
    return `The ${this.breed} dog says AU AU AU!!!`;
  }
}

const felix = new Dog("Felix", "German Sheppard");

console.log(felix); // Dog {name: 'Felix', breed: 'German Sheppard'} - No method

console.log(Dog.au()); // The Dog dog says AU AU AU!!! - "this" point to the class itself if we use this.name in the static method.

console.log(Dog.au()); // The undefined dog says AU AU AU!!!
