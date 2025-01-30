"use strict";
/* --------------------------------- Promise.allSettled() --------------------------------- */

/* 

--> Sometimes we might want to send a lot of async operations where some might work, some may not.

--> Some promises will be resolved and some will be rejected.

  -> In this situation, we use Promise.allSettled().

  -> It also accepts an array of promises and returns one promise (one array).

  -> The difference is that the promise resolves after all the given promises are done / settled. Meaning they rejected or fulfilled. 

  -> After this, we receive an array with all the promises and we can do something like filter the ones that where fulfilled.



*/

async function allSettledDemo() {
  const GITHUB_BASE_URL = "https://api.github.com";

  let elieP = fetch(`${GITHUB_BASE_URL}/users/elie`);

  let joelP = fetch(`${GITHUB_BASE_URL}/users/joelburton`);

  let badUrl = fetch(`https://definitelynotarealsite.com`);

  let coltP = fetch(`${GITHUB_BASE_URL}/users/colt`);

  let anotherBadUrl = fetch(`https://definitelynotarealsite.com`);

  let results = await Promise.allSettled([
    elieP,
    joelP,
    badUrl,
    coltP,
    anotherBadUrl,
  ]);

  console.log(results);

  const fulfilled = results.filter((result) => {
    return result.status === "fulfilled";
  });
  console.log(fulfilled);
}

allSettledDemo();
