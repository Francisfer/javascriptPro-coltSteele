"use strict";

/* --------------------------------- Throttling --------------------------------- */

/* 

--> Now we will go through a more robust implementation of a throttle function, an actual reusable throttle function like we did with debounce.

  -> It is not advisable that we write this on our own, it is a simplified version of what other libraries throttle functions do. So it is not quite foolproof.

  -> So, for this, it is advisable to use a library or, at least, copy the code from a library if we need a throttle function.
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

// This function expects a callback function to be passed in, which will be throttle.

// Also, it expects a delay with a default of 500 milliseconds.

function throttle(callback, delay = 500) {
  // this is the flag that indicates whether we should currently be delaying/throttling the function calls or not.

  // It is set to false because we want our function to run initially.
  let isThrottled = false;

  // This variable will store any arguments that passed to our throttle function while we are in the middle of a throttle delay.
  let savedArgs = null;

  // This is a helper function, it is responsible for managing our throttle delay and executing the callback function.

  // If savedArgs is null, it means that no function calls where made during our delay period. So we can safely set isThrottled back to false.

  // If it is not null, it means that we've received function calls during our delay period.

  // At that point, we will execute the callback with the saved arguments.

  // After this we set the saved args to null and, after the delay, we recursively call execute callback again and the same flow occurs.
  const executeCallback = () => {
    if (savedArgs === null) {
      isThrottled = false;
    } else {
      callback(...savedArgs);
      savedArgs = null;
      setTimeout(executeCallback, delay);
    }
  };

  // Here is where we return a new function that will be the returned value of calling throttle
  return (...args) => {
    if (isThrottled) {
      savedArgs = args;
      return;
    }

    callback(...args);
    isThrottled = true;
    setTimeout(executeCallback, delay);
  };
}

const throttledLoadItems = throttle(loadMoreItems, 300);

window.addEventListener("scroll", () => {
  throttledLoadItems();
});

// Initial load
loadMoreItems();
