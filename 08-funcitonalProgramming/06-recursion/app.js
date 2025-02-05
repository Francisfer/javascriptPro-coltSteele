"use strict";

/* --------------------------------- Recursion --------------------------------- */

/* 

--> Another concept that comes a lot in functional programming is recursion.

  -> Recursion comes a lot in the world of functional programming.

  -> Let's talk about a simple problem, a common recursion problem which is computing factorial.

  -> 5! = 5 * 4 * 3 * 2 * 1

*/

// The imperative approach:

function factorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  console.log(result);
}

factorial(5);

/* 

--> Recursion is a technique where a function calls itself in order to solve a problem.

  -> This allows the function to be repeated several times without us having to write a loop.

  -> The "loop" here can be seen as the execution contexts.

    -> 1. We call factorialFunction with 5. Execution context goes to the callstack.
    
      -> This return 5 * the result (returned value) of calling factorialFunctional(4)

      -> Since we call factorialFunctional(n - 1), another execution context is created.

      -> This goes on until n - 1 reaches 1. In that case we enter the condition and return 1.

      -> After this, values start to be returned for each execution context.


  factorialFunctional(5)

    return 5 * factorialFunctional(4) ----> 5 * 24 = 120

      return 4 * factorialFunctional(3) ----> 4 * 6 returns 24

        return 3 * factorialFunctional(2) ----> 3 * 2 returns 6

          return 2 * factorialFunction(1) ----> Here we get a returned value (calling factorialFunctional(1)) returns 1, so 2 * 1 is returned


          ----> This is the same as 5 * 4 * 3 * 2 * 1



    FactorialFunctional(5) returns 5 * 24 = 120

      return 4 * 6

        return 3 * 2

          return 2 * 1 

*/

// Recursion with functional programming.

function factorialFunctional(n) {
  if (n === 0 || n === 1) return 1;

  return n * factorialFunctional(n - 1);
}

factorialFunctional(5);
