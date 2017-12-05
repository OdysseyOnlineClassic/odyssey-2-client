'use strict';

class Auth {
  constructor(net) {
    this.net = net;
    this.username = '';
    this.password = '';
  }
  setUsername(value) {
    this.username = value;
  }
  setPassword(value) {
    this.password = value;
  }
  canSubmit() {
    return this.username !== '' && this.password !== '';
  }
  login() {
    console.log('Login');
    console.log(this.username);
    console.log(this.password);
  }
}

module.exports = Auth;
