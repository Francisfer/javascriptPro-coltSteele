"use strict";

/* --------------------------------- Array.from() --------------------------------- */

/* 

--> This method is useful in a lot of situations and it does much more than converting a string to an array.

  -> It helps us to generate new arrays from array like structures. 

  -> One of the situations where the method becomes very useful is when working with DOM node lists.

    -> When we use query selector all, we get a node list.

    -> It looks like an array but is not quite an array.

    -> The browser has implemented the possibility of using forEach() to work on them. Adding an event listener for all of them if they have the same functionality for ex.

    -> However, if we want to filter them, based on some condition, we get filter is not a function.

    -> What we can do is to turn the node list into an array.

*/

// The array like structure that allows us to generate arrays with the length property.

console.log(" ---------------- Array like structure ---------------- ");

const arrayLike = {
  0: "Hello",
  1: "World",
  2: "!",
  length: 3, // 👈 This makes it array-like
};

console.log(arrayLike);
// { 0: 'Hello', 1: 'World', 2: '!', length: 3 }

console.log(" ---------------- NodeList to an array ---------------- ");

// Selecting all the button elements from the html.

const btns = document.querySelectorAll("button");
console.log(btns); // NodeList(5) [button, button, button, button, button]

// If we try to use an array method besides forEach(), we get the error that is not a function.

// btns.filter(); // Uncaught TypeError: btns.filter is not a function

// Turning the node list into an array.

const btnsArray = Array.from(btns);
console.log(btnsArray); // (5) [button, button, button, button, button]

// Now we can use filter

const btnWithAClass = btnsArray.filter((btn) => btn.classList.contains("test"));
console.log(btnWithAClass); // [button.test]

/* 

--> That is one of the use cases for Array.from(), but there is more to it.

  -> We can pass in a second argument, which is a mapping function.

  -> This mapping function will run for each element in the array, allowing us to transform each element as they are added to the array.



*/
console.log(
  " ---------------- Passing a mapping function into Array.from() ---------------- "
);

const string = "abbbbccceeeffff";

const stringUpperCase = Array.from(string, (letter) => letter.toUpperCase());

console.log(stringUpperCase); // (15) ['A', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'E', 'E', 'E', 'F', 'F', 'F', 'F']

// Turning a set into an array:

const set = new Set(string); // Set(5) {'a', 'b', 'c', 'e', 'f'}

const arrayFromSet = Array.from(set, (letter) => letter.toUpperCase());

console.log(arrayFromSet); // (5) ['A', 'B', 'C', 'E', 'F']

/* 

--> Another thing that Array.from() allows us to do is to generate sequences and generating big arrays with a condition.

*/

console.log(
  " ---------------- Generating sequences or big arrays with Array.from() ---------------- "
);

const allEven = Array.from({ length: 20 }, (_, i) => i * 2);
const allOdd = Array.from({ length: 20 }, (_, i) => i * 2 + 1);
console.log(allEven);
console.log(allOdd);

console.log(
  " ---------------- Generating sequences or big arrays with Array.from() ---------------- "
);

console.log(" ---------------- Exercises ---------------- ");

function parseAndCheck(arr) {
  return Array.from(arr, (value) => {
    if (Number.isNaN(parseFloat(value))) throw new Error("Invalid Number");
    else return parseFloat(value);
  });
}
parseAndCheck(["2.3asd", "2sld"]);

function decrementArrayElements(arr) {
  if (!arr) return arr;
  arr.forEach((_, i, array) => --array[i]);
  return arr;
}

decrementArrayElements([1, 2, 3, 4, 5, 6, 7]);

function* rangeGenerator(start, end) {
  if (start > end) {
    while (end <= start) {
      yield start;
      start--;
    }
  } else {
    while (start <= end) {
      yield start;
      start++;
    }
  }
}

const range = rangeGenerator(10, 1);
