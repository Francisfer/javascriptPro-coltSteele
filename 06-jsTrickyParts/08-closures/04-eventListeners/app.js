"use strict";

/* --------------------------------- Event Listeners --------------------------------- */

/* 

--> Another place where we might run into closures is around event listeners.

  -> A pattern that used to be quite common is to have an event listener that needs to update or have some sort of state.

  -> By state we mean some piece of data that is constantly updated. 

  -> One simple example would be a counter attached to a button. So when we click we want to increment the count.

*/

// One way is to pollute the global namespace with a variable:

const btn = document.querySelector("button");

let count = 0;

// btn.addEventListener("click", function () {
//   ++count;
//   console.log(`You clicked me ${count} times.`);
// });

// const counter = createCounter();

// btn.addEventListener("click", counter);

// However, if we have several buttons and each has to update the count (or other data), we needed several global variables to keep track.

// So, we can rewrite this to create a closure:

function createCounterButton(id) {
  let count = 0;
  const btn = document.getElementById(id);

  btn.addEventListener("click", function () {
    ++count;
    btn.innerText = `Clicked ${count} times.`;
  });
}

createCounterButton("btn1");
createCounterButton("btn2");
createCounterButton("btn3");

// It works, but it adds an event listener for each button. It would be better with event delegation
