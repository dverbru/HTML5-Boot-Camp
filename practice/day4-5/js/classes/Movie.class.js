/**
 * Movie class, as requested in the practice of the days 4 & 5.
 * 
 * @author Diego Verbrugghe
 */
var bootcamp = bootcamp || {}; // namespace

bootcamp.movies = (function(module, global) {
	function Movie() {
		// Private attributes
		var title;
		var rating;
		var id;
		var pubsub;
		
		// Privileged methods
		this.getTitle = function() { return title; };
		this.setTitle = function(movieTitle) { title = movieTitle; };
		
		this.getRating = function() { return rating; };
		this.setRating = function(movieRating) { rating = movieRating; };
		
		this.getId = function() { return id; };
		this.setId = function(movieId) { id = movieId; };
		
		this.getPubsub = function() { return pubsub; };
		this.setPubsub = function(newPubsub) { pubsub = newPubsub; };
		
		// Constructor code
		this.setTitle('<untitled>');
	}

	// Public methods
	Movie.prototype.play = function () {
		pubsub = this.getPubsub();
		if (pubsub != null) {
			pubsub.publish('playing', this.getTitle());
		}
	};

	Movie.prototype.stop = function () {
		pubsub = this.getPubsub();
		if (pubsub != null) {
			pubsub.publish('stopped', this.getTitle());
		}
	};
	
	// Module public API
	module.Movie = Movie;
	
	return module;
}((bootcamp.movies || {}), this));
