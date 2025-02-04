"use strict";

/* --------------------------------- Request animation frame with timestamps --------------------------------- */

/* 

--> Here is an example of using request animation frame with a timestamp to do some math and create a one second animation.

  -> So when we click the button, no matter if we are at the middle of the page or at the bottom, it takes us to the top of the page in one second (very approximately). 

  -> This means that, if we are near the top of the page, the animation will be smoother (takes one second but the distance is shorter) and if we are at the bottom it will be less smoother.

  -> Also keep in mind that this is not an infinite animation like we did with the squares.

    -> Here, all happens just when the button is clicked. 

    -> So, the logic with the timestamps changes a bit.
*/

function smoothScrollToTop() {
  // Decides how long the animation should take:
  const duration = 1000; // Duration in milliseconds

  // Gets the current vertical position - distance from the top of the page (0 if we are at the very top)
  const start = window.scrollY;

  // End position of the scroll - set to zero because that is our target y position (top of the page)
  const end = 0;

  // Total change in position that we need to get to the top (what we need to subtract to start)
  const change = end - start; // Negative number

  // Like before, state variable that stores startTime of the animation, so we can calculate how much time has passed between each animation frame (currentTime - startTime).

  // We just need to store the start time of the animation on click. It will tell us how much time has elapsed in the animation.
  let startTime = null;

  // This is the function that does the animation itself.
  function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;

    // Time elapsed is the number of milliseconds passed since the animation started. So, the time elapsed between each frame. gets updated at each function call.
    const timeElapsed = currentTime - startTime;

    console.log(currentTime, startTime, timeElapsed);

    // This variable is going to calculate is going to calculate the progress of the as a fraction (decimal) between 1 and 0.
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + change * progress);
    // console.log(timeElapsed);
    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  requestAnimationFrame(animateScroll);
}

document
  .querySelector(".back-to-top")
  .addEventListener("click", smoothScrollToTop);

/* 
  --> Chat gpt  
*/

// function smoothScrollToTopTenPercent() {
//   function animateScroll() {
//     const currentY = window.scrollY;
//     const step = Math.max(10, currentY * 0.1); // Moves 10% of distance per frame
//     window.scrollTo(0, currentY - step);

//     if (currentY > 0) {
//       requestAnimationFrame(animateScroll);
//     }
//   }

//   requestAnimationFrame(animateScroll);
// }

// document
//   .querySelector(".back-to-top")
//   .addEventListener("click", smoothScrollToTopTenPercent);
