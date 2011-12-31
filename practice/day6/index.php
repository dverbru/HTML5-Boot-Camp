<?php
	$title = "HTML5 Practice";
	$subtitle = "Day 6";
?>
<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title><?php echo "$title: $subtitle"; ?></title>
		<link href="styles/default.css" rel="stylesheet" />

		<!-- data-main attribute tells require.js to load
			scripts/main.js after require.js loads. -->
		<script data-main="scripts/main" src="scripts/require-1.0.3-min.js"></script>
	</head>
	<body>
		<header>
			<h1><?php echo "<span class='title'>$title</span>: <span class='subtitle'>$subtitle</span>"; ?></h1>
		</header>

		<p>This is the boot camp, baby!</p>

		<footer>
			<div><?php echo $title; ?> v1.0</div>
			<div>@author Diego</div>
		</footer>
	</body>
</html>