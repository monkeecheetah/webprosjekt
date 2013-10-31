<?php
	error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" type="text/css" title="Standard" href="css/style.css">
		<title>Kaffe - en kjærlighetshistorie</title>
		<script charset="utf-8" src="external_code/jquery-1.10.2.min.js"></script>
		<script charset="utf-8" src="js/script.js"></script>
	</head>
	<body>
	
	<nav>
		<ul>
			<li><a href="?page=tilberedning">Tilberedning</a></li>
			<li><a href="?page=kaffeinfo">Hva er kaffe?</a></li>
			<li><a href="?page=overskrifter">Overskrifter</a></li>
			<li><a href="?page=kaffehelse">Kaffehelse</a></li>
		</ul>
			<?php
				if(isset($_GET['page']))
				{
					if($_GET['page'] == 'main') {
						include 'pages/main.php';
					} else if ($_GET['page'] == 'tilberedning') {
						include 'pages/tilberedning.php'; 
					} else if ($_GET['page'] == 'kaffeinfo') {
						include 'pages/kaffeinfo.php'; 
					} else if ($_GET['page'] == 'overskrifter') {
						include 'overskrifter.php'; 
					} else if ($_GET['page'] == 'kaffehelse') {
						include 'kaffehelse.php'; 
					} else {
						include 'pages/main.php';						
					}
				} else {
					include 'pages/main.php';						
				} 
				include('pages/footer.php');
			?>
	</body>
</html>