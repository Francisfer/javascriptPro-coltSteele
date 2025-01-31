"use strict";
/* --------------------------------- Promise.Any() --------------------------------- */

/* 

--> Promise.any() is a new Promise utility method that takes an array (or iterable) of promises and returns a promise that will be fulfilled by the very first promise, in that iterable, that is settled with fulfilled.

  -> Or rejected if all of the promises in the iterable are rejected.


--> Hence the name "any". It is going to resolve with the value of the first promise that resolves or its fulfilled and it will only reject if every single promise in the array rejects.

--> Another pattern where we don't care if one promise fails immediately, we only care if they all fail. 

  - It is a race is some sense, but the difference is that the promise will only reject if all reject.

    -> Promise.race() gives us the very first promise that can either be rejected of fulfilled, so it gives us the first settled promise.

    -> Promise.any() waits for the very first promise that settles to fulfilled.



*/

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

const lotsOfFetchCalls = [
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`http://nope.nope`),
  fetch(`${BASE_URL}/2`),
  // fetch(`${BASE_URL}/3`),
  // fetch(`${BASE_URL}/4`),
  // fetch(`${BASE_URL}/5`),
  // fetch(`${BASE_URL}/6`),
];

async function getAny(promiseArray) {
  try {
    const response = await Promise.any(promiseArray);
    const data = await response.json();
    console.log(data.name);
  } catch (error) {
    console.error("All promises rejected", error);
  }
}

getAny(lotsOfFetchCalls);
