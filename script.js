let gridContainer = document.querySelector(".grid-container");

let num;


function makeRsAndCols (num){
    gridContainer.style.setProperty('--grid-rows', num);
    gridContainer.style.setProperty('--grid-cols', num);
    for(let c = 0; c < (num * num); c++){
        let cell = document.createElement('div');
        // cell.innerText = (c + 1);
        gridContainer.appendChild(cell).className = "grid-item hover";
    };
};

//number of squares per side 
function askForNum (){
    num = prompt("Write Numbers of Squares"); 
    while (num > 150){
        num = prompt("Sorry, Max Num is 150");
    }
    makeRsAndCols(num);
    
}


makeRsAndCols(16)
askForNum()

