"use strict";

/* --------------------------------- Intersection Observer api --------------------------------- */

/* 

--> This api provides a way to asynchronously observe changes in the intersection of a target element with its parent or the viewport.

  -> In this example we have an add and we want to keep track of when this ad is actually being shown to the user.

  -> Basically we want to know when the ad is in the viewport.

  -> One of the use cases is lazy loading.

  -> To trigger animations when something becomes visible, turn it off when its not visible and turn it on again.

  -> All of these events are related to the viewport, which is the most common. 


-> 1. The first thing that we do is to set up a new intersection observer, which expects a callback.

  -> This callback will be called whenever our target element is intersecting the viewport.

  -> So, we set up the observer, select the target element that we want to observe and use the observer.observe to observe the target element, so that the callback is triggered whenever the target is intersecting the viewport.

  -> In the callback, we have access to an array of entry objects, which are elements that the observer has found to be intersecting with the viewport.

    -> Since we are looping over the array, we get access to the objects.

      -> The bounding client rect.

      -> Intersection ration.

      -> isIntersecting. This is an important one. The same goes for isVisible

  -> For now we are only going to work with one element, but it is still passed as an array.

*/

// 1. Setting up the observer.

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    console.log("INTERSECTION OBSERVED!!!");

    if (entry.isIntersecting) {
      console.log("Add is visible");
    } else {
      console.log("Add is not visible");
    }
  });
});

// 2. Select the target element to observe.

const ad = document.querySelector(".ad");

// 3. Observe any intersections that occur with the target element.

observer.observe(ad);
