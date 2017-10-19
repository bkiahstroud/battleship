const ship = 1;
var board = new Array(10);
for (i = 0; i < 10; i++) {
  board[i] = new Array(10);
  for (j = 0; j <10; j++) {
  }
}
var shipPositions = [];
// make var shipPositions which saves the coordinates of the ships into an array.
for (k = 0; k < 5; k++) {
  var rowI = [Math.floor(Math.random() * 10)];
  var columnI = [Math.floor(Math.random() * 10)];
  board[rowI][columnI] = ship;
  shipPositions.push([rowI, columnI]);
  var something = "#" + rowI + columnI;
  $("something").removeAttr("id");
}

$(document).ready(function(){
  for (var i_tr = 0; i_tr < 10; i_tr++) {
    $("#battleTable").append("<tr id=tr_" +i_tr+">"); //create 10 trs with unique ids
    for (var i_td = 0; i_td < 10; i_td++) {
      $("#battleTable").append("<td id=" + i_tr + i_td + ">"); //create 10 tds within each tr with unique ids
   };
  };
  var torpedosRemaining = 25;
  var win = 0;
  $("td").on("click", function(){ //need to add "if" statements to change color for either a hit or a miss.
    if (board[parseInt(event.target.id[0])][parseInt(event.target.id[1])] == 1) { // Return the value of the index in board at position [row][column]
      $(this).addClass("hit");
      win++;
    } else {
      $(this).addClass("miss");
    }
    torpedosRemaining--;
    $("section").text("Torpedos remaining: " + torpedosRemaining);
    $(this).off("click");
    if (win == 5) {
      alert("You have sunk all the battleships!");
      $("td").off("click");
    };
//Convert coordinates from shipPositions to td positions to give them a class of "hit"
    if (torpedosRemaining <= 0) {
      $("td").off("click");
      alert("Sorry you lose!");
      for (var l = 0; l < 5; l++) {
        $("#"+shipPositions[l][0]+shipPositions[l][1]).addClass("hit");
      };
    };
  });
});
