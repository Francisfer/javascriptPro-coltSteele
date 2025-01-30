"use strict";
/* --------------------------------- Classes, Inheritance and Prototypes --------------------------------- */

/* 

--> Inheritance is the idea of extending classes in javascript.

--> We already know that classes are syntactic sugar over prototypes, so:

  -> When we write methods in classes, they will be set on the prototype property of the class object.

  -> This way, every instance of the class will inherit the methods via the prototype chain, which is set / connected when we create a new instance with "new".


--> By using the extends keyword, we are not implementing traditional inheritance like in other languages.

  -> In other languages, the GuideDog would have sort of a mix of the Dog functionality and the GuideDog functionality.

    -> So, bark() and sleep() would actually be sort of copied (put) into the new subclass, but that is not what happens in javascript.

  -> Instead, we set up a chain of inheritance based on prototypes by using the "extends" keyword.

  -> Like this, the prototype of jay is GuideDog, which in turn has the prototype of Dog, which in turn has the final object on the chain, which is the Object prototype.


*/

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} says woof!`);
  }
  sleep() {
    console.log(`${this.name} is sleeping!`);
  }
}

class GuideDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed);
    this.owner = owner;
  }
  alert() {
    console.log(`${this.name} alerts you to danger!`);
  }
}

const jay = new GuideDog("jay", "golden", "maggie");

console.log(jay.__proto__); // Although Dog appears in the console, we can see that the constructor is the GuideDog constructor

console.log(jay.__proto__.__proto__); // Dog, although the console only shows it in the constructor.

console.log(jay.__proto__.__proto__.__proto__); // Object constructor

console.log(jay.__proto__.__proto__.__proto__.__proto__); // null - the top is Object.

console.log(jay.__proto__ === GuideDog.prototype); // true

// The prototype chain

console.log(jay instanceof GuideDog); // true

console.log(jay instanceof Dog); // true

console.log(jay instanceof Object); // true

console.log(GuideDog.prototype.isPrototypeOf(jay)); // true

console.log(Dog.prototype.isPrototypeOf(jay)); // true

console.log(Object.prototype.isPrototypeOf(jay)); // true

console.log(Dog.prototype.isPrototypeOf(GuideDog)); // false, GuideDog is not an instance

/* --------------------------------- Difference between prototype and __proto__ --------------------------------- */

/* 

--> The prototype property is unique to functions.

  -> It is going to point to the object that will be assigned as the prototype object of instances created from that function (Dog constructor).

  -> This is a long way of saying that we can add methods to the prototype property of a function, which will be set as the prototype for instances of Dog.

  -> The __proto__ property is an internal property of every object in javascript, which points to its prototype object.

    -> In the case of object literals, it points to the Object prototype.

      -> If we want to add a prototype in the middle, so that one object has access to the functionality of another object we use Object.setPrototypeOf(this obj, to this obj).

      -> What this does it to set the __proto__ of the second object to point to the first.


*/

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
};

const child1 = {
  num: 2,
};

console.log(child1.__proto__); // Object - top of the chain directly

Object.setPrototypeOf(child1, parent1);

console.log(child1.__proto__); // {color: 'purple', sing: ƒ} - Now the __proto__ of parent1 is in the middle.

console.log(parent);
