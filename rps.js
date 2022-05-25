//Create a function called computerPlay
//randomly return either 'rock', 'paper', or 'scissors'
// Use math.floor to generate 1-3 numbers, assign the numbers a symbol
//use console to check output

function computerPlay () {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {choice = 'Rock'}
    else if (choice == 1) {choice = 'Paper'}
    else {choice = 'Scissors'}
    return choice;
}

let play = computerPlay();
console.log(play);


//write function that plays single round of rock paper scissors
//require two parameters
//playerSelection
//computerSelection
//return a string that declares a winner - You lose! Paper Beats Rock! for each 
//case insensitivity on the user input
//return results of function call

//write a function called game()
//call playRound function inside of this to play a 5 round game that keeps score/reports
//Use a for loop for playRound function
//console.log to display results of each round and winner
//use prompt() to get user input
