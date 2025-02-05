"use strict";

/* --------------------------------- Partial Application with bind() --------------------------------- */

/* 

--> Now that we've covered the basics like pure functions, immutability, recursion, let's talk about more specific functional programming techniques.

  -> Partial application is the process of executing a function with some or all of its arguments. The partially applied function then gets returned for later use.

  -> Partial application is a concept where a function is applied to some of its arguments and returns a new function that takes the remaining arguments.

  -> Basically, it is a way of baking in arguments to a function.

  -> We've covered this idea when we talked about bind().

  -> This is not a very clear example but we are binding arguments to a function.

    -> Remember that bind() can be used to bind the context to a function.

    -> Bind then returns a new function where the context is bound to whatever we specify.

    -> However, we can do this with arguments also.

    -> In this case, we are creating a new function from the "main" function that greets accordingly with different accents.

    -> We are baking in the greeting argument with bind, so that we can call the australian greet, or the english greet.



  -> This is the main concept of partial application, we are applying some arguments to a function (baking in) and returning a new function that takes the remaining arguments.
  
  -> It can be like having a default value in the "main" function that we can store into a new function.

  -> By storing this new function, we can be much more versatile and reuse a portion of the "main" function. 

*/

function greet(greeting, name) {
  console.log(`${greeting}, ${name}!!!`);
}

const australianGreet = greet.bind(null, "G'day");

const englishGreet = greet.bind(null, "A very good day to you");

const portugueseGreet = greet.bind(null, "I hate you");

australianGreet("Crocodile"); // G'day, Crocodile!!!

englishGreet("Tom"); // A very good day to you, Tom!!!

portugueseGreet("Manuel");
