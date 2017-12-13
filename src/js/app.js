const m = require('mithril');
const login = require('./views/game/login')(net);
const Game = require('./views/game/game');

net.connect()
  .then(() => {
    console.log('connected');
    m.route(document.body, '/login', {
      '/login': login,
      '/game': Game
    });
  });
