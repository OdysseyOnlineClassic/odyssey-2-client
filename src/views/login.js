const m = require('mithril');
let auth = require('../models/auth');

function onClick() {
  m.route.set('/game');
}

module.exports = {
  view: () => {
    return m('div', [
      m('input'),
      m('input'),
      m('input', { type: 'button', onclick: onClick })
    ]);
  }
};
