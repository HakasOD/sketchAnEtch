function create4x4Grid() {
    let gridContainer = document.querySelector(".grid-container");

    for(let i = 0; i < 4; i++){
        let gridSquareRow = document.createElement("div");
        gridSquareRow.classList.add("grid-row");
        gridContainer.appendChild(gridSquareRow);

        for(let x = 0; x < 4; x++){
            let gridSquareColumn = document.createElement("div");
            gridSquareColumn.classList.add("grid-square");
            gridSquareColumn.classList.add("column")
            gridSquareRow.appendChild(gridSquareColumn);
        }
    }
}

function createUserGrid() {
    // amountOfSqaures must be under 100
    amountOfSqaures = undefined;
    do {
        amountOfSqaures = prompt("Enter an amount of squares");
    } while (amountOfSqaures < 0 || amountOfSqaures > 100);

    for(let i = 0; i < amountOfSqaures; i++){
        let gridSquareRow = document.createElement("div");
        gridSquareRow.classList.add("grid-row");
        gridContainer.appendChild(gridSquareRow);

        for(let i = 0; i < amountOfSqaures; i++){
            let gridSquareColumn = document.createElement("div");
            gridSquareColumn.classList.add("grid-square");
            gridSquareColumn.classList.add("column")
            gridSquareRow.appendChild(gridSquareColumn);
        }
    }

}

create4x4Grid();


