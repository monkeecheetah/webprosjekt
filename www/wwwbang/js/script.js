
$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '100% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		

}); // window scroll Ends

 });	

}); 

$(document).ready(function(){
	// Cache the Window object
	$window = $(window);
                
   $('span[data-type="over"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = ($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '10% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
}); // window scroll Ends

 });	

}); 

// $(document).ready(function(){
// 	// Cache the Window object
// 	$window = $(window);
                
//    $('section[data-type="background2"]').each(function(){
//      var $bgobj = $(this); // assigning the object
                    
//       $(window).scroll(function() {
                    
// 		// Scroll the background at var speed
// 		// the yPos is a negative value because we're scrolling it UP!								
// 		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
// 		// Put together our final background position
// 		var coords = '100% '+ yPos + 'px';

// 		// Move the background
// 		$bgobj.css({ backgroundPosition: coords });
		
// }); // window scroll Ends

//  });	

// }); 









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