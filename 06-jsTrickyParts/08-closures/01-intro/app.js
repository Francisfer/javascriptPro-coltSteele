"use strict";

/* --------------------------------- Closures --------------------------------- */

/* 

--> Closures are a fundamental concept in Javascript.

  -> The idea is that a closure is just a function defined inside of a function, that has access to the outer functions variables.

  -> Closures can also be defined as the ability for inner functions to remember variables defined in outer functions, long after the outer function has returned.


--> The following example is going to be a very simple one where we:

  -> Define an outer function, which has a variable declaration and a inner function, which accesses the variable from on the outer scope (outer function).

  -> At the end of the outer function, we return the inner function.

  -> Like this, when we call the outer function, it will return a new function that we can store into a variable.


--> As we can see, even though outerFunction has finished execution and its execution context has popped out of the callstack, the inner function still has access to the variables of its outer scope.

  -> For this we can call a closure like a backpack that contains all the variables it had access when it was created

*/

function outerFunction() {
  let outerVariable = "I am from the outer scope!";
  function innerFunction() {
    console.log("I am the inner function");
    console.log("The variable of my outer scope is:", outerVariable);
  }
  return innerFunction;
}

// When we call the outer function like in the following, this means that outer function has finished execution and its execution context is out of the callstack.

const myClosure = outerFunction();

// However, when we call the closure, it still has access to the variables of its outer scope.

myClosure(); // I am the inner function / The variable of my outer scope is: I am from the outer scope!

// Another closure example:

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
