<?php
	$title = "HTML5 Practice";
	$subtitle = "Day 7";
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title><?php echo "$title: $subtitle"; ?></title>
		<link href="styles/default.css" rel="stylesheet" />

		<script src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
		<script src="scripts/main.js" type="text/javascript"></script>
	</head>
	<body>
		<header>
			<h1><?php echo "<span class='title'>$title</span> – <span class='subtitle'>$subtitle</span>"; ?></h1>
		</header>

		<p>This is the boot camp, baby!</p>

		<footer>
			<div><?php echo $title; ?> v1.0</div>
			<div>@author Diego</div>
		</footer>
	</body>
</html>
