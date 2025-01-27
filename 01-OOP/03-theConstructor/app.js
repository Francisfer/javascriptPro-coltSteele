"use strict";

/* --------------------------------- The Constructor --------------------------------- */

/* 

--> Here he introduces the constructor method as a way to avoid manually adding properties to the instances.

--> The constructor method will automatically be called as soon as we create a new instance.

  -> Inside of the constructor, we can initialize properties on the object.
  
  -> Remember that "this" does not refer to the class, it refers to the individual instances created with the class.



--> There are two main things that we do in the constructor.

  -> 1. Assigning properties like we already did.

  -> 2. Validating the input data that was passed into the constructor. Right now we could pass any value, we would only get in trouble when we called a method.

    -> So if the functionality is expecting a kind of data type, number in this example, we can do validation in the constructor.

    -> Not directly but here he is just starting.



--> Constructor functions always return undefined by default unless we return something ourselves. But this seems to be a bad practice.

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
}

const triangle = new Triangle(5, 12);

console.log(triangle); // Triangle {a: 5, b: 12}
console.log(triangle.getHypotenuse()); // 13
