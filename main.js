const grid = document.querySelector(".grid");
const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
const change = document.querySelector(".change");
let squareSize = 8;

createGrid(squareSize);

//Create Div
function createDiv(size) {
	const div = document.createElement("div");
	div.classList.add("box");
	div.style.width = `${size}px`;
	div.style.height = `${size}px`;

	return div;
}

//Create Grid
function createGrid(gridSize) {
	for (let i = 0; i < gridSize * gridSize; i++) {
		grid.appendChild(createDiv(grid.clientWidth / gridSize));
	}
}

//Reset
function reset() {
	while (grid.firstChild) {
		grid.removeChild(grid.lastChild);
	}
	createGrid(squareSize);
}

//Clear button
clear.addEventListener("click", reset);

//Change grid size
change.addEventListener("click", () => {
	squareSize = prompt("Enter a Grid Size");
	reset();
});

//MouseOver Event
grid.addEventListener("mouseover", (e) => {
	if (e.target.matches(".box")) {
		e.target.classList.add("active");
	}
});
