"use strict";

/* --------------------------------- Ex 1 --------------------------------- */

/* 

Ebook Exercise

1. Create a class named Book with a constructor that initializes a title, author, and year properties. The title and author should be strings and the year should be a number



2. Create a subclass named Ebook that extends Book.



3. The Ebook class should have an additional property fileSize which is a number and a method download() that returns a string with the title of the ebook and its fileSize.

*/

class Book {
  constructor(title, author, year) {
    if (typeof title !== "string" || typeof author == !"string")
      throw new Error(
        `The title: ${title} and author: ${author} must be written in text.`
      );
    if (!Number.isFinite(year))
      throw new Error(`The year: ${year} must be a number.`);
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Ebook extends Book {
  constructor(title, author, year, fileSize) {
    super(title, author, year);
    if (!Number.isFinite(fileSize))
      throw new Error(`The file size: ${fileSize} must be a number.`);
    this.fileSize = fileSize;
  }
  download() {
    return `The Ebook title is: ${this.title} and it's file size is: ${this.fileSize} mb.`;
  }
}

const drama = new Ebook("Title", "John", 2000, 20);
// console.log(drama);
// console.log(drama.download);

/* --------------------------------- Ex 2 --------------------------------- */

/* 

ArrayUtils exercise

Implement a class named ArrayUtils that cannot be instantiated and contains static methods average and max. If the class is instantiated throw an error with the message 'ArrayUtils cannot be instantiated.'



The average method should return the average of an array of numbers. If the array is empty, throw an error with the message 'Array cannot be empty.'



The max method should return the largest number from an array of numbers. You can assume you will always get passed an array of numbers

*/

class ArrayUtils {
  constructor() {
    throw new Error("ArrayUtils cannot be instantiated.");
  }
  static average(arr) {
    if (arr.length === 0) throw new Error("Array cannot be empty.");
    return arr.reduce(
      (acc, current, _, arr) => (acc += current / arr.length),
      0
    );
  }
  static max(arr) {
    return Math.max(...arr);
  }
}

const array = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];

console.log(ArrayUtils.max(array));
console.log(ArrayUtils.average(array));
