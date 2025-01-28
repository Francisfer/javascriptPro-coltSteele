"use strict";

/* --------------------------------- Super --------------------------------- */

/* 

--> When working with inheritance, another importance concept is the use of the "super" keyword.

--> If we try to extend the functionality of the parent class to a subclass that has more parameters it won't work without calling super.


class ColorTriangle extends Triangle {
  constructor(a, b, color) {
  this.a = a;
  this.b = b;
  this.color = color;
  }
  describe() {
    return "(runs and hides)";
  }
}

--> Like this we get an error: Must call super constructor in derived class before accessing 'this' or returning from derived constructor.


--> This happens because we are writing a constructor in the subclass, but we also have a constructor in the parent class.


--> If we want to add a specific property to ColorTriangle, we use super to call the constructor of the parent class with the properties that it is prepared to received.

  -> Than, for the new property we, since we already called super, we can use the "this" keyword.

  -> "super" is used to call the constructor of the parent class, which receives a and b.

  -> Then we can use the constructor of the subclass to add the properties that are different from the parent class.


--> In summary, if we do not want to add new properties to all objects created with the subclass, we can rely entirely on the constructor of the parent class.

  -> For that, we don't need to use the constructor or the super keyword, that is done automatically.


--> If we want those objects to have more properties, we need to call the parent constructor with "super" for the ones that are common and add the others to our constructor because we can now use "this".

*/

class Triangle {
  constructor(a, b) {
    if (!Number.isFinite(a) || a < 0) throw new Error(`Invalid Number a: ${a}`);
    if (!Number.isFinite(b) || b < 0) throw new Error(`Invalid Number a: ${b}`);

    this.a = a;
    this.b = b;
  }

  getArea() {
    return (this.a * this.b) / 2;
  }

  getHypotenuse() {
    return Math.sqrt(this.a ** 2 + this.b ** 2);
  }

  describe() {
    return `I am a triangle with an area of ${this.getArea()}`;
  }
}

class ColorTriangle extends Triangle {
  constructor(a, b, color) {
    super(a, b);
    this.color = color;
  }
  describe() {
    return "(runs and hides)";
  }
}

const newTriangle = new ColorTriangle(2, 2, "red");

console.log(newTriangle); // ColorTriangle {a: 2, b: 2, color: 'red'}

// Another example: here, MoodTriangle calls the constructor of ColorTriangle for a, b and color, which calls the constructor of Triangle for a and b.

// All of this is possible because of inheritance through the prototype chain.

class ColorMoodTriangle extends ColorTriangle {
  constructor(a, b, color, mood) {
    super(a, b, color);
    this.mood = mood;
  }
}

const moodTriangle = new ColorMoodTriangle(3, 3, "white", "happy");
console.log(moodTriangle); // ColorMoodTriangle {a: 3, b: 3, color: 'white', mood: 'happy'}

console.log(moodTriangle.__proto__ === ColorMoodTriangle.prototype); // true

console.log(ColorMoodTriangle.prototype); // ColorTriangle {}

console.log(ColorTriangle.prototype); // Triangle {describe: ƒ}

// Remember that instances do not have the prototype property. Only the classes.
