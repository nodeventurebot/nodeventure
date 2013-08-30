room('home', {
  description: "You are in the Lab For the Recently Possible.\
    A large table sits in the middle of the room around which \
    geeks sit hard at work on some kind of text adventure...",
  image: "https://si0.twimg.com/profile_images/2346548968/v670k756qsd1e3hegurf.png",
  exits: { west: 'beige', east: 'magnolia' },
  items: []});

room('beige', {
  description: "This room is daubed in beige. You start feeling sleepy.",
  image: "http://cabinetmagazine.org/issues/2/beige.jpg",
  exits: { east: 'home' },
  items: []
});

room('magnolia', {
  description: "This room is daubed in magnolia. You stare at it for a while.",
  image: "http://api.ning.com/files/4JDD2fK0Tk*YIVPzwCg1u5FXz-WiHOaN-nAhloBxKg*QKhdzjVO7l3M1tXGZSeZVuk7cQoy6jRG-LJ*iED4AECnCTGIVFcsT/Miss_Magnolia.jpg",
  exits: { west: 'home' },
});

item('beige', 'brush', 60, {
  short: 'a brush',
  name: 'brush',
  image: "http://www.paint-plus.com/contact/images/contact_brush.gif",
  description: 'A brush. it is branded with a \'B&Q\' logo. There is beige paint on it'
});

item('beige', 'paint', 60, {
  short: 'a pot of paint',
  name: 'paint',
  description: 'A pot of beige paint. it has been opened.'
});
