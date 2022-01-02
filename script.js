const grid = document.querySelector('#grid');
const sizeSlider = document.querySelector('#grid-size');
const clearbtn = document.querySelector('#clear');

clearbtn.addEventListener('click', clear);
sizeSlider.addEventListener('input', createGrid);

createGrid();

function createGrid(){
    let NUM_OF_PIXELS = sizeSlider.value;
    //clear the grid so we don't add on top of it
    while(grid.firstChild)
        grid.removeChild(grid.firstChild);
    grid.style.gridTemplateColumns = `repeat(${NUM_OF_PIXELS}, 1fr)`;
    for (let i = 0; i<NUM_OF_PIXELS*NUM_OF_PIXELS; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', function() {
            cell.classList.add('cell-hover');
        });
        grid.appendChild(cell);
    }
}

function clear() {
    for (const cell of grid.childNodes) {
        cell.classList.remove('cell-hover');
    }
}