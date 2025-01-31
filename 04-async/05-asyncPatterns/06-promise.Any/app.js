"use strict";
/* --------------------------------- Promise.Any() --------------------------------- */

/* 

--> Another pattern that we might want is the ability to send out a bunch of async operations and then handle the very first one that is either rejected of fulfilled.

  -> For that we have the Promise.race() helper.

  -> It also accepts an array of promises and returns a new promise that resolves or rejects as soon as on promise in the array resolves or rejects.

  -> It only cares about the first one, resolved or rejected.

*/

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

const lotsOfFetchCalls = [
  fetch(`${BASE_URL}/1`),
  fetch(`${BASE_URL}/2`),
  fetch(`${BASE_URL}/3`),
  fetch(`${BASE_URL}/4`),
  fetch(`${BASE_URL}/5`),
  fetch(`${BASE_URL}/6`),
];

// With then()

Promise.race(lotsOfFetchCalls)
  .then((winner) => console.log(winner))
  .catch((err) => console.error(err));

// Async await

async function winnerPokemon(proArr) {
  const winner = await Promise.race(proArr);
  console.log(winner);
}
winnerPokemon(lotsOfFetchCalls);
