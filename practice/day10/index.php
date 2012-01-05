<?php
	$app = "HTML5 Practice";
	$version = "1.0.0";
	$pageTitle = "Day 10: HTML5 Tags & CSS3";
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
	<script src="scripts/main.js"></script>
</head>
<body>
	<header>
		<hgroup>
			<h1 id='pageTitle'><?php echo $pageTitle; ?></h1>
			<h2 id='pageSubtitle'>&ldquo;POSH&rdquo; and responsive web design</h2>
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
		This a sample page demostrating some new <strong>HTML5 tags</strong>
		and <strong>CSS3 features</strong>.
	</p>

	<article id="mainContent">
		<header>
			<time datetime="2012-01-04" pubdate>Jan 4</time>
			<h1>
				<a href="#" title="Link to this post" rel="bookmark">Article Heading</a>
			</h1>
		</header>
		<p>This is an article that demonstrates some of the new features that
			HTML5 and CSS3 has to offer. This article contains several sections,
			each with its own heading.</p>
		<section>
			<header>
				<h1>This is a section heading</h1>
			</header>
			<p>This is an example of a basic section of a document. A section can
				refer to different parts of a document, application, or page.
				According to the draft W3C spec, HTML5 sections usually have
				headings.</p>
		</section>
		<section>
			<header>
				<h1>Heading of a longer section</h1>
			</header>
			<aside>
				<h3>You know that…?</h3>
				<p>
					In publishing and graphic design, <em>lorem ipsum</em> is
					placeholder text (filler text) commonly used to demonstrate the
					graphics elements of a document or visual presentation, such as
					font, typography, and layout. The lorem ipsum text is typically a
					section of a Latin text by Cicero with words altered, added and
					removed that make it nonsensical in meaning and not proper Latin.
				</p>
			</aside>

			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
				viverra, magna id imperdiet dictum, lacus sem condimentum augue,
				quis dictum nulla est ut lacus. Integer adipiscing elementum
				fringilla. Pellentesque habitant morbi tristique senectus et netus
				et malesuada fames ac turpis egestas. Sed a pharetra lectus. Nulla
				facilisi. Duis ut mi quis nibh varius porttitor. Etiam ullamcorper
				diam id ante tempus auctor. Nullam ante sapien, tincidunt quis
				consectetur et, placerat sit amet nulla. Nunc suscipit elementum
				posuere. Aliquam erat volutpat. Maecenas quis urna sed sapien
				accumsan euismod. Duis in tellus ac nunc scelerisque mattis.
				Curabitur posuere ante eu sem euismod nec tempor risus fermentum. Ut
				quam dui, egestas quis auctor in, viverra et arcu. Aliquam erat
				volutpat.</p>

			<p>Suspendisse sit amet eleifend nisl. Mauris nisl odio, varius ac
				congue non, consectetur at turpis. Nullam pulvinar ligula consequat
				orci egestas sodales. Morbi non velit quis nulla dapibus mollis.
				Vivamus ac neque vel elit malesuada commodo. Duis porttitor luctus
				justo ut rhoncus. Vivamus ultrices dolor eget metus imperdiet vitae
				ultrices augue tincidunt.</p>

			<p>Duis eu urna turpis. Integer posuere tortor vitae quam ullamcorper
				dignissim. Sed id lacus vel orci malesuada imperdiet ac id nisl. Ut
				tristique dapibus nunc, non vulputate nisl iaculis nec. In hac
				habitasse platea dictumst. Proin et justo eu nisl tristique
				eleifend. Cras in molestie elit. Donec sodales, lorem et condimentum
				lobortis, leo nulla molestie sapien, vitae pharetra massa libero eu
				risus. Sed a augue vel ipsum rhoncus malesuada. Aenean vehicula
				tempor sollicitudin. Cum sociis natoque penatibus et magnis dis
				parturient montes, nascetur ridiculus mus. Donec hendrerit dictum
				justo, vitae tempor augue viverra ut. Sed a laoreet elit. Sed
				facilisis lacinia ipsum at molestie. Nulla eu magna eros.</p>
		</section>
	</article>

	<footer>
		<div><?php echo "$app v$version"; ?></div>
		<div>&copy; 2011 Diego Verbrugghe</div>
	</footer>
</body>
</html>
