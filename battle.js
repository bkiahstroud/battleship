$(document).ready(function(){
  for (var i_tr = 0; i_tr < 10; i_tr++) {
    $("#battleTable").append("<tr id=tr_" +i_tr+">"); //create 10 trs with unique ids
    for (var i_td = 0; i_td < 10; i_td++) {
      $("#battleTable").append("<td id=td_" +i_td+">"); //create 10 tds within each tr with unique ids
   };
  };
});
