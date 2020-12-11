
$(document).ready(function() {
  $("button#first").click(function() {
    $(".form-check").hide();
    $("#first").hide();
    $(".h2").hide();

    if (document.getElementById("neg").checked === true) {
      $("#no").show();
      $(".question").show();
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
          $("#other").hide();
          $("#personal").hide();
          $("#kchoice").hide();
          $("#finita").show();
          event.preventDefault();
        }
        
      });  
    }
    else {
      document.getElementById("end").innerHTML = print;
      $("#kchoice").hide();
      $("#finita").show();
    }   
    });
  });
  
  $("#finish").click(function(){
    var a1 = document.getElementById("q1").value;
    var a2 = document.getElementById("q2").value;
    var a3 = document.getElementById("q3").value;
    var a4 = document.getElementById("q4").value;
    var a5 = document.getElementById("q5").value;
    if (a1 === "default" || a2 === "default" || a3 === "default" || a4 === "default" || a5 === "default") {
      return alert("You need to answer all questions! Try again");

     }
    else if (a1 === "q1a1" && a2 === "q2a5" && a3 === "q3a3") {
      document.getElementById("end").innerHTML = "C#";
    }
    else if (a1 === "q1a4" && a5 !== "q5a2" && a3 !== "q3a3") {
      document.getElementById("end").innerHTML = "HTML";
    }
    else if (a1 === "q1a4" || a1 === "q1a3") { 
      if (a2 !== "q2a2" && a3 === "q3a3") {
      document.getElementById("end").innerHTML = "Ruby";
      }
      else {
        document.getElementById("end").innerHTML = "Swift"; 
      }
    }  
    else {
      document.getElementById("end").innerHTML = "Python";
    }

    $("#no").hide();
    $("#finita").show();
     });
    });
