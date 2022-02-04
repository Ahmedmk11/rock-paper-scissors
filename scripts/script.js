function computerPlay(){
    let computerMove = Math.floor(3 * Math.random());
    switch (computerMove){
        case 0:
            result = "Rock";
            break;
        case 1:
            result = "Paper";
            break;
        case 2:
            result = "Scissors";
            break;
    }
    return result;
}

function gameRound(playerSelection, computerSelection){
    resultsA = document.getElementById('resultsA');
    resultsR = document.getElementById('resultsR');
    resultsP = document.getElementById('resultsP');
    resultsC = document.getElementById('resultsC');

    if(computerSelection == "Rock" && playerSelection == "Rock" || 
            computerSelection == "Paper" && playerSelection == "Paper" || 
            computerSelection == "Scissors" && playerSelection == "Scissors"){

        resultsA.textContent = "It's a Tie!";
        statsTracking(0,0,1);

    }else if(computerSelection == "Rock" && playerSelection == "Scissors" ||
                computerSelection == "Paper" && playerSelection == "Rock" ||
                computerSelection == "Scissors" && playerSelection == "Paper"){

        resultsA.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.`;
        statsTracking(0,1,0);

    }else{
        resultsA.textContent = `You Win! ${playerSelection} beats ${computerSelection}.`;        
        statsTracking(1,0,0);
    }
    resultsR.textContent = `Round ${stats[2]}\r\n`;
    resultsP.textContent =`Rohan Kishibe ${stats[0]}\r\n`;
    resultsC.textContent =`Ken Oyanagi ${stats[1]}`;
    
    if(isGameOver()){
        final = document.getElementById('final-container');
        if(stats[0] > stats[1]){
            final.textContent = "You Won The Game!";
        }else{
            final.textContent = "You Lost The Game";
        }
        gameOver();
    }
}

function isGameOver(){
    return stats[0] == 5 || stats[1] == 5;
}

function mainGame(){
    let startDiv = document.getElementById("start");
    let gamePlayScreen = document.getElementById("game-screen");
    let gameOverScreen = document.getElementById("game-over");
    let vs = document.getElementById("vs-container");
    startDiv.style.display = "none";
    gamePlayScreen.style.display = "flex";
    gameOverScreen.style.display = "none";
    vs.style.display = "flex";
}

function gameOver(){
    let startDiv = document.getElementById("start");
    let gamePlayScreen = document.getElementById("game-screen");
    let gameOverScreen = document.getElementById("game-over");
    let vs = document.getElementById("vs-container");
    startDiv.style.display = "none";
    gamePlayScreen.style.display = "none";
    gameOverScreen.style.display = "block";
    vs.style.display = "none";
    
    stats = [0,0,0];
    resultsA.textContent= 'So, What\'s It Gonna Be?';
    resultsR.textContent = 'Ready?';
    resultsP.textContent = 'Rohan Kishibe';
    resultsC.textContent = 'Ken Oyanagi';
}

function statsTracking(win,lose,tie){
    if (win == 1){
        stats[0] += 1;
        stats[2] += 1;
    }else if(lose == 1){
        stats[1] += 1;
        stats[2] += 1;
    }else if(tie == 1){
        stats[2] += 1;
    }
}

let stats = [0,0,0];
let resultsA = document.getElementById('resultsA');
let resultsR = document.getElementById('resultsR');
let resultsP = document.getElementById('resultsP');
let resultsC = document.getElementById('resultsC');

resultsA.textContent= 'So, What\'s It Gonna Be?';
resultsR.textContent = 'Ready?';
resultsP.textContent = 'Rohan Kishibe';
resultsC.textContent = 'Ken Oyanagi';


let final = document.getElementById('final-container'); 

const btns = document.querySelectorAll(".buttons");
console.log(btns);
btns.forEach(btn => btn.addEventListener("click", () => {
    (gameRound(btn.id,computerPlay())) 
}));
