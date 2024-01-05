const playerText = document.getElementById("playerText");
const computerText = document.getElementById("computerText");
const resultText = document.getElementById("resultText");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
choices = ['rock', 'paper', 'scissors']
let player = 0;
let computer = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if(playerChoice === computerChoice) {
        result = 'YOU DRAW!'
    }
    else {
        switch(playerChoice) {
            case 'rock':
                result = (computerChoice === 'scissors') ? "You Win!" : "You Lose!";
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? "You Win!" : "You Lose!";
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? "You Win!" : "You Lose!";
        }
    }
    playerText.textContent = `Player: ${playerChoice}`;
    computerText.textContent = `Computer: ${computerChoice}`;
    resultText.textContent = result;


    if(result = "You Win!"){
        player++;
        playerScore.textContent = `Player Score: ${player}`;
        }
    if(result = "You Lose!"){
        computer++;
        computerScore.textContent = `Computer Score: ${computer}`;
        }

    }


     
    
