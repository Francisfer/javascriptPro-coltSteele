"use strict";

/* --------------------------------- Creating Object Literals --------------------------------- */
const key = "species";

const pet = {
  species: "Dog",
  name: "Elton",
  age: 2.5,
};

// 1. Properties that don't exist always evaluate to undefined. In python throws an error.

console.log(pet["paws"]); // undefined

// 2. All keys get stringified. That is why we can search with the value of the key or with a string with the same name.

pet[true] = "hello";

console.log(pet.true); // hello
console.log(pet[true]); // hello
console.log(pet["true"]); // hello

// 3. As values, we can put everything. With functions we need to be aware with "this".

/* --------------------------------- Mixing data and functionality --------------------------------- */

/* 

--> Mixing data with functionality in the same object is the first step towards OOP.

  -> With this code he wants to demonstrate that we can combine data with functionality.

  -> He wants to get to the difficulty to maintain such code if we had 10000 triangles to work with. 

  -> We would have to create the same number of copies of these functions, which would be a waste of memory.

  -> The objective is to introduce classes.

*/

function getTriangleArea(a, b) {
  return (a * b) / 2;
}

function getTriangleHypotenuse(a, b) {
  return Math.sqrt(a ** 2 + b ** 2);
}

// Creating functionality with data

const myTriangle = {
  a: 3,
  b: 4,
  getArea() {
    return (this.a * this.b) / 2;
  },
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};
const myTriangle2 = {
  a: 5,
  b: 12,
  getArea() {
    return (this.a * this.b) / 2;
  },
  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  },
};

console.log(myTriangle.getArea()); // 6
console.log(myTriangle.getHypotenuse()); // 5
console.log(myTriangle2.getArea()); // 30
console.log(myTriangle2.getHypotenuse()); // 13
