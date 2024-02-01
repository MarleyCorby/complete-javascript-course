'use strict';
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const score = document.querySelector('.score');

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let currentScore = 0;
let activePlayer = 0;
let playing = true;

const scores = [0, 0];

function switchToNext() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

//hide dice
diceEl.classList.add('hidden');

//roll the dice
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      //turning previous player's currentScore to 0 before switching to a next player
      switchToNext();
    }
  }
});

//HOLD
btnHold.addEventListener('click', function () {
  if (playing) {
    //onclicik currentScore = score--1 or score--0

    //scores[1] = scores[1] + currentScore
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    //2. Check if the score is >= 100
    //1. Add currentScore to the score of the activePlayer
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      //3. finish the game
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchToNext();
      //4. Switch to the next player
    }
  }
});

btnNew.addEventListener('click', function () {
  console.log('reseting the game');
  document.querySelector(`current--${activePlayer}`).textContent = curr;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
});
