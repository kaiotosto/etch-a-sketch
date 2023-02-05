const container = document.querySelector(".container");
const clear = document.querySelector(".clear");
let gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
	const div = document.createElement("div");
	div.classList.add("grid");
	div.style.width = "20px";
	div.style.height = "20px";
	container.append(div);
}

let grid = document.querySelectorAll(".grid");
for (const box of grid) {
	box.addEventListener("mouseover", () => {
		box.style.backgroundColor = "aqua";
	});
}

clear.addEventListener("click", () => {
	for (const box of grid) {
		box.style.backgroundColor = "black";
	};
});
