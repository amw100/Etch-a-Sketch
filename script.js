const NUM_OF_PIXELS = 16;
const grid = document.querySelector('#grid');

for (let i = 0; i<NUM_OF_PIXELS*NUM_OF_PIXELS; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i;
    grid.appendChild(cell);
}