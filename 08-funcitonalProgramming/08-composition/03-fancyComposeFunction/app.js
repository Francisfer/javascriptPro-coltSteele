"use strict";

/* --------------------------------- Composition --------------------------------- */

/* 

--> 
*/

function compose(fn1, fn2) {
  return function (value) {
    return fn1(fn2(value));
  };
}
