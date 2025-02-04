"use strict";

/* --------------------------------- Request animation frame --------------------------------- */

/* 

--> The next timing related function we will look at is called requestAnimationFrame.

  -> This function is specifically designed for animations, so, anytime that we have some repeated movement or transformation of what a user sees visually on the page.

  -> It is designed to be as optimized as possible, to create smooth animations.

  -> The way that it works is, instead of us setting a specific interval, like every 16 milliseconds, it will run the function we provide before the next repaint of the webpage.
  
  -> The repaint is usually 60 frames per second but it depend on things like gpu usage, the refresh rate of the users monitor.

  -> Long story short, it help us build more performant animations.


--> The first animation is done with setinterval, meaning that it is an infinite animations, which would be better to do with css.

  -> However, there are situations where we need to do animations with javascript.

  -> For this, it is better done using request animation frame.

  -> This function receives one argument, a callback function to run. It will run the callback right before the next browser paint.

  -> So, before the browser updates what is seen on the screen. So we don't specify the mill seconds.

*/

const boxInterval = document.getElementById("boxInterval");
const boxAnimationFrame = document.getElementById("boxAnimationFrame");

// Without request animation frame - we use setInterval to call the function every 16 milliseconds, which is approximately 60 frames per second.

let intervalAngle = 0;

// Using setInterval
function animateWithInterval() {
  boxInterval.style.transform = `rotate(${String(intervalAngle)}deg)`;
  intervalAngle += 2;
}

// Start the animation:
// setInterval(animateWithInterval, 16); // 60 fps approx not flexible to variables like refresh rate or browser's paint rate.

// Using request animation frame.

let animationFrameAngle = 0;

function animateWithAnimationFrame() {
  boxAnimationFrame.style.transform = `rotate(${String(
    animationFrameAngle
  )}deg)`;
  animationFrameAngle += 2;

  // Here we re call animateWithAnimationFrame (recursively). Making it in sync as much as possible with the actual browser's paint rate / monitor refresh rate etc.

  // We say, right before the next render, call this callback.
  requestAnimationFrame(animateWithAnimationFrame);
}

// Like this, nothing happens because requestAnimationFrame runs one time. So, it runs the callback once.

// What we need is to also re call the function recursively, inside of the callback.

// Here we say, right before the next render, call this callback

// requestAnimationFrame(animateWithAnimationFrame);
