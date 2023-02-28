import '../css/style.css';


function gridTheBoxes(nRows: number, rowSpan: number) {
    const boxes = document.querySelectorAll('div.box') as NodeListOf<HTMLDivElement>;

    for (let box of boxes) {
        let gridRowIndex = 1;
        for (let rowNum = 0; rowNum < nRows; rowNum++) {
            const row = document.createElement('div');
            row.style.gridRow = `${gridRowIndex} / span ${rowSpan}`;
            gridRowIndex += rowSpan;
            box.appendChild(row);
        }
    }
}

gridTheBoxes(14, 2);

const box1 = document.querySelector('div.box:nth-child(1)');


const thing1 = document.createElement('div');
thing1.classList.add('thing');
thing1.style.backgroundColor = "lightblue";
thing1.style.gridArea = "1 / 1 / 5 / 38";

box1?.appendChild(thing1);