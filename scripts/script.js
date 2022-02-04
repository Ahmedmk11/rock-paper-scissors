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
    console.log(`Round: ${stats[2]} \nPlayer: ${stats[0]} \nComputer: ${stats[1]}`);
    const results = document.querySelector('#results-container');

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
    if(isGameOver()){
        const final = document.querySelector('#results-container');
        if(stats[0] > stats[1]){
            final.textContent = "You Won The Game!";
        }else{
            final.textContent = "You Lost The Game";
        } 
    }
}

function isGameOver(){
    return stats[0] == 5 || stats[1] == 5;
}

function mainGame(){
    
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

const start = document.querySelector('#start-button');
start.addEventListener('click',mainGame);
const stats = [0,0,0];


const btns = document.querySelectorAll(".buttons");
btns.forEach(btn => btn.addEventListener("click", () => {
    (gameRound(btn.id,computerPlay())) 
}));