/**
 * Test code.
 * 
 * @author Diego Verbrugghe
 */

$(document).ready(function() {
	showWelcomeMsg();
	focusAlias();
});

function showWelcomeMsg() {
	alert('Hello world!');
}

function focusAlias() {
	$('#alias').focus();
}
