const container = document.querySelector(".container");
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
  const item = document.createElement("div");
  item.classList.add("item");
  container.appendChild(item);
}
