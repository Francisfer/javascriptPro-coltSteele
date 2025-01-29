"use strict";
/* --------------------------------- The "new" Keyword --------------------------------- */

/* 

--> Now it's time to talk about the fourth point of using the "new" keyword, which is to establish a link to the prototype property of the constructor function.


--> He starts by adding methods to the constructor function and then instantiate.

  -> This shows us that the methods are copied into every single instance object that we create.

  -> This is contrasting with what we did with classes.

  -> He talks about the fact that, in classes, when we write methods below the constructor, we are actually defining them in the prototype property of the class, so that all instances can inherit.

  -> This is why it is syntactic sugar over prototypes, because the class syntax does this automatically, while with constructor functions we have to do this manually.

    -> Otherwise this will be terrible for performance because every instance will have the same copy of the methods.

    -> If we compare two different instances with the same method, we see that the method points to a different reference in memory.

    -> While with classes, if we compare the same thing (elton.bark === wyatt.bark) we see that it is true, they point to the same reference in memory.



--> In order to don't redefine the methods reference in memory, we must define them on the prototype property of the constructor function.

  -> That is how the prototype chain works in javascript, Array prototype, the Object prototype, function prototype.

  -> The only tricky part of this is establishing inheritance. 



*/

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

// Defining the methods of Dog in the Dog prototype property, just like classes, only constructor functions have the prototype property.

// The instances created with the constructor function have the __proto__ property.
Dog.prototype.bark = function () {
  return `${this.name} says woff!`;
};

Dog.prototype.sleep = function () {
  return `${this.name} is sleeping!`;
};

const wyatt = new Dog("Wyatt", "Golden");
const bobby = new Dog("Bobby", "German Sheppard");

// No methods to be found:
console.log(wyatt); // Dog {name: 'Wyatt', breed: 'Golden'}
console.log(bobby); // Dog {name: 'Bobby', breed: 'German Sheppard'}

// But if we look at the prototype:
console.log(wyatt.__proto__); // {bark: ƒ, sleep: ƒ}
console.log(bobby.__proto__); // {bark: ƒ, sleep: ƒ}

// Also, the methods point to the same reference in memory, they are not different copies.
console.log(wyatt.bark === bobby.bark); // true

// The prototype property of the constructor function is equal to the __proto__ property of the instances.

// With this, we can say that the Dog prototype property is the prototype of all the instances.
console.log(Dog.prototype === wyatt.__proto__); // true
console.log(Dog.prototype === bobby.__proto__); // true

// This is done by using the combination of "this" (on the constructor) with "new" (when we instantiate).

// So, "new" creates an empty object, sets "this" to be that object (that is why we use it in the constructor, so that when an object is created, "this" refers to the instance created), returns that object and;

// Establishes a link to the prototype property of the constructor function by setting the __proto__ property to point to the constructor prototype property.
