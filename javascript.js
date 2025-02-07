const grid = document.querySelector('.grid');
grid.style.height = "800px"; 
grid.style.width = "800px";
let size = 16;
let eraseMode = false;


function createGrid(size){
  grid.innerHTML = ""; /* Clean the grid before creating */

  const gridsize = 800;
  const squaresize = (`${gridsize/size}px`);

  for (let i=0; i<size*size; i++){

    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squaresize;
    square.style.height = squaresize;

    grid.appendChild(square);

    square.addEventListener("mouseover", (event) => {
      if (eraseMode) {
        event.target.style.backgroundColor = "";  // Efface la couleur si l'effaceur est activé
      } else {
        event.target.style.backgroundColor = randomColor();  // Sinon, colorie normalement
      }
    });
  }
}

createGrid(15); /* Create the grid */

const buttons = document.querySelectorAll("button");
const newGrid = document.querySelector('.newGrid');
const eraser = document.querySelector('.eraser');
const reset = document.querySelector('.reset')

buttons.forEach(button => {
  button.style.display = "in-line block";
  button.style.margin = "20px";
  button.style.padding = "10px 20px";
  button.style.fontSize = "16px";
});

const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';


newGrid.addEventListener('click', function() {
    size = prompt("New grid size ?");
    while(size>100 || size<0){
      size = prompt("Insert a correct value : ");
    }
    createGrid(size);
  });

eraser.addEventListener('click', function() {
  eraseMode = !eraseMode;
  eraseMode.textContent = eraseMode ? "Drawing Mode" : "Eraser Mode"; 
});

reset.addEventListener('click', function() {
    createGrid(size);
  });

function randomNumber(){
  let random = Math.floor(Math.random()*16);
  return random;
}

function randomColor(){
  const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]; /* Color = # 123456  with 6 characters from the hexCharacters array */
  let newcolor = "#";
  for (let i=0;i<6;i++){
    newcolor += hexCharacters[randomNumber()];
  }

  return newcolor;
}


