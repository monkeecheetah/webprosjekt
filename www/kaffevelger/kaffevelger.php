<!DOCTYPE html>
<html>
	<head>
		<title>Kaffe - en kjærlighetshistorie</title>
		
		<link rel="stylesheet" type="text/css" title="Standard" href="kaffevelgerstyle.css">
		<script src="../external_code/jquery-1.10.2.min.js"></script>
		<script src="kaffescript.js"></script>
    	<meta charset="utf-8">
	</head>
	<body onload="init()">

		<form id="kaffevelger">
			<h3>Hvor god tid har du?</h3>			
			<input type="radio" name="tid" id="tid1" value="t1" checked>
			<label for="tid1">Dårlig tid</label>
			<input type="radio" name="tid" id="tid2" value="t2">
			<label for="tid2">Passe</label>
			<input type="radio" name="tid" id="tid3" value="t3">
			<label for="tid3">God tid</label>
			<h3>Hvordan er pengboka?</h3>
			<input type="radio" name="okonomi" id="oko1" value="o1" checked>			
			<label for="oko1">Tynn</label>
			<input type="radio" name="okonomi" id="oko2" value="o2">
			<label for="oko2">Passe</label>
			<input type="radio" name="okonomi" id="oko3" value="o3">
			<label for="oko3">Feit og god</label>
			<h3>Jeg vil påvirke prosessen</h3>
			<input type="radio" name="pavirke" id="pros1" value="p1" checked>			
			<label for="pros1">Ja</label>
			<input type="radio" name="pavirke" id="pros2" value="p2">
			<label for="pros2">Nei</label>
			<h3>Jeg bryr meg om kaffe?</h3>
			<input type="radio" name="bryr" id="bryr1" value="b1" checked>			
			<label for="bryr1">Ja</label>
			<input type="radio" name="bryr" id="bryr2" value="b2">
			<label for="bryr2">Nei</label>
			<br>
			<input id="showAll" checked type="checkbox" name="showAll" value="all">
			<label for="showAll">Vis alle muligheter</label>
		</form>

		<div id="maskinliste"></div>


	</body>	
</html>