const grid = document.getElementById("grid1")
let colNum = 3
let rowNum = 3

// getting the Buttons to add and remove rows
const addRow = document.getElementById("addRow")
const remRow = document.getElementById("remRow")

// Event listener to add rows
addRow.addEventListener("click", function(){
    for(let i=0;i<colNum;i++ ){
        let newCell=document.createElement("div")
        newCell.classList.add("grid-item")
        newCell.innerText = "new-cell-row"
        grid.appendChild(newCell);
    }
    rowNum++;
    console.log(rowNum)
});

// Event listener to remove rows
remRow.addEventListener("click", function(){
    for(let i=0; i<colNum; i++ ){
    grid.lastElementChild.remove()
    }
    rowNum--;
    console.log(rowNum)
})