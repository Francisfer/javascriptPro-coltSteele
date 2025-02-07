"use strict";

/* --------------------------------- getUserMedia api --------------------------------- */

/* 

--> This api allows us to access the webcam, microphone and any other media streams.

  -> Audio and video are the main ones.

  -> It is an api that is heavily locked down and requires very specific permissions from a user.

  -> What we are going to do is ask for permission to access the users video from a webcam and then render that on the page, on a video element.

  -> For this, we call getUserMedia(), which will ask the user for permission to access the video device in this case.

  -> If the user grants permission, the browser will capture that media data from the webcam and provide it to us in the form of a media stream object.

  -> This media stream object can provide audio, video and we will start with video.

  -> If we reject access we get app.js:37 Uncaught (in promise) NotAllowedError: Permission denied. So we need to handle it.

*/

// We can do this on page load and we need to pass in an object of constraints. This is async and promisified, so we will do it on the button click.

const btn = document.querySelector("#startStream");
const videoElement = document.querySelector("#videoElement");

btn.addEventListener("click", async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    videoElement.srcObject = stream;
  } catch (error) {
    console.error(error.message);
  }
});
