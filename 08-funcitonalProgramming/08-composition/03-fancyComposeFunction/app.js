"use strict";

/* --------------------------------- Composition --------------------------------- */

/* 

--> In the previous lesson we saw a very simple version of a compose function.

  -> It takes two functions, returns a new function and combines the two.



--> But what if we wanted something a bit more flexible where we could compose four functions.

  -> It is a bit tricky to write and the better practices says that a function should not receive more than four arguments but we can do it.

  -> So, the cleaner solutions is to receive an arbitrary number of functions that we store into an array with the rest operator.

  -> Then, we return a new function that receives data, just like before.

  -> The tricky part is reducing the functions array with reduceRight(). It is just like reduce but it starts from the right side of the array. 

  -> We have val has the accumulator and func, which will be each function in the array, starting from the last.

  -> The initial value of the reduce right is the data that we pass when we compose something.

  -> So, we call each function in the array with func (the acc, which has the initial value of what we are passing in, a string in this case).

  -> This is the strategy for passing the string to the reduce method and call each function with that value because we val === date on the reduce execution.




--> Things to take:

  -> The arbitrary number of function is useful. Even with fewer functions it is better than writing return fn1(fn2(value));

  -> The reduce right is used so that the mathematical expressions order stays the same.

  -> The use of data as the initial value of the accumulator (val) allows us to pass the data for the first iteration, then it changes as the result value of each function works the data up to the end.
*/

function compose(...functions) {
  return function (data) {
    return functions.reduceRight((val, func) => func(val), data);
  };
}

function trim(str) {
  return str.trim();
}

function lowerCaseString(str) {
  return str.toLowerCase();
}

function splitWords(str) {
  return str.split(" ");
}

function joinWithDash(arr) {
  return arr.join("-");
}

// We will join with (-) at the end (remember reduce right), we split words before and first we lower case.

const sluggify = compose(joinWithDash, splitWords, lowerCaseString, trim);

sluggify("A VERy Fancy PrOduct.      "); // 'a-very-fancy-product.'
