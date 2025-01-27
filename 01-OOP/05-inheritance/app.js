"use strict";

/* --------------------------------- Inheritance --------------------------------- */

/* 

--> He introduces inheritance with the ability of overwrite properties and instance methods on the instances themselves. 

--> Otherwise we would have to create on class for each change that we want to make.

--> The class that inherits is called a subclass and the parent class is called the super class.



--> When we don't specify a constructor on the subclass, javascript uses the one that is on the super class.

  -> The method is not quite overwritten, javascript simply looks into the prototype property of the subclass and tries to find that method. 

  -> If it exists, uses it, if it doesn't it looks up in the prototype chain.

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

  describe() {
    return `I am a triangle with an area of ${this.getArea()}`;
  }
}

class ShyTriangle extends Triangle {
  describe() {
    return "(runs and hides)";
  }
}

const triangle = new ShyTriangle(5, 12);

console.log(triangle); // Everything from the super class with the describe method overwritten.

console.log(ShyTriangle.prototype); // Triangle {describe: ƒ} so it does not go up in the prototype chain

console.log(triangle.describe()); // (runs and hides)

console.log(triangle.getHypotenuse()); // 13
