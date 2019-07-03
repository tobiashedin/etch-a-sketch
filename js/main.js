function createGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      $("#container").append("<div class='grid-div'></div>");
    }
  }
  $(".grid-div").width(800 / x);
  $(".grid-div").height(800 / x);
}

$(document).ready(function() {
  createGrid(16);

  $(".grid-div").mouseover(function() {
    $(this).css("background-color", "gray");
  });
});
