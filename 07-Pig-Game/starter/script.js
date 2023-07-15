'use strict';

// Selecting elements
const score0Elelent = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const currentScore0Element = document.getElementById('current--0');
const currentScoreElement = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');

score0Elelent.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;

// Rolling the dice functionality
buttonRoll.addEventListener('click', function () {
  // 1. generate random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  // 3. Check for 1: if true,
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    currentScore0Element.textContent = currentScore; // CHANGE LATER
  } else {
    // Switch to next player
  }
});
