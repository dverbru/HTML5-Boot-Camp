/*
 * Test code.
 */

// Let's create some movies...
pulpFiction = new Movie();
pulpFiction.setId(1);
pulpFiction.setTitle('Pulp Fiction');
pulpFiction.setRating(9);
pulpFiction.setPubsub(pubsub);

forrestGump = new Movie();
forrestGump.setId(2);
forrestGump.setTitle('Forrest Gump');
forrestGump.setRating(10);
forrestGump.setPubsub(pubsub);

theSOTLambs = new Movie();
theSOTLambs.setId(3);
theSOTLambs.setTitle('The Silence of the Lambs');
theSOTLambs.setRating(9);
theSOTLambs.setPubsub(pubsub);

// initialize an observer...
observer = new MovieObserver(pubsub);

// and watch something.
theSOTLambs.play();

theSOTLambs.stop();

pulpFiction.play();

forrestGump.play();

pulpFiction.stop();
