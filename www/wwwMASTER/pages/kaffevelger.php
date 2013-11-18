<form id="kaffeForm">
	<h3>Hvor god tid har du?</h3>			
	<input type="radio" name="tid" id="tid1" value="1.0">
	<label for="tid1">DÅRLIG</label>
	<input type="radio" name="tid" id="tid2" value="2.0">
	<label for="tid2">PASSE</label>
	<input type="radio" name="tid" id="tid3" value="3.0">
	<label for="tid3">GOD</label>
	<h3>Hvordan er pengboka?</h3>
	<input type="radio" name="okonomi" id="oko1" value="1.0">
	<label for="oko1">TYNN</label>
	<input type="radio" name="okonomi" id="oko2" value="2.0">
	<label for="oko2">PASSE</label>
	<input type="radio" name="okonomi" id="oko3" value="3.0">
	<label for="oko3">FEIT</label>
	<h3>Hvor mye arbeid vil du legge i kaffen?</h3>
	<input type="radio" name="egeninnsats" id="egen1" value="1.0">			
	<label for="egen1">Minst mulig</label>
	<input type="radio" name="egeninnsats" id="egen2" value="2.0">
	<label for="egen2">Jeg kan løfte enfinger </label>
	<input type="radio" name="egeninnsats" id="egen3" value="3.0">
	<label for="egen3">Mye!</label>
<!--			<h3>Jeg vil påvirke prosessen</h3>
	<input type="radio" name="pavirke" id="pros1" value="p1" checked>			
	<label for="pros1">Ja</label>
	<input type="radio" name="pavirke" id="pros2" value="p2">
	<label for="pros2">Nei</label>
-->			
	<h3>Jeg bryr meg om kaffe?</h3>
	<input type="radio" name="bryr" id="bryr1" value="b1">			
	<label for="bryr1">JA</label>
	<input type="radio" name="bryr" id="bryr2" value="b2">
	<label for="bryr2">NEI</label>
	<br>
	<input id="showAll" checked type="checkbox" name="showAll" value="all">
	<label for="showAll">Vis alle bryggemetodene</label>
</form>

<ul id="maskinliste">

</ul>