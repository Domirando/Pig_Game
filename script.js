'use strict';

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

score0EL.textContent = 0;
score1EL.textContent = 0;
diceEl.classList.add('hidden');
btnRoll.addEventListener('click', function(){
  const dice = Math.trunc(Math.random()*6)+1;
  diceEl.classList.remove('.hidden');
  diceEl.src = `../images/dice-${dice}.png`;
  console.log(`${dice}`);
})