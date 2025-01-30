"use strict";
/* --------------------------------- Promise.allSettled() --------------------------------- */

/* 

--> 

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
