'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnRoll = document.querySelector('.btn--roll');

let currentScore = 0;
let activePlayer = 0;
//set scores to 0
score0El.textContent = 0;
score1El.textContent = 0;

//hide dice
diceEl.classList.add('hidden');

//roll the dice
btnRoll.addEventListener('click', function () {
  console.log('pressed roll');
  diceEl.classList.remove('hidden');

  //generate random dice
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${dice}.png`;

  //add to current score.
  if (dice !== 1) {
    currentScore += dice;
    //this outcome should be added to current--${activePLayer}.textContent
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    console.log(currentScore);
  } else {
    //switch to the next player
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
