$(function() {


  $(".openMenu").click(function(evt) {
    $(".dropdown").toggleClass("visible");
  });

  $("#pointbox").click(function(evt) {
    $("#notsobottom").toggleClass("visible");
  });

});