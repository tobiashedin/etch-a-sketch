$(document).ready(function() {
  createGrid(24);

  $(".grid-div").mouseover(function() {
    $(this).css("background-color", "black");
  });
});

function createGrid(x) {
  for (let rows = 0; rows < x; rows++) {
    for (let columns = 0; columns < x; columns++) {
      $("#container").append("<div class='grid-div'></div>");
    }
  }
  $(".grid-div").width(600 / x);
  $(".grid-div").height(600 / x);
}
