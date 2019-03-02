$(document).ready(function(){
  $("#display").click(function(){
    $("#projects").slideToggle();
  });
  $("#see").click(function(){
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
  $("#knowmeee").click(function(){
    $("#me").slideToggle();
  });
  $("#contact").submit(function(event){
    var sender=$("#email").val();
    var text=$("#message").val();
  });
});
function openNav() {
document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}
