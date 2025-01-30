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

1. The prototype Property (Unique to Functions).


  -> In JavaScript, only functions have a prototype property.

  -> This property is an object that will be used as the prototype for all instances created from that function.



--> What happens in the example?

  -> Dog.prototype is an object that stores methods and properties that all Dog instances share.

  -> dog1 and dog2 do not have a bark method directly on them.

  -> Instead, they inherit it from Dog.prototype.


*/

// Example:

function Dog1(name) {
  this.name = name;
}

// Adding a method to the prototype
Dog1.prototype.bark = function () {
  console.log(`${this.name} says woof!`);
};

// Creating instances
const dog1 = new Dog1("Rex");
const dog2 = new Dog1("Buddy");

dog1.bark(); // "Rex says woof!"
dog2.bark(); // "Buddy says woof!"

/* 

2. The __proto__ Property (Internal Property of Objects).

  -> Every JavaScript object has an internal property called __proto__ (also called [[Prototype]]).

  -> This property links an object to another object, which acts as its prototype.



--> What does that mean?

  -> dog1 and dog2 don’t have their own bark method.

  -> When you call dog1.bark(), JavaScript looks at dog1 and doesn't find bark there.

  -> Then, it looks at dog1.__proto__, which points to Dog1.prototype, and finds the method there.

  -> Object literals ({}) also have a __proto__, which by default points to Object.prototype:

*/

console.log(dog1.__proto__ === Dog.prototype); // true
console.log(dog2.__proto__ === Dog.prototype); // true

const obj = {};
console.log(obj.__proto__ === Object.prototype); // true

/* --------------------------------- Useful Prototype Methods --------------------------------- */

/* 

1. Object.create()

  -> This method will create a new object but it expects an argument.

  -> It will use that argument object as the prototype of the new object it creates.

  -> Object.create() is a way to manually set the prototype of an object.

*/

const person = {
  sing() {
    console.log("la la la");
  },
  isHuman: true,
};

// When we use Object.create() it makes us a new empty object. However, if we look at the prototype of this new object we can see it is the person object.

const newPerson = Object.create(person);

console.log(newPerson.__proto__); // {isHuman: true, sing: ƒ}

newPerson.sing(); // la la la

// We could now fill that object.
newPerson.name = "Tom";

console.log(newPerson.name); // Tom

/* 

2. Object.getPrototypeOf()

  -> We provide an object and it will return the prototype of that object.

  -> This is what we should use instead of __proto__.

*/

console.log(Object.getPrototypeOf(newPerson)); // {isHuman: true, sing: ƒ}

// same as:

console.log(newPerson.__proto__); // {isHuman: true, sing: ƒ}

/* 

3. Object.setPrototypeOf()

  -> This one we already know.

  -> The first parameter is the object we want to set the prototype, the second is the object that we want the prototype to be.

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

console.log(Object.getPrototypeOf(child)); // Object - the top of the chain

Object.setPrototypeOf(child, parent);

console.log(Object.getPrototypeOf(child)); // {color: 'purple', sing: ƒ} - parent object.

/* 

4. isPrototypeOf()

  -> To check if an object is the prototype of another.

*/

console.log(parent.isPrototypeOf(child)); // true
