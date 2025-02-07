"use strict";

/* --------------------------------- Sending headers with fetch() --------------------------------- */

/* 

--> The next thing 
*/

async function showMeHeaders() {
  const headers = new Headers({ "content-type": "application/json" });
  try {
    const res = await fetch("http://localhost:3001/showmeheaders", { headers });
    const data = await res.json();
    console.log("DATA ", data);
  } catch (e) {
    console.log(e);
  }
}
