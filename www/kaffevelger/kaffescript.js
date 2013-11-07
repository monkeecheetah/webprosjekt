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
	$('#kaffevelger input[name=pavirke]:radio').change(function(){
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
	$('#maskinliste').html("");
	var tid = $('#kaffevelger input[name=tid]:checked').attr('value');
	var penger = $('#kaffevelger input[name=okonomi]:checked').attr('value');
	var bryr = $('#kaffevelger input[name=bryr]:checked').attr('value');
	var pavirke = $('#kaffevelger input[name=pavirke]:checked').attr('value');		
	$.getJSON('kaffe.json', function(data){
		$.each(data.coffee.methods, function (index, value) {
			console.log(tid);
			if($('#showAll').is(':checked')) {
				$('#maskinliste').append(this.name+"<br/>");
			} else if(this.t == tid && this.o == penger && this.b == bryr && this.p == pavirke){
				$('#maskinliste').append(this.name+"<br/>");

				console.log(this.name);
			}
		});
	});

}