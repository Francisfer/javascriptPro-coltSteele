"use strict";

/* --------------------------------- Debouncing --------------------------------- */

/* 

--> Debouncing is some of the use cases for settimeout and setInterval.

  -> Debouncing is a concept that involves making sure that a function is not called to frequently.

  -> Essentially adding a pause before some function is run or we execute some code.

  -> A real common use case for this has to do with events.

    -> If we are setting up a search field, we can do a live search and as we type, an api will be queried.

    -> So, we might want to implement some sort of live search where, as we type, we are querying an api behind the scenes.


  -> This simulates querying to an api directly.

  -> The event that we listen for is the "input" event.

  -> The input event is emitted each time you press a keyboard key. This means that, like this, we are querying the api at each keystroke.

  -> This is absurd of course because of the number of API calls.

  -> However, it would be nice to have some live search functionality.



--> This is where debouncing comes in.

  -> What we can do is to add a little delay and only query the api when the user stopped typing for, half a second for ex.

  -> Debouncing is very important and plays a significant role in modern front-end, specially event driven programming.

*/

// function queryAPI() {
//   console.log("Making an API request!");
// }

const searchInput = document.querySelector("#search");

// This does not help us a lot, because all the queries are done, they are just done after the specified amount of time

// searchInput.addEventListener("input", function () {
//   setTimeout(() => {
//     queryAPI();
//   }, 400);
// });

// What we need to do is to reset / clear the timeout at each click, so that it can run only if the user stops typing for the specified amount of time.

// let debounceTimeout; // We declare the timer here.

// searchInput.addEventListener("input", function () {
//   clearTimeout(debounceTimeout); // Clear it at each click and setting another right after.

//   // Redefine new time out. Click -> clear and restart -> click -> clear and restart -> No click -> api call

//   debounceTimeout = setTimeout(() => {
//     queryAPI();
//   }, 400);
// });

/* --------------------------------- Fancy Debouncing Function --------------------------------- */

/* 

--> What if we want 3 or 4 inputs with this functionality on the page? 

  -> Of even different functions that we want to call with some debounce delay?

  -> We would have to repeat the previous logic, have other global variables so it would not be good.

  -> So, we write a higher order function.


*/

// function debounce(callback, delay) {
//   let timeoutID;

//   return function () {
//     if (timeoutID) clearInterval(timeoutID);

//     timeoutID = setTimeout(() => {
//       callback();
//     }, delay);
//   };
// }

// const debouncedQueryAPI = debounce(queryAPI, 1000);

// searchInput.addEventListener("input", debouncedQueryAPI);

/* 

--> At this point it works, but it is not perfect.

  -> Having this functionality makes it so that we need what is actually being typed to make the query.

  -> This means that we need to pass arguments into the callback.

    -> Since these arguments are available on the event, we cannot use bind to pass the values as "this"


*/

function queryAPI(searchTerm, justToUnderstand) {
  console.log(`Searching the API for: ${searchTerm}`);
  console.log(justToUnderstand);
}

function debounce(callback, delay) {
  let timeoutID;

  // Arbitrary number of args, the rest syntax because we are assigning args. remember (puts the rest on an array)
  return function (...args) {
    if (timeoutID) clearInterval(timeoutID);

    timeoutID = setTimeout(() => {
      // Here we use the spread syntax so that the callback is called with the parameters that accepts, this is what makes the debounce function truly reusable.
      callback(...args);
    }, delay);
  };
}

const debouncedQueryAPI = debounce(queryAPI, 1000);

searchInput.addEventListener("input", (e) => {
  debouncedQueryAPI(e.target.value, "Passing more than one argument");
});

// just to remember:

function restSyntax(...args) {
  console.log(...args);
}

restSyntax("hello", 2, "hi", undefined);
