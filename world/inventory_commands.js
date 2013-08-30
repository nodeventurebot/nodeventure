command('get', 'Pick up an item from the current room.', function (rest, player, game) {
  var item = player.getCurrentRoom().getItem(rest);
  if (item) {
    if (item.gettable !== false) {
      game.emitEvent("get", item.name, player, item);
    } else {
      player.write("You can not get the " + rest);
    }
  } else {
    player.write("Sorry, the item: " + rest + ", is not here.");
  }
});

handler('get:*', function (game, player, item) {
  // remove item from room & add to player inventory
  var itemName = item.name;
  player.write("You pick up the " + itemName);
  player.getCurrentRoom().broadcast(player.name + ' picks up the ' + itemName, player);
  player.getCurrentRoom().items = _.without(player.getCurrentRoom().items, item);
  game.emit("invget:"+itemName);
  player.inventory.push(item);
});

command('take', function(rest, player, game) {
  game.execute(player, 'get ' + rest);
});

command('drop', 'Leave an item from your inventory in the current room.', function (itemName, player, game) {
  var item = _.find(player.inventory, function (it) {
    return itemName === it.name;
  });
  if (item) {
    game.emitEvent("drop", itemName, player, item);
  } else {
    player.write("The " + itemName + " is not in your inventory.");
  }
});

handler("drop:*", function (game, player, item) {
  // remove item from player inventory & add to current room
  var rest = item.name;
  player.write("You drop the " + rest);
  player.getCurrentRoom().broadcast(player.name + ' drops the ' + rest, player);
  player.inventory = _.without(player.inventory, item);
  player.getCurrentRoom().items.push(item);
  game.emit("invdrop:"+item.name, rest, player, game);
});

handler("drop:mirror", function (game, player, item) {
  var rest = item.name;
  player.write("You drop the " + rest + " and it smashes into a million pieces");
  player.getCurrentRoom().broadcast(player.name + ' drops the ' + rest + " and it smashes into a million pieces", player);
  player.inventory = _.without(player.inventory, item);
  game.emit("invdrop:"+item.name, rest, player, game);
  preventDefault();
});

command('inventory', "Display a list of all the items you're carrying.", function (rest, player, game) {
  player.inventory = player.inventory || [];
  console.log(player.inventory);
  if (player.inventory.length == 0) {
    player.write("You aren't carrying anything. Travel light!");
  }
  _.each(player.inventory, function (item) {
    player.write('You are carrying ' + (item.short || item.name));
  });
});

command('i', "Display a list of all the items you're carrying.", function (rest, player, game) {
  player.execute('inventory');
});

command('use', 'Example: use lemon',function (rest, player, item) {
  player.write("Can't use " + rest);
});
