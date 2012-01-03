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
		<script src="scripts/mustache-0.3.1-dev-twitter-b.js"></script>
		<script src="scripts/underscore-1.2.3-min.js" type="text/javascript"></script>
		<script src="scripts/smart-2.6.min.js" type="text/javascript"></script>
		<script src="scripts/main.js" type="text/javascript"></script>
	</head>
	<body>
		<header>
			<h1><?php echo "<span class='title'>$title</span> – <span class='subtitle'>$subtitle</span>"; ?></h1>
		</header>

		<h2>Using template engines: an example</h2>
		<p>
			Below you will find a sample resume created with
			<a href="https://github.com/janl/mustache.js">mustache.js</a>.
		</p>

		<div id="output"></div>

		<footer>
			<div><?php echo $title; ?> v1.0</div>
			<div>@author Diego Verbrugghe</div>
		</footer>
	</body>
</html>
