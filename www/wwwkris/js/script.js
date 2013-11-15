$(document).ready(function(){
	// Cache the Window object
	blockFade();
	function blockFade(){ 
	 $('.block0').fadeTo(1000,1, function(){
	 	$(this).fadeTo(1000,0, function(){
	 		blockFade();
	 	});
	 })
	};
	
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

tiles = $("#intro h3, #intro p").fadeTo(0,0);
	counter = 20;
   $("#intro h3, #intro p").each(function(){
   		$(this).css('margin-left', counter+'px');
   		counter += 20;
   	});
}); // end of Document on ready



$(window).scroll(function(d,h) {
    tiles.each(function(i) {
        a = $(this).offset().top + $(this).height();
        b = $(window).scrollTop() + $(window).height();
        if (a < b) $(this).fadeTo(1000,1);
    });
});