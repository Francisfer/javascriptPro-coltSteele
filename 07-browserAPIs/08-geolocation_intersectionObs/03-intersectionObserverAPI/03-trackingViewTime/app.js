"use strict";

/* --------------------------------- Tracking View Time --------------------------------- */

/* 

--> Now let's try something a bit more interesting.

  -> Instead of printing the percentage of the element that is visible on the viewport, let's do some basic analytics and track how long this add is viewed in a given user session.

  -> So, we need the intersection observer api and some time or date math every time it comes into view and then leaves the view.

  -> Basically, subtract the time that it leaves from the time that it enters the view.

  -> We use the "time" entry property.

  -> We have an array of viewTimes to add as our intersections occur.

  -> We could do something with it.

*/

// TRACKING HOW LONG AN AD IS VISIBLE

let adViewTimes = [];
let adVisibleStartTime;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;
      if (isIntersecting) {
        // As soon as the add is visible we assign the start time.
        adVisibleStartTime = Date.now();
      } else if (adVisibleStartTime) {
        // add has been visible (adVisibleStartTime is defined) but no longer is visible
        let adViewDuration = Date.now() - adVisibleStartTime;

        // we push it to the array
        adViewTimes.push(adViewDuration);
        console.log(`Ad was viewed for ${adViewDuration}`);
        console.log(adViewTimes); // [1518, 1052, 1168]

        // Then we need to reset the visible start time, so that the next time it becomes visible we update the adVisibleStartTime.
        adVisibleStartTime = undefined;
      }
    });
  },
  {
    threshold: [0.5],
  }
);

const ad = document.querySelector(".ad");
observer.observe(ad);

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       const { isIntersecting } = entry;
//       const { id } = entry.target;
//       if (isIntersecting) {
//         console.log(`${id} ad is visible`);
//       } else {
//         console.log(`${id} ad is NOT visible`);
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// const ads = document.querySelectorAll(".ad");
// ads.forEach((ad) => observer.observe(ad));
