"use strict";

// "http://numbersapi.com/5?json";

// 1.
async function showNumberTrivia(number) {
  const response = await fetch(`http://numbersapi.com/${number}?json`);
  console.log(response);
  const data = await response.json();
  return data.text;
}

// showNumberTrivia(27);

// 2.

async function showNumberRace(...numbers) {
  const [nr1, nr2, nr3, nr4] = numbers;

  const promisesArray = [
    fetch(`http://numbersapi.com/${nr1}?json`),
    fetch(`http://numbersapi.com/${nr2}?json`),
    fetch(`http://numbersapi.com/${nr3}?json`),
    fetch(`http://numbersapi.com/${nr4}?json`),
  ];

  const response = await Promise.race(promisesArray);
  const winner = await response.json();
  return winner.text;
}

// showNumberRace(2, 35, 6, 7);

// 3.

async function showNumberAll(...numbers) {
  try {
    const [nr1, nr2, nr3, nr4] = numbers;

    const promisesArray = [
      fetch(`http://numbersapi.com/${nr1}?json`),
      fetch(`http://numbersapi.com/${nr2}?json`),
      fetch(`http://numbersapi.com/${nr3}?json`),
      fetch(`http://numbersapi.com/${nr4}?json`),
    ];

    const response = await Promise.allSettled(promisesArray);

    const fulfilledData = await Promise.allSettled(
      response
        .filter((res) => res.value.ok === true)
        .map((data) => data.value.json())
    );
    const fulfilled = fulfilledData.map((data) => data.value.text);

    const rejected = response
      .filter((res) => res.value.ok === false)
      .map((data) => `Request failed with status code: ${data.value.status}`);

    return [fulfilled, rejected];
  } catch (error) {
    console.warn(error);
  }
}

// showNumberAll(4, 2, "a", 7);

// 4

async function main() {
  const showTrivia = await showNumberTrivia(5);
  console.log(`showNumberTrivia:`, showTrivia);
  const showRace = await showNumberRace(42, 11, 66, 100);
  console.log(`showNumberRace:`, showRace);
  const [showAllFulfilled, showAllRejected] = await showNumberAll(
    "WRONG",
    25,
    66,
    245
  );
  console.log(`showNumberAll fulfilled:`, showAllFulfilled);
  console.log(`showNumberAll rejected:`, showAllRejected);
}

main();
