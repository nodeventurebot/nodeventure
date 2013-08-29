handler('enterRoom', function (player, room, game) {
  console.log('enter room!');
  room.broadcast(player.name + ' enters the room', player);
  game.emitEvent("enterRoom", player.name, player, room);
})

handler('leaveRoom', function (player, room, game) {
  room.broadcast(player.name + ' leaves the room', player);
})

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
