"use strict";

/* --------------------------------- Nullish Coalescing Operator --------------------------------- */

/* 

--> This is an extremely useful operator.

  -> It works with the concept of nullish values, which means that it only evaluates if the values are null or undefined, ignoring the rest of the falsy values.

  -> It returns its right-hand operand when its left hand operand evaluates to null or undefined.

  -> Otherwise, it returns its left-hand operand. (because it does not evaluate to null or undefined).

  -> This is a way to handle default values more predictably than using the || operator (because the || works with the concept of falsy values).



--> This is how it works, but where we usually use this is to handle default values, to set up a default value, often when accessing values out of an object.

  -> When using the optional chaining operator, we could just avoid the error of trying to read a value from a property that didn't exist.

  -> So we used it to evaluate the chain and, if at some point a value does not exist, it returns undefined.


--> Before the nullish operator, setting up values used to be made with the || operator.

  -> However, using the || operator can be problematic (remember that || short circuits on the first truthy).

  -> With this, knowing that the || operator works with the concept of falsy values, if we have one on the left hand side, we will set our default value.

  -> This means that, if we actually want a value to be false or 0, we cannot get it with ||, because it will move until if finds a truthy value, in this case our default.

  -> This is where the nullish coalescing works, because it ignores the rest of the falsy values and only evaluates null or undefined.

  -> This allows us to read the values like "", 0 and false, and provide a default value only on null and undefined results.

*/

// Function that generates a random user
function getUser() {
  // Helper function to generate a random number
  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  // Possible user data
  const firstNames = ["John", "Raj", "Dave", "Sarah", "Rosa", "Esteban"];
  const lastNames = ["Hamilton", "Norris", "Bottas", "Tsunoda", "Sainz"];
  const emails = ["example.com", null, "sample.com", undefined, "demo.com"];
  const includeAddress = [true, false]; // Array to determine if address should be included

  const includeMethod = [true, false]; // Array to determine if method should be included

  // Randomly pick data or leave it undefined
  const firstName = firstNames[getRandomNumber(firstNames.length)];
  const lastName = lastNames[getRandomNumber(lastNames.length)];
  const emailDomain = emails[getRandomNumber(emails.length)];
  const age = getRandomNumber(4);
  const shouldIncludeMethod =
    includeMethod[getRandomNumber(includeMethod.length)];
  const shouldIncludeAddress =
    includeAddress[getRandomNumber(includeAddress.length)];

  // Construct a user object, email might be non-existent due to undefined emailDomain
  const user = {
    email: emailDomain
      ? `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}`
      : undefined,
    age: Math.random() > 0.5 ? age : null, // age will always exist, just for the sake of structure
  };
  if (Math.random() > 0.5) {
    user.name = {
      first: firstName,
      last: lastName,
    };
  }

  if (shouldIncludeAddress) {
    user.address = {
      street: "1234 Elm St",
      city: "Anytown",
      state: "CA",
      country: "USA",
      postalCode: "12345",
      coordinates: {
        lat: null, // let's assume the latitude is not available
        long: 35.12345, // longitude is available
      },
    };
  }

  // Sometimes include a method
  if (shouldIncludeMethod) {
    user.greet = function () {
      console.log(`HELLO THERE! I AM A USER!!!`);
    };
  }

  return user;
}

const user = getUser();
console.log(user);

// Setting up a default value using the || operator:
const firstName = user?.name?.first || "anonymous";

// Where the || can be problematic:
console.log(0 || "default"); // default
console.log(false || "default"); //default
console.log("" || "default"); //default
console.log(null || "default"); //default
console.log(undefined || "default"); //default

// With the nullish:

console.log(0 ?? "default"); // 0
console.log(false ?? "default"); // false
console.log("" ?? "default"); // ""

// A practical example with the function, sometimes a user can have an age of zero. We want to access the age out, even if it is zero, and provide a default value only if the value is undefined or null.

// Null will appear eventually.

const age = user?.age ?? "Age not defined";

console.log("Age is:", age); // Age is: 2 / Age is: 0 / Age is: Age not defined (when null)
