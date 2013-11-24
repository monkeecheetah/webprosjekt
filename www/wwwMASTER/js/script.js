
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


$(window).on('scroll', function() {
	if(vinduBredde > 1024) {	
		currPos = $(window).scrollTop();
		bak2Pos = $('#bak2').position().top;
		triggerPos = $('#triggerElement').position().top;
	    if(currPos >= (bak2Pos+triggerPos)) {
	        //do stuff
			captionH = $('#caption').height();
	        $('#photo').css('background-attachment', 'scroll').css('background-size', 'contain').css('margin-top', captionH +'px').height($(window).height()+'px').css('padding-top', $(window).height()+'px');
	        $('#photo2').css('padding-bottom', $('#caption2').height());
	        $('#caption').css('visibility', 'hidden');
	        console.log("Du lukter promp");
	    } else {
	        $('#caption').css('visibility', 'visible');    	
	    }
	}
});

$(document).ready(function(){
	if(vinduBredde > 1024) {
		console.log($('#bak2').height()+"  +  "+$('#caption2').height());
		winH = $(window).height();
		$('#caption2').css('margin-top', $('#bak2').height()+$('#caption2').height()+'px').css('padding-top','300px');
		$('#photo').height((winH+800)+'px');
		$('#bak15').css('height', $(document).width()/1.81+'px');
		$('#bak16').css('height', $(document).width()/1.7472+'px');
		blockFade();
		$window = $(window);
		$('section[data-type="background"]').each(function(){
	    	var $bgobj = $(this);    
	    	$(window).scroll(function() {			
				var yPos = -($window.scrollTop() / $bgobj.data('speed')); 			
				var coords = '100% '+ yPos + 'px';
			$bgobj.css({ backgroundPosition: coords });
			}); 
		});	
	}
		$('#kaffevelger').html('<h3 id="kaffevelgerheader">KAFFEVELGER</h3><p id="KVbeskrivelse"><em>Kaffevelgeren beregner hvilken type kaffe som passer deg best akkurat nå!</em></p><form id="kaffeForm"><input id="showAll" checked type="checkbox" name="showAll" value="all"><label for="showAll">Vis alle bryggemetodene</label><h3>Hvor god tid har du?</h3><input type="radio" name="tid" id="tid1" value="1.0"><label for="tid1">DÅRLIG</label><input type="radio" name="tid" id="tid2" value="2.0"><label for="tid2">PASSE</label><input type="radio" name="tid" id="tid3" value="3.0"><label for="tid3">GOD</label><h3>Hvordan er pengboka?</h3><input type="radio" name="okonomi" id="oko1" value="1.0"><label for="oko1">TYNN</label><input type="radio" name="okonomi" id="oko2" value="2.0"><label for="oko2">PASSE</label><input type="radio" name="okonomi" id="oko3" value="3.0"><label for="oko3">FEIT</label><h3>Hvor mye arbeid vil du legge i kaffen?</h3><input type="radio" name="egeninnsats" id="egen1" value="1.0">	<label for="egen1">MINST MULIG</label><input type="radio" name="egeninnsats" id="egen2" value="2.0"><label for="egen2">LITT </label><input type="radio" name="egeninnsats" id="egen3" value="3.0"><label for="egen3">MYE!</label><h3>Jeg bryr meg om kaffe?</h3><input type="radio" name="bryr" id="bryr1" value="b1"><label for="bryr1">JA</label><input type="radio" name="bryr" id="bryr2" value="b2"><label for="bryr2">NEI</label><br></form><ul id="maskinliste"></ul>');
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