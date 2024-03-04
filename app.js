const container = document.querySelector(".container");
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
  const item = document.createElement("div");
  item.classList.add("item");

  //add event Listener
  item.addEventListener("mouseover", function () {
    item.style.backgroundColor = getRandomColor();
  });

  /* item.addEventListener("mouseout", function () {
    item.style.backgroundColor = "#ccc";
  }); */

  container.appendChild(item);
}

function getRandomColor() {
  // letters is a string that contains all the possible characters that can be used to represent a hexadecimal color value
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
