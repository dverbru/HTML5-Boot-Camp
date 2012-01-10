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

function setupTester() {
	document.getElementById('executeButton').addEventListener('click',
			function() {
				appendScript(document.getElementById('source').value);
			});
}

$(document).ready(function() {
	setupTester();
});
