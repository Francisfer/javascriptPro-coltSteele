"use strict";

/* --------------------------------- Throttling --------------------------------- */

/* 

--> So, let's implement some throttling.

  -> A throttled function will allow loadMoreItems() to proceed, but then prevent further calls for some amount of time.

  -> This allows us to control the rate (throttle the rate) that this function proceeds at (the rate that this function executes at).

  -> We want to load data one time, give the user time to make he's wat through all the content, read it, understand it and then load more when he gets to the bottom.

  -> One of the solutions is to use a library to implement debouncing like lodash.  

  -> But here we do a very basic implementation of throttle to understand how it works.

  -> In the next part we will set a more robust implementation.
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

let isThrottled = false;

window.addEventListener("scroll", () => {
  // The first thing to do is to implement some logic so that we don't call load items at each scroll event.
  // For that we create an external state variable, check the state, if it is not throttled we call loadMoreItems, change the state to true and use a timeout to reset it to false after 300 milliseconds.

  // With this, the very first time we scroll, is throttled will be false, so the code runs, we load more items but we immediately set is throttled to true.

  // If the scroll event triggers again, the code won't run, it will only run after 300 milliseconds no matter if the scroll event occurs.

  // Like this it works, however if we scroll fast to the bottom it won't load more data before the 300 mill.

  // So we need to scroll up to trigger another load event for the items load.

  if (!isThrottled) {
    loadMoreItems();
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
    }, 300);
  }
});

// Initial load
loadMoreItems();
