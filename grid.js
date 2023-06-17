const reset = document.querySelector("button");
reset.addEventListener('click', newGrid);

var container = document.createElement("div");
container.className = "container";
var grid = document.createElement("div");
grid.className = 'grid';
for( let x = 0; x< 16; x++)
{
    var cellX = document.createElement("div");
    cellX.className= "column";
    for(let y = 0; y < 16; y++)
    {
        var cellY = document.createElement("div");
        cellY.className= "row";
        cellX.appendChild(cellY);
    }
    grid.appendChild(cellX);
}
container.replaceChildren(grid);
document.body.appendChild(container);

function newGrid(){
    newsize = prompt("Input new grid size");
    makeGrid(newsize);
};

function makeGrid(size){
var container = document.querySelector("div");
container.className = "container";
var grid = document.createElement("div");
grid.className = 'grid';
if(size <=100 && size!= ""&& size>=16){
for( let x = 0; x< size; x++)
{
    var cellX = document.createElement("div");
    cellX.className= "column";
    for(let y = 0; y < size; y++)
    {
        var cellY = document.createElement("div");
        cellY.className= "row";
        cellX.appendChild(cellY);
    }
    grid.appendChild(cellX);
}
container.replaceChildren(grid);
document.body.appendChild(container);
var changes = document.getElementsByClassName("row");
for(let i = 0; i<changes.length; i++){
changes.item(i).addEventListener("mouseover",function(){
    changes.item(i).classList.add('hover');
})};
}
document.getElementById("size").textContent =size + " x " + size;
};




var changes = document.getElementsByClassName("row");
for(let i = 0; i<changes.length; i++){
changes.item(i).addEventListener("mouseover",function(){
    changes.item(i).classList.add('hover');
})};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function randomColor(){
    return "rgb("+getRandomInt(255)+","+getRandomInt(255)+","+getRandomInt(255)+")";
  }
  