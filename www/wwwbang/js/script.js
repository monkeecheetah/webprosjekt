
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
	$window = $(window);
                
   $('span[data-type="over"]').each(function(){
     var $flytobjekt = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = ($window.scrollTop() / $flytobjekt.data('speed')); 
		
		// Put together our final background position
		var kordinz = '10% '+ yPos + 'px';

		// Move the background
		$flytobjekt.css({ backgroundPosition: kordinz });
		
}); // window scroll Ends

 });	

	$window = $(window);
                
   $('span[data-type="over2"]').each(function(){
     var $flytobjekt2 = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = ($window.scrollTop() / $flytobjekt2.data('speed')); 
		
		// Put together our final background position
		var kordinz2 = yPos + 'px';

		// Move the background
		$flytobjekt2.css({ backgroundPosition: kordinz2 });
		
}); // window scroll Ends

 });	



}); // end of life

// *****
// $(window).scroll(function() {
//     if ($('#specsallA').is(':visible')) {
//         // do your special stuff here
//     }
// });
// *****




// $(document).ready(function(){
// $('#intro p').each(function() {
// 	$(this).fadeIn("slow");
// 	$(this).css({top: 200, left: 200});











