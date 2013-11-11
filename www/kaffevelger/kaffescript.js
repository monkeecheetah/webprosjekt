function init() {
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
}

function displayCoffee() {
	var tid = $('#kaffevelger input[name=tid]:checked').attr('value');
	var penger = $('#kaffevelger input[name=okonomi]:checked').attr('value');
	var bryr = $('#kaffevelger input[name=bryr]:checked').attr('value');
	var egeninnsats = $('#kaffevelger input[name=egeninnsats]:checked').attr('value');		
	console.log("tid"+tid);
	console.log("penger"+penger);
	console.log("bryr"+bryr);
	console.log("egeninnsats"+egeninnsats);
	$('#maskinliste').html("");	
	$.getJSON('kaffe.json', function(data){
		$.each(data.coffee.methods, function (index, value) {
			console.log(this.t);
			console.log(this.o);
			console.log(this.e);			
			if($('#showAll').is(':checked')) {
				$('#maskinliste').append(this.name+"<br/>");
//			} else if(this.t == tid  && this.o == penger && this.b == bryr && this.e == egeninnsats){
			} else if((this.t >= tid-0.5 || this.t <= tid+0.5)  && (this.o >= penger-0.5 || this.o <= penger+0.5 ) && this.b == bryr && (this.e >= egeninnsats-0.5 || this.e <= egeninnsats+0.5)){
				$('#maskinliste').append(this.name+"<br/>");
			}
		});
	});

}