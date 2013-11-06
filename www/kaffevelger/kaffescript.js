function init() {
	displayCoffee();
	$('#kaffevelger input[name=tid]:radio').change(function(){
		displayCoffee();
	});
	$('#kaffevelger input[name=okonomi]:radio').change(function(){
	});
}

function displayCoffee() {
	$('#maskinliste').html("");
	var tid = $('#kaffevelger input[name=tid]:checked').attr('value');
	$.getJSON('kaffe.json', function(data){
		$.each(data.coffee.methods, function (index, value) {
			console.log(tid);
			if(this.t == tid){
				$('#maskinliste').append(this.name+"<br/>");

				console.log(this.name);
			}
		});
	});

}