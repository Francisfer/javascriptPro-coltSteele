"use strict";
/* --------------------------------- Promise.all() --------------------------------- */

/* 

--> In this scenario we have a whole bunch of promises, like 10 or even 100.

  -> There is another async pattern which includes a helper method called Promise.all().

  -> It accepts an array of promises and returns a single new promise.

  -> The promise that it returns will resolve when every promise in the array resolves.

  -> The promise that it returns will reject if any promise in the array is rejected.


--> This is useful when we want to run some code only when all of the promises are resolved.

  -> But if one of them is resolved to rejected, the promise that Promise.all() returns is also rejected. 

*/

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

// --------------------------------- With .then() and .catch() --------------------------------- //

const lotsOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
];

console.log(lotsOfFetchCalls); // (6) [Promise, Promise, Promise, Promise, Promise, Promise]

// If we want some code to run when all of the promises are done, we use Promise.all()

Promise.all(lotsOfFetchCalls)
  .then((results) => {
    console.log("Promise.all() is done and resolved");
    console.log(results);
  })
  .catch((error) => {
    console.log("One of the promises rejected");
    console.warn(error);
  });

// --------------------------------- With async await --------------------------------- //

async function getLotsOfPokemon() {
  try {
    const results = await Promise.all(lotsOfFetchCalls);
    console.log("Promise.all() is done and resolved");
    console.log(results);
  } catch (error) {
    console.log("One of the promises rejected");
    console.warn(error);
  }
}

getLotsOfPokemon();
