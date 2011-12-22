/**
 * Test code.
 * 
 * @author Diego Verbrugghe
 */

$(document).ready(function() {
	showWelcomeMsg();
	bindAjaxCall();
	focusAliasInput();
});

function showWelcomeMsg() {
	alert('Hello world!');
}

function focusAliasInput() {
	$('#alias').focus();
}

function bindAjaxCall() {
	$('#welcomeButton').click(function() {
		requestWelcome( $('#alias').val() );
	});
}

/**
 * Request welcome service.
 * 
 * @param name
 *            the name of the visitor
 */
function requestWelcome(name) {
	$.post('api/dispatcher.php', {
		service : 'welcome.hello',
		params : { 'name' : name }
	}).done(function(data) {
		$('#response').html(data);
	});
}
