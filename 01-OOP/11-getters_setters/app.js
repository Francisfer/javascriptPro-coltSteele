"use strict";

/* --------------------------------- Getters --------------------------------- */

/* 

--> Javascript provides syntax to write special methods that allows us to define a particular way to retrieve or update the value of specific object properties.


--> We will start with getters.

  -> Getters allow us to write a special method that will retrieve the value of an object's property.
  
  -> We don't call this method, we treat it as a property.

  -> It is kind of a property that is doing some logic behind the scenes.

  -> In this example, since the diameter is calculated through the value of the radius, we don't need to make a separate property for it.

    -> Also, that wouldn't make much sense because if we change the radius, then we would need to change the diameter to, because it is not being dynamically calculated.

    -> It would be defined when we create a new instance, but if we change the value of radius, the diameter stays the same.


  -> We could also create a regular method to retrieve the diameter, it would work the same way, but we would have to call it.

    -> By calling it, we would have to store it into a variable to read the value returned.

    -> The best solution is to create a getter, which we can treat as a property that we can read.


--> In conclusion, a getter allows us to define what looks like a property, but runs some logic behind the scenes.

  -> It is useful when we have properties that are derived based on other values that we already have.

  -> And also when we don't want to give direct access to a property which should only be accessed inside of the class.
*/

class Circle {
  constructor(radius, color) {
    this._radius = radius;
    // this.diameter = radius * 2; // This won't work if we change the value of radius on the instance created.

    this._color = color;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (value < 0) throw new Error("Radius cannot be negative!");
    this._radius = value;
  }
  get diameter() {
    return this._radius * 2;
  }
  get color() {
    return this._color;
  }
  set color(newColor) {
    const allowedColors = ["red", "green", "blue"];
    if (!allowedColors.includes(newColor))
      throw new Error(
        `Color: ${newColor} is not allowed. Choose between red, green and blue!`
      );
    this._color = newColor;
  }
}

const newCircle = new Circle(4, "red");
console.log(newCircle.diameter); // 4
console.log(newCircle.radius); // 8

newCircle.color = "blue";
console.log(newCircle); // Circle {_radius: 4, _color: 'blue'}

// newCircle.color = "yellow"; // Color: yellow is not allowed. Choose between red, green and blue!

console.log(newCircle.color); // blue

/* --------------------------------- Setters --------------------------------- */

/* 

--> Setters allow us to provide a mechanism to update a property but, again some logic is being done in the background.

--> For example we can add some validation before allowing the property value to be changed.

--> With the _ signal, developers know that they should not update that value directly, to do it, they should use the setter.


--> We use setters when we want to provide a mechanism for someone to update something like it is a property but have some logic behind the scenes.

*/

/* --------------------------------- Full example --------------------------------- */

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(newName) {
    const [fName, lName] = newName.trim().split(" ");
    this.firstName = fName;
    this.lastName = lName;
  }
}

const francis = new User("Francisco", "Ferreira");
francis.fullName = "Francisco Francisco";

console.log(francis.fullName); // Francisco Francisco

console.log(francis.firstName); // Francisco Ferreira
console.log(francis.lastName); // Francisco Ferreira
