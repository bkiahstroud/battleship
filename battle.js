const ship = 1;
var board = new Array(10);
for (i = 0; i < 10; i++) {
  board[i] = new Array(10);
  for (j = 0; j <10; j++) {
  }
}
for (k = 0; k < 5; k++) {
  board[Math.floor(Math.random() * 10)][Math.floor(Math.random() * 10)] = ship;
}
$(document).ready(function(){
  for (var i_tr = 0; i_tr < 10; i_tr++) {
    $("#battleTable").append("<tr id=tr_" +i_tr+">"); //create 10 trs with unique ids
    for (var i_td = 0; i_td < 10; i_td++) {
      $("#battleTable").append("<td class=" + i_tr + " id=" + i_td + ">"); //create 10 tds within each tr with unique ids
   };
  };
  var torpedosRemaining = 25;
  var win = 0;
  $("td").on("click", function(){ //need to add "if" statements to change color for either a hit or a miss.
    if (board[parseInt($(this).attr("class"))][parseInt(event.target.id)] == 1) { // Return the value of the index in board at position [row][column]
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
    if (torpedosRemaining <= 0) {
      $("td").off("click");
      alert("Sorry you lose!");
    };
  });
});
