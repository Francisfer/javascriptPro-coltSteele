"use strict";

/* --------------------------------- Timers --------------------------------- */

/* 

--> 

*/
function solution(string) {
  const index = [...string].filter((char) => char === char.toUpperCase());
  const array = Array.from(string);

  const word = [...string].slice(0, index);
  const word1 = [...string].slice(index);
  console.log(index);

  // return "";
}
solution("camelCasingTest");

const string = "camelCasingTest";
