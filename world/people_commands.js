handler('enterRoom', function (player, room, game) {
  room.broadcast(player.name + ' enters the room', player);
  player.display.reset();
  if (room.image) {
    player.display.show(room.image, 'room', {width: "100%", height: "100%"});
  }
  game.emitEvent("enterRoom", player.name, player, room);

  _.each(room.items, function (item) {
    game.emitEvent("describeItem", item.name, player, item);
  });
});

handler("describeItem:*", function (game, player, item) {

});

handler('leaveRoom', function (player, room, game) {
  room.broadcast(player.name + ' leaves the room', player);
});

command('say', function (rest, player, game) {
  player.getCurrentRoom().broadcast(player.name + ' says: ' + rest.trim(), player);
  player.write('You say: ' + rest.trim());
  game.emit('playerTalk', player, rest);
});

command('shout', function (rest, player, game) {
  game.broadcast(player.name + ' shouts: ' + rest);
});

command('list', "List all players in the game.", function (rest, player, game) {
  var list = "Players: ";

  _.each(game.players, function (pl) { list += pl.name + ", "; });

  player.write(list.substring(0,list.length-2));
});
