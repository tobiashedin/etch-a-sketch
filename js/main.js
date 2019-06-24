$(document).ready(function() {
  for (let x = 0; x <= 16; x++) {
    for (let y = 0; y <= 16; y++) {
      let grid = $("<div class='grid'></div>");
      grid.appendTo(".container");
      console.log(x, y);
    }
  }
});
