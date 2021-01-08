const grid = document.getElementById("grid1")
let colNum = 2;
let rowNum = 1;
// getting the Buttons to add and remove rows
const addRow = document.getElementById("addRow")
const remRow = document.getElementById("remRow")

// getting the Buttons to add and remove columns
const addCol = document.getElementById("addCol")
const remCol = document.getElementById("remCol")

// Event listener to add rows
addRow.addEventListener("click", function(){
    let newRow = document.createElement("tr");
    for(let i=0;i<colNum;i++ ){
        let newCell=document.createElement("td")
        newCell.addEventListener("click", function(){
            newCell.style.background = setCurrentColor()
        });
        newCell.classList.add("grid-item")
        newCell.innerText = "new-cell-row"
        newRow.appendChild(newCell);
    }
    rowNum++;
    grid.appendChild(newRow)
   //console.log(rowNum)
});

// Event listener to remove rows
remRow.addEventListener("click", function(){
 
    grid.lastElementChild.remove()
    rowNum--;
    console.log(rowNum)
})

addCol.addEventListener("click", function(){
    let Rows = document.querySelectorAll("tr")

    for(let i = 0; i < Rows.length; i++) {
       
        let newCell=document.createElement("td")
        newCell.classList.add("grid-item")
        newCell.innerText = "new-cell-col"
        newCell.addEventListener("click", function(){
            newCell.style.background = setCurrentColor()
        });
        Rows[i].appendChild(newCell);
    }
    colNum++
})

remCol.addEventListener("click", function(){
    let Rows = document.querySelectorAll("tr")
    for(let i = 0; i < Rows.length; i++) {
       
        Rows[i].deleteCell(colNum-1)
    }
    colNum--;
})

function setCurrentColor(){
return `${document.getElementById("color-select").value}`
}