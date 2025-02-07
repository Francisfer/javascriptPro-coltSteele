"use strict";

/* --------------------------------- Sending post requests with fetch() --------------------------------- */

/* 

--> To send post requests we need to have the data in the format that is accepted in the server (json for now).

  -> Then, we just need to complete the object of options (second argument of fetch) with the method, headers and the body (where we stringify the object of data that we want to send).

*/

async function postData() {
  // Data to post
  const newCompany = {
    handle: "chickenco3",
    name: "Chickens and Company 3",
    description: "A lovely company run by chickens",
    numEmployees: 999,
    logoUrl: "http://www.google.com",
  };

  const response = await fetch("http://localhost:3001/companies", {
    method: "POST",
    headers: { "content-type": "application/json" }, // If we use new Headers we place them here.
    body: JSON.stringify(newCompany),
  });

  const data = await response.json();
  console.log(data);
}

// postData();
