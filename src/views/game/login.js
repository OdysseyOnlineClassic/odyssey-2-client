const m = require('mithril');
let Auth = require('../../models/auth');

module.exports = Login;

function Login(game) {
  let auth = new Auth(game);
  return {
    canSubmit: false,
    view: (vnode) => {
      return m('div', [
        m('input', {
          type: 'text',
          oninput: m.withAttr('value', auth.setUsername, auth)
        }),
        m('input', {
          type: 'password',
          oninput: m.withAttr('value', auth.setPassword, auth)
        }),
        m('button', { onclick: () => { console.log('exit'); } }, 'Exit'),
        m('button', { onclick: auth.login.bind(auth), disabled: !auth.canSubmit() }, 'Login')
      ]);
    }
  };
}
