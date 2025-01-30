"use strict";
/* --------------------------------- Callbacks --------------------------------- */

/* 

--> One of the most important concepts in javascript is dealing with asynchronous code.

--> A callback function is a function that we pass to another function for it to call.

  -> This means that we pass the function to another, but we do not call it ourselves.



-> Examples of when we use callbacks:

  -> Functional programming patterns,
  
  -> Built in array methods, all expect us to provide a callback function.

  -> Event-driven programming, most commonly, working with dom events. When a form is submitted, call this function, when a button is clicked, call this function...

  -> Another example where we provide callbacks is when working with asynchronous code.

    -> Settimeout, setinterval...
    
    
--> In the past, callbacks where used a lot for fetching data and other async operations.

  -> The most common would be sending an http request where old versions of Ajax libraries expected us to provide a callback.

  -> However, this can lead us to callback hell, there are much better ways to address this type of async code.


--> Some things will always be done with callbacks like working with events, working with functional programming patterns (map(), reduce(), filter()...)

  -> But these are not asynchronous operations, we just provide a function as an argument.

*/

/* --------------------------------- Callbacks for Asynchronous Code --------------------------------- */

/* 

--> Before promises and async await, the only way to deal with async code was passing a lot of callbacks.

--> We need a way of dealing with asynchronous code because javascript is a single threaded language.

  -> If we stop execution at top level code, we also stop the event loop, so no responding to events or repaint dom changes in the browser.


--> That is why we need to treat async code in a special way.

  -> With callbacks we have a solution, but it can lead to messy code if we need to make requests depending on other requests for example.

  -> And we are not even talking about error handling.



*/
