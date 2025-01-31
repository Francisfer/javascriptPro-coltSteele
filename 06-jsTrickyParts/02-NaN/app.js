"use strict";

/* --------------------------------- NaN --------------------------------- */

/* 

--> This is a special value in javascript that we ofter will get when doing certain things like:

  -> Logical math errors like dividing 0 by 0.

  -> Taking the square root of a negative number.

  -> Conversion errors (making a number from a string).


-->> The most important thing to know about NaN is that every single value is unique, so NaN === NaN is false.


--> There are two ways for checking for NaN:

  -> Using the isNaN() function - not the best way.

    -> This function returns true if the provided value is NaN OR 
    
    -> If the value provided cannot be coerced into a number.

    -> It is better to see this function as something that tells you if something can be coerced into a number or not.

      -> That is why an empty array is 0, it is clearly not a number, but when coerced into a number we get 0.

  -> 

*/

console.log(0 / 0); // NaN

console.log(Number("abc")); // NaN

console.log(NaN === NaN); // false

console.log(isNaN(0 / 0)); // true

console.log(isNaN("23")); // false - because isNaN() does type coercion.

console.log(isNaN(Number("23"))); // false, same that is done above.

console.log(Number([])); // 0
console.log(Number("")); // 0

// so

console.log(isNaN([])); // false

console.log(isNaN("")); // false

/* 

--> The second option is less quirky, which is to use the Number.isNaN().

  -> This function checks if a value is truly NaN, without type coercion.

  -> It returns true only if the value is NaN, everything else is false.

*/

console.log(Number.isNaN(0 / 0)); // true
console.log(Number.isNaN("abc")); // false
console.log(Number.isNaN("23")); // false
console.log(Number.isNaN([])); // false
console.log(Number.isNaN("")); // false
