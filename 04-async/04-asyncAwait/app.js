"use strict";
/* --------------------------------- Async Await --------------------------------- */

/* 

--> async and await where a real useful improvement in javascript that simplifies working with promises.


--> These are keywords that are now native to the language, they help us work with promises.


--> Specifically, to work with them, we can declare any function to be an async function.

  -> An async function always returns a promise.

  -> Inside the async function, we can write code that looks like sync but it actually isn't.

    -> We don't have to deal with .then() and .catch() or callbacks. We can use them inside of an async function, but we don't have to.


--> The second keyword is the await keyword.

  -> This keyword can only be used inside of an async function, unless we are working with modules.

  -> What it does, is to pause the execution of the function and await a promise that is waiting to be resolved.

  -> Once the promise is resolved, the code moves to the other line.

  -> It is kind of a pause buttons that allows us to pause execution inside of a function until a promise is resolved.
  
  -> (or to wait for the execution of other async functions that we may call inside of the current one).


--> In the example, the code pauses execution on res1 and does not pass to the log until the promise is resolved.

  -> Again, this is done in sequence, like one request depended on another.

*/

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

const getResponse = async function (url) {
  try {
    const res1 = await fetch(`${url}/1`);
    console.log("RESPONSE 1 ", res1);

    const res2 = await fetch(`${url}/2`);
    console.log("RESPONSE 2 ", res2);

    const res3 = await fetch(`${url}/3`);
    console.log("RESPONSE 3 ", res3);

    const res4 = await fetch(`${url}/4`);
    console.log("RESPONSE 4 ", res4);
  } catch (error) {
    console.log("ERROR!!!", error);
  }
};

getResponse(BASE_URL);

// fetch(`${BASE_URL}/1`)
//   .then((res1) => {
//     console.log("RESPONSE 1 ", res1);
//     return fetch(`${BASE_URL}/2`);
//   })
//   .then((res2) => {
//     console.log("RESPONSE 2 ", res2);
//     return fetch(`${BASE_URL}/3`);
//   })
//   .then((res3) => {
//     console.log("RESPONSE 3 ", res3);
//     return fetch(`${BASE_URL}/4`);
//   })
//   .then((res4) => {
//     console.log("RESPONSE 4 ", res4);
//   })
//   .catch((error) => console.log("ERROR!!!", error));

/* --------------------------------- Errors --------------------------------- */

const fetchFakeWebsite = async function () {
  try {
    const response = await fetch("http://nope.nope");
    console.log(response);
  } catch (error) {
    console.error("Website not Found!");
  }
};

fetchFakeWebsite();
