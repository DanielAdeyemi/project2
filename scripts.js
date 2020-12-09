
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
    var value = $(this).val();
    document.getElementById("end").innerHTML = value;
    $("#result").show();
  })
  });
});