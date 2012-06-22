room('home', {
  description: "You are in the Lab For the Recently Possible. A large table sits in the middle of the room around which geeks sit hard at work on some kind of text adventure...",
  exits: {west: 'meeting-room', east:'switzerland'},
  items: [{short: 'a mighty sword', name: 'sword', description: 'This sword is really really really mighty'}]});

room('meeting-room', {
  description: "This is the breakout meeting room for the Lab for the Recently Possible. There is a dark hole here.",
  exits: {east: 'home', down: 'hole', west: 'lobby'}});

room('hole', {
  description: "You are in a deep, dark hole.",
  exits: {up: 'hole2'}});

room('hole2', {
  description: "You scramble and fail to get out. You are trapped here forever. Perhaps you can cry?",
  exits: {up: 'hole2'}});

room('lobby', {
  description: "You are in the lobby. There is a door to the west. You can see a Window to the East, and there is chest in the corner to your left.",
  items: [{name: 'chest', short: 'an old chest', getable: false, description: 'old chest is old. Look at how old it is!'},{name: 'window', short: 'a window', getable: false, description: 'You look out the window, there are trees. A gentle breeze blows over a lilly pond and a swan gracefully moves and turns to look at you. Life is good. Nothing to see here... move on.'}],
  exits: {east: 'meeting-room', west: 'outside-dock'}});

room('outside-dock', {
  description: "You are outside the dock. You are surrounded by waving trees and tall buildings. Infront of you is a road leading to the south or the north.",
  exits: {north:"road-bridge", south: "road-crossing", east:"lobby"}});

room('road-crossing', {
  description: "You are at the crossing. Cars pass by you periodically.",
  exits: {north: 'outside-dock', south: 'beach'}});

room('beach', {
  description: "You are at the beach. Waves crash against the shore. Towards the east you see a pier. To the west you see the beach stretch to the horizon.",
  exits: {north: 'road-crossing', east: 'pier', west: 'beach-stretch'}})

room('beach-stretch', {
  description: "You are at a stretch of beach. There is a gang of intimidating seagulls here. Watch your bacon sandwhiches!",
  exits: {east: 'beach'}});

room('pier', {
  description: "You arrive at a rusty pier. The amusements and rides once running are abandoned and silent.",
  exits: {west:'beach'}});

room('road-bridge', {
  description: "You are on a bridge. You can head north.",
  exits: {south: 'outside-dock', north: 'street'}});

room('street', {
  description: "You step into an erily empty street. An alleyway is to east.",
  exits: {south: 'outside-dock', east: 'alleyway'}});

room('alleyway', {
  description: "You are in a dingey and spooky alleyway. To the north a suspicious wooden door awaits you...",
  exits: {west: 'street', north: 'hall-of-mirrors'}});

room('hall-of-mirrors', {
  description: "You are in a hall of mirrors, try not to get lost!",
  exits: {north: 'mirrors-room-1', east: 'mirrors-room-2', west: 'mirrors-room-3'}});

room('mirrors-room-1', {
  description: "Great, more mirrors... Where to?",
  exits: {north: 'mirrors-room-2', east: 'mirrors-room-3', south: 'mirrors-room-1'}});

room('mirrors-room-2', {
  description: "Great, more mirrors... Where to?",
  exits: {south: 'hall-of-mirrors', east: 'mirrors-room-3', west: 'mirrors-room-1'}});

room('mirrors-room-3', {
  description: "Great, more mirrors... Where to?",
  exits: {north: 'mirrors-room-2', south: 'mirrors-room-1', west: 'mirrors-room-end'}});

room('mirrors-room-end', {
  description: "You can see an exit to the south! On the floor is a quantum gemerald",
  exits: {south: 'alleyway'},
  items: [{short: 'gemerald', name: 'gemerald', description: 'This gemerald is pretty shiny'}]});
