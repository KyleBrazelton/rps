//Create a function called computerPlay
//randomly return either 'rock', 'paper', or 'scissors'
// Use math.floor to generate 1-3 numbers, assign the numbers a symbol
//use console to check output

function computerPlay () {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {choice = 'rock'}
    else if (choice == 1) {choice = 'paper'}
    else {choice = 'scissors'}
    return choice;
}

//write function that plays single round of rock paper scissors
//require two parameters
//playerSelection
//computerSelection
function playerSelection() {
const userInput =prompt('Rock, Paper, or Scissors?').toLowerCase();
return userInput;
}

function rpsRound(userInput, choice) {
    //rock
if (userInput == 'rock' && choice == 'scissors') {
    return 'rock beats scissors, you win!' }
    else if (userInput == 'rock' && choice == 'paper') {
        console.log('paper beats rock, you lose!')
    }
    else if (userInput == 'rock' && choice == 'rock') {
        console.log('rock vs rock, draw!');
    }
    //paper
    else if (userInput == 'paper' && choice == 'scissors') {
        console.log('scissors beats paper, you lose!');}
    else if (userInput == 'paper' && choice == 'rock') {
            console.log('paper beats rock, you win!')
        }
    else if (userInput == 'paper' && choice == 'paper') {
            console.log('paper vs paper, draw!');
        }
    //scissors
    else if (userInput == 'scissors' && choice == 'rock') {
        console.log('rock beats scissors, you lose!');}
    else if (userInput == 'scissors' && choice == 'paper') {
            console.log('scissors beats paper, you win!')
        }
    else if (userInput == 'scissors' && choice == 'scissors') {
            console.log('scissors vs scissors, draw!');
        }
        else {
            return 'Enter something that is actually requested...'
        }
}

console.log(computerPlay());
console.log(playerSelection());
console.log(rpsRound());

//rock beats scissors
//scissors beats paper
//paper beats rock

//return a string that declares a winner - You lose! Paper Beats Rock! for each 
//case insensitivity on the user input
//return results of function call

//write a function called game()
//call playRound function inside of this to play a 5 round game that keeps score/reports
//Use a for loop for playRound function
//console.log to display results of each round and winner
//use prompt() to get user input
