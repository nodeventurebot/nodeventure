room('home', {
  description: "You are in the Lab For the Recently Possible.\
    A large table sits in the middle of the room around which \
    geeks sit hard at work on some kind of text adventure...",
  image: "https://si0.twimg.com/profile_images/2346548968/v670k756qsd1e3hegurf.png",
  exits: { west: 'beige', east: 'magnolia' }
});

room('beige', {
  description: "This room is daubed in beige. You start feeling sleepy.",
  exits: { east: 'home' },
  items: [
    {
      short: 'a small mirror',
      name: 'mirror',
      description: 'A small and perfectly inadequate mirror'
    }
  ]
});

room('magnolia', {
  description: "This room is daubed in magnolia. You stare at it for a while.",
  exits: { west: 'home' }
});

item('beige', 'brush', 60, {
  short: 'a brush',
  name: 'brush',
  description: 'A brush. it is branded with a \'B&Q\' logo. There is beige paint on it'
});

item('beige', 'paint', 60, {
  short: 'a pot of paint',
  name: 'paint',
  description: 'A pot of beige paint. it has been opened.'
});

handler("drop:mirror", function (game, player, item) {
  var rest = item.name;
  player.write("You drop the " + rest + " and it smashes into a million pieces");
  player.getCurrentRoom().broadcast(player.name + ' drops the ' + rest + " and it smashes into a million pieces", player);
  player.inventory = _.without(player.inventory, item);
  game.emit("invdrop:"+item.name, rest, player, game);
  preventDefault();
});

handler("describeItem:mirror", function (game, player, item) {
  player.write("A mirror hangs on the wall");
});
