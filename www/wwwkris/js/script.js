$(document).ready(function() {

	var winH = $(window).height();
	$('.content').css('height', winH*0.75);
	$('.block').css('height', winH);
});


 $(window).scroll(function(){
       var leftToBottom = $(window).height() - $(window).scrollTop();
       var distanceFromTop = $(window).scrollTop();
       if( distanceFromTop > 100 && !$(".content").is(":visible") 
          && leftToBottom > 200) {
            $(this).fadeIn();
       }else if($(".content").is(":visible") && (distanceFromTop < 100 || leftToBottom < 100)){
            $(this).fadeOut();
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