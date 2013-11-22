
vinduBredde = $( window ).width();
$(function($){
var konami_keys = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konami_index = 0;
$(document).keydown(function(e){
    if(e.keyCode === konami_keys[konami_index++]){
        if(konami_index === konami_keys.length){
            $(document).unbind('keydown', arguments.callee);
        	window.location="gameLoader.php";
        }
    }else{
        konami_index = 0;
    }
});
});
$(document).ready(function(){
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
	   kaffeKonsum();
	   kaffeProduksjon();
});

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