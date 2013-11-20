<!DOCTYPE html>
<html>
	<head>
		<title>Prosjektrapport</title>
		<meta charset="utf-8">	
		<link rel="stylesheet" type="text/css" title="Standard" href="style.css">
		<link href='http://fonts.googleapis.com/css?family=Fjalla+One' rel='stylesheet' type='text/css'>
	</head>

	<body>
		<header id="headerheader">
			<h1 id ="header">GRUPPE 29</h1>
		</header>
		
		<nav>
			<ul>
				<li><a href="index.php?page=1" class="navlink">Hoved</a></li>
				<li><a href="index.php?page=2" class="navlink">Gruppedynamikk</a></li>
				<li><a href="index.php?page=3" class="navlink">Forprosjektrapport</a></li>
				<li><a href="index.php?page=4" class="navlink">Kravspesifikasjoner</a></li>
				<li><a href="index.php?page=5" class="navlink">Milepælsplan</a></li>
				<li><a href="index.php?page=6" class="navlink">Møtereferater</a></li>
				<li><a href="index.php?page=7" class="navlink">Sluttrapport</a></li>
				<li><a href="index.php?page=8" class="navlink">Vedlegg</a></li>
			</ul>
		</nav>

		<div id="content">
				<?
					if(!empty($_GET['page']))
					{
						if($_GET['page']==1)
						{
							INCLUDE "pages/hoved.php";
						}
						else if($_GET['page']==2)
						{
							INCLUDE "pages/gruppedynamikk.php";
						}
						else if($_GET['page']==3)
						{
							INCLUDE "pages/forprosjektrapport.php";
						}
						else if($_GET['page']==4)
						{
							INCLUDE "pages/kravspec.php";
						}
						else if($_GET['page']==5)
						{
							INCLUDE "pages/milepælsplan.php";
						}
						else if($_GET['page']==6)
						{
							INCLUDE "pages/møtereferater.php";
						}
						else if($_GET['page']==7)
						{
							INCLUDE "pages/sluttrapport.php";
						}
						else if($_GET['page']==8)
						{
							INCLUDE "pages/vedlegg.php";
						}
						else
						{
							INCLUDE "pages/finnerikke.php";
						}
					}
					else
					{
						INCLUDE "pages/hoved.php";
					}
				?>
		</div>

		<div id= "bilder">
			<img src="images/kristoffer.jpg" alt="Kristoffer">
			<img src="images/hege.jpg" alt="Hege">
			<img src="images/christer.jpg" alt="Christer">
			<img src="images/osen.jpg" alt="Kristoffer">
		</div> 
	</body>
</html>