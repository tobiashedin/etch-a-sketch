$(document).ready(function() {
  createGrid(16);
});

function createGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      $("#gridContainer").append("<div class='grid'></div>");
    }
  }
  $(".grid").width(800 / x);
  $(".grid").height(800 / x);
}

/*
function appendDivs(container, rows, columns) {
   const totalGridNum = rows * columns;
  for (let x = 0; x < totalGridNum; x++) {
    for (let y = 0; y < totalGridNum; y++) {
      let div = document.createElement("div");
      container.appendChild(div);
    }
  }
}
createGrid(); */
