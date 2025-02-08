"use strict";

/* --------------------------------- Observing multiple entries --------------------------------- */

/* 

--> 
*/

// TRACKING HOW LONG AN AD IS VISIBLE

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {});
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
