/**
 * Test code.
 */

// Let's create some movies...
pulpFiction = new Movie();
pulpFiction.setId(1);
pulpFiction.setTitle('Pulp Fiction');
pulpFiction.setRating(9);

forrestGump = new Movie();
forrestGump.setId(2);
forrestGump.setTitle('Forrest Gump');
forrestGump.setRating(10);

theSOTLambs = new Movie();
theSOTLambs.setId(3);
theSOTLambs.setTitle('The Silence of the Lambs');
theSOTLambs.setRating(9);

// and watch something.
theSOTLambs.play();

theSOTLambs.stop();

pulpFiction.play();

forrestGump.play();

pulpFiction.stop();
