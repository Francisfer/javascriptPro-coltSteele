"use strict";

/* --------------------------------- Methods --------------------------------- */

/* 

--> Methods are functions placed on a class. They have access too instance properties (instance objects) through "this". 

--> Have arguments and return data just like any other function.

--> Since they are in a class they are called instance methods.



--> "this" must be used to access specific properties to an instance or when we call a method from within another instance method.


*/

class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a < 0) throw new Error(`Invalid Number a: ${a}`);
    if (!Number.isFinite(b) || b < 0) throw new Error(`Invalid Number a: ${b}`);

    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  sayHi() {
    return `The triangle with side A of ${this.a} and side B of ${
      this.b
    }, with an area of ${this.getArea()} says Hello!`;
  }
}

const triangle = new Triangle(5, 12);

console.log(triangle.sayHi()); // The triangle with side A of 5 and side B of 12, with an area of 30 says Hello!
