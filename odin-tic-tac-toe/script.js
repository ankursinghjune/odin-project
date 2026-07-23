const startBtn = document.querySelector(".start-game");
const restartBtn = document.querySelector(".restart-game");

const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");

const cells = document.querySelectorAll("td");
const winnerHeading = document.querySelector("h3");

let gameboard = ["", "", "", "", "", "", "", "", ""];

let player1;
let player2;
let currentPlayer;

startBtn.addEventListener("click", startGame);

function placeMark(index, symbol) {
    if (gameboard[index] !== "") return;
    gameboard[index] = symbol;
}

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWinner() {
    for (let [a, b, c] of winPatterns) {
        if (
            gameboard[a] &&
            gameboard[a] === gameboard[b] &&
            gameboard[a] === gameboard[c]
        ) {
            return true;
        }
    }
    return false;
}

function startGame(e) {
    e.preventDefault();

    player1 = { mark: "X", name: player1Input.value || "Player 1" };
    player2 = { mark: "O", name: player2Input.value || "Player 2" };

    currentPlayer = player1;

    resetBoard();
    enableCellClicks();
}

function resetBoard() {
    gameboard = ["", "", "", "", "", "", "", "", ""];
    cells.forEach((cell) => (cell.textContent = ""));
    winnerHeading.textContent = "Winner:";
}

function enableCellClicks() {
    cells.forEach((cell) => {
        cell.addEventListener("click", handleMove);
    });
}

function disableClicks() {
    cells.forEach((cell) => {
        cell.removeEventListener("click", handleMove);
    });
}

function handleMove(e) {
    const index = e.target.dataset.index;

    placeMark(index, currentPlayer.mark);
    e.target.textContent = currentPlayer.mark;

    if (checkWinner()) {
        winnerHeading.textContent = `Winner: ${currentPlayer.name}`;
        disableClicks();
        return;
    }

    currentPlayer = currentPlayer === player1 ? player2 : player1;
}
