function getHumanChoice() {
    let choice = prompt("enter: rock/paper/scissors");
    console.log(`human choice: ${choice}`);
    return choice.toLowerCase();
}

function getComputerChoice() {
    let random = Math.random();
    if (random < 0.33) {
        console.log("computer choice: rock");
        return "rock";
    } else if (random < 0.66) {
        console.log("computer choice: paper");
        return "paper";
    } else {
        console.log("computer choice: scissors");
        return "scissors";
    }
}

function playgame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            console.log("human lose!");
            computerScore++;
        } else if (humanChoice === computerChoice) {
            console.log("match draw!");
        } else {
            console.log("human win!");
            humanScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`human score: ${humanScore}`);
    console.log(`computer score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("human is winner!");
    } else {
        console.log("computer is winner!");
    }
}

playgame();
