/**
 * Director class module, as requested in the practice of the day 6.
 * 
 * @author Diego Verbrugghe
 */
var bootcamp = bootcamp || {}; // namespace

define(function () {
	function Director(name) {
		// Privileged methods
		this.getName = function() { return name; };
		this.setName = function(directorName) { name = directorName; };

		// Constructor code
		this.setName(name || 'Joe Doe');
	}

	return Director;
});
