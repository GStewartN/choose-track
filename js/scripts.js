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
  $("#submit").click(function(event) {



    if (workStyle1 === "true" && creativityStyle2 === "true") {
      $("#ruby").show();
    } else {
     $("#css").show();
    }
    event.preventDefault();
  });
});
