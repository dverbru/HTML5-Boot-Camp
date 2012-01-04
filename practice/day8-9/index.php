<?php
	$title = "HTML5 Practice";
	$subtitle = "Days 8 & 9";
	$version = "1.0.0"
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title><?php echo "$title: $subtitle"; ?></title>
		<link href="styles/default.css" rel="stylesheet" />

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.2.2/underscore-min.js"></script>
		<script src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/0.5.3/backbone-min.js"></script>
		<script src="scripts/main.js" type="text/javascript"></script>
	</head>
	<body>
		<header>
			<h1><?php echo "<span class='title'>$title</span> <span class='subtitle'>// $subtitle</span>"; ?></h1>
		</header>

		<h2>MVC &amp; Mixins: using a JS web framework</h2>
		<p>
			Below you will find a sample movie listing created with
			<a href="http://documentcloud.github.com/backbone/">Backbone.js</a>.
		</p>

		<div id="output"></div>

		<footer>
			<div><?php echo $title . " v" . $version; ?></div>
			<div>@author Diego Verbrugghe</div>
		</footer>
	</body>
</html>
