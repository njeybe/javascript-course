'use strict';

console.log(`=== GAME DEVELOPMENT: GUESS MY NUMBER ===`);

//===== DOM ELEMENT SELECTION - THE FOUNDATION =====//

console.log(`=== DOM ELEMENT SELECTION ===`);

// const messsageEl = document.querySelector(`.message`);
// const scoreEl = document.querySelector(`.score`);
// const guessEl = document.querySelector(`.guess`);
// const numberEl = document.querySelector(`.number`);
// const highscoreEl = document.querySelector(`.highscore`);

// numberEl.textContent = 15;
// guessEl.value = 10;

// console.log(messsageEl);
// console.log(messsageEl.textContent);
// console.log(`Score element: ${scoreEl}`);
// console.log(`Current Highscore: ${highscoreEl.textContent}`);
// console.log(`Guess input value: ${guessEl.value}`);

// Game State Variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

document.querySelector(`.score`).textContent = score;
document.querySelector(`.highscore`).textContent = highscore;

console.log(`Game State Initialized`);

// Exercise Pracctice Game State
// playerName, attemps, gameActive

let playerName = `JB`;
let attemps = 0;
let gameActive = true;
let easySecret = Math.trunc(Math.random() * 10) + 1;

console.log(`Player: ${playerName}`);
console.log(`Attemps: ${attemps}`);
console.log(`Game active: ${gameActive}`);
console.log(`Easy secret number: ${easySecret}`);

// Section 3: Basic Game Logic Implementation

document.querySelector(`.check`).addEventListener(`click`, function () {
  console.log(`Check button clicked!`);

  const guess = Number(document.querySelector(`.guess`).value);
  console.log(`Player guessed:`, guess);

  if (guess === secretNumber) {
    console.log(`Correct guess!`);
    // document.querySelector(`.message`).textContent = `Correct Number!`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
      document.querySelector(`.message`).textContent = 'You have won!';
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
    }
  } else if (guess > secretNumber) {
    console.log(`Too high!`);
    document.querySelector(`.message`).textContent = `Too high`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(`.message`).textContent = 'You have lost';
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  } else if (guess < secretNumber) {
    console.log(`Too low`);
    document.querySelector(`.message`).textContent = `Too low`;
    score--;
    document.querySelector(`.score`).textContent = score;
    if (score < 1) {
      document.querySelector(`.message`).textContent = 'You have lost';
      document.querySelector(`.number`).textContent = secretNumber;
      document.querySelector(`.guess`).disabled = true;
      document.querySelector(`.check`).disabled = true;
    }
  }
});

document.querySelector(`.again`).addEventListener('click', function () {
  console.log(`Again button is working`);

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.message`).textContent = `Start guessing ...`;
  console.log("Your new secret number after restart: ", secretNumber);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;

  document.querySelector(`.guess`).disabled = false;
  document.querySelector(`.check`).disabled = false;
});
