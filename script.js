const grid = document.getElementById("grid1")
let colNum = 2;
let rowNum = 1;
// getting the Buttons to add and remove rows
const addRow = document.getElementById("addRow")
const remRow = document.getElementById("remRow")

// getting the Buttons to add and remove columns
const addCol = document.getElementById("addCol")
const remCol = document.getElementById("remCol")

// getting the colorAll button
const colorAll = document.getElementById("colorAll")

// getting the colorAllUncolored button
const colorAllUncolored = document.getElementById("colorAllUncolored")

// getting the clearAll button
const clearAll= document.getElementById("clearAll")

// used for part 10 - tracks user holding down mouse
let coloring = false

/* Feature #6: click on a single cell, changing its color to the currently selected color */
let currentColor = `${document.getElementById("color-select").value}`

// Event listener to add rows
addRow.addEventListener("click", function(){
    let newRow = document.createElement("tr");
    for(let i=0;i<colNum;i++ ){
        let newCell=document.createElement("td")   
        initializeCell(newCell) 
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

// Event listener to add columns
addCol.addEventListener("click", function(){
    let Rows = document.querySelectorAll("tr")

    for(let i = 0; i < Rows.length; i++) {
       
        let newCell=document.createElement("td")
        initializeCell(newCell) 
        Rows[i].appendChild(newCell);
    }
    colNum++
})

// Event listener to remove columns
remCol.addEventListener("click", function(){
    let Rows = document.querySelectorAll("tr")
    for(let i = 0; i < Rows.length; i++) {
       
        Rows[i].deleteCell(colNum-1)
    }
    colNum--;
})

// function that gets called when the value of the drop down menu changes for coloring
function setCurrentColor(){
    this.style.backgroundColor = currentColor;
    // remove class "uncolored" because cell is now colored
    this.classList.remove("uncolored")
}

// Event listener to color all cells
colorAllUncolored.addEventListener("click", function(){
    // get all cells in the table
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...allCells];

    // filter out the cells that are colored
    const uncolored = allCellsList.filter(cell => {
        return cell.classList.contains("uncolored");
    });
    
    // change the background color of each uncolored cell and remove "uncolored" class
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
});

// Event listener to color all cells
colorAll.addEventListener("click", function(){
    // get all cells in the table
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...allCells];

    // change the background color of each uncolored cell and remove "uncolored" class
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
});


// Event listener to clear all cells
clearAll.addEventListener("click", function(){
// get all cells
let allCells = document.getElementsByTagName("td");
let allCellsList = [...allCells];

// remove "uncolored" class, change background color to red
allCellsList.forEach(cell => {
    cell.style.backgroundColor = 'white';
  
})

})
    
function initializeCell(cell) {
    // change color on click
    cell.addEventListener("click", setCurrentColor);
    // give cell as class called "uncolored"
    cell.classList.add("grid-item");
    cell.classList.add("uncolored");
    cell.innerText = "new-cell-row"

    /* Feature #10:
        click and hold (mouseover) from a single cell (start) to a different cell (end) 
        such that all affected/hovered-over cells from start to end change to the 
        currently selected color
    */

    // on mousedown, start coloring
    cell.addEventListener("mousedown", e => {
        coloring = true
    });

    // if coloring, set background color of cell to the currentColor and remove the uncolored class
    cell.addEventListener("mousemove", e => {
        if (coloring) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });

    // if coloring, on mouseup, set coloring to false
    cell.addEventListener("mouseup", e => {
        if (coloring) {
            coloring = false;
        }
    })
}

// sets currentColor based on the color selected from dropdown
function colorUsed(color) {
    currentColor = color;
}