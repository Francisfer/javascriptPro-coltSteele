"use strict";

/* --------------------------------- setInterval() --------------------------------- */

/* 

--> SetInterval is another timer function from the browser api.

  -> It will execute a function repeatedly, with a fixed time delay between each call.

  -> To remove this interval we need to use clearInterval(name / id). 

  -> When we call setInterval or settimeout, the function returns an is, that is what we store into a variable, so that we stop that timer with the specific id that it returns.


*/

function startCountDown(duration) {
  let count = duration;
  const pEl = document.querySelector(".timer");
  pEl.style.color = "#3f3f";
  pEl.textContent = `Ending in ${count}`;

  const timer = setInterval(() => {
    count--;
    if (count <= 0) clearInterval(timer);
    pEl.textContent = `Ending in ${count}`;
  }, 1000);
}

startCountDown(10);

console.log(setInterval(() => {}, 1000));

// function startCountDown(duration) {
//   let count = duration;
//   const pEl = document.querySelector(".timer");
//   pEl.style.color = "#3f3f";

//   // Initial update before setInterval starts
//   pEl.textContent = `Ending in ${count}`;

//   const timer = setInterval(() => {
//     count--;
//     if (count < 0) {
//       clearInterval(timer);
//       return;
//     }
//     pEl.textContent = `Ending in ${count}`;
//   }, 1000);
// }

// startCountDown(10);

// ONE SOLUTION TO ASSURE SECURE COUNT WITH TICK

// function startCountDown(duration) {
//   let count = duration;
//   const pEl = document.querySelector(".timer");
//   pEl.style.color = "#3f3f";

//   function tick() {
//     pEl.textContent = `Ending in ${count}`;
//     if (count === 0) return; // Stop when count reaches 0
//     count--;
//     setTimeout(tick, 1000);
//   }

//   tick(); // Start immediately
// }

// startCountDown(10);
