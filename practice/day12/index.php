<?php
	$app = "HTML5 Practice";
	$version = "1.0.0";
	$pageTitle = "Day 12: Modernizr + yepNope";
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title><?php echo "$pageTitle - $app"; ?></title>
	<link href="styles/default.css" rel="stylesheet" />

	<!--[if IE]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<script src="scripts/lib/jquery-1.7.1.min.js"></script>
	<script src="scripts/main.js"></script>
</head>
<body id="top">
	<a href="http://www.w3.org/html/logo/"> <img class="badge"
		src="img/html5-badge-v-css3-semantics-storage.png"
		width="38" height="170"
		alt="HTML5 Powered with CSS3 / Styling, Semantics, and Offline Storage"
		title="HTML5 Powered with CSS3 / Styling, Semantics, and Offline Storage">
	</a>

	<header>
		<hgroup>
			<h1 class='pageTitle'><?php echo $pageTitle; ?></h1>
			<h2 class='pageSubtitle'>A simple javascript code tester</h2>
		</hgroup>
	</header>

	<nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">About</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</nav>

	<p>
		This a sample page demostrating the power of some new HTML5 APIs, and
		the applying of <strong>Regressive Enhancement</strong> in case of
		their abscence to support old browsers.
	</p>

	<section id="jstesttool" class="mainContent">
		<aside>
			<h3>polyﬁll (noun)</h3>
			<p>A shim that mimics a future API providing fallback functionality
				to older browsers.</p>
		</aside>

		<header>
			<h1>
				JS Test Tool&trade; <a rel="bookmark" class="headerlink"
					title="Permalink to this headline" href="#jstesttool">¶</a>
			</h1>
		</header>

		<section>
			<header>
				<h2>
					Source Code
					<code>// jQuery available in global $</code>
				</h2>
			</header>
			<textarea id="source" class="source"
				placeholder="Write your code or drop a text file here"></textarea>
			<button id="executeButton">Execute</button>
			<button id="saveButton">Save</button>
			<button id="restoreButton">Restore</button>
		</section>

		<section>
			<header>
				<h2>
					Output Area
					<code>// #output (if you want to)</code>
				</h2>
			</header>
			<article id="output" class="outputBox"></article>
		</section>
	</section>

	<a href="#top">Back to top</a>

	<footer>
		<div><?php echo "$app v$version"; ?></div>
		<div>&copy; 2011 Diego Verbrugghe</div>
	</footer>
</body>
</html>
