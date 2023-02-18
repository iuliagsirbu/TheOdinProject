function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    // computerChoice is 0, 1 or 2
    let computerString = ["Rock", "Paper", "Scissors"];

    return computerString[computerChoice];
}

function capitalize(string) {
    const ascii = "a".charCodeAt(0) - "A".charCodeAt(0);
    if (string[0] >= "a" && string[0] <= "z") {
        string = String.fromCharCode(string[0].charCodeAt(0) - ascii) + string.slice(1);
    }
    let auxstring = "";
    for (let i = 1; i < string.length; i++) {
        if (string[i] >= "A" && string[i] <= "Z") {
            auxstring += String.fromCharCode(string[i].charCodeAt(0) + ascii);
        }
        else {
            auxstring += string[i];
        }
    }
    string = string[0] + auxstring;
    return string;
}

function winner(player, computer) {
    if (player === "Rock" && computer === "Scissors")
        return 1;

    if (player === "Scissors" && computer === "Paper")
        return 1;

    if (player === "Paper" && computer === "Rock")
        return 1;

    if (player === computer)
        return 2;

    return 0;
}

function playRound() {
    let playerSelection = prompt("Choose");
    let computerSelection = getComputerChoice();
    playerSelection = capitalize(playerSelection);

    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);

    if (winner(playerSelection, computerSelection) == 1)
        return `You win the round! ${playerSelection} beats ${computerSelection}`;
    else if (winner(playerSelection, computerSelection) == 0)
        return `You lose the round! ${computerSelection} beats ${playerSelection}`;
    else return "You chose the same thing! It's a tie!";

}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;

    console.log("This is going to be a best of 5!");
    console.log("\n");

    while (computerScore + playerScore < 5) {
        console.log(playerScore, computerScore);
        console.log(`This is round ${round}`);

        let decide = playRound();
        console.log(decide);
        
        if (decide.search("win") != -1)
            playerScore += 1;
        else if (decide.search("lose") != -1)
            computerScore += 1;

        round += 1;
        console.log("\n");
    }
    console.log(`Your score is ${playerScore} and the computer score is ${computerScore}.`);

    if (playerScore > computerScore)
        return "You won the game! Refresh the page to play again!";
    else if (playerScore < computerScore)
        return "You lost the game! Refresh the page to play again!";
    else return "It's a tie! Refresh the page to play again!";
}

console.log(game());
