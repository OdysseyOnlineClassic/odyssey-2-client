const m = require('mithril');
const Network = require('./bin/network').Network;
const net = new Network('127.0.0.1', '5751');
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
