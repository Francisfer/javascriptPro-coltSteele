"use strict";

/* --------------------------------- Currying --------------------------------- */

/* 

--> 
*/

function add(a, b, c) {
  return a + b + c;
}

// curried version:

function addCurried(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
