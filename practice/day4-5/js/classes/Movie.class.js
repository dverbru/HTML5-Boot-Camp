/**
 * Movie class, as requested in the practice of the days 4 & 5.
 * 
 * @author Diego Verbrugghe
 */
function Movie() {
	// Private attributes
	var title;
	var rating;
	var id;
	
	// Privileged methods
	this.getTitle = function() { return title; };
	this.setTitle = function(movieTitle) { title = movieTitle; };
	
	this.getRating = function() { return rating; };
	this.setRating = function(movieRating) { rating = movieRating; };
	
	this.getId = function() { return id; };
	this.setId = function(movieId) { id = movieId; };
	
	// Constructor code
	this.setTitle('<untitled>');
}

// Public methods
Movie.prototype.play = function () {
	console.log('Playing "' + this.getTitle() + '"…');
};

Movie.prototype.stop = function () {
	console.log('"' + this.getTitle() + '" stopped.');
};
