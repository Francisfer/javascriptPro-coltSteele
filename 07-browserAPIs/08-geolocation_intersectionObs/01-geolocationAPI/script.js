"use strict";

/* --------------------------------- Geolocation API --------------------------------- */

/* 

--> This api makes it very easy to work with the location of the user, if they are willing to share it.

  -> We can display them on a map or show things that are near them.

  -> Older browsers don't support this. We have to check if the browser supports it.

  -> It is an async operation, so we are going to use some callbacks.


--> To work on a project that includes getting the location of a user, or to see if the changes of currency, date and time format are working:

  -> We can go to settings/locations, we can add locations to test things with.

  -> Then, if we go to the three dots and choose sensors, we can choose our location.


--> getCurrentPosition() is an async function that expects two callbacks, just like promises.

  -> Remember that we also have watchPosition, works the same way as for the callbacks, but triggers the success callback each time the position of the user changes. Gps.

  -> The first callback will run on success and returns the position data (object) itself.

  -> If the user refuses to grant permission to access the location, we get a GeolocationPositionError object with a code and a message ("User denied Geolocation").

*/

// To see if the browser supports it:

// if (navigator.geolocation) console.log("yes");

// To ask for the location on click.

const btn = document.querySelector("#getLocation");
const locationDisplayEl = document.getElementById("locationDisplay");

btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayGeoData, displayError);
  }
});

const displayGeoData = (position) => {
  const { latitude, longitude } = position.coords;
  locationDisplayEl.textContent = `Latitude: ${latitude}, ${longitude}`;
};

const displayError = (error) => {
  locationDisplayEl.textContent = `${error.message}`;
};
