"use strict";

/* --------------------------------- Scope chain --------------------------------- */

/* 

--> Another scope related concept is the scope chain.

  -> When we access a variable, javascript is going to look for that variable:

    1. In the local scope.

      -> If the local scope is the global scope it will just try to find it there.

      -> If the local scope is a function scope of a block scope, it will try to find it there first.

    2. Then it moves to any outer scopes, if we try to access a variable declared outside of a code block or any function body, javascript moves to the outer scope.

    3. The global scope, if it does not find the variable in any of the inner scopes, the last is the global scope.

*/

// Global scope

const age = 20;
console.log(age); // The current scope is the global scope, so it finds it here immediately.

// Block Scope:

if (true) {
  const newAge = age + 10;
  console.log(newAge); // 30 - finds age in the outer scope
}

// Function Scope:

function blah() {
  const newAge = age + 10;
  console.log(newAge); // 30 - finds age in the outer scope

  // Notice that we have the same name variable newAge here and in the code block, there is no interference because they are block scoped.

  // Also, if we try to access age (we already did), what happens is that, since it is not declared in this function scope (local scope) it moves up a level to find it.

  console.log(age); // 20
}

blah();

// --------------------- Function scopes --------------------- //

// The same happens if we try to redefine instead of just logging. If it has that variable in the current scope, it redefines that variable, otherwise it will move up until the global scope.

let year = 2000;

function outer() {
  // let year = "ageless";

  function inner() {
    // let year = "eternal";

    function superInner() {
      console.log(year); // First looks here, then moves to inner(), then moves to outer(), then moves to global
    }
    superInner();
  }
  inner();
}

outer();
