const container = document.querySelector(".container");
const button = document.querySelector("button");
let gridSize = 0;
let darknessLevel = 0;

button.addEventListener("click", getGridSize);

function getGridSize() {
  resetGrid();
  gridSize = prompt("Enter new grid size", "0");
  if (gridSize != null && gridSize < 100) {
    setNewGrid(gridSize);
  }
}

function resetGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
function setNewGrid(gridSize) {
  const containerWidth = container.offsetWidth;
  const itemWidth = containerWidth / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const item = document.createElement("div");
    item.classList.add("item");

    item.style.width = `${itemWidth}px`;
    item.style.height = `${itemWidth}px`;

    //add event Listener
    item.addEventListener("mouseover", function () {
      item.style.backgroundColor = getRandomColor(darknessLevel);
      // Increase darkness level by 10% (up to maximum of 100%)
      darknessLevel = Math.min(darknessLevel + 10, 100);
    });

    /* item.addEventListener("mouseout", function () {
    item.style.backgroundColor = "#ccc";
  }); */

    container.appendChild(item);
  }
}

function getRandomColor(darknessLevel) {
  // letters is a string that contains all the possible characters that can be used to represent a hexadecimal color value
  const letters = "0123456789ABCDEF";
  let color = "#";
  // Calculate darkness level (in hexadecimal)
  const darknessHex = Math.round((darknessLevel / 100) * 255).toString(16);
  //ensure darkness level has two digit
  const darknessHexPadded = darknessHex.padStart(2, "0");

  //generate color with increased darkness level
  for (let i = 0; i < 3; i++) {
    // get random color component
    const colorComponent = Math.floor(Math.random() * 255);
    //calculate final color component
    const finalColorComponent = Math.max(colorComponent - darknessLevel, 0);
    // convert to hexadecimal string
    const finalColorComponentHex = finalColorComponent
      .toString(16)
      .padStart(2, "0");
    //append to color string
    color += finalColorComponentHex;
  }
  return color;
}
