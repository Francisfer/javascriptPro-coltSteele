"use strict";

/* --------------------------------- Lazy loading images --------------------------------- */

/* 

--> What we want to do is, as we scroll, replace the source of the image as it comes into view.

  -> In a real app like this (air bnb), we would have a data attribute for each image, because we would not load random images.

  -> So for the room pics we would have data-src="room.png", for the kitchen data-src="kitchen.png"...

  -> Like that, whenever that element was intersecting, we would send the request to get the right image by looking at the data attribute.
*/

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       //Image needs to be loaded!!!
//       console.log("LOADING A NEW RANDOM IMAGE!!!");
//       entry.target.src = "https://picsum.photos/1920/1080?random";
//       observer.unobserve(entry.target); // once we change the url and get the image we unobserve.
//     }
//   });
// });

// const allImages = document.querySelectorAll("img.lazy");

// allImages.forEach((img) => observer.observe(img));
