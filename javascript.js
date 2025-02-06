const grid = document.querySelector("div");

function createGrid(x){
  grid.innerHTML = ""; /* Clean the grid before creating */

    for (let i=0; i<x; i++){
        for (let j=0; j<x; j++){
            const square = document.createElement("div");
            grid.appendChild(square);
    
            square.addEventListener(
                "mouseover", (event) => {
                  // highlight the mouseover target
                  event.target.style.backgroundColor = "orange";
              
                  // reset the color after a short delay
                  setTimeout(() => {
                  event.target.style.backgroundColor = "";
                  }, 500);
                },
                false,
              );
        }
    }
}

createGrid(16); /* Create the grid */
 

const button = document.querySelector("button");

button.addEventListener('click', function() {
    const size = prompt("New grid size ?");
  });