const grid = document.getElementById("grid1")
let colNum = 3
let rowNum = 3


// adding a new row
const addRow = document.getElementById("addRow")


addRow.addEventListener("click", addRowFunction);

function addRowFunction(){
    let tempCol = colNum
    while(tempCol > 0){
        let newCell=document.createElement("div")
        newCell.classList.add("grid-item")
        newCell.innerText = "new-cell-row"
        grid.appendChild(newCell);
        tempCol--;
    }
    rowNum++;
    console.log(rowNum)
}

