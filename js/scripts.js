$(document).ready(function(){
  $("#display").click(function(){
    $("#projects").slideToggle();
  });
  $("#displayy").click(function(){
    $("#projects").slideToggle();
  });
  $("#knowme").click(function(){
    $("#me").slideToggle();
  });
  $("#knowmee").click(function(){
    $("#me").slideToggle();
  });
  $("#contact").submit(function(event){
    var sender=$("#email").val();
    var text=$("#message").val();
  });
});
