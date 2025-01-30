"use strict";

// "http://numbersapi.com/5?json";

async function showNumberTrivia(number) {
  const response = await fetch(`http://numbersapi.com/${number}?json`);

  const data = await response.json();

  console.log(data.text);
}

// showNumberTrivia(27);
