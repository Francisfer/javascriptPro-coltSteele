"use strict";

// "http://numbersapi.com/5?json";

// 1.
async function showNumberTrivia(number) {
  const response = await fetch(`http://numbersapi.com/${number}?json`);

  const data = await response.json();

  console.log(data.text);
}

showNumberTrivia(27);

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
  console.log(winner.text);
}

showNumberRace(2, 35, 6, 7);

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

    const fulfilled = await Promise.allSettled(
      response
        .filter((res) => res.value.ok === true)
        .map(async (res) => await res.json())
    );

    const rejected = response.filter((res) => res.value.ok === false);

    console.log("fulfilled:", fulfilled);
    console.log("rejected:", rejected);
  } catch (error) {
    console.warn(error);
  }
}

showNumberAll(4, 2, "a", 7);
