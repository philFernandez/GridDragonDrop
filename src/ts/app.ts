import '../css/style.css';

const GRID_ROWS = 20;
const GRID_COLUMNS = 25;

/**
 * Each row spans 2 grid rows
 * and each columns spans 5 grid columns
 */
const ROWS = 14;
const COLUMNS = 5;

const ROW_SPAN = 2;


const boxes = document.querySelectorAll('div.box') as NodeListOf<HTMLDivElement>;



for (let box of boxes) {
    let gridRowIndex = 1;

    for (let rowNum = 0; rowNum < ROWS; rowNum++) {
        const row = document.createElement('div');
        row.style.gridRow = `${gridRowIndex} / span ${ROW_SPAN}`;
        gridRowIndex += ROW_SPAN;
        box.appendChild(row);
    }

}
