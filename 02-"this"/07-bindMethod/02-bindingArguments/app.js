"use strict";
/* --------------------------------- Binding arguments --------------------------------- */

/* 

--> One of the real world scenarios in which bind() is pretty useful is the capacity of permanently bind arguments to functions.


--> As we know, bind() returns a new function with the context and / or arguments bound.

  -> In this example, we don't actually care about the context, we just want to bind arguments for a specific function.


--> In the example below there is a simple function which takes the taxRate and the price of something as parameters.

  -> Different states have different tax rates, so, instead of copying the code and create a new function for each state just because of one parameter, we can use bind.

  -> The first argument is the context, we don't want it and set it to null, the rest of the arguments must have the order in consideration.

*/

function applySalesTax(taxRate, price) {
  return price + price * taxRate;
}

console.log(applySalesTax(0.005, 240)); // 241.2

// Now say that other states have different tax rates on sales. We can do this:

const applyCASalesTax = applySalesTax.bind(null, 0.0725);
const applyMTSalesTax = applySalesTax.bind(null, 0);

console.log(applyCASalesTax(100)); // 107.25
console.log(applyMTSalesTax(100)); // 100

/* --------------------------------- Another example --------------------------------- */

/* 

--> This is another use case. Seems to be very used in functional programming.

  -> We have a function that multiplies two numbers.

  -> We can use bind() so that we can create functions that return the double, triple, etc.


*/

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

// Now we just need to pass the number that we want to get the double or the triple.

console.log(double(4)); // 8
console.log(triple(4)); // 12
