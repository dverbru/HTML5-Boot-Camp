/**
 * Movie class module, as requested in the practice of the day 6.
 * 
 * @author Diego Verbrugghe
 */
var bootcamp = bootcamp || {}; // namespace

define(function () {
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
	
	return Movie;
});
