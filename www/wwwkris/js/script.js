$(document).ready(function() {

});

 $(window).scroll(function(){
       var leftToBottom = $(document).height() - $(window).height() - $(window).scrollTop();
       var distanceFromTop = $(window).scrollTop();
       if( distanceFromTop > 100 && !$(".content").is(":visible") 
          && leftToBottom > 200) {
            $(".content").fadeIn();
       }else if($(".content").is(":visible") && (distanceFromTop < 600 || leftToBottom < 600)){
            $("#fade-in-area").fadeOut();
      }
   });

// $(document).ready(function(){
// $('#intro p').each(function() {
// 	$(this).fadeIn("slow");
// 	$(this).css({top: 200, left: 200});

// });	
// })

// .css({top: 200, left: 200, position:'absolute'});


// 
// $("#info-panel").fadeOut("fast");
// $("#info-panel").css({
//     top: (new pos),
//     left: (new pos)
// });
// $("#info-panel").fadeIn("fast");