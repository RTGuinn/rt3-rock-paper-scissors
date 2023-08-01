// Define all variables to be used in functions for HTML (DOM cache)
let playerScore = 0;
let computerScore = 0;
const winner = document.getElementById("win");
const loser = document.getElementById("loss");
const result = document.querySelector(".result > h2");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const choices = ["rock", "paper", "scissors"];



/**
 * Function to generate random computer choice
 */
function genComputerChoice() {

    // Random choice generator gets own function for necessity in other function
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];

}


function tie(playerChoice, compChoice) {

    result.innerHTML = `${playerChoice} matches ${compChoice}. Its a tie, Let's go again :)`;

}

/**
 * Function to increase player score after player wins 
 */

function wins(playerChoice, compChoice) {

    playerScore++;
    winner.innerText = playerScore;
    loser.innerHTML = computerScore;
    result.innerHTML = `${playerChoice} beats ${compChoice}. Winner!!!`;
}


/**
 * Function to increase computer score after player loses
 */
function lose(playerChoice, compChoice) {

    computerScore++;
    winner.innerText = playerScore;
    loser.innerHTML = computerScore;
    result.innerHTML = `${compChoice} beats ${playerChoice}. You Lose, try again!`;
}


// Game function for gamePlay function to work for playerChoice and compare
function game(playerChoice) {

    const compChoice = genComputerChoice();

    if (playerChoice === compChoice) {
        tie(playerChoice, compChoice);

    } else if (playerChoice === "rock" && compChoice === "scissors") {
        return wins(playerChoice, compChoice);
    } else if (playerChoice === "paper" && compChoice === "rock") {
        return wins(playerChoice, compChoice);
    } else if (playerChoice === "scissors" && compChoice === "paper") {
        return wins(playerChoice, compChoice);
    } else
        lose(playerChoice, compChoice);

}



/**
 * This function runs the main part of the gameplay actions
 * when a player makes their choice 
 */
function gamePlay() {

    // Rock button 
    rock.addEventListener('click', function () {
        game("rock");

    });
    // Paper button
    paper.addEventListener('click', function () {
        game("paper");

    });
    // Scissors button
    scissors.addEventListener('click', function () {
        game("scissors");

    });
}

// Function to run game
gamePlay();




/**
 * Function for rules button modal
 */
// Declare variables for button and close button inside modal
var modal = document.getElementById("myRules");
var button = document.getElementById("ruleBtn");
var span = document.getElementsByClassName("close")[0];

// Open modal when user clicks on button
button.onclick = function () {
    modal.style.display = "block";
};
// Close modal box when X is clicked 
span.onclick = function () {
    modal.style.display = "none";
};