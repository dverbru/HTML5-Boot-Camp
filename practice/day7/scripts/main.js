/*
 * Practice code.
 */

$(document).ready(function() {
	mustacheParse();
});

function mustacheParse() {
	$.getJSON('scripts/data/resume.json', function(view) {
		$.get('scripts/data/template.mustache', function(template) {
			// Template expansion
			var html = Mustache.to_html(template, view);
			$('#output').html(html);
		});
	});
}
