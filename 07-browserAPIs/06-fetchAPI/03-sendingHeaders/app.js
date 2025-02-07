"use strict";

/* --------------------------------- Sending headers with fetch() --------------------------------- */

/* 

--> The next thing to know is how to send headers along with our get request.

  -> There is a couple of ways of doing this, but the best is to use new Headers constructor.

    -> It is available in the browser, it takes an object of different headers in formats them with the correct capitalization, spelling and make sure that the headers are conform the http protocol standard.

  -> For this, we pass an options object as the second argument to fetch. There we will have a key called headers.
*/

async function showMeHeaders() {
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "Bearer YOUR_TOKEN",
  });

  try {
    const res = await fetch("http://localhost:3001/showmeheaders", { headers });
    const data = await res.json();
    console.log("DATA ", data);
  } catch (e) {
    console.log(e);
  }
}

showMeHeaders();
