const m = require('mithril');
let auth = require('../models/auth');

function login() {
  m.route.set('/game');
}

function exit() {

}

module.exports = {
  view: () => {
    return m('div', [
      m('input', {
        type: 'text'
      }),
      m('input', {
        type: 'password'
      }),
      m('button', { onClick: exit }, 'Exit'),
      m('button', { onclick: login }, 'Login')
    ]);
  }
};
