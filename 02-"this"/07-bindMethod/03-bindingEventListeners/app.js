"use strict";
/* --------------------------------- bind() with event listeners --------------------------------- */

/* 

--> This is a more real use case of the bind() method and where it is very useful.


--> Bind is especially useful when we are not calling functions ourselves.

  -> Event listeners.

  -> Timers.

  -> Callback Functions (map, filter, etc.).


--> In the case of the event listener, what we are saying is: here is a function that I want you to call when this button is clicked.

  -> In this situations, javascript decides what the "this" keyword value is. It might be the button, the window, etc.

  -> So, if we need to use the "this" keyword or context in the callback that is provided to the event listener, we need to be specific about it.

  -> For this, we can use bind(). 



--> This is important, say that we have the same object from the previous lectures and, on click, we want to call the sing method.

  -> Here, the context is important, because we want to call the method in the context of the conan object.

  -> So, our callback will directly be the function call. We do this because it is cumbersome to write a function as the callback just so we can call another function.

  -> The key factor is that we don't call the function ourselves.



--> The value of "this" was decided by javascript.

  -> Since addEventListener is being called on the button, conan.sing is called with the button element as the context. "this"

  -> The solution is to bind the context to conan for two reasons:

    -> First, bind() is not immediately called, that is what we want in a callback function. If we use call() it does not work because call() is immediately called.

    -> Second, it creates a new functions where the context ("this") is bound to the conan object itself.

*/

const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("'this' is: ", this);
    console.log(`${this.name} sings LA LA LA`);
  },
};

const button = document.querySelector("button");

// button.addEventListener("click", conan.sing); // The key factor is that we don't call the function ourselves.

button.addEventListener("click", conan.sing.bind(conan));
