
function no() {
  $("#no").show();
  $("#q1").show();
  $("#r1").show();
  $("#r2").show();
}


$(document).ready(function() {
  $("button#first").click(function() {
    $(".form-check").hide();
    $("#first").hide();
    $(".h2").hide();
    if (document.getElementById("neg").checked === true) {
      no();
    }
    else {
      $("#yes").show();   
    }
  var sel = $("#kchoice");
  sel.change(function() {
    var print = $(this).val();
    if (print === "Other") {
      $("#other").show();
      $("#personal").show();
      $("#lesse").click(function(){
        var print = document.getElementById("personal").value;
        if (print === "") {
          alert("No input! Try one more time!")
        }
        else {
          document.getElementById("end").innerHTML = print;
        $("#result").show();
        event.preventDefault();
        }
        
      });
      
    }
    else {
      document.getElementById("end").innerHTML = print;
    $("#result").show();
    }
    
  });
  });
});