"use strict";

/* --------------------------------- Hoisting --------------------------------- */

/* 

--> Hoisting is the behavior of moving our variable declarations to the top of their enclosing scope. 


--> Hoisting happens during the global execution creation phase

  -> The enclosing scope may or may not be the global scope.


--> In the case of var declarations:

  -> When we declare variables with var and try to access them before declaration we do not get an error, we get undefined.

  -> This is the hoisting behavior for var declarations.
  
    -> var variable declarations are pulled to the top of their enclosing scope and initialized to undefined until the code reaches its definition.

    -> That is why we do not get an error when we try to access the variable before its definition.

    -> This would be the process figuratively:

var food = undefined; -> pulled to the top of the scope during the creation phase of the global execution context, in this case the global scope.

console.log(food); -> we try to access the variable before its definition in the code and we get the initial value -> undefined

food = "pizza"; -> When the code reaches its definition, it gives it the value that we've assigned.

*/

console.log(food); // undefined

var food = "pizza";

console.log(food); // pizza

// Same as:

var foodHoisted = undefined;

console.log(foodHoisted); // undefined

foodHoisted = "hot dog";

console.log(foodHoisted); // hot dog

/* 

--> If we have a function with a var declaration, javascript will not hoist the variable to the top of the file (global scope).

  -> It will hoist the variable to the top of the function scope.

  -> The same rules apply, if we try to access the variable, inside of the function scope, before its definition, we get undefined until the code reaches its definition.


*/

function blah() {
  console.log(color); // No error, undefined
  var color = "black";
}
blah();

// Same as:

function otherBlah() {
  var color = undefined;

  console.log(color); // undefined

  color = "black";

  console.log(color); // black
}
otherBlah();

/* 

--> In the case of let or const variable declarations:

  -> We don't get the same behavior.

  -> If we try to access a variable declared with const or let, we will get an error.

  -> This happens because let and const variables are hoisted but remain in the tdz until the code reaches its definition.

  -> While remaining on the tdz, they are un initialized.

  -> So, they are also hoisted to the top of their enclosing scope, but we cannot access them because they are in the tdz (uninitialized) until their value is read.

*/
// console.log(drink); // app.js:96 Uncaught ReferenceError: Cannot access 'drink' before initialization
let drink = "water";

/* --------------------------------- Hoisting in detail --------------------------------- */

/* 

--> Hoisting happens during the creation phase of the Execution Context, not during the parsing phase (AST generation and bytecode creation).



--> Breakdown of When Hoisting Happens:


  --> 1️⃣ Parsing Phase (AST & Bytecode Generation)

    -> JavaScript code is parsed into an Abstract Syntax Tree (AST).

    -> Bytecode is generated from the AST.

    -> This phase does NOT execute the code, NOR does it create execution contexts, but checks for syntax errors.

    -> Hoisting does not occur here.



  --> 2️⃣ Execution Context Creation Phase (Hoisting Happens Here) (a.k.a. Memory Allocation Phase)

    -> JavaScript creates the Global Execution Context (GEC).

    -> Before running the code line by line, it first allocates memory for:

      -> Variables (var → undefined, let and const → uninitialized in Temporal Dead Zone).

      -> Function declarations → hoisted with their entire function body.

    -> The global object (window in browsers, global in Node.js) is created.

    -> "this" is set (e.g., window in browsers).

  -> At this point, the JS engine is NOT executing the code yet—it’s just allocating memory.

  -> Memory allocation happens before execution begins, but hoisting is a result of how memory is allocated, not a separate step.



  --> 3️⃣ Execution Phase (Code Runs Line by Line)

    -> Variables are assigned their actual values (instead of undefined or TDZ) when the code reaches them.

    -> Function calls trigger Function Execution Contexts (FECs).

*/
