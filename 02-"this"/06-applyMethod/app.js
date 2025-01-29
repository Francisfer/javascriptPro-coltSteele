"use strict";
/* --------------------------------- apply() --------------------------------- */

/* 

--> apply() is very similar to call(), we use it to call a function with a specific value for the "this" keyword.


--> The main difference is in how it handles arguments.

  -> While with call() we just pass the arguments as single values, with apply() we need to pass in an array or array like structure with the arguments.

  -> What is does next is to pass the individual elements of the array as arguments to the method that we called it on. Just like the spread operator.

  -> It is not very used because if we had an array of arguments we could just spread the array it and use call().

  -> Other use cases for the apply() method are when we need to pass the individual elements of the array, like with math functions.

    -> Here we don't care about the "this" keyword value, so we pass null.

    -> However, this could be done with the spread operator also.



--> This was specially useful with the arguments object that each function has access (contains an array like structure at the first position).

  -> This arguments object transforms all the arguments passed into an array like structure, see the last example.

*/

const ringo = {
  firstName: "Ringo",
  greet: function (greeting) {
    console.log(`${this.firstName} says ${greeting}`);
  },
};

const george = {
  firstName: "George",
  lastName: "Harrison",
};

ringo.greet.apply(george, ["HI"]); // George says HI

// Other use case of apply.

const numbers = [1, 414, 1, 452, 525, 636, 3636];

console.log(Math.max.apply(null, numbers)); // 3636

// same thing:

console.log(Math.max(...numbers)); // 3636

// The arguments object.

function max() {
  console.log(arguments); // Arguments [Array(7), callee: (...), Symbol(Symbol.iterator): ƒ]
  console.log(Math.max(...arguments[0])); // 3636
  console.log(Math.max.apply(null, arguments[0])); // 3636
}

max(numbers);
