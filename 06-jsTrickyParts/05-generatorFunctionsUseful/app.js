"use strict";

/* --------------------------------- Generator Functions --------------------------------- */

/* 

--> One use case for generator functions is when we have a large batch of some resource.

  -> In this case, we have a large batch of images urls.

  -> If we are building an image gallery, it doesn't make sense to display 1000 images at the same time.

  -> Its a thousand http requests and a lot of loading time.

  -> So we can display 10 at a time or 5 at a time.

  -> Then we have an event that fires and we go to the next 10. A button click of infinite scrolling where as you scroll and more stuff loads.

  -> For this we can build a generator function that gives us 10 things out of a massive array.

  -> Remember that slice does not count with the last index element (exclusively).

*/

const allImages = Array.from(
  { length: 1000 },
  (_, i) => `https://placeimg.com/640/480/any?image=${i}`
);

function* getBatchOfImages(images, batchSize = 10) {
  let currentIndex = 0;

  while (currentIndex < images.length) {
    yield images.slice(currentIndex, currentIndex + batchSize); // 0 - 9 because of slice(inclusively, exclusively)
    currentIndex += batchSize;
  }
}

const imageGen = getBatchOfImages(allImages);

console.log(imageGen.next().value);
