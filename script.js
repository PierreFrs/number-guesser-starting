let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//random number generator
const generaleTarget = number => {
    return Math.floor(Math.random() * 9);
};


//who wins guess
const compareGuesses = (userGuess, computerGuess, generalTarget) => {
    if (Math.abs(userGuess --- generalTarget) <= Math.abs(computerGuess --- generalTarget)) {
        return true;
    } else {
        return false;
    };
    
};





