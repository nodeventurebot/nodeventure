room('home', {
  description: "You are in the Lab For the Recently Possible.\
    A large table sits in the middle of the room around which \
    geeks sit hard at work on some kind of text adventure...",
  exits: { west: 'beige', east: 'magnolia' },
  items: []});

room('beige', {
  description: "This room is daubed in beige. You start feeling sleepy.",
  exits: { east: 'home' },
  items: ['paint']
});

room('magnolia', {
  description: "This room is daubed in magnolia. You stare at it for a while.",
  exits: { west: 'home' },
});

item('brush', 'brush', 60, {
  short: 'a brush',
  name: 'brush',
  description: 'A brush. it is branded with a \'B&Q\' logo. There is beige paint on it'
});

item('paint', 'paint', 60, {
  short: 'a pot of paint',
  name: 'paint',
  description: 'A pot of beige paint. it has been opened.'
});
