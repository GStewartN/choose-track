var workStyle1 = $("input:radio[name=workstyle]:checked").val();
var workStyle2 = $("input:radio[name=workstyle]:checked").val();
var workStyle3 = $("input:radio[name=workstyle]:checked").val();

var creativityStyle1 = $("input:radio[name=creativitystyle]:checked").val();
var creativityStyle2 = $("input:radio[name=creativitystyle]:checked").val();
var creativityStyle3 = $("input:radio[name=creativitystyle]:checked").val();

var businessStyle1 = $("input:radio[name=businessstyle]:checked").val();
var businessStyle2 = $("input:radio[name=businessstyle]:checked").val();
var businessStyle3 = $("input:radio[name=businessstyle]:checked").val();

var visualize1 = $("input:radio[name=visualization]:checked").val();
var visualize2 = $("input:radio[name=visualization]:checked").val();

var designType1 = $("input:radio[name=designtype]:checked").val();
var designType2 = $("input:radio[name=designtype]:checked").val();





$(document).ready(function() {
  $("div#radio").submit(function(event) {
    event.preventDefault();

    if (workStyle1 && creativityStyle2 && designType2) {
      $("#ruby").show();
    } else if (workStyle2 && creativityStyle3 && businessStyle1) {
      $("#c-net").show();
    } else if (workStyle1 && visualize1 && designType1) {
      $("#css").show();
    }

  });
});
