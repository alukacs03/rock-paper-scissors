const rpsOptions = ["rock","paper","scissors"];

function computerPlay(){
    return rpsOptions[Math.floor(Math.random()*rpsOptions.length)];
}


function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection) {
        return "tie"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "lose"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "lose"
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "lose"
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "win"
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "win"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "win"
    } 
}

let win = 0
let lose = 0
let tie = 0

function game() {
    for (let i = 0; i<5; i++) {
        const playerSelection = window.prompt("Enter rock, paper or scissors").toLowerCase();
        const computerSelection = computerPlay();
        let currGame = playRound(playerSelection,computerSelection);
        if (currGame == "win") {
            win += 1
            console.log('You win!')
        } else if (currGame == "lose") {
            lose += 1
            console.log('You lose!')
        } else if (currGame == "tie") {
            tie += 1
            console.log('You tied!')
        }
    }
    console.log(win,lose,tie)
}