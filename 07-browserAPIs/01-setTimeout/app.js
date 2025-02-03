"use strict";

/* --------------------------------- Settimeout() --------------------------------- */

/* 

--> Settimeout executes a function after waiting a specified number of milliseconds.

  -> This function is a callback, which is called to settimeout once the time has passed.

  -> A settimeout defined in the global scope has the "this" keyword pointing to the global object (window).

  -> There is a bunch of possible use cases for settimeout(), but one of them is to have a notification that disappears after a certain number of seconds.

  -> -> When we call setInterval or settimeout, the function returns an is, that is what we store into a variable, so that we stop that timer with the specific id that it returns. 

  -> We also have clearTimeout(), with the same rules as clearInterval(). It does not make much sense here, but it will when we talk about debouncing.

*/

function showNotification(message, duration) {
  const notification = document.createElement("div");
  notification.innerText = message;
  notification.style.color = "#3f3f";

  document.querySelector(".container").appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, duration * 1000);
}

showNotification("Im gone in four seconds.", 4);

// To show an example of clearing setTimeout. If, after 5 seconds we don't click the button, we go to google.

const btn = document.querySelector(".cancel");

// const intervalId = setInterval(() => {
//   window.location = "http://www.google.com";
// }, 4000);

btn.addEventListener("click", function () {
  clearInterval(intervalId);
  console.log("Redirection aborted");
});
