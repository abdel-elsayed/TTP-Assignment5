const grid = document.getElementById("grid1")
let colNum = 1;
let rowNum = 1;


// getting the Buttons to add and remove rows
const addRow = document.getElementById("addRow")
const remRow = document.getElementById("remRow")

// Event listener to add rows
addRow.addEventListener("click", function(){
    let newRow = document.createElement("tr");
    for(let i=0;i<colNum;i++ ){
        let newCell=document.createElement("td")
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