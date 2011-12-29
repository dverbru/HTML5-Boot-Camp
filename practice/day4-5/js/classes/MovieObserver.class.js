/**
 * MovieObserver class, as requested in the practice of the days 4 & 5.
 * 
 * @author Diego Verbrugghe
 */
function MovieObserver(pubsub) {
	// Subscribe as listener
	var playSubscription = pubsub.subscribe('playing', this.onMoviePlaying);
	var stopSubscription = pubsub.subscribe('stopped', this.onMovieStopped);
	
	// Unsubscribe eventually
	setTimeout(function() {
	    pubsub.unsubscribe(playSubscription);
	    pubsub.unsubscribe(stopSubscription);
	}, 10000);
}

//Public methods
MovieObserver.prototype.onMoviePlaying = function(topic, data) {
	console.log('Playing "' + data + '"...');
};

MovieObserver.prototype.onMovieStopped = function(topic, data) {
	console.log('"' + data + '" stopped.');
};
