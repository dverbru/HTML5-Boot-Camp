/*
 * Practice code.
 */

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

	source.addEventListener('drop', function(e) {
		e.preventDefault();

		var reader = new FileReader();
		reader.onload = function(evt) {
			source.value = evt.target.result;
		};
		reader.readAsText(e.dataTransfer.files[0]);
	}, false);
}

$(document).ready(function() {
	setupTester();
});
