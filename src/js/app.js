let m = require('mithril');
let Login = require('./views/login');
let Game = require('./views/game/game');

m.route(document.body, '/login', {
  '/login': Login,
  '/game': Game
});
