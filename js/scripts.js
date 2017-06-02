$(document).ready(function() {
  $("#submit").click(function(event) {

    var workStyle1 = $("input:radio[name=workpublic]:checked").val();
    var workStyle2 = $("input:radio[name=workcube]:checked").val();
    var workStyle3 = $("input:radio[name=workboth]:checked").val();

    var creativityStyle1 = $("input:radio[name=creativitymobile]:checked").val();
    var creativityStyle2 = $("input:radio[name=creativityapp]:checked").val();
    var creativityStyle3 = $("input:radio[name=creativitysoftware]:checked").val();

    var businessStyle1 = $("input:radio[name=businesslarge]:checked").val();
    var businessStyle2 = $("input:radio[name=businessmedium]:checked").val();
    var businessStyle3 = $("input:radio[name=businessstartup]:checked").val();

    var visualize1 = $("input:radio[name=visualizationsee]:checked").val();
    var visualize2 = $("input:radio[name=visualizationmake]:checked").val();

    var designType1 = $("input:radio[name=designlook]:checked").val();
    var designType2 = $("input:radio[name=designcreate]:checked").val();

    if (workStyle3 && creativityStyle2 && businessStyle2) {
      $("#ruby").show();
    } else if (workStyle1 && visualize1 && designType1) {
     $("#css").show();
   } else if (workStyle2 && creativityStyle3 && businessStyle1) {
     $("#php").show();
   } else {
     $("#many-tracks").show();
   }
   //$(".radio").children(input).first().click(function() {
     //$(this).remove();
    event.preventDefault();
  });
});
