let gridContainer = document.querySelector(".grid-container");
let container = document.querySelector(".container");
let gridItem = gridContainer.querySelectorAll("div");
let mouseoverEffect = document.querySelector(".grid-item.mouseover");
let squaresNumBtn = document.createElement("button");
squaresNumBtn.innerText = "Resolution";

container.appendChild(squaresNumBtn).className = "squares-num";
squaresNumBtn.addEventListener("click", askForNum);


function makeRsAndCols(num) {
  for (let c = 0; c < num * num; c++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell);
  }
  gridContainer.style.setProperty("--grid-rows", num);
  gridContainer.style.setProperty("--grid-cols", num);
}

function reset(){
  while(gridContainer.firstChild){
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

//number of squares per side
function askForNum() {
  let numb = prompt("Write Numbers of Squares");
  while (numb > 150) {
    return numb = prompt("Sorry, Max Num is 150");
  }
  while (numb === null) {
    return numb = 16;
  }
  reset()
  makeRsAndCols(numb);
}

makeRsAndCols(16);
gridContainer.addEventListener("mouseover", (e) => {
  e.target.classList.add("mouseover");
});

// making colored sketch mode
//making reset button
