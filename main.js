const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
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
