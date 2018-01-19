const m = require('mithril');
const Ody = require('./bin/game-state');

const game = new Ody.GameState();

//const Game = require('./views/game/game');
const login = require('./views/game/login')(game);


game.connect('127.0.0.1', 5751)
  .then(() => {
    console.log('connected');
    m.route(document.body, '/login', {
      '/login': login
    });
  });
