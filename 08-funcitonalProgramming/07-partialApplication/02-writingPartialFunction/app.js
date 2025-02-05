"use strict";

/* --------------------------------- Writing a Partial Function --------------------------------- */

/* 

--> In the previous lecture we've talked about partial application.

  -> Which is the idea of baking in one or more arguments into a function, and getting a new version of that function where we can pass the remaining arguments.

  -> So far, we have been using bind() to generate those partial applications.

  -> However, we can build a simple partial function.

    -> The idea of this partial function is that it will take in a function and the arguments that we want to be fixed.

    -> Like this, it will return a version of the initial function that has those arguments fixed in place.

*/

// Let's start with bind() to see the difference:

function multiply(a, b) {
  return a * b;
}

// With bind, we can create a function that doubles.

const double = multiply.bind(null, 2);

double(4); // 8

/* 

--> Now we write a function that will take the place of bind().

  -> This partial function is flexible, it wont bake in a single argument, we can bake in as many arguments as we want.

*/

function partial(fn, ...fixedArgs) {
  return function (...remainingArgs) {
    return fn(...fixedArgs, ...remainingArgs);
    // return multiply(2, ...remainingArgs);
  };
}

const triple = partial(multiply, 3);

console.log(triple(2)); // 6

/* 

--> Another example:

  -> params is an object.

  -> This allows us to reuse functions, make copies and versions of functions that we can use in different situations.

*/

function fetchData(url, apiKey, params) {
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = `${url}?${queryString}`;

  console.log(queryString); // option=2&something=ghs

  console.log(`Sending request to ${fullUrl}`);
  console.log(`With api key of: ${apiKey}`);
}

const myApiKey = "my-secret-api-key";
const myApiUrl = "https://api.mywebsite.com/data";

fetchData(myApiUrl, myApiKey, { option: 2, something: "ghs" });

// Now imagine that we are building an app that has three or four different apis, each with separate urls.

const googleApiKey = "google-secret-api-key";
const googleApiUrl = "https://api.google.com/data";

// What we can do is to use the partial function to bake in the api key and the url. Like that, we get a function for my website and another for google. Leaving the params as the remaining arguments

const fetchMyApi = partial(fetchData, myApiUrl, myApiKey);

const fetchGoogleApi = partial(fetchData, googleApiUrl, googleApiKey);

fetchMyApi({ id: 11111, sort: "descending" }); // Sending request to https://api.mywebsite.com/data?id=11111&sort=descending

fetchGoogleApi({ search: "polly" }); // Sending request to https://api.google.com/data?search=polly

// Another example, using different versions of the same functionality with taxes.

function calculateTax(rate, amount) {
  const total = amount * rate;
  const rounded = total.toFixed(2);
  return Number(rounded);
}

const calculateCAsalesTax = partial(calculateTax, 0.07);
const calculateNJsalesTax = partial(calculateTax, 0.06);

calculateCAsalesTax(3450); // 241.5
