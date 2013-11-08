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
	$('#maskinliste').html("");
	var tid = $('#kaffevelger input[name=tid]:checked').attr('value');
	var penger = $('#kaffevelger input[name=okonomi]:checked').attr('value');
	var bryr = $('#kaffevelger input[name=bryr]:checked').attr('value');
	var egeninnsats = $('#kaffevelger input[name=egeninnsats]:checked').attr('value');		
	$.getJSON('kaffe.json', function(data){
		$.each(data.coffee.methods, function (index, value) {
			console.log(tid);
			if($('#showAll').is(':checked')) {
				$('#maskinliste').append(this.name+"<br/>");
			} else if(this.t == tid && this.o == penger && this.b == bryr && this.e == egeninnsats){
				$('#maskinliste').append(this.name+"<br/>");
				console.log(this.name);
			}
		});
	});

}