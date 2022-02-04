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
    results = document.getElementById('results-container');

    if(computerSelection == "Rock" && playerSelection == "Rock" || 
            computerSelection == "Paper" && playerSelection == "Paper" || 
            computerSelection == "Scissors" && playerSelection == "Scissors"){

        results.textContent = "It's a Tie!";
        statsTracking(0,0,1);

    }else if(computerSelection == "Rock" && playerSelection == "Scissors" ||
                computerSelection == "Paper" && playerSelection == "Rock" ||
                computerSelection == "Scissors" && playerSelection == "Paper"){

        results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}. :(`;
        statsTracking(0,1,0);

    }else{
        results.textContent = `You Win! ${playerSelection} beats ${computerSelection}. :)`;        
        statsTracking(1,0,0);
    }
    console.log(`Round: ${stats[2]} \nPlayer: ${stats[0]} \nComputer: ${stats[1]}`);
    
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
    startDiv.style.display = "none";
    gamePlayScreen.style.display = "block";
    gameOverScreen.style.display = "none";
    //checkClick();
}

function gameOver(){
    let startDiv = document.getElementById("start");
    let gamePlayScreen = document.getElementById("game-screen");
    let gameOverScreen = document.getElementById("game-over");
    startDiv.style.display = "none";
    gamePlayScreen.style.display = "none";
    gameOverScreen.style.display = "block";
    
    
    stats = [0,0,0];
    results.textContent='';
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
function checkClick(){
    const btns = document.querySelectorAll(".buttons");
    console.log(btns);
    btns.forEach(btn => btn.addEventListener("click", () => {
        (gameRound(btn.id,computerPlay())) 
    }));
}

let stats = [0,0,0];
let results = document.getElementById('results-container');
let final = document.getElementById('final-container'); 

const btns = document.querySelectorAll(".buttons");
console.log(btns);
btns.forEach(btn => btn.addEventListener("click", () => {
    (gameRound(btn.id,computerPlay())) 
}));