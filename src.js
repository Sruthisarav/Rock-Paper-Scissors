function game(e) {
    humanScore = parseInt(document.getElementById("playerScore").innerHTML);
    computerScore = parseInt(document.getElementById("computerScore").innerHTML);
    if (!gameOver(humanScore, computerScore)) {
        humanMove = playerMove(e);
        computerMove = computerPlay();
        document.getElementById("playerMove").innerHTML = 
            "You played " + humanMove;
        document.getElementById("computerMove").innerHTML = 
            "Computer played " + computerMove;
        result = playRound(humanMove, computerMove);
        if (result === 'It is a draw this round!') {
            document.getElementById("message").innerHTML = result;
        } else if (result) {
            computerScore += 1;
            document.getElementById("computerScore").innerHTML = computerScore;
            message = output(humanMove, computerMove);
            document.getElementById("message").innerHTML = message;
        } else {
            humanScore += 1;
            document.getElementById("playerScore").innerHTML = humanScore;
            message = output(humanMove, computerMove);
            document.getElementById("message").innerHTML = message;
        }
    } 
    if (gameOver(humanScore, computerScore)) {
        document.getElementById('playerMove').remove();
        document.getElementById('computerMove').remove();
        let result = document.getElementById("message");
        if (computerScore > humanScore) {
            message = 'Computer has won this game!';
            result.classList.add("compWon");
        } else {
            message = 'You have won this game!';
            result.classList.add("playerWon");
        }
        result.innerHTML = message;
    }
}
function playerMove(e) {
    return e.target.id;
}
function computerPlay() {
    moves = ['rock', 'paper', 'scissors'];
    random = Math.floor(Math.random() * Math.floor(3));
    return moves[random];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It is a draw this round!'
    } else {
        switch (playerSelection) {
            case 'rock':
                return computerSelection === 'paper';
                break;
            case 'paper':
                return computerSelection === 'scissors';
                break;
            default:
                return computerSelection === 'rock';
        }
    }
}
function output(playerSelection, computerSelection) {
    switch (playerSelection) {
        case 'rock':
            return computerSelection === 'paper'
                ? "You Lose this round! Paper beats Rock"
                : "You Win this round! Rock beats Scissors";
            break;
        case 'paper':
            return computerSelection === 'scissors'
                ? "You Lose this round! Scissors beats Paper"
                : "You Win this round! Paper beats Rock";
            break;
        default:
            return computerSelection === 'rock'
                ? "You Lose this round! Rock beats Scissors"
                : "You Win this round! Scissors beats Paper";
    }
}
function gameOver(humanScore, computerScore) {
    if (humanScore != 5 && computerScore != 5) {
        return false;
    } else {
        return true;
    }
}
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', e => game(e))
})