"use strict";

/* --------------------------------- ++x and x++ --------------------------------- */

/* 

--> We need to cover some quirks with the increment operators. Both the pre increment and post increment can be used to add a 1 to some numeric value, in a variable for ex.

  -> Pre increment (++x).

    -> We first get the value of x in the expression and only then the value is incremented.

    -> That is why the value of y is still 3 when we do y = x++;

    -> Some tutorials say that the pre increment returns the current value before adding one.



  -> Post increment (++x).

    -> We first increment the value of x and only them we get its updated value.

    -> Like this, the post increment returns the value already updated.

*/

// Pre increment, the value of y is 3 because pre increment returns the

let x = 3;

let y = x++;

console.log(x); // 4
console.log(y); // 3 -> We incremented only after the value was read, making y to be set with 3.

let a = 3;

let z = ++a;

console.log(a); // 4

console.log(z); // 4
