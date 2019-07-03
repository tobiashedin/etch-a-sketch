function createGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      $("#gridContainer").append("<div class='grid'></div>");
    }
  }
  $(".grid").width(800 / x);
  $(".grid").height(800 / x);
}

$(document).ready(function() {
  createGrid(16);

  $(".grid").mouseover(function() {
    $(this).css("background-color", "black");
  });
});
