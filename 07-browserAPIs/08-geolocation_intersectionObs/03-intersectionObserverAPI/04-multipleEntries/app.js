"use strict";

/* --------------------------------- Observing multiple entries --------------------------------- */

/* 

--> Now let's observe two boxes, each has a different id, but the same class.

  -> The id is used to apply some styles, but we are going to use it to know which one is intersecting.

  -> To make the match logic, we use the target property of the entry object.

  -> The target is the element that is currently intersecting.
*/

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { isIntersecting } = entry;

      // The target has the classList, the className (useful if we only have one class) and the id.
      const { id } = entry.target;

      if (isIntersecting) {
        console.log(`${id} ad is visible`);
      } else {
        console.log(`${id} ad is not visible`);
      }
    });
  },
  {
    threshold: [0.5],
  }
);

const ads = document.querySelectorAll(".ad");

ads.forEach((ad) => observer.observe(ad));
