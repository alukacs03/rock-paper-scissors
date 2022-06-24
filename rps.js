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

let win = 0;
let lose = 0;
let tie = 0;
let over = false;

// const rockbtn = document.querySelector("#rock");
// rockbtn.addEventListener("click", function(e) { 
//    playRound(e.target.id, computerPlay())
//})

const bttns = document.querySelectorAll('button') //get all the buttons on the page and store them in the bttns nodelist
bttns.forEach(bttn => bttn.addEventListener('click', function(e) { // add a click event listener to all of the buttons stored in the nodelist
    if (!over && e.target.id !== 'reload') {
        let result = playRound(e.target.id, computerPlay()) // play a round with the button the player pressed

        const gridContainer = document.querySelector(".grid-container")
        let resultP = document.createElement("span")
        resultP.textContent = result.toUpperCase()
        if (result == "win") {
            win += 1
            document.getElementById("playerCounter").innerHTML = win;
            resultP.style.backgroundColor = "green";
        } else if (result == "lose") {
            lose += 1
            document.getElementById("computerCounter").innerHTML = lose;
            resultP.style.backgroundColor = "red";
        } else {
            tie += 1
            document.getElementById("tieCounter").innerHTML = tie;
            resultP.style.backgroundColor = "lightgray";
        }
        resultP.style.fontSize = "x-large";
        resultP.style.fontWeight = 1000;
        gridContainer.prepend(resultP)
        bttn.classList.add('buttonPressed')
        let alertWin = document.createElement("div");
        alertWin.style.fontSize = "xx-large";
        alertWin.style.fontWeight = 1000;
        if (win == 5) {
            const resultsDiv = document.querySelector('#resultsDiv');
            alertWin.textContent = "You've won!";
            resultsDiv.prepend(alertWin);
            over = true;
        } else if (lose == 5) {
            const resultsDiv = document.querySelector('#resultsDiv');
            alertWin.textContent = "You've lost!";
            resultsDiv.prepend(alertWin);
            over = true;
        }
    } else if (e.target.id == "reload") {
        location.reload()
    } else {
        alert ("Press 'NEW ROUND' if you want to play another round!")
    }
}))


function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("buttonPressed")

}

bttns.forEach(bttn => bttn.addEventListener('transitionend', removeTransition));
