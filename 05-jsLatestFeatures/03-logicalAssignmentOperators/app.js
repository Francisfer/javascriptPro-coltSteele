"use strict";

/* --------------------------------- Logical OR Assignment Operator --------------------------------- */

/* 

--> We use the ||= operator to set values to properties that are currently falsy.

  -> Remember that the || operator short circuits when a truthy value is found and returns it.

  -> We can say that it looks for the truthy value.

  -> So, any falsy value on the left-hand side will trigger assignment to the right-hand value.

  -> This is just a syntax cleaner, notice that, so assign a value we need the () for the evaluation to run.



--> This is most frequently used when updating values in an object.
*/
console.log(0 || null || true); // true - finds and returns the truthy

const todo = { priority: "", task: "Finish Editing Course" };

// Instead of:

todo.priority || (todo.priority = "Medium");

// We can do:

todo.priority ||= "Medium";

/* --------------------------------- Logical AND Assignment Operator --------------------------------- */

/* 

--> This operator is not used as much, but it is the same idea.

  -> The && operator short circuits whenever a falsy value is encountered and returns it.

  -> We can say that it looks for the truthy value.

  -> This means that, by using the && assignment operator, the value will only be assigned if the property already has a truthy value.

  -> If the property has a falsy value, the operation short circuits.

*/
console.log(0 && null && true); // 0 finds and returns the falsy

// -> The expression can be read as, check to see if num is truthy and, if it is, do something.

let num = 10;

num && (num = 40);

console.log(num); // 40

// Short circuiting

let num2 = null;

num2 &&= 40;

console.log(num2); // null

/* 

--> Imagine that we are building an app where we may or may not have a logged in user object.

  -> If the user is logged in, we want to make a copy of the logged in user and set the user's color preference.

*/

// One way of doing this would be with a conditional:
let user = {
  userName: "Taco",
  isLoggedIn: true,
};

if (user) {
  user = { ...user, colorPreference: "purple" };
}

console.log(user); // {isLoggedIn: true, colorPreference: 'purple'}

// Or we can use the && assignment operator.

user.isLoggedIn &&= user = { ...user, colorPreference: "red" };

console.log(user); // {isLoggedIn: true, colorPreference: 'red'}

/* --------------------------------- Logical Nullish Coalescing Assignment Operator --------------------------------- */

/* 

--> Just like the ??, it works with the concept of nullish values.

  -> So, it will only evaluates the second operand if the first is null or undefined.

  -> Like this, if the value is null or undefined, assign it / update it to something.

*/

let score;

score ??= 0;

console.log(score); // 0

/* 

--> In the following example, we have a function that expects an object of options that will default to an empty object.

  -> Inside the function, we use the ??= to assign default values to properties IF they are null or undefined.

*/

function doSomeSetup(options = {}) {
  options.timeout ??= 3000; // default timeout to 3 seconds if it is null or undefined.

  options.retries ??= 5; // default retries to 5 if it is null or undefined,

  console.log(options);
}

doSomeSetup(); // {timeout: 3000, retries: 5}

doSomeSetup({ timeout: 100, retries: 10 }); // {timeout: 100, retries: 10}

// Most importantly, if we want them to be 0:

doSomeSetup({ timeout: 0, retries: 0 }); // {timeout: 0, retries: 0}
