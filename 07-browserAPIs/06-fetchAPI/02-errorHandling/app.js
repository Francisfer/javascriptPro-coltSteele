"use strict";

/* --------------------------------- Error Handling with fetch() --------------------------------- */

/* 

--> The next most important thing to know about working with fetch is what happens when there is a bad request.

  -> When using async await, we handle errors with the try catch block.

  -> When handling promises directly with .then(), we add a catch block at the end.


--> Both work, however, so that we can see better what happens when there is a bad request, lets use the then() method approach.

  -> So we try to fetch an endpoint that does not exist, we get a 404.

  -> However, if we look at the error, we see "syntaxError".

  -> What this tells us is that the fetch actually worked, we ran into a problem when we tried to parse the response as json.

  -> In other words, the promise was resolved.

  -> The response body actually has ok set to false and the status code of 404, but fetch does not reject a promise if there is any negative status code. Only when there is no internet connection.

  -> This means that, if we really want to handle errors, including status errors, we need to handle them ourselves.

  -> For this we can use the response.ok and the status code from the body of the response.

*/

const POKE_URL = "https://pokeapi.co/api/v2/pokemon/blah/chickennuggets";

async function getPokemon() {
  try {
    const response = await fetch(POKE_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("SOMETHING WENT WRONG WITH THE FETCH CALL!");
    console.error(error);
  }
}

getPokemon();

// fetch(POKE_URL)
//   .then((response) => {
//     console.log(response);
//     console.log("THE FETCH WORKED!");

//     if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("SOMETHING WENT WRONG WITH THE FETCH CALL!");
//     console.error(error); // SyntaxError: Unexpected token 'N', "Not Found" is not valid JSON
//   });
