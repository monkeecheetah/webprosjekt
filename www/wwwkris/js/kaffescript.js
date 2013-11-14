$(document).ready(function(){
	displayCoffee();
	$('#kaffevelger input[name=tid]:radio').change(function(){
		$('#showAll').prop('checked', false); 
		displayCoffee();
	});
	$('#kaffevelger input[name=okonomi]:radio').change(function(){
		$('#showAll').prop('checked', false); 
		displayCoffee();
	});
	$('#kaffevelger input[name=egeninnsats]:radio').change(function(){
		$('#showAll').prop('checked', false); 
		displayCoffee();
	});
	$('#kaffevelger input[name=bryr]:radio').change(function(){
		$('#showAll').prop('checked', false); 
		displayCoffee();
	});		
	$('#showAll').change(function(){
		displayCoffee();
	});
});

function displayCoffee() {
	if($('#kaffevelger input[name=tid]:checked').attr('value')) {
		var tid = parseFloat($('#kaffevelger input[name=tid]:checked').attr('value'));
	} else {
		var tid = 0.0;		
	}
	if($('#kaffevelger input[name=okonomi]:checked').attr('value')) {
		var penger = parseFloat($('#kaffevelger input[name=okonomi]:checked').attr('value'));
	} else {
		var penger = 0.0;		
	}
	if($('#kaffevelger input[name=bryr]:checked').attr('value')) {
		var bryr = $('#kaffevelger input[name=bryr]:checked').attr('value');
	} else {
		var bryr = 0.0;
	}
	if($('#kaffevelger input[name=egeninnsats]:checked').attr('value')) {
		var egeninnsats = parseFloat($('#kaffevelger input[name=egeninnsats]:checked').attr('value'));	
	} else {
		var egeninnsats = 0.0;
	}
	var tidsPara = parseFloat(1.0);	
	var thisT = parseFloat(0.0);
	var thisE = parseFloat(0.0);
	var thisO = parseFloat(0.0);

	var numM = 0;
	$('#maskinliste').html("");	
	$.getJSON('kaffe.json', function(data){
		$.each(data.coffee.methods, function (index, value) {
			thisT = parseFloat(this.t);
			thisE = parseFloat(this.e);
			thisO = parseFloat(this.o);
									
			if($('#showAll').is(':checked')) {
				$('#maskinliste').append("<li class='tilbWrap'><h3>"+this.name+"</h3><img class='kaffeTilbBilde' src='images/"+this.img+"'><p class='tilbText'>"+ this.om +"</p></li>");
				numM =1;
			} else if((thisT >= tid-tidsPara && thisT <= tid+tidsPara || tid == 0.0 || thisT == 0.0)  && (thisO >= penger-tidsPara && thisO <= penger+tidsPara || penger == 0.0 || thisO == 0.0 ) && (this.b == bryr || bryr == 0.0) && (thisE >= egeninnsats-tidsPara && thisE <= egeninnsats+tidsPara || egeninnsats == 0.0 || thisE == 0.0)){
				$('#maskinliste').append("<li class='tilbWrap'><h3>"+this.name+"</h3><img class='kaffeTilbBilde' src='images/"+this.img+"'><p class='tilbText'>"+ this.om +"</p></li>");
				numM++;
			}
		});
			if(numM == 0) {
				$('#maskinliste').append('Vi fant ingen tilberedning som passet dine valg');
			}
	});

}