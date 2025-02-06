const grid = document.querySelector("div");

for (let i=0; i<16; i++){
    for (let j=0; j<16; j++){
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



