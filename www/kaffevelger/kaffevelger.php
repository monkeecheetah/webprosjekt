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

		<div id="kaffevelger">
			
			<input type="radio" name="tid" value="t1" checked>
			<label for="t1">Dårlig tid</label>
			<input type="radio" name="tid" value="t2">
			<label for="t2">Passe</label>
			<input type="radio" name="tid" value="t3"><label for="t3">God tid</label>
			<br/>
			<input type="radio" name="okonomi" value="o1" checked>			
			<label for="o1">Dårlig råd</label>
			<input type="radio" name="okonomi" value="o2">
			<label for="o2">Passe</label>
			<input type="radio" name="okonomi" value="o3">
			<label for="o3">God råd</label>
		</div>
<div id="maskinliste"></div>

	</body>	
</html>