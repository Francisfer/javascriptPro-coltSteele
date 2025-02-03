"use strict";

/* --------------------------------- Throttling --------------------------------- */

/* 

--> Throttling another technique to control how often a function is executed.

  -> It is also used in response of some sort of event, like scroll event or input event, where a function might be called way to often naturally.

  -> So, instead of having a function called at a high rate, we can step in and use either throttling or debouncing to control the rate.

  -> If debouncing is used to make sure that a function is only called after a certain amount of time has passed, throttling is a bit different.

  -> Throttling is a technique used to make sure that a function gets called, at most, one time within some duration.


--> This first demo is not throttled.

  -> It is an infinite scroll that is loading a bunch of divs that have different random colors onto the page.

  -> It sort of a recreation of twitter infinite scroll.

  -> At this point, we do not have a throttle function, so we have a bunch of content added to the page from every single scroll.

  -> So, if this was a real application, the api would get overloaded because the calls happen way to frequently.

    -> Long story short, every time we scroll, the loadMoreItems() function is called.

    -> This function checks if we are less that 200 px from the bottom of the page, if we are within 200px, it appends 10 randomly colored divs to the content div.


  -> Of course, this is done too many times, so we need some throttling. See the next part.
*/

function getRandomColor() {
  const palette = [
    "#FFADAD",
    "#FFC3A0",
    "#FF677D",
    "#392F5A",
    "#31A2AC",
    "#61C0BF",
    "#6B4226",
    "#D9BF77",
    "#ACD8AA",
    "#FFE156",
    "#6A0572",
    "#AB83A1",
  ];

  const randomIndex = Math.floor(Math.random() * palette.length);
  return palette[randomIndex];
}
const content = document.getElementById("content");

function loadMoreItems() {
  const scrollDistanceToBottom =
    document.documentElement.scrollHeight - window.scrollY - window.innerHeight;

  // Checks to se if the scroll distance to the bottom is less than 200px and, in that case, we load more content.

  // If we are less than 200 px from the bottom of the page, we load data (10 divs).

  // We need to make this because we don't want to load data on every scroll, because we might be scrolling up.
  if (scrollDistanceToBottom < 200) {
    console.log("LOADING DATA FROM AN API!!!");

    // We create and append 10 divs if we are less than 200 px from the bottom.
    for (let i = 0; i < 10; i++) {
      const item = document.createElement("div");
      item.classList.add("item");
      item.textContent = "Item " + (content.children.length + 1);
      item.style.backgroundColor = getRandomColor();
      content.appendChild(item);
    }
  }
}

window.addEventListener("scroll", () => {
  loadMoreItems(); // Gets called at each scroll event.
});

// Initial load
loadMoreItems();
