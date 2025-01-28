"use strict";

/* --------------------------------- Static Initialization Blocks --------------------------------- */

/* 

--> Introduced in ES2022.


--> Inside a class, we can define a static initialization block, which will be run when the class is loaded.


--> Usually, this is used to perform some initialization or operation that are relevant to the class. Not to specific instances of the class.

--> In the example, we have a static class field that depends on some logic.

  -> We don't always want to call the same connection, so we apply some logic to determine which static method should be called.

  -> The idea is that we have a static property that depends on logic, so, instead of using the ternary operator, we could use a static initialization block.

  -> If we need to apply the logic with three choices the ternary operator wouldn't work.

  -> We could create a method for this, but if we need this to run one time, we can use the new functionality.

  -> Remember that the "this" keyword points to the class when inside of the block.


*/

class DatabaseConnection {
  // static connection =
  //   process.env.NODE_ENV === "production"
  //     ? this.loadProductionConnection()
  //     : this.loadDevelopmentConnection();

  static {
    if (process.env.NODE_ENV === "production") {
      this.loadProductionConnection();
    } else {
      this.loadDevelopmentConnection();
    }
  }
  static loadProductionConnection() {}

  static loadDevelopmentConnection() {}
}
