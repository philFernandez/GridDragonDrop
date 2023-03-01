import '../css/style.css';


function gridTheBoxes(nRows: number, rowSpan: number) {
    const boxes = document.querySelectorAll('div.box') as NodeListOf<HTMLDivElement>;

    for (let box of boxes) {
        let gridRowIndex = 1;
        for (let rowNum = 0; rowNum < nRows; rowNum++) {
            const row = document.createElement('div');
            row.classList.add('drop-target');
            row.style.gridRow = `${gridRowIndex} / span ${rowSpan}`;
            gridRowIndex += rowSpan;

            box.appendChild(row);
        }
    }
}

gridTheBoxes(14, 2);

function placeAThing(box: HTMLDivElement, rowStart: number, colStart: number, rowEnd: number, colEnd: number, color: string) {
    const thing = document.createElement('div');
    thing.setAttribute('draggable', 'true');
    thing.classList.add('thing');
    thing.style.backgroundColor = color;
    thing.style.gridArea = `${rowStart} / ${colStart} / ${rowEnd} / ${colEnd}`;

    box?.appendChild(thing);
}

// HERE!!!!
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event

const box1 = document.querySelector('div.box:nth-child(1)') as HTMLDivElement;
const box2 = document.querySelector('div.box:nth-child(2)') as HTMLDivElement;

placeAThing(box1, 1, 1, 5, 38, 'tomato');
placeAThing(box2, 5, 1, 10, 38, 'orange');


function dragThings() {
    let dragged: HTMLDivElement;

    const draggables = document.querySelectorAll('div.thing') as NodeListOf<HTMLDivElement>;
    const targets = document.querySelectorAll('div.drop-target') as NodeListOf<HTMLDivElement>;

    draggables.forEach((draggable) => {
        draggable.addEventListener('dragstart', (evt) => {
            dragged = evt.target as HTMLDivElement;
            console.log(dragged);
        });
    });
}

dragThings();