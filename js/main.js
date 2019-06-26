const gridSize = 16;
const container = document.querySelector(".container");

function createGrid() {
  for (let x = 1; x <= 16; x++) {
    for (let y = 1; y <= 16; y++) {
      let grid = $("<div class='grid'></div>");
      grid.appendTo(".container");
      console.log(x, y);
    }
  }
}
createGrid();
/* for (let i = 0; i <= 16; i++) {
    //let gridBox = document.createElement("div");
    let gridBox = $("<div class='grid'></div>");
    grid.appendTo(".contatiner");
    //gridBox.classList.add("sqr");
    //gridBox.style.border = "1px solid gray";
    //container.appendChild(gridBox);
  }
  container.style.cssText =
    "grid-template-columns: repeat(" +
    num +
    ", 1fr); grid-template-rows: repeat(" +
    num +
    ", 1fr)";
} */

//-----------------------------------------

//$(document).ready(function() {});
/* for (let i = 0; i <= 16; x++) {
    for (let y = 0; (i = size ** 2); i++) {
      let gridBox = $("<div class='grid'></div>");
      grid.appendTo(".contatiner");
      console.log(x, y);
    }
  } */

/*   $(document).ready(function() {
    for (let x = 0; x <= 16; x++) {
      for (let y = 0; y <= 16; y++) {
        let grid = $("<div class='grid'></div>");
        grid.appendTo(".container");
        console.log(x, y);
      }
    }
  }); */
