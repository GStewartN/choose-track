$(document).ready(function() {
  $("#submit").click(function(event) {
    
    $("#hidden").hide();

    var workStyle = $("input:radio[name=workstyle]:checked").val();
    var creativityStyle = $("input:radio[name=creativitystyle]:checked").val();
    var businessStyle = $("input:radio[name=businessstyle]:checked").val();
    var visualize = $("input:radio[name=visualization]:checked").val();
    var designType = $("input:radio[name=designstyle]:checked").val();
    

    if (workStyle === "both" && creativityStyle === "interactive web apps" && businessStyle === "medium-sized business") {
      $("#ruby").show();
    } else if (workStyle === "public" && visualize === "see my work" && designType === "look nice") {
     $("#css").show();
   } else if (workStyle === "cubicle" && creativityStyle === "back-end software" && businessStyle === "large coorporation") {
     $("#php").show();
   } else {
     $("#many-tracks").show();
   }
   event.preventDefault();
  });
});
