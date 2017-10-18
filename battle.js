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
      $("#battleTable").append("<td id=td_" +i_td+">"); //create 10 tds within each tr with unique ids
   };
  };

  var torpedosRemaining = 25;
  $("td").on("click", function(){ //need to add "if" statements to change color for either a hit or a miss.
    torpedosRemaining--;
    $(this).addClass("miss");
    $("section").text("Torpedos remaining: " + torpedosRemaining);
    $(this).off("click");
    console.log(torpedosRemaining);
    if(torpedosRemaining <= 0) {
      $("td").off("click");
      alert("Sorry you lose!");
    };
  });
});
