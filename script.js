'use strict';

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0EL = document.querySelector('#current--0');
const current1EL = document.querySelector('#current--1');
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let activePLayer = 0;
let currentScore = 0;


btnRoll.addEventListener('click', function(){
  const dice = Math.trunc(Math.random()*6)+1;
  diceEl.classList.remove('hidden');
  diceEl.src = `../images/dice-${dice}.png`;

if (dice !== 1) {
  currentScore+=dice;
  document.getElementById(`current--${activePLayer}`).textContent = currentScore;
} else {
  document.getElementById(`current--${activePLayer}`).textContent = 0;
  currentScore=0;
  activePLayer = activePLayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
}})
btnHold.addEventListener('click', function(){
  
})