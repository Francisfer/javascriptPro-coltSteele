"use strict";

/* --------------------------------- Creating Objects --------------------------------- */
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
