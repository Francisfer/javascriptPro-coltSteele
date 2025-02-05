"use strict";

/* --------------------------------- Immutability --------------------------------- */

/* 

--> Another concept that is core to the world of functional programming is immutability.

  -> Immutability is the idea that, once a piece of data is created (usually data structures like arrays and objects), it cannot be changed.

  -> We don't modify the original data.

  -> In the regular world of javascript we can mutate whatever we want.

    -> We cannot modify primitive values if we declare them with const, they are immutable in that sense, however things word differently for reference types because the variable just holds the reference to the heap.

*/

// Primitive types:

const num = 3;

// num = 2; // app.js:23 Uncaught TypeError: Assignment to constant variable.

// Reference types:

const numbers = [1, 2, 3, 4, 5, 6];

numbers.push("I changed the original!");

console.log(numbers); // [1, 2, 3, 4, 5, 6, 'I changed the original!']

const person = {
  firstName: "Joe",
  age: 2,
};

person.firstName = "Martin";

console.log(person); // {firstName: 'Martin', age: 2}

/* 

--> For this, we need to take extra precautions to truly make things immutable.

  -> This usually means writing functions that will create copies of arrays or copies of objects.

  -> Remember that this works for first level properties. If we have nested arrays or objects, they will their own reference in the heap.

  -> One option that we have is to use Object.freeze(obj), which freezes an object in place. However, this only works for first level properties, not nested.

*/

const user = {
  firstName: "Arnold",
  age: 20,
  anotherObject: {
    legs: 2,
  },
};
Object.freeze(user);

// user.firstName = "Something else."; // Uncaught TypeError: Cannot assign to read only property 'firstName' of object '#<Object>'

user.anotherObject.legs = 4; // Possible because legs create another reference in the heap.

console.log(user.anotherObject.legs); // 4

/* 

--> Another possibility is to use a function that does not mutate the state, so it returns a copy of the data.

  -> Just like map() or filter(), toSorted(), they all return a new array.

*/

const nums = [1, 2, 3, 4, 5, 6];

function push(arr, value) {
  return [...arr, value];
}

push(nums, 1000); // [1, 2, 3, 4, 5, 6, 1000]

console.log(nums); // Still the same

// Another example:

function removeLastItem(arr) {
  return arr.slice(0, -1);
}

removeLastItem(nums); // [1, 2, 3, 4, 5]

console.log(nums); // Still the same

// With an object. Again this is a shallow copy.

const user1 = {
  firstName: "Arnold",
  age: 20,
  anotherObject: {
    legs: 2,
  },
};

function addProperty(obj, property, value) {
  return { ...obj, [property]: value };
}

console.log(addProperty(user1, "lastName", "Something")); // {firstName: 'Arnold', age: 20, anotherObject: {…}, lastName: 'Something'}
