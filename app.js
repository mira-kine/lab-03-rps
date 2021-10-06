// import functions and grab DOM elements
import { getRandomThrow } from "./get-random-throw.js";
// initialize global state
const goButton = document.getElementById('go-button');
const userWins = document.getElementById('wins');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

goButton.addEventListener('click', ()=>{
  console.log('clicking');
  const selected = document.querySelector('input[type=radio]:checked');
  const userChoice = selected.value;
})