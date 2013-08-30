room('home', {
  description: "You are in the Lab For the Recently Possible.\
    A large table sits in the middle of the room around which \
    geeks sit hard at work on some kind of text adventure...",
  image: "https://si0.twimg.com/profile_images/2346548968/v670k756qsd1e3hegurf.png",
  exits: { west: 'beige', east: 'magnolia' }
});

room('beige', {
  description: "This room is daubed in beige. You start feeling sleepy.",
  exits: { east: 'home' }
});

room('magnolia', {
  description: "This room is daubed in magnolia. You stare at it for a while.",
  exits: { west: 'home' }
});

item('beige', 'brush', {
  respawnTimer: 60,
  short: 'a brush',
  description: 'A brush. it is branded with a \'B&Q\' logo. There is beige paint on it'
});

item('beige', 'paint', {
  respawnTimer: 60,
  short: 'a pot of paint',
  description: 'A pot of beige paint. it has been opened.'
});
