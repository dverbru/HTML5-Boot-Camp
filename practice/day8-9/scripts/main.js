/*
 * Practice code.
 */

$(document).ready(function() {
	setupBackbone();
});

function setupBackbone() {
	var Movie = Backbone.Model.extend({
		defaults : {
			title : '<untitled>',
		}
	});

	var MovieList = Backbone.Collection.extend({
		model : Movie
	});

	var MovieView = Backbone.View.extend({
		tagName : 'li', // name of (orphan) root tag in this.el
		initialize : function() {
			_.bindAll(this, 'render');
		},
		render : function() {
			$(this.el).html('&ldquo;' + this.model.get('title') + '&rdquo;');
			return this; // for chainable calls, like .render().el
		}
	});

	var MovieListView = Backbone.View.extend({
		el : $('#output'), // el attaches to existing element
		initialize : function() {
			// every function that uses 'this' as the current object should
			// be in here:
			_.bindAll(this, 'render', 'appendMovie');

			this.collection = new MovieList();
			this.collection.bind('add', this.appendMovie); // event binder

			this.render();
		},
		render : function() {
			$(this.el).append("<h3>Movies:</h3>");
			$(this.el).append("<ul></ul>");
			_(this.collection.models).each(function(movie) {
				appendMovie(movie);
			}, this);
		},
		// Rendering of an individual `Movie` is delegated to each
		// `MovieView` instance.
		appendMovie : function(movie) {
			var movieView = new MovieView({
				model : movie
			});
			$('ul', this.el).append(movieView.render().el);
		}
	});

	var collection = new MovieListView().collection;

	// Let's simulate some AJAX loading...
	randomDelay(function() {
		collection.add(new Movie({title : 'Forrest Gump'}));
	});
	randomDelay(function() {
		collection.add(new Movie({title : 'Gattaca'}));
	});
	randomDelay(function() {
		collection.add(new Movie({title : 'Leon, The Profesional'}));
	});
	randomDelay(function() {
		collection.add(new Movie({title : 'Memento'}));
	});
	randomDelay(function() {
		collection.add(new Movie({title : 'Up'}));
	});
	randomDelay(function() {
		collection.add(new Movie({title : 'Full Metal Jacket'}));
	});
}

function randomDelay(fn) {
	setTimeout(fn, ((Math.random()-0.5) * (Math.random()-0.5) * 4 + 1) * 1000);
}