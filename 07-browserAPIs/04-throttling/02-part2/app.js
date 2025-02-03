"use strict";

/* --------------------------------- Throttling --------------------------------- */

/* 

--> So, let's implement some throttling.

  -> A throttled function will allow loadMoreItems() to proceed, but then prevent further calls for some amount of time.

  -> This allows us to control the rate (throttle the rate) that this function proceeds at (the rate that this function executes at).

  -> We want to load data one time, give the user time to make he's wat through all the content, read it, understand it and then load more when he gets to the bottom.
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

// function throttle(callback, delay = 500) {
//   let isThrottled = false;
//   let savedArgs = null;

//   const executeCallback = () => {
//     if (savedArgs === null) {
//       isThrottled = false;
//     } else {
//       callback(...savedArgs);
//       savedArgs = null;
//       setTimeout(executeCallback, delay);
//     }
//   };

//   return (...args) => {
//     if (isThrottled) {
//       savedArgs = args;
//       return;
//     }

//     callback(...args);
//     isThrottled = true;
//     setTimeout(executeCallback, delay);
//   };
// }

// const throttledLoadItems = throttle(loadMoreItems, 300);

window.addEventListener("scroll", () => {
  loadMoreItems(); // Gets called at each scroll event.
});

// Initial load
loadMoreItems();
