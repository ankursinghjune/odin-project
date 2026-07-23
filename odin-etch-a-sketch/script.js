const gridContainer = document.querySelector(".grid-container");
const addButton = document.querySelector(".add-grid-button");

function addGrid(gridSize) {
    gridContainer.innerHTML = "";

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid-boxes");

        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "darkgray";
        });

        gridContainer.appendChild(grid);
    }
}

function addCustomGrid() {
    let gridSize = prompt("enter a number (max: 100):");
    if (Number(gridSize) >= 100 || Number(gridSize) <= 0) {
        alert("invalid number");
    }
    addGrid(gridSize);
}

addButton.addEventListener("click", addCustomGrid);
addGrid(16);
