"use strict";
/* --------------------------------- Parallel Async Operations --------------------------------- */

/* 

--> Here, we have several async operations to do (ajax calls), but we don't need to do them in sequence.

  -> We want to do something as the promises return.

  -> In other words, we need to make several requests but the order does not matter.

*/

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

// --------------------------------- With .then() and .catch() --------------------------------- //
const results = [];

fetch(`${BASE_URL}/1`).then((response) => results.push(response));
fetch(`${BASE_URL}/2`).then((response) => results.push(response));
fetch(`${BASE_URL}/3`).then((response) => results.push(response));
fetch(`${BASE_URL}/4`).then((response) => results.push(response));

console.log(results); // The order changes because they do not depend on the previous.

// --------------------------------- With async await --------------------------------- //

// We can of course refactor this into one function, but see the flow.

const results1 = [];

async function getPokemon(nr) {
  const res = await fetch(`${BASE_URL}/${nr}`);
  results1.push(res);
  console.log(`Request ${nr} finished`);
}
// async function getPokemon2() {
//   const res2 = await fetch(`${BASE_URL}/2`);
//   results1.push(res2);
//   console.log("Request 2 finished");
// }
// async function getPokemon3() {
//   const res3 = await fetch(`${BASE_URL}/3`);
//   results1.push(res3);
//   console.log("Request 3 finished");
// }

// getPokemon1();
// getPokemon2();
// getPokemon3();

getPokemon(1);
getPokemon(2);
getPokemon(3);
console.log(results1);
