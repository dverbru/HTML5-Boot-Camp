/*
 * Test code.
 */

// Let's create some movies...
var pulpFiction = new bootcamp.movies.Movie();
pulpFiction.setId(1);
pulpFiction.setTitle('Pulp Fiction');
pulpFiction.setRating(9);
pulpFiction.setPubsub(pubsub);

var forrestGump = new bootcamp.movies.Movie();
forrestGump.setId(2);
forrestGump.setTitle('Forrest Gump');
forrestGump.setRating(10);
forrestGump.setPubsub(pubsub);

var theSOTLambs = new bootcamp.movies.Movie();
theSOTLambs.setId(3);
theSOTLambs.setTitle('The Silence of the Lambs');
theSOTLambs.setRating(9);
theSOTLambs.setPubsub(pubsub);

// initialize an observer...
var observer = new MovieObserver(pubsub);

// and watch something.
theSOTLambs.play();

theSOTLambs.stop();

pulpFiction.play();

forrestGump.play();

pulpFiction.stop();
