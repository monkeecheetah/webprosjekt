
vinduBredde = $( window ).width();


$(document).ready(function(){
	// Cache the Window object
	
	if(vinduBredde > 900) {
		blockFade();
	
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
	}

	introFade = $("#intro h3, #intro p,#helse h3, #helse p").fadeTo(0,0);
		counter = 20;
	   $("#intro h3, #intro p,#helse h3, #helse p").each(function(){
	   		if($(this).is("h3")) {
	   			counter = 0;
	   		}
	   		$(this).css('margin-left', counter+'px');
	   		counter += 20;
	   	});
	   kaffeKonsum();
	   kaffeProduksjon();
}); // end of Document on ready

function kaffeKonsum(){
	liBredde = $("#kaffeKonsum li").width();
	antallKg = new Array();
	$("#kaffeKonsum li").each(function(){
			antallKg.push(parseFloat($(this).attr('data-consume')));
	});	
	$("#kaffeKonsum.toppListe li").each(function(){
		konsum = parseFloat($(this).attr('data-consume'));		
		newWidth = ((konsum/	Math.max.apply(Math, antallKg))*liBredde)-5;
		$(this).css("width", newWidth+"px");
	});
}
function kaffeProduksjon(){
	liBredde = $("#kaffeProduksjon li").width();
	antallTonn = new Array();
	$("#kaffeProduksjon li").each(function(){
			antallTonn.push(parseFloat($(this).attr('data-production')));
	});	
	$("#kaffeProduksjon.toppListe li").each(function(){
		konsum = parseFloat($(this).attr('data-production'));		
		newWidth = ((konsum/	Math.max.apply(Math, antallTonn))*liBredde)-5;
		$(this).css("width", newWidth+"px");
	});
}


function blockFade(){ 
 $('#arrow').fadeTo(1000,0.9, function(){
 	$(this).fadeTo(1000,0, function(){
 		blockFade();
 	});
 })
};


$(window).scroll(function () {
   $('#intro p, #intro h3, #helse h3, #helse p').each(function () { // <---loop the divs id starts with #box 
      if (($(this).offset().top - $(window).scrollTop()) < 200) { //<---mark the $(this).offset().top of current object
          $(this).stop().fadeTo(1000, 0); //<----fadeOut the current obj
      } else {
          $(this).stop().fadeTo(1000, 1); //<----fadeIn the current obj
      }
   });
});


/*
$(window).scroll(function(d,h) {
	if(vinduBredde > 900) {	
	    introFade.each(function(i) {
	        a = $(this).offset().top + $(this).height();
	        b = $(window).scrollTop() + $(window).height();
	        console.log($("#intro").children().index(this));
	        if (a < b) {

	        	$(this).fadeTo(2000,1,function(){
	        		console.log(this);
	        		console.log($("#intro").children().index(this));
	        		var indeks = $("#intro").children().index(this);
	        	});
	        }
		});
	}
}); // end of life (as we know it)
*/



	// pikk = $("#kaffetilnorge p").fadeTo(0,1);
	// 	teller = 20;
	// 	$("kaffetilnorge p").each(function()
	// 	{
	// 		$(this).css('margin-left', teller + 'px');
	// 		teller += 10;
	// 	});
	// $(window).scroll(function(d,h))
	// {
	// 	pikk.each(function(i)
	// 	{
	// 		pa
	// 	}
	// 		)
	// }


	// tiles = $("#kaffetilnorge h3, #kaffetilnorge p").fadeTo(0,0);
	// 	counter = 20;
	//    $("#kaffetilnorge h3, #kaffetilnorge p").each(function(){
	//    		$(this).css('margin-left', counter+'px');
	//    		counter += 20;
	//    	});


	// }); // end of Document on ready
	// $(window).scroll(function(d,h) {
	//     tiles.each(function(i) {
	//         a = $(this).offset().top + $(this).height();
	//         b = $(window).scrollTop() + $(window).height();
	//         if (a < b) $(this).fadeTo(3000,1);
	//     });




































