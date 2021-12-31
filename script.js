const grid = document.querySelector('#grid');
const clearbtn = document.querySelector('#clear');
let NUM_OF_PIXELS = 16;
grid.style.gridTemplateColumns = `repeat(${NUM_OF_PIXELS}, 1fr)`;
clearbtn.addEventListener('click', clear);
for (let i = 0; i<NUM_OF_PIXELS*NUM_OF_PIXELS; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseover', function() {
        cell.classList.add('cell-hover');
    });
    grid.appendChild(cell);
}

function clear() {
    for (const cell of grid.childNodes) {
        cell.classList.remove('cell-hover');
    }
}