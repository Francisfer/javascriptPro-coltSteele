"use strict";

/* --------------------------------- Float Imprecision --------------------------------- */

/* 

--> Unlike any other programming language out there that has a separate data type for floating point numbers, javascript has a singly number type.


--> This can lead to some weird behaviors.

  -> Floating point imprecision is one of them.

  -> For this, storing floating point numbers and doing math with them is notoriously difficult.

  -> One of the most notorious examples is 0.1 + 0.2.

*/

console.log(" ------------------ Float imprecision ------------------ ");

console.log(0.1 + 0.2); // 0.30000000000000004

// So, if we do:

console.log(0.1 + 0.2 === 0.3); // false

/* 

--> To solve this issue, there are some libraries that can help, however, javascript is not the language to work if we need really precise floating operations.

  -> We can also have a helper function that takes two numbers and, as a third argument it takes epsilon.

  -> This is a mathematical term, which is going to be our margin of error or tolerance.

  -> We use Math.abs() so that the order of the input does not matter. It does not work.

*/

function areFloatsEqual(a, b, epsilon = 1e-10) {
  return Math.abs(a - b) < epsilon; // < to see if is less than our tolerance range.
}

areFloatsEqual(0.3, 0.1 + 0.2);

/* ---------------------------------  Large Integers --------------------------------- */

/* 

--> We can also run into some problems when dealing with really large integers.

  -> We have the max value of number representation that we can have with javascript.

  -> We also have the max safe integer to work with larger numbers without errors.

    -> This means that we should not do operations beyond the max safe integer.

    -> One thing is to represent the numbers, another is to perform calculations with them.



--> To help in these situations, a new type was added to javascript.

  -> BigInt() is used to store, manipulate and work with large integers.

  -> There are two ways of making big ints:

    -> One is by using the big int function,

    -> The other is to add "n" at the end of a big int.


  -> BigInt supports most of the arithmetic operations, what they do not support is making them by mixing big ints with regular numbers.

*/

console.log(" ------------------ Big Int ------------------ ");

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Big int with function

const bigNr = 23982059280598230958203958203958203952342342034n;

const bigInt = BigInt("23982059280598230958203958203958203952342342034");

console.log(bigNr); // 23982059280598230958203958203958203952342342034n

console.log(bigInt); // 23982059280598230958203958203958203952342342034n

const maxNr = BigInt(Number.MAX_SAFE_INTEGER);

// console.log(maxNr + 10); // Error

console.log(maxNr + 4n); // 9007199254740995n
