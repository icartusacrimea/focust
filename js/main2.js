$(document).ready(function() {
  var buzzer = $("#buzzer")[0];
  var count = parseInt($("#num").html());
  var breakTime = parseInt($("#breakNum").html());
  $("#reset").hide();
  
  //When Timer button clicked, timer visible, list hidden/space reduced
  //Button to go back to list appears, timer button hidden
  $('#goToTimer').click(
    function(){
        document.getElementById("everything").style.visibility = "visible";
        $('.container').css('visibility','hidden');
        $('.container').css('height','1%');
        $('#everything').css('margin-top','120px');
        $('#back').css('margin-top','-30px');
        document.getElementById("back").style.visibility = "visible";
        document.getElementById("goToTimer").style.visibility = "hidden";
    });

  //Back button clicked. List/timer button visible
  //Timer/back to list button hidden
  $('#back').click(
    function(){
      document.getElementById("everything").style.visibility = "hidden";
      $('.container').css('visibility','visible');
      $('.container').css('height','100%');
      document.getElementById("back").style.visibility = "hidden";
      document.getElementById("goToTimer").style.visibility = "visible";
      $('#everything').css('margin-top','120px');
  });

  $("#start").click(function() {
      var counter = setInterval(timer, 1000);
      count *= 60;
      breakTime *= 60;

      function timer() {
        $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #title1, #title2, #descrip").hide();
        $("#timeType").show();
        $("#timeType").html("Session Time <br>");
        count -= 1;
        if (count === 0) {
          buzzer.play();
          clearInterval(counter);
          var startBreak = setInterval(breakTimer, 1000);
          $("#num").hide();
        }
        if (count % 60 >= 10) {
          $("#num").html(Math.floor(count / 60) + ":" + count % 60);
        } else {
          $("#num").html(Math.floor(count / 60) + " : " + "0" + count % 60);
        }

      function breakTimer() {
        $("#timeType").html("Break Time <br>");
        $("#breakNum").show();
        $("#timeType").show();
        breakTime -= 1;
        if (breakTime === 0) {
          clearInterval(startBreak);
          buzzer.play();
          $("#reset").show();
          $("#breakNum, #timeType").hide();
        }
        if (breakTime % 60 >= 10) {
          $("#breakNum").html(Math.floor(breakTime / 60) + ":" + (breakTime % 60));
        } else {
          $("#breakNum").html(Math.floor(breakTime / 60) + " : " + "0" + (breakTime % 60));
        }
      }
    }
  });

$("#reset").click(function() {
  count = 25;
  breakTime = 25;
  $('#everything').css('visibility','show');
  $("#num").html(count);
  $("#breakNum").html(breakTime);
  $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #breakNum, #num, #title1, #title2").show();
  $("#reset, #timeType").hide();
});

$("#minus5Clock").click(function() {
  if (count > 5) {
    count -= 5;
    $("#num").html(count);
  }
});

$("#add5Clock").click(function() {
  count += 5;
  $("#num").html(count);
});

$("#minus5Break").click(function() {
  if (breakTime > 5) {
    breakTime -= 5;
    $("#breakNum").html(breakTime);
  }
});

$("#add5Break").click(function() {
  breakTime += 5;
  $("#breakNum").html(breakTime);
});

});