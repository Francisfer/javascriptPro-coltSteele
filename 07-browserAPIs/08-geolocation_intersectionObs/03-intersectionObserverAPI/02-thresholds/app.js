"use strict";

/* --------------------------------- Intersection Observer thresholds --------------------------------- */

/* 

--> When we create a new intersection observer, we can pass in a second argument of options as an object.

  -> One of the most important options / parameters is the threshold.

  -> Threshold allows us to specify how much of the element should be visible before the callback is triggered.

  -> This means that if we set the threshold to 0, as soon as 1px of the element is visible on the viewport, the callback is triggered. 

    -> The same for the opposite, as soon as the entire element is out of the viewport, the callback fires.



  -> If we set the threshold to 1, the callback is fired only when 100% of the element is visible on the page. We can, if fact thing of the threshold as a percentage.

    -> As for the opposite, the callback fires whenever less than 100% of the element is visible on the page, so, as soon as 1px gets out of the viewport, the callback fires.

    -> Think of 1 as the entire element has to be visible on the page, otherwise the callback is triggered. 
*/

// 1. Setting up the observer.

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       console.log(entry);

//       if (entry.isIntersecting) {
//         console.log("Add is visible");
//       } else {
//         console.log("Add is not visible");
//       }
//     });
//   },
//   {
//     threshold: 1,
//   }
// );

// const ad = document.querySelector(".ad");
// observer.observe(ad);

/* --------------------------------- An array of thresholds --------------------------------- */

/* 

-> We can provide an array of thresholds.

  -> With multiple thresholds defined, the callback will be triggered each time the visibility passes one of those thresholds.

  -> threshold: [0, 0.25, 0.5, 0.75, 1]

    -> This means that the callback will fire when 1px of the element is visible on the viewport(0),

    -> When 25% is visible, 50%, 75%, and 100%.

    -> When we log the entry, we see that these values are in the intersectionRatio property, so we can do a little math and log the percentage.

*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const percentage = Math.round(entry.intersectionRatio * 100);
        console.log(`${percentage}% of the element visible.`);
      } else {
        console.log("Add is not visible");
      }
    });
  },
  {
    threshold: [0, 0.25, 0.5, 0.75, 1],
  }
);

const ad = document.querySelector(".ad");
observer.observe(ad);
