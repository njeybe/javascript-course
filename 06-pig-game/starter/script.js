'use strict';

console.log(` === PIG GAME DEVELOPMENT: FOUNDATION & DICE ROLLING === `);

let scores, currentScore, activePlayer, playing;

const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const current0El = document.querySelector(`#current--0`);
const current1EL = document.querySelector(`#current--1`);
const diceEL = document.querySelector(`.dice`);
const btnRollEl = document.querySelector(`.btn--roll`);
const btnHoldEl = document.querySelector(`.btn--hold`);
const btnNewEl = document.querySelector(`.btn--new`);

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  diceEL.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};

init();

btnRollEl.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
  }
});
