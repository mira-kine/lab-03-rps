// export function to test
// write out possibilities of when a user wins and when it loses
// for ex user: tails, throw: heads -- lose -- return false because user did not win

export function didUserWin(userChoice, compChoice){
    return userChoice === compChoice;
}

// option
// return userChoice === actualFlip ? true : false;
// userChoice
// rock, paper, scissors
// compChoice
// rock, paper, scissors

// possible outcomes: 'win', 'lose', 'draw'

// if userChoice === compChoice, return 'draw'
// if the user throws rock && comp throws scissors return 'win'
// else if user throws paper && comp throws rock return 'win'
// else if user throws scissors && comp throws paper, return 'win'
//else 'lose' if anything doesn't cover what I have covered

// true && true returns true. if one side of the && is false, then it will return as false. 