/**
 * Home page code.
 * 
 * @author Diego Verbrugghe
 */

$('#homePage').on('pageinit', function(event) {
	showInitMsg();
	bindAjaxCall();
	focusAliasInput();
});

function showInitMsg() {
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
	$.mobile.showPageLoadingMsg();
	
	var KEYCODE_ESC = 27; // (consistent among browsers)
	$(document).on('keydown.loadingMsg', function(event) {
		if (event.keyCode == KEYCODE_ESC) {		   // If <Esc> key is pressed,
			$(document).off('keydown.loadingMsg'); // unregister these handlers
			$.mobile.hidePageLoadingMsg();         // and hide the message.
		}
	});

	div = $('#response');
	$.post('api/dispatcher.php', {
		service : 'welcome.hello',
		params : { 'name' : name }
	}).done(function(data) {
		div.html(data);
		div.removeClass("error");
	}).fail(function(jqXHR, textStatus, errorThrown) {
		div.html('[' + textStatus + '] Request failed: ' + errorThrown);
		div.addClass("error");
	});
}
