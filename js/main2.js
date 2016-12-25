	var removeshopSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
	var completeshopSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
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
        $('#goToShop').css('visibility','hidden');
        $('#shoppingList').css('visibility','hidden');
        $('.container').css('height','1%');
        $('#shoppingList').css('height','1%');
        $('#everything').css('margin-top','120px');
        $('#back').css('margin-top','10px');
        $('#back').css('margin-left','24px');
        document.getElementById("back").style.visibility = "visible";
        document.getElementById("goToTimer").style.visibility = "hidden";
        document.getElementById("goToShop").style.visibility = "hidden";
    });
  
  $('#goToShop').click(
    function(){
      document.getElementById("shoppingList").style.visibility = "visible";
      $('.container').css('visibility','hidden');
      document.getElementById("addItem").style.visibility = "visible";
      $('.container').css('height','1%');
      $('#everything').css('height','1%');
      $('#shoppingList').css('margin-top','0px');
      $('#back').css('margin-top','10px');
      $('#back').css('margin-left','24px');
      document.getElementById("back").style.visibility = "visible";
      document.getElementById("goToTimer").style.visibility = "hidden";
      document.getElementById("goToShop").style.visibility = "hidden";
    });  
      //add item to shopping list
      document.getElementById('addItem').addEventListener('click', function() {
		    var value = document.getElementById('shopItem').value;
		    if (value) {
			  addItemToBuy(value);
			  document.getElementById('shopItem').value = '';
		  }
		  
      });
      
    function removeShopItem() {
		    var item = this.parentNode.parentNode;
		    var parent = item.parentNode;

		parent.removeChild(item);
	}
	
	function completeShopItem() {
		var item = this.parentNode.parentNode;
		var parent = item.parentNode;
		var id = parent.id;

		// Check if the item should be added to the completed list or re-added to the todo list
		var target = (id === 'toBuy') ? document.getElementById('purchased'):document.getElementById('toBuy');

		parent.removeChild(item);
		target.insertBefore(item, target.childNodes[0]);
	}
		  
		  	function addItemToBuy(text) {
		var list = document.getElementById('toBuy');

		var item = document.createElement('li');
		item.innerText = text;

		var buttons = document.createElement('div');
		buttons.classList.add('buttons');

		var remove = document.createElement('button');
		remove.classList.add('remove');
		remove.innerHTML = removeshopSVG;

		// Add click event for removing the item
		remove.addEventListener('click', removeShopItem);

		var complete = document.createElement('button');
		complete.classList.add('complete');
		complete.innerHTML = completeshopSVG;

		// Add click event for purchasing the item
		complete.addEventListener('click', completeShopItem);

		buttons.appendChild(remove);
		buttons.appendChild(complete);
		item.appendChild(buttons);

		list.insertBefore(item, list.childNodes[0]);
	}
	

    
  

  //Back button clicked. List/timer button visible
  //Timer/back to list button hidden
  $('#back').click(
    function(){
      document.getElementById("everything").style.visibility = "hidden";
      $('.container').css('visibility','visible');
      $('.container').css('height','100%');
      document.getElementById("back").style.visibility = "hidden";
      document.getElementById("addItem").style.visibility = "hidden";
      document.getElementById("goToTimer").style.visibility = "visible";
      document.getElementById("goToShop").style.visibility = "visible";
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