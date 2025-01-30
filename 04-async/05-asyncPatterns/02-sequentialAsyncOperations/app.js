"use strict";
/* --------------------------------- Sequential Async Operations --------------------------------- */

/* 

--> Here, we have several async operations to do (ajax calls), but we need to do them in sequence.

  -> In other words, we need to make several requests but the order does matter.

*/

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

// --------------------------------- With .then() and .catch() --------------------------------- //

const results = [];

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    results.push(res1);
    console.log("REQUEST 1 FINISHED");
    return fetch(`${BASE_URL}/2`);
  })
  .then((res2) => {
    results.push(res2);
    console.log("REQUEST 2 FINISHED");
    return fetch(`${BASE_URL}/3`);
  })
  .then((res3) => {
    results.push(res3);
    console.log("REQUEST 3 FINISHED");
    return fetch(`${BASE_URL}/4`);
  })
  .then((res4) => {
    results.push(res4);
    console.log("REQUEST 4 FINISHED");
  })
  .catch((error) => console.log("ERROR!!!", error));

console.log(results);
// --------------------------------- With async await --------------------------------- //

const getResponse = async function (url) {
  try {
    const res1 = await fetch(`${url}/1`);
    console.log("REQUEST 1 FINISHED");

    const res2 = await fetch(`${url}/2`);

    console.log("REQUEST 2 FINISHED");

    const res3 = await fetch(`${url}/3`);

    console.log("REQUEST 3 FINISHED");

    const res4 = await fetch(`${url}/4`);

    console.log("REQUEST 4 FINISHED");

    const results = [res1, res2, res3];
    console.log(results);
  } catch (error) {
    console.log("ERROR!!!", error);
  }
};

getResponse(BASE_URL);
