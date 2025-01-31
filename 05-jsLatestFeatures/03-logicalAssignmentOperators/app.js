"use strict";

/* --------------------------------- Logical OR Assignment Operator --------------------------------- */

/* 

--> We use the ||= operator to set values to properties that are currently falsy.

  -> Remember that the || operator short circuits when a truthy value is found and returns it.

  -> So, any falsy value on the left-hand side will trigger assignment to the right-hand value.

  -> This is just a syntax cleaner, notice that, so assign a value we need the () for the evaluation to run.



--> This is most frequently used when updating values in an object.
*/

const todo = { priority: "", task: "Finish Editing Course" };

// Instead of:

todo.priority || (todo.priority = "Medium");

// We can do:

todo.priority ||= "Medium";

/* --------------------------------- Logical AND Assignment Operator --------------------------------- */

/* 

--> 

*/
