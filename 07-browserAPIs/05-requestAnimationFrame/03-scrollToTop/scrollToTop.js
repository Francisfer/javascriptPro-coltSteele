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

  // We just need to store the value on click, so that we do the calculations
  let startTime = null;

  // This is the function that does the animation itself.
  function animateScroll(currentTime) {
    if (startTime === null) startTime = currentTime;

    // Time elapsed between each frame of the animation.
    const timeElapsed = currentTime - startTime;
    console.log(currentTime, startTime, timeElapsed);
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
