const grid = document.querySelector("div");

function createGrid(x){
  grid.innerHTML = ""; /* Clean the grid before creating */
  grid.style.setProperty('--cols',x); 

  for (let i=0; i<x*x; i++){

    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);

    square.addEventListener("mouseover", (event) => {
      // highlight the mouseover target
      event.target.style.backgroundColor = "orange";
              
      // reset the color after a short delay
      setTimeout(() => {
      event.target.style.backgroundColor = "";
      }, 500);
    },
    false,);
  }
}

createGrid(15); /* Create the grid */


const button = document.querySelector("button");
button.style.display = "block";
button.style.margin = "20px auto";
button.style.padding = "10px 20px";
button.style.fontSize = "16px";

button.addEventListener('click', function() {
    let size = prompt("New grid size ?");
    while(size>100 || size<0){
      size = prompt("Insert a correct value : ");
    }
    createGrid(size);
  });
