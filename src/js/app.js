let m = require('mithril');
let Login = require('./views/game/login');
let Game = require('./views/game/game');

m.route(document.body, '/login', {
  '/login': Login,
  '/game': Game
});
