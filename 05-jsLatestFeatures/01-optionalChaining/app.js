"use strict";
/* --------------------------------- Optional Chaining --------------------------------- */

/* 

--> Optional chaining allows us to easily read the value of a property located deep within a chain of connected objects (or a nested object) without having to check each reference in the chain.


  -> Usually we get the user data from an api or a database, which can be super inconsistent. That is what this function replicates.

  -> The point is that the data is inconsistent and, to check if a property has a value, we need to check it first.

  -> Keep going after the function.

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

// const age = user?.age ?? "IDK THE AGE";
// console.log("AGE IS ", age);

/* 

--> To get the value of a certain property we need to follow the structure of the created object.

  -> However, as we've seen, that property can or cannot exist. Also, it can exist but is value is undefined or null.

  -> To retrieve the value of a certain property we usually do what follows, however we are making a log of assumptions.

  -> 1. So, before the optional chaining functionality, we would have to do something like use short circuiting to evaluate the chain

    -> The && operator short circuits as soon as one value is falsy. So, if one of the properties does not exist, the evaluation on the chain stops and UNDEFINED is returned.

    -> It is better than assuming that the property exists because, like this, we don't get an error, we just get undefined and the code keeps running.



  -> 2. With optional chaining, we avoid using the logical operators extensively, the syntax is much lighter.

    -> This is specially useful when we are trying to retrieve a value that is deeply nested.

    -> With optional chaining we evaluate if a property exists before moving to the next property.

      -> const city = user?.address?.city;

    -> This code is the same as: does user exists? then get the address. Does address exists? than get the city.

      -> If one of the properties evaluates to null or undefined, we end up with undefined.

      -> Like this, we prevent the error in the same way and have a cleaner syntax.

      -> We can use optional chaining to call methods, if they exist.

*/

const user = getUser();
console.log(user);

// WHEN NO EVALUATIONS ARE DONE WHATSOEVER.

// We are assuming that name definitively exists and first exists on name.

// const firstName = user.name.first; // The error happens right here, it does not appear just when we are trying to use this value.

// console.log("First name:", firstName); // Sometimes a name, sometimes an error because we are reading first from undefined (when the user does not have a name).

console.log("Code stops here because there was an error, so i don't log!");

// 1. BEFORE OPTIONAL CHAINING:

const firstName1 = user && user.name && user.name.first;
console.log("First name:", firstName1); // the name or undefined

console.log(
  "Code continues when we try to read a property that does not exist..."
);

// 2. WITH OPTIONAL CHAINING.

const firstName2 = user?.name?.first;
console.log("First name:", firstName2); // the name or undefined

// To get the address (longitude) the old school way:
const long =
  user &&
  user.address &&
  user.address.coordinates &&
  user.address.coordinates.long;
console.log(long); // The longitude or undefined

// Vs with optional chaining:
const longitude = user?.address?.coordinates?.long;
console.log(longitude); // The longitude or undefined

// Optional chaining with methods:

user?.greet?.(); // HELLO THERE! I AM A USER!!!

const userGreet = user?.greet?.();
console.log(userGreet); // undefined if it does not exist.
/* --------------------------------- Nullish Coalescing Operator --------------------------------- */
