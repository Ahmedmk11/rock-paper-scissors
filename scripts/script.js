function computerPlay(){
    let computerMove = Math.floor(3 * Math.random());
    switch (computerMove){
        case 0:
            result = "rock";
            break;
        case 1:
            result = "paper"
            break;
        case 2:
            result = "scissors"
            break;
    }
    return result;
}
function gameRound(playerSelection, computerSelection){
    if(computerSelection == "rock" && playerSelection.toLowerCase() == "rock" || computerSelection == "paper" && playerSelection.toLowerCase() == "paper" || computerSelection == "scissors" && playerSelection.toLowerCase() == "scissors"){
        console.log("It's a Tie!");
        return 0;
    }else if(computerSelection == "rock" && playerSelection.toLowerCase() == "scissors" || computerSelection == "paper" && playerSelection.toLowerCase() == "rock" || computerSelection == "scissors" && playerSelection.toLowerCase() == "paper"){
        console.log(`You Lose! ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)}. :(`);
        return -1;
    }else{
        console.log(`You Win! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} beats ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)}. :)`);
        return 1;
    }
}
function mainGame(){
    let roundNum = 0;
    let playerWins = 0;
    let computerWins = 0;
    while(playerWins < 5 && computerWins < 5){
        let invalidInput = true; 
        while(invalidInput){
            playerInput = window.prompt("Rock, Paper or Scissors?"); 
            if(playerInput == "rock" || playerInput == "paper" || playerInput == "scissors"){
                invalidInput = false;
            }else{
                console.log("wrong!");
            }
        }
        let thisRound = gameRound(playerInput, computerPlay());
        if (thisRound > 0){
            playerWins ++;
            roundNum ++;
        }else if (thisRound < 0){
            computerWins ++;
            roundNum ++;
        }else{
            roundNum ++;
        }
        console.log(`Round: ${roundNum} \nPlayer: ${playerWins} \nComputer: ${computerWins}`);
    }
    if(playerWins > computerWins){
        console.log("You Won!");
    }else{
        console.log("You Lose!");
    }
    
}
mainGame();