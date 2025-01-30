"use strict";
/* --------------------------------- Promises --------------------------------- */

/* 

--> Promises are a mechanism for handling async operations in a structured and manageable way.

--> A promise is the promise of a future value. They are used to represent the eventual completion or failure of an async operation.

  -> They allow us to write cleaner code.

  -> To compose and chain async operations together, making it easier to handle errors and handle complex async flows throughout our code.


--> For this, promises are very critical to understand.

  -> Promises have three different states:

    -> Pending - It does not yet have a value. That is why if we log it or work with it immediately, there is no value yet.

    -> Resolved - It has successfully obtained a value.

    -> Rejected - It failed to obtain a value for some reason. Normally upon internet failure.

--> Let's start by using the fetch function.

  -> The api returns json.

*/

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";
const url = `${BASE_URL}/1`;

const promise = fetch(url);
// console.log(promise); // Promise {<pending>}

/* --------------------------------- .then() and .catch --------------------------------- */

/* 

--> We already saw that we cannot immediately obtain a result to work with because we must wait for the promise to return a value.


--> In order to gain access to the data (the value that the promise is either resolved or rejected with), there are two methods that we chain on the promise object.

  -> We can chain these methods because fetch returns a promise object.

  -> Both these methods accept callbacks.

    -> .then() - whatever callback we pass to the .then() method will be run only when the promise is resolved. Also, it will gain access to the promise resolved value.

      -> After the fetch() method (which is a request to the api in this example), we get a response with information like the status code, the headers, response.ok (to use for error handling).


    -> .catch() -  the callback that we provide to the catch method will run if the promise is rejected, typically having access to the error information that caused the rejection.

*/

// const request = fetch(url)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log("ERROR!!!", error);
//   });

const request = fetch(url)
  .then((response) => console.log(response))
  .catch((error) => console.log("ERROR!!!", error));
