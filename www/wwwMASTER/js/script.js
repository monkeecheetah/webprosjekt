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
// 	$window = $(window);
                
//    $('span[data-type="over"]').each(function(){
//      var $flytobjekt = $(this); // assigning the object
                    
//       $(window).scroll(function() {
                    
// 		// Scroll the background at var speed
// 		// the yPos is a negative value because we're scrolling it UP!								
// 		var yPos = ($window.scrollTop() / $flytobjekt.data('speed')); 
		
// 		// Put together our final background position
// 		var kordinz = '10% '+ yPos + 'px';

// 		// Move the background
// 		$flytobjekt.css({ backgroundPosition: kordinz });
		
// }); // window scroll Ends
// });



//  $window = $(window);
                
//    $('span[data-type="over2"]').each(function(){
//      var $flytobjekt2 = $(this); // assigning the object
                    
//       $(window).scroll(function() {
                    
//     // Scroll the background at var speed
//     // the yPos is a negative value because we're scrolling it UP!                
//     var yPos = ($window.scrollTop() / $flytobjekt2.data('speed')); 
    
//     // Put together our final background position
//     var kordinz2 = yPos + 'px';

//     // Move the background
//     $flytobjekt2.css({ backgroundPosition: kordinz2 });
    
//   }); // window scroll Ends

// });  
  $(window).scroll( function()
  {
          var windowPosY = $(this).scrollTop();
          var trigger = $('#oppdagelsen').position().top;

          if(windowPosY >= 900 && windowPosY <= 1200)
          {

	          $('p').each( function(i)
	          {
	              
	              var bottom_of_object = $(this).position().top + $(this).outerHeight();
	              var bottom_of_window = $(window).scrollTop() + $(window).height();
	              
	              /* If the object is completely visible in the window, fade it it */
	              if( bottom_of_window > bottom_of_object )
	              {
	                  $(this).animate({'opacity':'1'},1500);                    
	              }
	          });  
          //do things
          }
          /* Check the location of each desired element */

  });


}); // end of Document on ready

























