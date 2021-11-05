// RPS Psuedo Code

// What is the layout going to look like?
// no CSS, use JS alerts, prompts, confirms

// rules
// rock beats scissors
// paper beats rock
// scissors beats paper

// variables - what do I need? What data do I need to track over time?
// wins, losses, ties
var wins = 0;
var losses = 0;
var ties = 0;

// FUNCTION

function startGame() {
  // user choice - add error control for inputs other than R, P, S and cancel
  var userChoice = prompt("Please choose R, P, or S");

  //computer choice - use Math.random and Math.floor
  var computerOptions = ["R", "P", "S"];

  var randomNum = Math.floor(Math.random() * computerOptions.length); // 0, 1, or 2

  var computerChoice = computerOptions[randomNum];

  // if statement
  // JS is naturally case-sensitive, so toUpperCase() automatically makes the users
  // input uppercase
  if (userChoice.toUpperCase() === computerChoice) {
    alert("Computer also chose " + computerChoice + ", so you tied!");
    ties++;
    console.log(ties);
  } else if (
    (userChoice.toUpperCase() === "R" && computerChoice === "S") ||
    (userChoice.toUpperCase() === "P" && computerChoice === "R") ||
    (userChoice.toUpperCase() === "S" && computerChoice === "P")
  ) {
    alert("Computer chose " + computerChoice + ", so you won!");
    wins++;
  } else if (
    (userChoice.toUpperCase() === "R" && computerChoice === "P") ||
    (userChoice.toUpperCase() === "P" && computerChoice === "S") ||
    (userChoice.toUpperCase() === "S" && computerChoice === "R")
  ) {
    alert("Ha! Computer chose " + computerChoice + ", so you lost!");
    losses++;
  } else {
    alert("Invalid input, please try again");
    startGame();
  }
  var playAgain = confirm(
    "Current score:\nWins: " +
      wins +
      "\nLosses: " +
      losses +
      "\nTies: " +
      ties +
      "\nWant to play again?"
  );
  if (playAgain) {
    startGame();
  } else {
    alert("Come back and lose again soon!");
  }
}

function wantToPlay() {
  var playing = confirm("Want to play Rock, Paper, Scissors?");
  if (playing) {
    startGame();
  } else {
    alert("Goodbye!");
  }
}

wantToPlay();
// need to increment stats based on who won the game

// user actions
// first page user sees - prompt asking for RPS
// second page - win or lose
// third page - stats and option to play again then back to page 1
