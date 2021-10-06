
import { getRandomThrow, didUserWin } from './get-random-throw.js';

const goButton = document.getElementById('go-button');
const tieSpan = document.getElementById('ties');
const winSpan = document.getElementById('wins');
const loseSpan = document.getElementById('losses');
const error = document.getElementById('error');
let userResult = document.getElementById('results');

let ties = 0;
let wins = 0;
let losses = 0;

goButton.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');

    error.classList.add('hidden');
    if (!selected) {
        return error.classList.remove('hidden');
    }

    const compChoice = getRandomThrow();
    const userChoice = selected.value;
    let result;
  
    if (userChoice === compChoice) {
        ties ++;
    }
    else if (didUserWin(userChoice, compChoice)) {
        wins ++;
    }
    else {
        losses ++;
    }

    userResult.textContent = result;
    tieSpan.textContent = ties;
    winSpan.textContent = wins;
    loseSpan.textContent = losses;
});
