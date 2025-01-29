"use strict";
/* --------------------------------- bind() --------------------------------- */

/* 

--> Bind() is a more commonly used way of binding a function to some particular context.


--> The reason for this is that is permanent. It generates a new function where the value of the context is always bound to whatever we want it to be.

  -> When we use bind(), we bind the context permanently to whatever we want, unlike call() or apply(), which only do that once.

*/

const conan = {
  name: "Conan",
  city: "Los Angeles",
  sing: function () {
    console.log("'this' is: ", this);
    console.log(`${this.name} sings LA LA LA`);
  },
};

const lisa = {
  name: "Lisa",
  city: "Los Angeles",
};

// After this, the context is permanently bound to lisa in the new returned function.

const lisaSing = conan.sing.bind(lisa);

// Now, whenever we call lisaSing(), the value of "this" is set to the lisa object.

// It is a new function, based on conan.sing(), but the context is permanently bound to lisa.

lisaSing(); // Lisa sings LA LA LA
