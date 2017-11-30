const socket = require('net').Socket;

let Auth = {
  username: '',
  password: '',
  setUsername: (value) => {
    Login.username = value;
  },
  setPassword: (value) => {
    Login.password = value;
  },
  canSubmit: () => {
    return Login.username !== '' && Login.password !== '';
  },
  login: () => {

  }
}

module.exports = Auth;
