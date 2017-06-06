$(document).ready(function() {
  $("#submit").click(function(event) {

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

    var designType1 = $("input:radio[name=designstyle]:checked").val();
    var designType2 = $("input:radio[name=designstyle]:checked").val();

    if (workStyle3 === "both" && creativityStyle2 === "interactive web apps" && businessStyle2 === "medium-sized business") {
      $("#ruby").show();
    } else if (workStyle1 === "public" && visualize1 === "see my work" && designType1 === "look nice") {
     $("#css").show();
   } else if (workStyle2 === "cubicle" && creativityStyle3 === "back-end software" && businessStyle1 === "large coorporation") {
     $("#php").show();
   } else {
     $("#many-tracks").show();
   }

    event.preventDefault();
  });
});
