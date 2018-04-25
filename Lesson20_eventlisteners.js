//Lesson20_eventlisteners.js



// learn more about event delegation

<div class="actions">
  <button id="my-button">Do it!</button>
</div>
      
$('#my-button').on('click', function(){
  $('button').remove();
  $('body').addClass('success');
});  


//Instead of :
$('input').on('keypress', function (){
  //...
});

// this is possible and cleaner...

$('input').keypress(function (){
  //...
});


.keyup();√
.mouseover();√
.change(); √
.hover(); - //shortcut for $(selector).mouseenter(handlerIn).mouseleave(hand;erOut);
  //...
});
.click(); √
