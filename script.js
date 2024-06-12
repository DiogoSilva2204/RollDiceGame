'use strict';

//Selecting Usable Items
//Players Sections
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
//Players Current Score
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
//Players Hold Score
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
//Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//Dice Item
const rollDice = document.querySelector('.dice');
rollDice.classList.add('hidden');

//Initial Game Values
let currentScore = 0;
let activePlayer = 0;

//Button Roll Dice
/*
Click to roll the dice 
if not 1 add roll to current score and can roll again
if it rolls 1 switch active player and reset current score
*/
btnRoll.addEventListener('click', function () {
  const roll = Math.trunc(Math.random() * 6) + 1;
  //console.log(typeof roll, roll);

  rollDice.classList.remove('hidden');
  rollDice.src = `dice-${roll}.png`;

  if (roll !== 1) {
    currentScore += roll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});
