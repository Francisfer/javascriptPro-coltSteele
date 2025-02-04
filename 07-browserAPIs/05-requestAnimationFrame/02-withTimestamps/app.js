"use strict";

/* --------------------------------- Request animation frame with timestamps --------------------------------- */

/* 

--> The next thing that we need to know about request animation frame is that it automatically passes an argument to the callback function, every time RAFrame runs.

  -> This means that we can capture it inside the function which is the callback.

  -> This argument is a high resolution timestamp in milliseconds. It is not tied to any particular time or date.

  -> Its sole purpose is to be used in calculating how much time has elapsed between animation frames.

  -> console.log(currentTime); -> a bunch of current timestamps that keeps increasing.

  -> What we can do is to used this to figure out how much time has elapsed between each frame.

  -> Remember that we are not in charge of when this is actually running, we are not telling it directly like we do with setInterval.

  -> We leave this to the browser to figure it out based on all variables like refresh rate of the monitor.

  -> However, if we need something to take exactly one second, imagine that we want the square to rotate for one second and then stop, we need to know how much time has passed between each frame.

    -> MAYBE THIS HAS TO DO WITH DIFFERENT REFRESH RATES OF MONITORS, IN HIGH REFRESH RATE MONITORS, 1SECOND MIGHT BE FASTER, WHILE IN LOW REFRESH RATE MONITORS 1S MIGHT BE SLOWER.

  -> Remember that this is different for users due to all the variables that we've mentioned. That is why we need to get this time dynamically.

  -> We will see in the next part what exactly does he mean by: using this time to make the animation duration TO BE 1S.

*/

const boxAnimationFrame = document.getElementById("boxAnimationFrame");
let animationFrameAngle = 0;

// We need an external / state variable

let previousTime;

function animateWithAnimationFrame(currentTime) {
  // To know how much time has passed, we need some logic.

  // console.log(currentTime - previousTime); // First log is NaN because we are subtracting currentT - undefined.

  previousTime = currentTime;

  boxAnimationFrame.style.transform = `rotate(${String(
    animationFrameAngle
  )}deg)`;
  animationFrameAngle += 2;

  requestAnimationFrame(animateWithAnimationFrame); // Passes an argument that we can capture
}

// requestAnimationFrame(animateWithAnimationFrame);
