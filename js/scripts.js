//var workStyle1 = $("input:radio[name=workstyle]:checked").val();
//var workStyle2 = $("input:radio[name=workstyle]:checked").val();
//var workStyle3 = $("input:radio[name=workstyle]:checked").val();

//var creativityStyle1 = $("input:radio[name=creativitystyle]:checked").val();
//var creativityStyle2 = $("input:radio[name=creativitystyle]:checked").val();
//var creativityStyle3 = $("input:radio[name=creativitystyle]:checked").val();

//var businessStyle1 = $("input:radio[name=businessstyle]:checked").val();
//var businessStyle2 = $("input:radio[name=businessstyle]:checked").val();
//var businessStyle3 = $("input:radio[name=businessstyle]:checked").val();

//var visualize1 = $("input:radio[name=visualization]:checked").val();
//var visualize2 = $("input:radio[name=visualization]:checked").val();

//var designType1 = $("input:radio[name=designtype]:checked").val();
//var designType2 = $("input:radio[name=designtype]:checked").val();




$(document).ready(function() {
  $("#submit").click(function(event) {
    var creativityStyle2 = $("input:radio[name=creativitystyle]:checked").val();
    var designType1 = $("input:radio[name=designtype]:checked").val();
    var businessStyle1 = $("input:radio[name=businessstyle]:checked").val();

    if (creativityStyle2) {
      $("#ruby").show();
    } else if (designType1) {
     $("#css").show();
   } else if (businessStyle1) {
     $("#php").show();
   } else {
     $("#many-tracks").show();
   }

    event.preventDefault();
  });
});
