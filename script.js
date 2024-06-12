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
//Playes Name
const playerName0 = document.getElementById('name--0');
const playerName1 = document.getElementById('name--1');
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

//Fuctions
//Switch Player Function
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  activePlayer = activePlayer === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

//New Game Function
function newGame() {
  player0.classList.add('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--active');
  player1.classList.remove('player--winner');

  rollDice.classList.add('hidden');

  currentScore = 0;
  activePlayer = 0;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  btnHold.disabled = false;
  btnRoll.disabled = false;
}
newGame();

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
    switchPlayer();
  }
});

//Button Hold Score
/*Active player chosse to hold the current score to the player score , if he wins (more than 20) game is over if not switch active player*/
btnHold.addEventListener('click', function () {
  let activePlayerScore = Number(
    document.getElementById(`score--${activePlayer}`).textContent
  );
  activePlayerScore += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    activePlayerScore;

  if (activePlayerScore >= 20) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document.getElementById(`win--${activePlayer}`).textContent = 'Win';
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    btnHold.disabled = true;
    btnRoll.disabled = true;
  } else {
    switchPlayer();
  }
});

//Button New Game
/*
Click to restart de game and reset game setings
*/
btnNew.addEventListener('click', newGame);
