"use strict";

/* --------------------------------- Classes --------------------------------- */

/* 

--> We can in fact create individual objects that contain properties or data, along with functionality.

--> But this is not good if we need the pattern in more than one particular instance.

--> The most popular alternative is to use classes.

  -> Syntactic sugar.

  -> Allows us to extract a pattern, like creating a blueprint that combines functionality with data.

  -> By naming it, we can then create instances of this blueprint.

  -> The instantiation is done by using the "new" keyword.

  -> He does not use the constructor or public fields yet.

  -> He just talks about the fact that the methods are in the prototype property of the class, which is set to be the prototype of the instance.

  -> The "this" keyword points to the individual instances that are created from that class.

  -> It is used kind as a placeholder. Remember what "this" and "new" do in order to make this possible.

*/

class Triangle {
  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }
}

const triangle = new Triangle();

console.log(triangle.__proto__); // {getArea: ƒ, getHypotenuse: ƒ}
console.log(Triangle.prototype); // {getArea: ƒ, getHypotenuse: ƒ}

console.log(triangle.__proto__ === Triangle.prototype); // true
console.log(triangle.prototype === Triangle.prototype); // false

console.log(triangle.prototype); // undefined

// The __proto__ property is set to be equal to the prototype property of the class. However, the prototype property of triangle is undefined.

// Only the classes have the prototype property, which is used to pass the methods and data to the instances.

// The instances themselves have access to that prototype via the prototypal chain.

// If we set properties a and b in the instance, we can use the methods.

triangle.a = 3;
triangle.b = 4;

console.log(triangle.getArea()); // 6

// A useful function to see if an object is an instance of a class:

console.log(triangle instanceof Triangle); // true
console.log([1, 2, 3, 4] instanceof Array); // true
console.log({ a: 3, v: 4 } instanceof Object); // true
