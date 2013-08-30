room('beige', {
  description: "This room is daubed in beige. You start feeling sleepy.",
  exits: { east: 'home' }
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
