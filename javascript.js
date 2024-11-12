const container = document.getElementById("sketch");
        container.classList.add("sketchContainer");
let perRow = 16;
let sizePx = 640 / perRow;
const defaultMode = "color";

let currentMode = defaultMode;
createGrid(perRow);



function createGrid(size) {
   for (let j = 0; j < size; j++) {
        const column = document.createElement("div");
            column.style.display = "flex";
            column.style.flexDirection = "column";
        container.appendChild(column);

        for (let i = 0; i < size; i++) {
            const square = document.createElement("div");
                square.style.width = `${sizePx}px`;
                square.style.height = `${sizePx}px`;
                square.style.border = '1px solid gray';
                square.style.boxSizing = 'border-box';
                square.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                square.addEventListener("mouseover", () => {square.style.backgroundColor = changeColor()});
//                square.addEventListener("mousedown", changeColor);
                column.appendChild(square);
            
               
        }
    }
}

const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;

}

const changeColor = () => {
    if (currentMode === "color") {return randomColor()}
    else if (currentMode === "bnw") {return `rgb(0, 0, 0)`}
    else {};

}

document.getElementById("bnwLink").addEventListener("mousedown", () => {currentMode = "bnw"});
document.getElementById("colorLink").addEventListener("mousedown", () => {currentMode = "color"});
document.getElementById("eraserLink").addEventListener("mousedown", () => {clearGrid()});

document.getElementById("gridSizeBtn").addEventListener("click", () => {
    perRow = Math.min(100, Math.max(2, (document.getElementById("gridInput").value)));  
    sizePx = 640 / perRow; 
    clearGrid()});
function clearGrid() {
    container.innerHTML = "";createGrid(perRow);

}


