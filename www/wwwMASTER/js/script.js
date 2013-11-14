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
tiles = $("#intro h3, #intro p").fadeTo(0,0);

$(window).scroll(function(d,h) {
    tiles.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(500,1);
    });
});

  $(window).scroll( function()
  {
          var windowPosY = $(this).scrollTop();
          // var trigger = $('#oppdagelsen').position().top;

          if(windowPosY >= $('.block1').position().top && windowPosY <= $('.block1').position().top+$(window).height())
          {

	          $('#intro p, #intro h3').each( function(i)			// endre så jeg kan snakke til en og en #ID
	          {
	              console.log(document.getElementById('intro').scrollTop);

	              var bottom_of_object = $(this).position().top;
	              var bottom_of_window = $(document).scrollTop() + $(document).height();
	              console.log("objekt"+bottom_of_object);
	              console.log("window"+bottom_of_window);
	              /* If the object is completely visible in the window, fade it it */
	              if( bottom_of_window > bottom_of_object )
	              {
	                //  $(this).animate({'opacity':'1'},1000);                    
	              }
	          });  
          //do things
          }
          else if(windowPosY >= $('#oppdagelsen').position().top && windowPosY <= $('#oppdagelsen').position().top+$(window).height())
          {

	          $('#oppdagelsen p').each( function(i)			// endre så jeg kan snakke til en og en #ID
	          {
	              
	              var bottom_of_object = $(this).position().top + $(this).outerHeight();
	              var bottom_of_window = $(window).scrollTop() + $(window).height();
	              
	              /* If the object is completely visible in the window, fade it it */
	              if( bottom_of_window > bottom_of_object )
	              {
	                  $(this).animate({'opacity':'1'},1600);                    
	              }
	          });  

          }
          else if(windowPosY >= $('#kaffetilnorge').position().top && windowPosY <= $('#kaffetilnorge').position().top+$(window).height())
          {

	          $('#kaffetilnorge p').each( function(i)			// endre så jeg kan snakke til en og en #ID
	          {
	              var bottom_of_object = $(this).position().top + $(this).outerHeight();
	              var bottom_of_window = $(window).scrollTop() + $(window).height();
	              
	              /* If the object is completely visible in the window, fade it it */
	              if( bottom_of_window > bottom_of_object )
	              {
	                  $(this).animate({'opacity':'1'},2400);                    
	              }
	          });  
          }
  });
}); // end of Document on ready