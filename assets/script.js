'use strict';

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
let score0EL = document.getElementById('score--0');
let score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current0EL = document.querySelector('#current--0');
let current1EL = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');

const init = function () {
  const scores = [0, 0];
  let activePLayer = 0;
  let currentScore = 0;
  let playing = true;
  score0EL = 0;
  score1EL = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  player0EL.classList.remove('player--winner')
  player1EL.classList.remove('player--winner')
  player1EL.classList.remove('player--active')
  player0EL.classList.add('player--active')
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  diceEl.classList.add('hidden');
}

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePLayer}`).textContent = 0;
  currentScore = 0;
  activePLayer = activePLayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
}
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `../assets/images/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePLayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
})

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePLayer] += currentScore;
    document.getElementById(`score--${activePLayer}`).textContent = scores[activePLayer];
    if (scores[activePLayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePLayer}`)
        .classList.add('player--winner');
      document.querySelector(`.player--${activePLayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
})
btnNew.addEventListener('click', init);
