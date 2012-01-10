/*
 * Practice code.
 */

/**
 * Apply regressive enhancement if native support is not available for certain
 * features needed. Can load polyfill scripts dinamically.
 * 
 * @param callback
 *            Run this after everything has downloaded and executed
 */
function ensureBrowserSupport(callback) {
	Modernizr.load([
			// Presentational polyfills
			{
				// TODO
			},
			// Functional polyfills
			{
				test : Modernizr.file && Modernizr.draganddrop,
				nope : 'scripts/lib/dropfile/dropfile.js',
				complete : function() {
					// Run this after everything in this group has downloaded
					// and executed, as well everything in all previous groups
					callback();
				}
			}
	]);
}

function appendScript(code) {
	var head = document.getElementsByTagName("head")[0];
	var newScript = document.createElement("script");
	newScript.type = "text/javascript";
	newScript.innerHTML = code;
	head.appendChild(newScript);
}

function saveSourceCode(code) {
	window.localStorage.setItem('source', code);
}

function restoreSourceCode() {
	return window.localStorage.getItem('source');
}

function setupFileDropInHandler(element) {
	element.addEventListener('drop', function(e) {
		e.preventDefault();

		var reader = new FileReader();
		reader.onload = function(evt) {
			element.value = evt.target.result;
		};
		reader.readAsText(e.dataTransfer.files[0]);
	}, false);
}

function setupTester() {
	var source = document.getElementById('source');

	document.getElementById('executeButton').addEventListener('click',
			function() {
				appendScript(source.value);
			});

	document.getElementById('saveButton').addEventListener('click',
			function() {
				saveSourceCode(source.value);
			});

	document.getElementById('restoreButton').addEventListener('click',
			function() {
				var code = restoreSourceCode();
				source.value = code !== null ? code
						: "$('#output').html('<h1>Hello World!</h1>');";
			});

	setupFileDropInHandler(source);
}

$(document).ready(function() {
	ensureBrowserSupport(setupTester);
});
