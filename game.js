// Get the grid container element from the HTML
const gridContainer = document.querySelector("#grid");

// Create an empty array to hold references to the grid cells
const gridCells = [];

// Loop through each row and column of the grid, creating a div element for each cell and adding it to the grid container
for (let row = 0; row < 10; row++) {
  for (let col = 0; col < 10; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gridContainer.appendChild(cell);
    gridCells.push(cell);
  }
}

// Example: Change the background color of the top-left cell
gridCells[0].style.backgroundColor = "red";
