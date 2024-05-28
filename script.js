const gridContainer = document.querySelector(".grid-container");
const newGridButton = document.querySelector("#new-grid-button");

function createUserGrid() {
    deleteGrid();

    // amountOfSqaures must be under 100
    amountOfSqaures = undefined;
    do {
        amountOfSqaures = prompt("Enter amount of squares");
    } while (amountOfSqaures < 0 || amountOfSqaures > 100);

    for(let i = 0; i < amountOfSqaures; i++){
        let gridSquareRow = document.createElement("div");
        gridSquareRow.classList.add("grid-row");
        gridContainer.appendChild(gridSquareRow);

        for(let i = 0; i < amountOfSqaures; i++){
            let gridSquareColumn = document.createElement("div");
            gridSquareColumn.classList.add("grid-square");
            gridSquareColumn.classList.add("column");

            // Add background colour if hovered. If previously hovered lower opacity
            gridSquareColumn.addEventListener("mouseover", (event) => {
                if(gridSquareColumn.classList.contains("wasHovered") === true) {   
                    let backgroundColor = window.getComputedStyle(gridSquareColumn).getPropertyValue("background-color");
                    let rgbaComponents = backgroundColor.split("(")[1].replace(")", "").split(",");
                    let opacity = rgbaComponents[3];

                    console.log("before: " + opacity)
                    if(opacity === undefined){
                        opacity = 0.9;
                    } else {
                        opacity -= 0.1;
                    }

                    gridSquareColumn.style.backgroundColor = 
                    `rgba(${rgbaComponents[0]}, ${rgbaComponents[1]}, ${rgbaComponents[2]}, ${opacity})`;

                } else {
                    gridSquareColumn.style.backgroundColor = `rgba(${getRandomColour()}, 1)`;
                    gridSquareColumn.classList.add("wasHovered");
                }
         
            })

            gridSquareRow.appendChild(gridSquareColumn);
        }
    }

}

function deleteGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

function getRandomColour(){
    let r = getRandomInteger(255);
    let g = getRandomInteger(255);
    let b = getRandomInteger(255);

    return [r,g,b];
}

function getRandomInteger(max){
    return Math.floor(Math.random() * (max + 1))
}

newGridButton.addEventListener("click", () => {
    createUserGrid();
}) 




