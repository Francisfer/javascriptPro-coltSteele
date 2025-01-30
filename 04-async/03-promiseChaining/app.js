"use strict";
/* --------------------------------- Chaining Promises --------------------------------- */

/* 

--> We have learned about how to use the then() and catch() methods when working with promises.

--> However, even like this, we are not quite rid of the callback hell, after all, we are still using callbacks for the both methods.


  -> Imagine that we needed to make three requests in sequence. It is a nightmare.

*/

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log("RESPONSE 1 ", res1);
    fetch(`${BASE_URL}/2`)
      .then((res2) => {
        console.log("RESPONSE 2 ", res2);
        fetch(`${BASE_URL}/3`)
          .then((res3) => {
            console.log("RESPONSE 3 ", res3);
            fetch(`${BASE_URL}/2`)
              .then((res4) => {
                console.log("RESPONSE 4 ", res4);
              })
              .catch((error) => console.log("ERROR!!!", error));
          })
          .catch((error) => console.log("ERROR!!!", error));
      })
      .catch((error) => console.log("ERROR!!!", error));
  })
  .catch((error) => console.log("ERROR!!!", error));

/* 

--> There is a better way of doing this, although it is yet the best one.

  -> This is called promise chaining.

  -> Inside of our then() callback, we can return a new promise and then chain then() methods in a flat way.

  -> Remember that these requests are in order, like they where depending on one another.

  -> Like this, we can catch the error at the end of the chain because we are returning a new fetch promise at each then() method.
  
  
*/

fetch(`${BASE_URL}/1`)
  .then((res1) => {
    console.log("RESPONSE 1 ", res1);
    return fetch(`${BASE_URL}/2`);
  })
  .then((res2) => {
    console.log("RESPONSE 2 ", res2);
    return fetch(`${BASE_URL}/3`);
  })
  .then((res3) => {
    console.log("RESPONSE 3 ", res3);
    return fetch(`${BASE_URL}/4`);
  })
  .then((res4) => {
    console.log("RESPONSE 4 ", res4);
  })
  .catch((error) => console.log("ERROR!!!", error));
