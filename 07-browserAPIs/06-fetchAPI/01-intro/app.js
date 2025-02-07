"use strict";

/* --------------------------------- fetch() --------------------------------- */

/* 

--> fetch is one of the most useful and one of the most commonly used apis.

  -> It is the standard way of making network requests from the browser. It is how we make an http request.

  -> We've talked about fetch in the async section because it is an async operation and it returns a promise.

  -> At the very minimum, we call fetch and provide it some url that we want it to go fetch some data from.

  -> Since fetch returns a promise, we need to either chain on a .then() or use async await.

  -> The result of awaiting fetch (the resolved value of that promise) is a response object, which does not contain the data that we want yet.

  -> This happens because fetch retrieves data as a readable stream, a stream that we can read by calling the json() method.

  -> This is the basic workflow, at least when we are retrieving information with a get request. Get request is the default of fetch.

*/

const POKE_URL = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon() {
  const response = await fetch(POKE_URL);
  console.log(response);
  const data = await response.json();
  console.log(data);
}

// fetch(POKE_URL)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

getPokemon();
